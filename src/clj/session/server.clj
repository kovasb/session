(ns session.server
  (:require [session.datomic :as datomic]
            [session.views.common :as common]
            [lamina.core :as lamina]
            [aleph.http :as http]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]))


(defn service-handler [channel]
  (datomic/subscribe-channel channel)
  (lamina/receive-all channel #(datomic/service-request (read-string %))))

(defn service [channel request]
  (if (:websocket request)
    (service-handler channel)
    (lamina/enqueue channel request)))

(defroutes routes

  (GET "/" _
    (common/page))

  (GET "/get_session" _
    {:status 202
     :headers {"Content-Type" "application/edn; charset=utf-8"}
     :body (pr-str (datomic/get-datomic-session))})
  
  (GET "/service" _
    (http/wrap-aleph-handler service))) 

(defn -main [& m]
  (let [port (Integer/parseInt (first m))
        duri (last m)]
    (session.datomic/setup duri)
    (http/start-http-server
     (-> routes
         site
         wrap-file-info
         (wrap-resource "public/")
         http/wrap-ring-handler)
     {:port port :websocket true})
    (datomic/process-requests-thread @datomic/conn)))
