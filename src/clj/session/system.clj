(ns session.system
  (:require [com.stuartsierra.component :as component]
            session.app
            session.webserver
            session.datomic
            session.io))


(def session-system-components [:database :web-server :app :merchant])

(defrecord SessionSystem [database web-server app merchant]
  component/Lifecycle
  (start [this]
    (component/start-system this session-system-components))
  (stop [this]
    (component/stop-system this session-system-components)))


(defn session-system [config-options]
  (let []
    (map->SessionSystem
      {
       :merchant (session.io/merchant)
       :database  (session.datomic/new-database)
       :web-server (session.webserver/new-web-server)

       :app (component/using
              (session.app/map->SessionApp {})
              {:database  :database
               :web-server :web-server
               :merchant :merchant})})))

