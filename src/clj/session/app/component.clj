(ns session.app.component
  (:use [session.app.handle-request :only [handle-request]])
  (:require [com.stuartsierra.component :as component]
            [datomic.api :as d]
            [session.datatypes :as dt]
            [session.datomic :as sd]

            [clojure.core.async :refer [chan go >! <!]]
            [merchant.edn.reader :as er]
            [merchant.edn.writer :as ew]

            session.user))


(defn spawn-new-connection-handlers [app conn]
  (let [in (:in conn) out (:out conn)]
    (go
      (while true
        (let [req (read-string (<! out))]
          (println req)
          ;;
          (handle-request
            req
            in
            app
            (if @(:session-database app)
              (d/db (:connection @(:session-database app)))
              nil)))))))


(defn register-ws-app! [app]
  (go
    (while true
      (let [newconn (<! (:ws-chan (:web-server app)))]
        (println newconn)
        (spawn-new-connection-handlers app newconn)))))


(defrecord SessionApp [system-database session-database web-server object-mapping merchant]
  component/Lifecycle
  (start [this]
    ;; start listening on ws chan
    ;; start go blocks
    (register-ws-app! this)
    this)

  (stop [this] nil))





