(ns session.datomic
  (:require session.schema)
  (:use [datomic.api :only (q db tempid) :as d]))

(def uri "datomic:free://localhost:4334/session1")

;; create database
(defn create-db [] (d/create-database uri))

;; connect to dataabase
(defn create-conn [] (d/connect uri))

(def conn (d/connect uri))

(def queue (d/tx-report-queue conn))

(defn load-schema [conn]
  (d/transact
   conn
   session.schema/schema
   ))

(defn create-action-request [datastring]
  (let [actionid (d/tempid :db.part/user)
        requestid (d/tempid :db.part/user)
        dataid (d/tempid :db.part/user)]
      [
       [:db/add actionid :action/request requestid]
       [:db/add requestid :request/op :evaluate]
       [:db/add requestid :request/data dataid]
       [:db/add dataid :data/edn datastring]
       ]))

(q '[:find ?id ?id2
     :where
     [?id :action/request ?id2]]
   (db conn))

;; actions and their request data
(q '[:find ?id ?op ?string
     :where
     [?id :action/request ?id2]
     [?id2 :request/op ?op]
     [?id2 :request/data ?did]
     [?did :data/edn ?string]]
   (db conn))


(defn request-data [x rdb]
  (let [actionid (:e x) requestid (:v x)]
    (q '[:find ?actionid ?op ?string
        :in $ [[?actionid ?requestid]]
        :where
        [?requestid :request/op ?op]
        [?requestid :request/data ?did]
        [?did :data/edn ?string]]
       rdb
       [[actionid requestid]])
    ))

(def last-tx (atom nil))

(defn response-datoms [actionid op datastring]
  (let [resultid (d/tempid :db.part/user)
        result (eval (read-string datastring))]
    [
     [:db/add actionid :action/response resultid]
     [:db/add resultid :response/summary (pr-str result)]
     [:db/add resultid :response/status :success]
    ]))

;; how to use the tx datoms directly in datalog?
(defn process-request [request]
  (let [rdb (:db-after request) datoms (:tx-data request)]
    (let [x (first (filter #(= :action/request (d/ident rdb (:a %))) datoms))]
      (if x
        (d/transact
         conn
         (apply response-datoms (first (request-data x rdb)))
         )
        ))))

(defn process-request-sub [x] (reset! last-tx x))

(defn process-queue []
  (doseq [req (repeatedly #(.take queue))]
    (.start (Thread. #(process-request req)))))



(defn attr-missing? [db eid attr]
      (not (attr (d/entity db eid))))

;; requests without responses
(q '[:find ?id
     :where
     [?id :action/request _]
     [(session.datomic/attr-missing? $ ?id :action/response)]]
   (db conn))

;; requests with responses
(q '[:find ?id
     :where
     [?id :action/response _]
     [?id :action/request _]
     ]
   (db conn))

;; unprocessed actions and their request data
(q '[:find ?id ?op ?string
     :where
     [?id :action/request ?id2]
     [(session.datomic/attr-missing? $ ?id :action/response)]
     [?id2 :request/op ?op]
     [?id2 :request/data ?did]
     [?did :data/edn ?string]]
   (db conn))

;; loops and their data
(q '[:find ?id ?in-string ?out-string
     :where
     [?id :action/response ?responseid]
     [?id :action/request ?requestid]
     [?requestid :request/op ?op]
     [?requestid :request/data ?did]
     [?did :data/edn ?in-string]
     [?responseid :response/summary ?out-string]]
   (db conn))


(defn get-requests [conn]
 1

  )
