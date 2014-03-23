(ns session.system
  (:require [com.stuartsierra.component :as component]
            session.app.component
            session.webserver
            session.datomic
            session.io))


(def session-system-components [:system-database :web-server :app :merchant])

(defrecord SessionSystem [system-database session-database web-server app merchant]
  component/Lifecycle
  (start [this]
    (component/start-system this session-system-components))
  (stop [this]
    (component/stop-system this session-system-components)))


(defn session-system [config-options]
  (let [port (:web-port config-options)]
    (map->SessionSystem
      {
       :merchant (session.io/merchant)

       :system-database  (session.datomic/new-system-database "datomic:free://localhost:4334/" "session-system3")
       :session-database (atom nil)

       :web-server (session.webserver/new-web-server port)

       :app (component/using
              (session.app.component/map->SessionApp {})
              {:system-database  :system-database
               :session-database :session-database
               :web-server :web-server
               :merchant :merchant})})))

