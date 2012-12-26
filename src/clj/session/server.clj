(ns session.server
 (:use aleph.http
       noir-async.core
       noir.fetch.remotes
       noir.core
       datomic.api ;; removing causes schema to explode
       )
 (:require session.datomic
           [noir.server :as server]))

(server/load-views-ns 'session.views)

(defremote get-session [id]
  {:result (pr-str (session.datomic/get-datomic-session))
   :status 200} )

(defn -main [& m]
  (let [mode :dev
        port (Integer/parseInt (first m))
        noir-handler (server/gen-handler {:mode mode})]
    (session.datomic/setup  (last m))
    (start-http-server
      (wrap-ring-handler noir-handler)
      {:port port :websocket true})
    (session.datomic/process-requests-thread @session.datomic/conn)))
