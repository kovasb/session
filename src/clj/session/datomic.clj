(ns session.datomic
  (:require session.schema)
  (:require [noir-async.core :as noir-async])
  (:require [lamina.core :as lamina])
  (:use session.tags)
  (:use [datomic.api :only (q db tempid) :as d]))



(def generic-data-reader-fn (fn [y x] `(session.tags/->GenericData (quote ~y) ~x)))

;;(def uri "datomic:free://localhost:4334/session-default")

(def conn (atom nil))


(defn load-schema [conn]
  (d/transact
   conn
   session.schema/schema))


(defn connect-database [uri]
  (let [created? (d/create-database uri)
        conn (d/connect uri)]
    (if (not (:db/id (d/entity (db conn) :action/request)))
      (do
        @(load-schema conn)
        @(d/transact conn [[:db/add (d/tempid :db.part/user) :db/ident :action/root] ])
        ))
    conn))

(defn setup [uri]
  (reset! conn (connect-database uri))
  )


;; requests without responses
(defn uncompleted-actions-q [db]
  (q '[:find ?id
      :where
      [?id :action/request _]
      [(session.datomic/attr-missing? $ ?id :action/response)]]
    db))

;; requests with responses
(defn completed-actions-q [db]
  (q '[:find ?id
      :where
      [?id :action/response _]
      [?id :action/request _]
      ]
    db))

(defn attr-missing? [db eid attr]
      (not (attr (d/entity db eid))))

;; unprocessed actions and their request data
(defn unprocessed-actions-q [db]
  (q '[:find ?id ?op ?string
      :where
      [?id :action/request ?id2]
      [(session.datomic/attr-missing? $ ?id :action/response)]
      [?id2 :request/op ?op]
      [?id2 :request/data ?did]
      [?did :data/edn ?string]]
    db))

;; loops and their data
(defn actions-q [db]
  (q '[:find ?id ?in-string ?out-string
      :where
      [?id :action/response ?responseid]
      [?id :action/request ?requestid]
      [?requestid :request/op ?op]
      [?requestid :request/data ?did]
      [?did :data/edn ?in-string]
      [?responseid :response/summary ?out-string]]
    db))


(defn requests-q [db]
  (q '[:find ?id ?id2
      :where
      [?id :action/request ?id2]]
    db))

;; actions and their request data
(defn actions-requests-q [db]
  (q '[:find ?id ?op ?string
      :where
      [?id :action/request ?id2]
      [?id2 :request/op ?op]
      [?id2 :request/data ?did]
      [?did :data/edn ?string]]
    db))



(def datomic-channel (lamina/permanent-channel))


(defn subscribe-channel [ch]
  (lamina/siphon datomic-channel ch))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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


(defn response-datoms [actionid op datastring]
  (let [resultid (d/tempid :db.part/user)
        result (binding [*default-data-reader-fn* generic-data-reader-fn]
                 (eval (read-string datastring)))]
    [
     [:db/add actionid :action/response resultid]
     [:db/add resultid :response/summary (pr-str result)]
     [:db/add resultid :response/status :success]]))



(defn process-request [request]
  (let [rdb (:db-after request) datoms (:tx-data request)]
    (let [x (first (filter #(and (= true (:added %)) (= :action/request (d/ident rdb (:a %)))) datoms))
         ]
      (println ["get request from tx, transact result into db" x (map :a datoms)])
      (if x
        @(d/transact
         @conn
        (apply response-datoms (first (request-data x rdb))))))))



(defn create-action-request [ui-id datastring]
  (let [actionid (read-string ui-id)
        requestid (d/tempid :db.part/user)
        dataid (d/tempid :db.part/user)]
      [
       [:db/add actionid :action/request requestid]

       [:db/add requestid :request/op :evaluate]
       [:db/add requestid :request/data dataid]
       [:db/add dataid :data/edn datastring]
       ]))

(defmulti service-request :op)

(defmethod service-request :evaluate-clj [request]
 (let [datoms (create-action-request
    (:id request)
    (:data request))]
   (println ["transact request into db" :evaluate-clj datoms])
   @(d/transact
     @conn
   datoms)))


(defn submit-request [m]
  (service-request (read-string m)))

(defn submit-response [data]
  (let [r (pr-str {:data (:data data) :id (:id data)})]
    (println ["submit response" r])
    (lamina/enqueue datomic-channel r)))



(defn process-response [response]
  (let [rdb (:db-after response) datoms (:tx-data response)]
    (let [x (first (filter #(and (= true (:added %)) (= :action/response (d/ident rdb (:a %)))) datoms))]
        (println ["response from tx into channel" x (map :a datoms)])
        (if x
          (let
              [d (q '[:find ?req ?res ?res-summary
                      :in $ ?x
                      :where
                      [$ ?x :action/request ?req]
                      [$ ?x :action/response ?res]
                      [$ ?res :response/summary ?res-summary]

                      ]
                 rdb (:e x))]
         (if (not (empty? d))
           (submit-response {:id (str (:e x))
                             :data
                             (binding
                                 [*default-data-reader-fn* session.tags/->GenericData]
                               (read-string (nth (first d) 2)))}))
         )))))



(defn process-requests [tx-report-queue]
  (binding [*ns* *ns*
            *warn-on-reflection* *warn-on-reflection*
            *math-context* *math-context*
            *print-meta* *print-meta*
            *print-length* *print-length*
            *print-level* *print-level*
            *data-readers* *data-readers*
            *compile-path* (System/getProperty "clojure.compile.path" "classes")
            *command-line-args* *command-line-args*
            *unchecked-math* *unchecked-math*
            *assert* *assert*
            *1 nil
            *2 nil
            *3 nil
            *e nil]
    (doseq [req (repeatedly #(.take tx-report-queue))]
                   (try (process-request req) (catch Exception e (println e)))
                   (try (process-response req) (catch Exception e (println e)))
                   ;;(.start (Thread. #(process-request req)))
                   )))

(defn process-requests-thread [conn]
  (.start (Thread. #(process-requests (d/tx-report-queue conn)))))


(defn process-responses [tx-report-queue]
  (doseq [req (repeatedly #(.take tx-report-queue))]
    (.start (Thread. #(process-response req)))))

(defn process-responses-thread [conn]
  ;(.start (Thread. #(process-responses (d/tx-report-queue conn))))
  nil
  )

(noir-async/defpage-async "/service" [] conn
  (subscribe-channel (:request-channel conn))
  (noir-async/on-receive conn (fn [m]  (submit-request m))))



(defn follow-next-action
  ([entity]
   (lazy-seq
    (when-let [s (:action/next entity)]
      (cons s (follow-next-action s))))))

(defn actions-q [db]
  (q '[:find ?id ?in-string ?out-string
      :where
      [?id :action/response ?responseid]
      [?id :action/request ?requestid]
      [?requestid :request/op ?op]
      [?requestid :request/data ?did]
      [?did :data/edn ?in-string]
      [?responseid :response/summary ?out-string]]
    db))

(defn entity-data [entity]
  {:output (let [d (get-in entity [:action/response :response/summary])]
             (if d
               (binding [*default-data-reader-fn* session.tags/->GenericData] (read-string d)) nil))
   :input (get-in entity [:action/request :request/data :data/edn])
   :id (str (:db/id entity))})

(defn get-loop-maps []
  (map (fn [[id input output]] {:id (str id) :input input :output (if output (read-string output) nil)}) (actions-q)))

(defn get-datomic-session []
  (map->Session
   {:id 1 :last-loop-id 1
    :subsessions [(map->Subsession
                  {:type :clj
                   :loops (mapv
                           map->Loop
                           (map entity-data
                                (follow-next-action
                                 (datomic.api/entity (db @conn) :action/root))))})]}))

(defn insert-loop-root [request]
  (let [p (:after (:position (:data request)))]
    (if (= p "subsession-root")
      (datomic.api/entity (db @conn) :action/root)
      (datomic.api/entity (db @conn) (read-string p)))))

(defmethod service-request :insert-loop [request]

  (let [root (insert-loop-root request)
        rootid (:db/id root)
        newidtmp (d/tempid :db.part/user)

        result (if (:action/next root)
                 @(d/transact @conn
                              [[:db/add newidtmp :action/next (:db/id (:action/next root))]
                               [:db/add rootid :action/next newidtmp]])
                  @(d/transact @conn
                               [
                                [:db/add rootid :action/next newidtmp]
                                [:db/add newidtmp :db/doc "placeholder/hack"]
                                ]))

        newid (d/resolve-tempid (db @conn) (:tempids result) newidtmp)]
    (println result)

    (lamina/enqueue datomic-channel
                  (pr-str {
                           :op :insert-loop
                           :data {:position (:position (:data request))
                                  :loop (map->Loop {:id (str newid) :output nil :input ""} )}
                           :id "subsession"}))))


(defmethod service-request :delete-loop [request]
  (println request)
  (let [id (:id (:data request))
        deleted (d/entity (db @conn) (read-string id))
        previous (first (:action/_next deleted))
        next (:action/next deleted)
        result @(d/transact @conn
                            (if next
                              [[:db/add (:db/id previous) :action/next (:db/id next)]
                               [:db/retract (:db/id deleted) :action/next (:db/id deleted)]]
                              [[:db/retract (:db/id deleted) :action/next (:db/id deleted)]]))]
    (lamina/enqueue datomic-channel
                  (pr-str {
                           :op :delete-loop
                           :data {:id id}
                           :id "subsession"}))))
