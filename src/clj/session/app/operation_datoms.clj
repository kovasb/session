(ns session.app.operation-datoms
  (:require [com.stuartsierra.component :as component]
            [datomic.api :as d]
            [session.datatypes :as dt]
            [session.datomic :as sd]

            [clojure.core.async :refer [chan go >! <!]]
            [merchant.edn.reader :as er]
            [merchant.edn.writer :as ew]

            session.user))


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