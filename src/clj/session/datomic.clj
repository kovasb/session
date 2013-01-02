(ns session.datomic
  (:require [clojure.repl :refer [pst]]
            [session.schema :refer [schema]]
            [session.tags :refer :all]
            [lamina.core :as lamina]
            [datomic.api :refer [q db tempid] :as d]
            [session.tags :refer [->GenericData]]))

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

(defmulti service-request (fn [request ctx] (:op request)))

;;;;;;;;;;;;;;;;;;;;;;;;  GET SESSION  ;;;;;;;;;;;;;;;;;;;;;;;;

(defn follow-next-action [entity]
  (lazy-seq
   (when-let [s (:action/next entity)]
     (cons s (follow-next-action s)))))

(defn entity-data [entity]
  {:output (when-let [d (get-in entity [:action/response :response/summary])]
             (try (read-string d)
                  (catch Exception e [:unreadable-form d])))
   :input (get-in entity [:action/request :request/data :data/edn])
   :id (str (:db/id entity))})

(defn get-datomic-session [db-val]
  (map->Session
   {:id 1
    :last-loop-id 1
    :subsessions [(map->Subsession
                   {:type :clj
                    :loops (mapv
                            map->Loop
                            (map entity-data
                                 (follow-next-action
                                  (d/entity db-val :action/root))))})]}))

;;;;;;;;;;;;;;;;;;;;;;;;  EVALUATION SERVICE ;;;;;;;;;;;;;;;;;;;;;;;;

(defn process-request [request {:keys [transact]}]
  (let [rdb (:db-after request)
        datoms (:tx-data request)
        action (some #(and (:added %)
                           (= :action/request (d/ident rdb (:a %)))
                           (d/entity rdb (:e %)))
                     datoms)]
    (when action
      (let [resultid (d/tempid :db.part/user)
            result (-> action :action/request :request/data :data/edn read-string eval)]
        (transact [{:db/id resultid
                    :action/_response (:db/id action)
                    :response/summary (pr-str result)
                    :response/status :success}])))))

(defn create-action-request [ui-id datastring]
  (let [actionid (read-string ui-id)
        requestid (d/tempid :db.part/user)
        dataid (d/tempid :db.part/user)]
    [[:db/add actionid :action/request requestid]
     [:db/add requestid :request/op :evaluate]
     [:db/add requestid :request/data dataid]
     [:db/add dataid :data/edn datastring]]))

(defmethod service-request :evaluate-clj [request {:keys [transact]}]
  (let [datoms (create-action-request
                (:id request)
                (:data request))]
    (transact datoms)))

(defmethod service-request :update-textarea [request {:keys [broadcast]}]
  (let [r (select-keys request [:data :id :input :origin])]
    (broadcast r)))

(defn process-response [response {:keys [broadcast]}]
  (let [rdb (:db-after response)
        datoms (:tx-data response)
        action (some #(and (:added %)
                           (= :action/response (d/ident rdb (:a %)))
                           (d/entity rdb (:e %)))
                     datoms)]
    (when action
      (broadcast {:id (pr-str (:db/id action)) ;; Must be a string for some reason
                  :input (-> action :action/request :request/data :data/edn)
                  :data (-> action :action/response :response/summary)}))))

(defn process-requests [tx-report-queue ctx]
  (doseq [req (repeatedly #(.take tx-report-queue))]
    (try (process-request req ctx) 
         (process-response req ctx)
         (catch Exception e (pst e)))))

(defn process-requests-thread [{:keys [db-conn] :as ctx}]
  (.start (Thread. #(process-requests (d/tx-report-queue db-conn) ctx))))

;;;;;;;;;;;;;;;;;;;;;;;;  INSERTION & DELETION ;;;;;;;;;;;;;;;;;;;;;;;;

(defn insert-loop-root [request db]
  (let [p (:after (:position (:data request)))]
    (if (= p "subsession-root")
      (datomic.api/entity db :action/root)
      (datomic.api/entity db (read-string p)))))

(defmethod service-request :insert-loop [request {:keys [db transact broadcast]}]
  (let [root (insert-loop-root request db)
        rootid (:db/id root)
        newidtmp (d/tempid :db.part/user)
        result (if (:action/next root)
                 (transact [[:db/add newidtmp :action/next (:db/id (:action/next root))]
                            [:db/add rootid :action/next newidtmp]])
                 (transact [[:db/add rootid :action/next newidtmp]
                            [:db/add newidtmp :db/doc "placeholder/hack"]]))
        newid (d/resolve-tempid db (:tempids result) newidtmp)]
    (broadcast {:op :insert-loop
                :data {:position (:position (:data request))
                       :loop (map->Loop {:id (str newid) :output nil :input ""} )}
                :id "subsession"})))

(defmethod service-request :delete-loop [request {:keys [db transact broadcast]}]
  (let [id (:id (:data request))
        deleted (d/entity db (read-string id))
        previous (first (:action/_next deleted))
        next (:action/next deleted)
        result (transact (if next
                           [[:db/add (:db/id previous) :action/next (:db/id next)]
                            [:db/retract (:db/id deleted) :action/next (:db/id deleted)]]
                           [[:db/retract (:db/id previous) :action/next (:db/id deleted)]]))]
    (broadcast {:op :delete-loop
                :data {:id id}
                :id "subsession"})))
