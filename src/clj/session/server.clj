(ns session.server
 (:use aleph.http
       noir-async.core
       noir.core)
 (:require session.datomic
           [noir.server :as server]))

(server/load-views-ns 'session.views)

(defpage get-session [:any "/_fetch"] args
  {:status 202
   :headers {"Content-Type" "application/clojure; charset=utf-8"}
   :body (pr-str (session.datomic/get-datomic-session))})

(defn -main [& m]
  (let [mode :dev
        port (Integer/parseInt (first m))
        noir-handler (server/gen-handler {:mode mode})]
    (session.datomic/setup  (last m))
    (start-http-server
      (wrap-ring-handler noir-handler)
      {:port port :websocket true})
    (session.datomic/process-requests-thread @session.datomic/conn)))
