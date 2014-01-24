(ns session.server
  (:require
            [datomic.api :as d]
            [session.datomic :as sd]
            [compojure.core :refer [routes]]
            [compojure.route :as route]
            [com.keminglabs.jetty7-websockets-async.core :as ws]
            [clojure.core.async :refer [chan go >! <!]]
            [ring.adapter.jetty :refer [run-jetty]]))


(def app
  (routes
    (route/files "/" {:root "resources/public"})))


(defmulti handle-request (fn [input out-chan datomic-conn] (:op input)))

(defmethod handle-request :eval-request [input out-chan datomic-conn]
  (go (>! out-chan
          (let [eval-request input]
            (sd/session-transact eval-request datomic-conn)
            (let [response (try
                             {:op :eval-response
                              :out (eval (read-string (:in eval-request)))
                              :id (:id eval-request)}
                             (catch Exception e
                               {:op :eval-error
                                :error (str e)})) ]
              (sd/session-transact response datomic-conn)
              (pr-str response))))))
;; decorate transactions with request ids & meta info from client?


(defmethod handle-request :insert-loop [input out-chan datomic-conn]
  (sd/session-transact input datomic-conn))

(defmethod handle-request :delete-loop [input out-chan datomic-conn]
  (sd/session-transact input datomic-conn))

(defn to-client-side-session [x]
  {:tag :session :loops (mapv (fn [l]  {:tag :loop :in (:loop/in l) :out (read-string (:loop/out l)) :id (:loop/id l)}) x)})

(defmethod handle-request :connect-session [input out-chan datomic-conn]
  (go (>! out-chan (pr-str (to-client-side-session (sd/get-session (d/db datomic-conn)))))))


(defn spawn-new-connection-handlers [conn datomic-conn]
  (let [in (:in conn) out (:out conn)]
    (go
      (while true
        (let [req (read-string (<! out))]
          (println req)
          (handle-request req in datomic-conn))))))


(defn register-ws-app!
  [conn-chan datomic-conn]
  (go
    (while true
        (let [newconn (<! conn-chan)]
            (println newconn)
            (spawn-new-connection-handlers newconn datomic-conn)))))



(defn system
  []
  {:connection-chan (chan)
   :datomic-conn (sd/connect-database "datomic:mem://test")})

(defn start! [system]

  (register-ws-app! (system :connection-chan) (system :datomic-conn))

  (assoc system
    :server (run-jetty app
                       {:join? false :port 8080
                        :configurator (ws/configurator (system :connection-chan))})))

(defn stop! [system]
  (when-let [server (:server system)]
    (.stop server)))


(defn -main
  ([] (-main "{}"))
  ([opts-string]
    (start! (system))
    (printf "session started on port 8080")))


