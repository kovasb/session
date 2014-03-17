(ns session.datomic
  (:require
    [com.stuartsierra.component :as component]
    [session.datatypes :as dt]
    [datomic.api :as d]
    session.io
    [me.raynes.conch.low-level :as sh]))



;; :session/database :session/name :session/first-at :session/last-at
;; :session/group, tag, category
;; prob want group to be an entity

:index/id
:index/name
:index/created-at
:index/modified-at

:index/group
:index.group/name






(def system-seed
  {
    :data []
    :schema
    [
    {:db/id #db/id [:db.part/db]
     :db/ident :session/meta}

    {:db/ident              :index/id
     :db/valueType          :db.type/uuid
     :db/cardinality        :db.cardinality/one
     :db/unique             :db.unique/identity
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :index/name
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}


    {:db/ident              :index/created-at
     :db/valueType          :db.type/instant
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :index/modified-at
     :db/valueType          :db.type/instant
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}

    {:db/ident              :index/group
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :index.group/name
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}




    ]})


(def session-seed
  {
    :data [[:db/add (d/tempid :db.part/user) :db/ident :loop/root]]
    :schema
    [{:db/ident              :session/note
      :db/valueType          :db.type/string
      :db/cardinality        :db.cardinality/one
      :db.install/_attribute :db.part/db
      :db/id                 #db/id [:db.part/db]}

    {:db/ident             :loop/id
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db/unique             :db.unique/identity
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :loop/in
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :loop/out
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}
    {:db/ident              :loop/next
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/one
     :db.install/_attribute :db.part/db
     :db/id                 #db/id [:db.part/db]}]})


;;;;;;;;;;;;


(defn launch-datomic []
  (sh/proc "vendor/datomic-free-0.9.4556/bin/transactor"
           "config/free-transactor.properties"))


(defn stop-datomic [p]
  (let [e (future (sh/exit-code p))]
    (sh/destroy p)
    @e))



(defn get-connection [uri]
  (loop [n 1]
    (let [result
          (try
            (Thread/sleep 500)
            (println "Starting database")
            (let [created? (d/create-database uri)]
              (d/connect uri))
            (catch Exception e nil))]
      (if result result
                 (if (< n 20)
                   (recur (+ n 1))
                   (throw (Exception. "Datomic connection attempts timed out")))))))



(defrecord Database [uri connection datomic-process seed]
  component/Lifecycle
  (start [component]
    (try (let [p (if datomic-process (launch-datomic) nil)
               conn (get-connection uri)]




       (let []

         (when-not (:db/id
                    (d/entity (d/db conn)
                              (:db/ident (first (:schema seed)))))

           @(d/transact conn (:schema seed))
           @(d/transact conn (:data seed)))

         ;(println conn p)

         (assoc component :connection conn
                          :datomic-process p)))
         (catch Exception e
           (println "Exception:" component)
           (println (str e)))))


  (stop [component]
    (stop-datomic datomic-process)
    (println "Stopping database")))



(defn new-session-database
  ([base-uri] (let [uuid (java.util.UUID/randomUUID)]
        (new-session-database (str base-uri (str uuid)) uuid)))
  ([uri uuid]
   (map->Database {:id uuid
                   :uri uri
                   :datomic-process false
                   :seed (merge-with concat system-seed session-seed {:data [[:db/add :session/meta :index/id uuid]]})})))




(defn new-system-database [base-uri db-name]
  (map->Database {:uri (str base-uri db-name)
                  :datomic-process true
                  :seed system-seed
                  :system-base-uri base-uri
                  }))



















