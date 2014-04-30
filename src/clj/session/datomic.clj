(ns session.datomic
  (:require
    [com.stuartsierra.component :as component]
    [session.datatypes :as dt]
    [datomic.api :as d]
    [clojure.java.io :as jio]
    session.io
    [me.raynes.conch.low-level :as sh]))



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
    :data (let [r (d/tempid :db.part/user)
                l (d/tempid :db.part/user)
                ]
            [{:db/id     r
             :db/ident  :loop/root
             :loop/next l}
            {:db/id     l
             :loop/id   (str (java.util.UUID/randomUUID))
             :loop/in   "(+ 1 1)"
             :loop/out  "2"
             :session/note "This is a sample evaluation"
             }
            ])
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

(defn configure []
  (let [windows (-> (System/getProperty "os.name") (.startsWith "Windows"))
        datomic-dir (.getAbsolutePath (jio/file "vendor/datomic-free-0.9.4556"))]
    ;
    ; Use ".cmd" scripts on Windows
    ; Capture fully-qualified paths for the datomic directory and scripts
    ;
    { :datomic-dir datomic-dir
      :transactor-cmd (.getAbsolutePath (jio/file datomic-dir (str "bin/transactor" (if windows ".cmd" ""))))
      :datomic-cmd (.getAbsolutePath (jio/file datomic-dir (str "bin/datomic" (if windows ".cmd" ""))))
    }))

(def config (configure))

(defn launch-datomic []
  (sh/proc (:transactor-cmd config)
           "config/free-transactor.properties"
           :dir (:datomic-dir config)))


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

(defn restore-default-database [uuid-string datomic-uri-base db-name system-conn]
  ;; db-spec should be {:file-path path :db-uuid uuid :db-name name}
  (let [file-path (str "file:" (System/getProperty "user.dir") "/resources/data/default-sessions/" uuid-string)
        datomic-uri (str datomic-uri-base  uuid-string)]
    (println "restoring database: " db-name " " uuid-string)
    (let [p (sh/proc (:datomic-cmd config)
                   "restore-db"
                   file-path
                   datomic-uri
                   :dir (:datomic-dir config))]
      (sh/stream-to-out p :out)
      (sh/stream-to-out p :err)
      (println (str "add db to system index: " db-name " " uuid-string))
      (d/transact system-conn
                  [{:db/id (d/tempid :db.part/user)
                    :index/id (java.util.UUID/fromString uuid-string)
                    :index/name db-name}])
      (println "database restored."))))





(defrecord SystemDatabase [uri datomic-process connection seed]
  component/Lifecycle
  (start [component]
    (try (let [p (launch-datomic)
               conn (get-connection uri)]
           (let []
             (when-not (:db/id
                        (d/entity (d/db conn)
                                  (:db/ident (first (:schema seed)))))

               @(d/transact conn (:schema seed))
               @(d/transact conn (:data seed))
               (restore-default-database "c899f45d-1a5e-4c5e-9672-0dfe4d874109"
                                         "datomic:free://localhost:4334/"
                                         "Examples"
                                         conn))
             ;(println conn p)

             (assoc component :connection conn
                              :datomic-process p)))
         (catch Exception e
           (println "Exception:" component)
           (println (str e)))))


  (stop [component]
    (stop-datomic datomic-process)
    (println "Stopping database")))


(defrecord Database [uri connection seed]
  component/Lifecycle
  (start [component]
    (try (let [conn (get-connection uri)]
           (when-not (:db/id
                      (d/entity (d/db conn)
                                (:db/ident (first (:schema seed)))))

             @(d/transact conn (:schema seed))
             @(d/transact conn (:data seed)))

           ;(println conn p)

           (assoc component :connection conn))
         (catch Exception e
           (println "Exception:" component)
           (println (str e)))))


  (stop [component]))



(defn new-session-database
  ([base-uri] (let [uuid (java.util.UUID/randomUUID)]
        (new-session-database (str base-uri (str uuid)) uuid)))
  ([uri uuid name]
   (map->Database {:id uuid
                   :uri uri
                   :seed (merge-with concat system-seed session-seed {:data [[:db/add :session/meta :index/id uuid]
                                                                             [:db/add :session/meta :index/name name]]})})))




(defn new-system-database [base-uri db-name]
  (map->SystemDatabase {:uri (str base-uri db-name)
                  :seed system-seed
                  :system-base-uri base-uri}))



















