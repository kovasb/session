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



(defn service-handler [response-channel broadcast-channel db-conn]
  (lamina/siphon broadcast-channel
                 response-channel)
  (lamina/receive-all response-channel
                      #(datomic/service-request (read-string %)
                                                broadcast-channel
                                                db-conn)))

(defn make-service [db-conn broadcast-channel]
  (fn [response-channel request]
    (if (:websocket request)
      (service-handler response-channel broadcast-channel db-conn)
      (lamina/enqueue response-channel request))))
  
(defn routes [db-conn broadcast-channel]
  (compojure/routes
   (GET "/" _
        (common/page))
   
   (GET "/get_session" _
        {:status 202
         :headers {"Content-Type" "application/edn; charset=utf-8"}
         :body (pr-str (datomic/get-datomic-session (d/db db-conn)))})
   
   (GET "/service" _
        (http/wrap-aleph-handler (make-service db-conn broadcast-channel)))))


(defn -main [& m]
  (let [port (Integer/parseInt (first m))
        db-uri (last m)
        db-conn (datomic/connect-database db-uri)
        broadcast-channel (lamina/permanent-channel)]
    (http/start-http-server
     (-> (routes db-conn broadcast-channel)
         site
         wrap-file-info
         (wrap-resource "public/")
         http/wrap-ring-handler)
     {:port port :websocket true})
    (datomic/process-requests-thread db-conn broadcast-channel)))
