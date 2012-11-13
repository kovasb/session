(ns session.server
 (:use aleph.http
       noir-async.core)
  (:use [noir.fetch.remotes])
  (:use [client.macros])
  (:use [noir.core])
  (:use [clojure.java.io :only [resource]])
  (:use [datomic.api :only [db q] :as d])
  (:require session.datomic)
  (:require [noir.server :as server]
            [session.tags :as tags]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.tagged-literals :as tl]
            ;;[noir.cljs.core :as cljs]
            ;;[ring.util [response :as response]]
            [noir.response :as response]
            [ring.middleware [multipart-params :as mp]]))

;;(import '(java.io Writer))

(server/load-views-ns 'session.views)

(defremote get-session [id]
  (let []
    {:result (pr-str (session.datomic/get-datomic-session))
     :status 200} ))


;;"datomic:free://localhost:4334/session-test6"

(defn -main [& m]
  (let [mode :dev  ;;(keyword (or (first m) :dev))
        port (Integer/parseInt (first m)) ;; (Integer. (get (System/getenv) "PORT" "3502"))
        noir-handler (server/gen-handler {:mode mode})]
    (session.datomic/setup  (last m))
    (start-http-server
      (wrap-ring-handler noir-handler)
      {:port port :websocket true})
    (session.datomic/process-responses-thread @session.datomic/conn)
    (session.datomic/process-requests-thread @session.datomic/conn)))
