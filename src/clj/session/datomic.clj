(ns session.datomic
  (:require [datomic.api :as d]
            session.io
            [session.datatypes :as dt]))

(def schema
  [
    {:db/ident :loop/id
     :db/valueType :db.type/string
     :db/cardinality :db.cardinality/one
     :db/unique :db.unique/identity
     :db.install/_attribute :db.part/db
     :db/id #db/id[:db.part/db]}
    {:db/ident :loop/in
     :db/valueType :db.type/string
     :db/cardinality :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id #db/id[:db.part/db]}
    {:db/ident :loop/out
     :db/valueType :db.type/string
     :db/cardinality :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id #db/id[:db.part/db]}
    {:db/ident :loop/next
     :db/valueType :db.type/ref
     :db/cardinality :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id #db/id[:db.part/db]}
    ])


(defn load-schema [conn]
  (d/transact conn schema))

(defn connect-database [uri]
  (let [created? (d/create-database uri)
        conn (d/connect uri)]
    (when-not (:db/id (d/entity (d/db conn) :loop/root))
      @(load-schema conn)
      @(d/transact conn [[:db/add (d/tempid :db.part/user) :db/ident :loop/root]]))
    conn))


(defn get-session [db]
  (loop [loops [] current (d/entity db :loop/root)]
    (if-let [n (:loop/next current)]
      (recur (conj loops n) n)
      loops)))


(defmulti session-transact (fn [a b] (:op a)))


(defmethod session-transact :eval-request [data conn]
  (d/transact conn [{:db/id (d/tempid :db.part/user) :loop/id (:id data) :loop/in (:in data)}]))

(defmethod session-transact :eval-response [data conn]
  (d/transact conn [{:db/id (d/tempid :db.part/user)
                     :loop/id (:id data)
                     :loop/out (session.io/write-edn (:out data))}]))


(defn entity-for-loop-id [id db]
  (d/entity db (first (first (d/q '[:find ?id
                                    :in $ ?id2
                                    :where
                                    [?id :loop/id ?id2]] db id)))))

(defn insertion-point-entity [id db]
  (if (= :session-top id)
    (d/entity db :loop/root)
    (entity-for-loop-id id db)))



(defmethod session-transact :insert-loop [data conn]
  (let [db (d/db conn)
        x (insertion-point-entity (:id data) db)
        newid (d/tempid :db.part/user)]
    (println {:insert-after (d/touch x)})
    (d/transact
      conn
      (if-let [n (:loop/next x)]
              [{:db/id newid :loop/id (:new-id data) :loop/in "" :loop/out ":default" :loop/next (:db/id n)}
               {:db/id (:db/id x) :loop/next newid}]

              [{:db/id newid :loop/id (:new-id data) :loop/in "" :loop/out ":default"}
               {:db/id (:db/id x) :loop/next newid}]))))


(defmethod session-transact :delete-loop [data conn]
  (let [db (d/db conn)
        x (entity-for-loop-id (:id data) db)
        parent (first (:loop/_next x))]
    (d/transact
      conn
      (if-let [n (:loop/next x)]
        [{:db/id (:db/id parent) :loop/next (:db/id n)}]
        [[:db/retract (:db/id parent) :loop/next (:db/id x)]]))))

(defmethod session-transact :eval-error [data conn])




