(ns session.server
  (:require
            [compojure.core :refer [routes]]
            [compojure.route :as route]
            [com.keminglabs.jetty7-websockets-async.core :as ws]
            [clojure.core.async :refer [chan go >! <!]]
            [ring.adapter.jetty :refer [run-jetty]]))




(def app
  (routes
    (route/files "/" {:root "resources/public"})))

(comment {:request request :in in :out out})




(defn spawn-new-connection-handlers [conn]
  (let [in (:in conn) out (:out conn)]
    (go
      (while true
        (let [request (<! out)]

          (println request)
          (let [r (read-string request)]
            (println r)
            (println (:in r))
            (>! in (pr-str {:out (eval (read-string (:in r)))
                                                         :id (:id r)}) ))
          )))))


(defn register-ws-app!
  [conn-chan]
  (go
    (while true
        (let [newconn (<! conn-chan)]
            (println newconn)
            (spawn-new-connection-handlers newconn)))))



(comment
  (while true
    (if [(<! conn-chan)]
      []
      (let [in (chan) out (chan)] (go
                                    (>! in "Yo")
                                    (loop []
                                      (when-let [msg (<! out)]
                                        (prn msg)
                                        (recur))))))))




(defn system
  []
  {:connection-chan (chan)})

(defn start! [system]

  (register-ws-app! (system :connection-chan))

  (assoc system
    :server (run-jetty app
                       {:join? false :port 8080
                        :configurator (ws/configurator (system :connection-chan))})))


(defn stop! [system]
  (when-let [server (:server system)]
    (.stop server))

  (dissoc system :server))

