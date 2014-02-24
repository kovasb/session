(ns session.datomic
  (:require [datomic.api :as d]
            [me.raynes.conch.low-level :as sh]

            session.io
            [session.datatypes :as dt]
            [com.stuartsierra.component :as component]))


(def meta-schema
  [{:db/ident :session/database
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/identity
    :db.install/_attribute :db.part/db
    :db/id #db/id[:db.part/db]}])


(def schema
  [{:db/ident :loop/id
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

;;;;;;;;;;;;

(defn load-schema [conn]
  (d/transact conn schema))


(comment
  (defn start
   "Start a Datomic instance as specified in project.clj."
   [root {:keys [install-location config db-uri test-data]}]
   (if config
     (let [p (sh/proc "bin/transactor" (str root ;File/separator config
                                            )
                      :dir install-location)]
       (while true (try
                     (sh/stream-to-out p :out)
                     (catch Exception e (println (str e))))))
     (println "No Datomic config specified."))))


(defn launch-datomic []
  (sh/proc "vendor/datomic-free-0.9.4556/bin/transactor"
           "config/free-transactor.properties"))


(defn stop-datomic [p]
  (let [e (future (sh/exit-code p))]
    (sh/destroy p)
    @e))


(defrecord Database [uri connection datomic-process]
  component/Lifecycle
  (start [component]
    (let [p (launch-datomic)]
    (Thread/sleep 2000)

    (println "Starting database")
    (let [created? (d/create-database uri)
          conn (d/connect uri)]
      (when-not (:db/id (d/entity (d/db conn) :loop/root))
        @(load-schema conn)
        @(d/transact conn [[:db/add (d/tempid :db.part/user) :db/ident :loop/root]]))

      (println conn p)

      (assoc component :connection conn

                       :datomic-process p))))
  (stop [component]
    (stop-datomic datomic-process)
    (println "Stopping database")))

(defn new-database []
  (map->Database {:uri "datomic:free://localhost:4334/test"}))



















