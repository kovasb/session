(ns session.server
  (:require [session.datomic :as datomic]
            [session.views.common :as common]
            [datomic.api :as d]
            [lamina.core :as lamina]
            [aleph.http :as http]
            [compojure.core :refer [defroutes GET] :as compojure]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]))

(defn service-handler [response-channel ctx]
  (lamina/siphon (:broadcast-channel ctx)
                 response-channel)
  (lamina/receive-all response-channel
                      #(datomic/service-request (read-string %) ctx)))
                                                

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


(defn -main [& m]
  (let [port (Integer/parseInt (first m))
        db-uri (last m)
        db-conn (datomic/connect-database db-uri)
        broadcast-channel (lamina/permanent-channel)
        
        ctx {:db-conn db-conn
             :transact (fn [tx-data] @(d/transact db-conn tx-data))
             :broadcast-channel broadcast-channel
             :broadcast (fn [data] (->> data pr-str (lamina/enqueue broadcast-channel)))}]
    (http/start-http-server
     (-> (routes ctx)
         site
         wrap-file-info
         (wrap-resource "public/")
         http/wrap-ring-handler)
     {:port port :websocket true})
    (datomic/process-requests-thread ctx)))
