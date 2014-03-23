(ns session.webserver
  (:require
    [com.stuartsierra.component :as component]
    [datomic.api :as d]
    [session.datatypes :as dt]
    [session.datomic :as sd]
    [compojure.core :refer [routes]]
    [compojure.route :as route]
    [com.keminglabs.jetty7-websockets-async.core :as ws]
    [clojure.core.async :refer [chan go >! <!]]
    [ring.adapter.jetty :refer [run-jetty]]
    [merchant.edn.reader :as er]
    [merchant.edn.writer :as ew]
    yantra.datamappings
    session.user))


(def app
  (routes
    (route/files "/" {:root "resources/public"})))


(defrecord WebServer [ws-chan port]
  component/Lifecycle
  (start [component]
    (let [c (assoc component
            :web-server (run-jetty app
                                   {:join?        false :port port
                                    :configurator (ws/configurator ws-chan)}))]
      (println (str "Started webserver on port " port))
      c))
  (stop [component]
    (.stop (:web-server component))
    component))


(defn new-web-server [port]
  (map->WebServer {:ws-chan (chan) :port port}))





