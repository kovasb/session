(ns session.app
  (:require [com.stuartsierra.component :as component]
            [datomic.api :as d]
            [session.datatypes :as dt]
            [session.datomic :as sd]

            [clojure.core.async :refer [chan go >! <!]]
            [merchant.edn.reader :as er]
            [merchant.edn.writer :as ew]

            session.user))




;; initialization function: go to meta db, transact schema if necessary
;; assoc connection to system
;; in shipping version, have a set of examples sessions

;; organize session by category
;; we don't delete sessions, we archive them



(defn get-session [db]
  (loop [loops [] current (d/entity db :loop/root)]
    (if-let [n (:loop/next current)]
      (recur (conj loops n) n)
      loops)))



;;;;;  operation-datoms

(defmulti operation-datoms (fn [a b c] (:op a)))

(defmethod operation-datoms :eval-request [data db app]
  [{:db/id (d/tempid :db.part/user) :loop/id (:id data) :loop/in (:in data)}])

(defmethod operation-datoms :eval-response [data db app]
  [{:db/id (d/tempid :db.part/user)
    :loop/id (:id data)
    :loop/out (session.io/write-edn (:out data) (:merchant app))}])


(defn entity-for-loop-id [id db]
  (d/entity db
            (first
              (first
                (d/q '[:find ?id
                       :in $ ?id2
                       :where
                       [?id :loop/id ?id2]] db id)))))


(defn insertion-point-entity [id db]
  (if (= :session-top id)
    (d/entity db :loop/root)
    (entity-for-loop-id id db)))

(defmethod operation-datoms :insert-loop [data db app]
  (let [x (insertion-point-entity (:id data) db)
        newid (d/tempid :db.part/user)]
    (if-let [n (:loop/next x)]
      [{:db/id newid :loop/id (:new-id data) :loop/in "" :loop/out ":default" :loop/next (:db/id n)}
       {:db/id (:db/id x) :loop/next newid}]

      [{:db/id newid :loop/id (:new-id data) :loop/in "" :loop/out ":default"}
       {:db/id (:db/id x) :loop/next newid}])))

(defmethod operation-datoms :delete-loop [data db app]
  (let [x (entity-for-loop-id (:id data) db)
        parent (first (:loop/_next x))]
    (if-let [n (:loop/next x)]
      [{:db/id (:db/id parent) :loop/next (:db/id n)}]
      [[:db/retract (:db/id parent) :loop/next (:db/id x)]])))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defmulti handle-request (fn [input out-chan app db] (:op input)))

(defmethod handle-request :eval-request [input out-chan app db]
  (go (>! out-chan
          (let [eval-request input
                datomic-conn (:connection (:database app)) ]
            (try
              (d/transact datomic-conn (operation-datoms eval-request db app))
              (let [response {:op :eval-response
                              :out (binding [*ns* (the-ns 'session.user)
                                             session.user/*datomic-conn* datomic-conn
                                             ]
                                     (eval (read-string (:in eval-request))))
                              :id (:id eval-request)}]
                @(d/transact datomic-conn (operation-datoms response db app))
                (session.io/write-edn response (:merchant app)))

              (catch Exception e
                (do
                  (println "eval error")
                  (pr-str {:op :eval-error :error (str e)}))))))))



(defmethod handle-request :insert-loop [input out-chan app db]
  (d/transact (:connection (:database app))
              (operation-datoms input db app)))

(defmethod handle-request :delete-loop [input out-chan app db]
  (d/transact (:connection (:database app))
              (operation-datoms input db app)))


(defn to-client-side-session [x app]
  (session.datatypes.Session.
    (mapv
      (fn [l]
        (dt/map->Loop
          {:in (:loop/in l)
           :out (session.io/read-edn (:loop/out l) (:merchant app))
           :id (:loop/id l)}))
      x)))


(defmethod handle-request :connect-session [input out-chan app db]
  (go (>! out-chan
          (session.io/write-edn
            (to-client-side-session
              (get-session db)
              app)
            (:merchant app)))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn spawn-new-connection-handlers [app conn]
  (let [in (:in conn) out (:out conn)]
    (go
      (while true
        (let [req (read-string (<! out))]
          (println req)
          (handle-request req in app (d/db (:connection (:database app)))))))))


(defn register-ws-app! [app]
  (go
    (while true
      (let [newconn (<! (:ws-chan (:web-server app)))]
        (println newconn)
        (spawn-new-connection-handlers app newconn)))))


(defrecord SessionApp [database web-server object-mapping merchant]
  component/Lifecycle
  (start [this]
    ;; start listening on ws chan
    ;; start go blocks
    (register-ws-app! this)
    this)

  (stop [this] nil))





