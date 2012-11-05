(ns session.datomic
  (:require session.schema)
  (:require [noir-async.core :as noir-async])
  (:require [lamina.core :as lamina])
  (:use session.tags)
  (:use [datomic.api :only (q db tempid) :as d]))

(def uri "datomic:free://localhost:4334/session-default")

;; create database
(defn create-db [] (d/create-database uri))

;; connect to dataabase
(defn create-conn [] (d/connect uri))

(def conn (d/connect uri))

(def queue (d/tx-report-queue conn))

(defn load-schema [conn]
  (d/transact
   conn
   session.schema/schema))


(defn request-data [x rdb]
  (let [actionid (:e x) requestid (:v x)]
    (q '[:find ?actionid ?op ?string
        :in $ [[?actionid ?requestid]]
        :where
        [?requestid :request/op ?op]
        [?requestid :request/data ?did]
        [?did :data/edn ?string]]
       rdb
       [[actionid requestid]])))

(def last-tx (atom nil))

(defn response-datoms [actionid op datastring]
  (let [resultid (d/tempid :db.part/user)
        result (eval (read-string datastring))]
    [
     [:db/add actionid :action/response resultid]
     [:db/add resultid :response/summary (pr-str result)]
     [:db/add resultid :response/status :success]]))

;; how to use the tx datoms directly in datalog?
(defn process-request [request]
  (let [rdb (:db-after request) datoms (:tx-data request)]
    (let [x (first (filter #(= :action/request (d/ident rdb (:a %))) datoms))]
      (if x
        (d/transact
         conn
         (apply response-datoms (first (request-data x rdb))))))))



(defn process-requests [tx-report-queue]
  (doseq [req (repeatedly #(.take tx-report-queue))]
    (.start (Thread. #(process-request req)))))

(defn process-requests-thread [conn]
  (.start (Thread. #(process-requests (d/tx-report-queue conn)))))

(def last-response (atom nil))



;; requests without responses
(defn uncompleted-actions-q []
  (q '[:find ?id
      :where
      [?id :action/request _]
      [(session.datomic/attr-missing? $ ?id :action/response)]]
    (db conn)))

;; requests with responses
(defn completed-actions-q []
  (q '[:find ?id
      :where
      [?id :action/response _]
      [?id :action/request _]
      ]
    (db conn)))

(defn attr-missing? [db eid attr]
      (not (attr (d/entity db eid))))

;; unprocessed actions and their request data
(defn unprocessed-actions-q []
  (q '[:find ?id ?op ?string
      :where
      [?id :action/request ?id2]
      [(session.datomic/attr-missing? $ ?id :action/response)]
      [?id2 :request/op ?op]
      [?id2 :request/data ?did]
      [?did :data/edn ?string]]
    (db conn)))

;; loops and their data
(defn actions-q []
  (q '[:find ?id ?in-string ?out-string
      :where
      [?id :action/response ?responseid]
      [?id :action/request ?requestid]
      [?requestid :request/op ?op]
      [?requestid :request/data ?did]
      [?did :data/edn ?in-string]
      [?responseid :response/summary ?out-string]]
    (db conn)))


(defn requests-q []
  (q '[:find ?id ?id2
      :where
      [?id :action/request ?id2]]
    (db conn)))

;; actions and their request data
(defn actions-requests-q []
  (q '[:find ?id ?op ?string
      :where
      [?id :action/request ?id2]
      [?id2 :request/op ?op]
      [?id2 :request/data ?did]
      [?did :data/edn ?string]]
    (db conn)))



(def datomic-channel (lamina/permanent-channel))


(defn subscribe-channel [ch]
  (lamina/siphon datomic-channel ch))


(defn create-action-request [ui-id datastring]
  (let [actionid (read-string ui-id)
        requestid (d/tempid :db.part/user)
        dataid (d/tempid :db.part/user)]
      [
       [:db/add actionid :action/request requestid]
       [:db/add requestid :request/ui-id ui-id]
       [:db/add requestid :request/op :evaluate]
       [:db/add requestid :request/data dataid]
       [:db/add dataid :data/edn datastring]
       ]))

(defn submit-request [m]
  (d/transact conn
              (let [d (read-string m)]
                (create-action-request
                 (:id d)
                 (:data d)))))

(defn submit-response [data]
  (lamina/enqueue datomic-channel
           (pr-str {:data (:data data
                           ) :id (:id data)})))


(defn process-response [response]
  (let [rdb (:db-after response) datoms (:tx-data response)]
    (let [x (first (filter #(= :action/response (d/ident rdb (:a %))) datoms))]
      (let
       [d (q '[:find ?req ?res ?res-summary ?ui-id
            :in $ ?x
            :where
            [$ ?x :action/request ?req]
            [$ ?x :action/response ?res]
            [$ ?res :response/summary ?res-summary]
            [$ ?req :request/ui-id ?ui-id]
            ]
             (db conn) (:e x))]
       (if (not (empty? d))
         (submit-response {:id (nth (first d) 3)
           :data (read-string (nth (first d) 2))})
         )
       )
      (reset! last-response (:e x))
      )))


(noir-async/defpage-async "/service" [] conn
  (subscribe-channel (:request-channel conn))
  (noir-async/on-receive conn (fn [m]  (submit-request m))))


(comment (async-push conn
             (pr-str
              {:id
               (:id (read-string m))
               :data (eval (read-string xx))})))


(defn process-responses [tx-report-queue]
  (doseq [req (repeatedly #(.take tx-report-queue))]
    (.start (Thread. #(process-response req)))))

(defn process-responses-thread [conn]
  (.start (Thread. #(process-responses (d/tx-report-queue conn)))))


(defn follow-next-action
  ([entity]
   (lazy-seq
    (when-let [s (:action/next entity)]
      (cons s (follow-next-action s))))))

(defn actions-q []
  (q '[:find ?id ?in-string ?out-string
      :where
      [?id :action/response ?responseid]
      [?id :action/request ?requestid]
      [?requestid :request/op ?op]
      [?requestid :request/data ?did]
      [?did :data/edn ?in-string]
      [?responseid :response/summary ?out-string]]
    (db conn)))

(defn entity-data [entity]
  {:output (let [d (get-in entity [:action/response :response/summary])] (if d (read-string d) nil))
   :input (get-in entity [:action/request :request/data :data/edn])
   :id (str (:db/id entity))})

(defn get-loop-maps []
  (map (fn [[id input output]] {:id (str id) :input input :output (read-string output)}) (actions-q)))

(defn get-datomic-session []
  (map->Session
   {:id 1 :last-loop-id 1
    :subsessions [(map->Subsession
                  {:type :clj
                   :loops (mapv map->Loop (map entity-data (follow-next-action  (datomic.api/entity (db conn) :action/root))))})]}))
