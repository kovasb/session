(ns session.datomic
  (:require [session.schema :refer [schema]]
            [session.tags :refer :all]
            [lamina.core :as lamina]
            [datomic.api :refer [q db tempid] :as d]
            [session.tags :refer :all]))


(def generic-data-reader-fn (fn [y x] `(session.tags/->GenericData (quote ~y) ~x)))

;;;;;;;;;;;;;;;;;;;;;;;;  DB SETUP ;;;;;;;;;;;;;;;;;;;;;;;;

(defn load-schema [conn]
  (d/transact conn schema))

(defn connect-database [uri]
  (let [created? (d/create-database uri)
        conn (d/connect uri)]
    (when-not (:db/id (d/entity (db conn) :action/request))
      @(load-schema conn)
      @(d/transact conn [[:db/add (d/tempid :db.part/user) :db/ident :action/root]]))
    conn))

;;;;;;;;;;;;;;;;;;;;;;;;  TOP-LEVEL ENTRY POINTS ;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti service-request (fn [request ch db-conn] (:op request)))

(defn enqueue [ch data]
  (->> data pr-str (lamina/enqueue ch)))

;;;;;;;;;;;;;;;;;;;;;;;;  GET SESSION  ;;;;;;;;;;;;;;;;;;;;;;;;

(defn follow-next-action [entity]
  (lazy-seq
   (when-let [s (:action/next entity)]
     (cons s (follow-next-action s)))))

(defn entity-data [entity]
  {:output (when-let [d (get-in entity [:action/response :response/summary])]
             (binding [*default-data-reader-fn* session.tags/->GenericData]
               (try (read-string d)
                    (catch Exception e [:unreadable-form d]))))
   :input (get-in entity [:action/request :request/data :data/edn])
   :id (str (:db/id entity))})

(defn get-datomic-session [db-val]
  (map->Session
   {:id 1 :last-loop-id 1
    :subsessions [(map->Subsession
                  {:type :clj
                   :loops (mapv
                           map->Loop
                           (map entity-data
                                (follow-next-action
                                 (d/entity db-val :action/root))))})]}))

;;;;;;;;;;;;;;;;;;;;;;;;  EVALUATION SERVICE ;;;;;;;;;;;;;;;;;;;;;;;;

(defn request-data [x rdb]
  (let [actionid (:e x) requestid (:v x)]
    (q '[:find ?actionid ?op ?string
         :in $ ?actionid ?requestid
         :where
         [?requestid :request/op ?op]
         [?requestid :request/data ?did]
         [?did :data/edn ?string]]
       rdb actionid requestid)))

(defn response-datoms [actionid op datastring]
  (let [resultid (d/tempid :db.part/user)
        result (binding [*default-data-reader-fn* generic-data-reader-fn]
                 (eval (read-string datastring)))]
    [[:db/add actionid :action/response resultid]
     [:db/add resultid :response/summary (pr-str result)]
     [:db/add resultid :response/status :success]]))

(defn process-request [request db-conn]
  (let [rdb (:db-after request) datoms (:tx-data request)
        x (first (filter #(and (= true (:added %)) (= :action/request (d/ident rdb (:a %)))) datoms))]
      (println ["get request from tx, transact result into db" x (map :a datoms)])
      (if x
        @(d/transact db-conn
                     (apply response-datoms (first (request-data x rdb)))))))

(defn create-action-request [ui-id datastring]
  (let [actionid (read-string ui-id)
        requestid (d/tempid :db.part/user)
        dataid (d/tempid :db.part/user)]
      [[:db/add actionid :action/request requestid]
       [:db/add requestid :request/op :evaluate]
       [:db/add requestid :request/data dataid]
       [:db/add dataid :data/edn datastring]]))

(defmethod service-request :evaluate-clj [request ch db-conn]
  (let [datoms (create-action-request
                (:id request)
                (:data request))]
    (println ["transact request into db" :evaluate-clj datoms])
    @(d/transact db-conn datoms)))

(defn submit-response [ch data]
  (let [r (select-keys data [:data :id :input])]
    (println ["submit response" r])
    (enqueue ch r)))

(defmethod service-request :update-textarea [request ch db-conn]
  (let [r (select-keys request [:data :id :input :origin])]
    (enqueue ch r)))

(defn process-response [ch response]
  (let [rdb (:db-after response) datoms (:tx-data response)
        x (first (filter #(and (= true (:added %)) (= :action/response (d/ident rdb (:a %)))) datoms))]
        (println ["response from tx into channel" x (map :a datoms)])
        (if x
          (let [d (q '[:find ?req ?res ?res-summary ?in-string
                       :in $ ?x
                       :where
                       [?x :action/request ?req]
                       [?x :action/response ?res]
                       [?res :response/summary ?res-summary]
                       [?req :request/data ?did]
                       [?did :data/edn ?in-string]]
                     rdb (:e x))]
            (println [:submit-response (:e x) d])
            (if (seq d)
              (submit-response ch {:id (str (:e x))
                                   :input ((comp last last) d)
                                   :data
                                   (binding [*default-data-reader-fn* session.tags/->GenericData]
                                     (try (read-string (nth (first d) 2))
                                          (catch Exception e [:unreadable-form (nth (first d) 2)])))}))))))

(defn process-requests [tx-report-queue ch db-conn]
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
      (try (process-request req db-conn) (catch Exception e (println e)))
      (try (process-response ch req) (catch Exception e (println e))))))

(defn process-requests-thread [conn ch]
  (.start (Thread. #(process-requests (d/tx-report-queue conn) ch conn))))

;;;;;;;;;;;;;;;;;;;;;;;;  INSERTION & DELETION ;;;;;;;;;;;;;;;;;;;;;;;;

(defn insert-loop-root [request db-conn]
  (let [p (:after (:position (:data request)))]
    (if (= p "subsession-root")
      (datomic.api/entity (db db-conn) :action/root)
      (datomic.api/entity (db db-conn) (read-string p)))))

(defmethod service-request :insert-loop [request ch db-conn]
  (let [root (insert-loop-root request db-conn)
        rootid (:db/id root)
        newidtmp (d/tempid :db.part/user)
        result (if (:action/next root)
                 @(d/transact db-conn
                              [[:db/add newidtmp :action/next (:db/id (:action/next root))]
                               [:db/add rootid :action/next newidtmp]])
                 @(d/transact db-conn
                              [[:db/add rootid :action/next newidtmp]
                               [:db/add newidtmp :db/doc "placeholder/hack"]]))
        newid (d/resolve-tempid (db db-conn) (:tempids result) newidtmp)]
    (println result)
    (enqueue ch {:op :insert-loop
                 :data {:position (:position (:data request))
                        :loop (map->Loop {:id (str newid) :output nil :input ""} )}
                 :id "subsession"})))

(defmethod service-request :delete-loop [request ch db-conn]
  (println request)
  (let [id (:id (:data request))
        deleted (d/entity (db db-conn) (read-string id))
        previous (first (:action/_next deleted))
        next (:action/next deleted)
        result @(d/transact db-conn
                            (if next
                              [[:db/add (:db/id previous) :action/next (:db/id next)]
                               [:db/retract (:db/id deleted) :action/next (:db/id deleted)]]
                              [[:db/retract (:db/id previous) :action/next (:db/id deleted)]]))]
    (enqueue ch {:op :delete-loop
                 :data {:id id}
                 :id "subsession"})))

