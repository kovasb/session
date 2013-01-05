(ns session.server
  (:require [session.datomic :as datomic]
            [session.views.common :as common]
            [session.nrepl :as nrepl]
            [datomic.api :as d]
            [lamina.core :as lamina]
            [aleph.http :as http]
            [compojure.core :refer [defroutes GET] :as compojure]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]))

(defn service-handler [response-channel {:keys [broadcast-channel db-conn] :as ctx}]
  (lamina/siphon broadcast-channel
                 response-channel)
  (lamina/receive-all response-channel
                      #(datomic/service-request (read-string %)
                                                (assoc ctx :db (d/db db-conn)))))

(defn make-service [ctx]
  (fn [response-channel request]
    (if (:websocket request)
      (service-handler response-channel ctx)
      (lamina/enqueue response-channel request))))
  
(defn routes [ctx]
  (compojure/routes
   (GET "/" _
        (common/page))
   
   (GET "/get_session" _
        {:status 202
         :headers {"Content-Type" "application/edn; charset=utf-8"}
         :body (pr-str (datomic/get-datomic-session (-> ctx :db-conn d/db)))})
   
   (GET "/service" _
        (http/wrap-aleph-handler (make-service ctx)))))

(def default-opts
  {:port 8090
   :datomic-uri "datomic:mem://test"
   :nrepl-uri "nrepl://localhost:42277"
   :nrepl-timeout 1000})

(defn -main
  ([] (-main "{}"))
  ([opts-string]
     (let [opts (merge default-opts (read-string opts-string))
           port (:port opts)
           db-uri (:datomic-uri opts)
           nrepl-uri (:nrepl-uri opts)
           nrepl-timeout (:nrepl-timeout opts)
           db-conn (datomic/connect-database db-uri)
           nrepl-client (nrepl/make-client nrepl-uri nrepl-timeout)
           broadcast-channel (lamina/permanent-channel)
           ctx {:db-conn db-conn
                :transact (fn [tx-data] @(d/transact db-conn tx-data))
                :broadcast-channel broadcast-channel
                :broadcast (fn [data] (->> data pr-str (lamina/enqueue broadcast-channel)))
                :nrepl-client nrepl-client}
           handler (-> (routes ctx)
                       site
                       wrap-file-info
                       (wrap-resource "public/")
                       http/wrap-ring-handler)]
       (http/start-http-server handler {:port port :websocket true})
       (future
         (nrepl/process-tx-report-queue (d/tx-report-queue db-conn)
                                        (:broadcast ctx)))
       (printf "Session server running on http://localhost:%s with\n" port)
       (printf "Datomic server: %s\nNrepl server: %s\n" db-uri nrepl-uri))))
