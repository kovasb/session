(ns session.app.handle-request
  (:use [session.app.operation-datoms :only [operation-datoms]])
  (:require

    [com.stuartsierra.component :as component]
            [datomic.api :as d]
            [session.datatypes :as dt]
            [session.datomic :as sd]

            [clojure.core.async :refer [chan go >! <!]]
            [merchant.edn.reader :as er]
            [merchant.edn.writer :as ew]

            session.user))


(defn entity-for-loop-id [id db]
  (d/entity db
            (first
              (first
                (d/q '[:find ?id
                       :in $ ?id2
                       :where
                       [?id :loop/id ?id2]] db id)))))


(defmulti handle-request (fn [input out-chan app db] (:op input)))

(defmethod handle-request :eval-request [input out-chan app db]
  (go (>! out-chan
          (let [eval-request input
                datomic-conn (:connection @(:session-database app)) ]
            (try
              (d/transact datomic-conn (operation-datoms eval-request db app))
              (let [response
                    (try
                      {:op :eval-response :id (:id eval-request)
                       :out (binding [*ns* (the-ns 'session.user)
                                      session.user/*datomic-conn* datomic-conn]
                              (eval (read-string (:in eval-request))))}
                      (catch Exception e
                        {:op :eval-response :id (:id eval-request)
                         :out (pr-str e) :error true}))]

                @(d/transact datomic-conn (operation-datoms response db app))
                (session.io/write-edn response (:merchant app)))

              (catch Exception e
                (do
                  (println "eval error")
                  (pr-str {:op :eval-error :error (str e)}))))))))



(defmethod handle-request :insert-loop [input out-chan app db]
  (d/transact (:connection @(:session-database app))
              (operation-datoms input db app)))

(defmethod handle-request :delete-loop [input out-chan app db]
  (d/transact (:connection @(:session-database app))
              (operation-datoms input db app)))


(defn to-client-side-session [x app]
  (assoc
      (session.datatypes.Session.
     (mapv
       (fn [l]
         (dt/map->Loop
           {:in   (:loop/in l)
            :note (:session/note l)
            :out  (session.io/read-edn (:loop/out l) (:merchant app))
            :id   (:loop/id l)}))
       (:loops x)))
    :meta (:meta x)
    ))


(defn get-session [db]
  {:loops
    (loop [loops [] current (d/entity db :loop/root)]
      (if-let [n (:loop/next current)]
        (recur (conj loops n) n)
        loops))
   :meta (let [e (d/entity db :session/meta)]
           {:id (:index/id e)
            :name (:index/name e)})})



(defn session-index [db id]
  (select-keys (d/entity db [:index/id id])
               [:index/id :index/name :index/created-at :index/modified-at]))


(defn list-sessions [db]
  (mapv #(session-index db (first %))
        (d/q '[:find ?e :where [_ :index/id ?e]] db)))




(defmethod handle-request :list-sessions [input out-chan app db]
  ;; return list of initial sessions
  (go
    (>! out-chan
        (session.io/write-edn
          (list-sessions (d/db (:connection (:system-database app))))
          (:merchant app)))))





(defmethod handle-request :update-note [input out-chan app db]
  (let [e (entity-for-loop-id (:id input) db)]
    (d/transact (:connection @(:session-database app))
                [{:db/id (:db/id e) :session/note (:note input)}])))



(defmethod handle-request :update-name [input out-chan app db]
  (let []
    (println input)
    (d/transact (:connection @(:session-database app))
                [{:db/id :session/meta :index/name (:name input)}])

    (d/transact (:connection (:system-database app))
                [{:index/id (:id input) :index/name (:name input) :db/id (d/tempid :db.part/user)}])))






(defmethod handle-request :connect-session [input out-chan app db]
  ;; request needs to indicate which session to connect
  ;; connect it and transact into the app
  (let [


        session-db
        (do
            (component/start
              (session.datomic/new-session-database
                (str (:system-base-uri (:system-database app)) (:index/id input))
                (:index/id input))))]

    (swap! (:session-database app) (fn [x] session-db))
    (go (>! out-chan
            (session.io/write-edn
              (to-client-side-session
                (get-session (d/db (:connection session-db)))

                app)
              (:merchant app))))))



(defmethod handle-request :create-session [input out-chan app db]
  ;; add entry for new session in system db
  ;; call out to :connect-session
  (let [session-uuid  (java.util.UUID/randomUUID)]
    (d/transact (:connection (:system-database app))
                [[:db/add (d/tempid :db.part/user) :index/id session-uuid]])
    (handle-request (assoc input
                      :op :connect-session
                      :index/id session-uuid)
                    out-chan app db)))



