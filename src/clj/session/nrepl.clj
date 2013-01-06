(ns session.nrepl
  (:require [clojure.pprint :refer [pprint]]
            [clojure.tools.nrepl :as nrepl]
            [session.datomic :as datomic]
            [datomic.api :as d :refer [q]]))

(defn make-client [uri timeout]
  (nrepl/client (nrepl/url-connect uri) timeout))

(defmulti nrepl-request (fn [req ctx] (:op req)))

(defmulti nrepl-request-tx-data :op)
(declare nrepl-response-tx-data)

(defmethod datomic/service-request :nrepl [request ctx]
  (nrepl-request (:nrepl request) ctx))

(defmethod nrepl-request :eval [req {:keys [nrepl-client transact]}]
  (let [result (nrepl/message nrepl-client req)]
    (transact (nrepl-request-tx-data req))
    (doseq [r result]
      (transact (nrepl-response-tx-data r)))))

(def session-query
  '[:find ?session-id
    :in $ ?id
    :where
    [?id :loop.nrepl/request ?request]
    [?request :nrepl.request/session ?session-id]])

(defmethod nrepl-request :interrupt [{:keys [id] :as req}
                                     {:keys [db nrepl-client]}]
  ;; Find the nrepl session associated with this loop id
  (let [[session-id] (first (q session-query db id))]
    (nrepl/message nrepl-client (assoc req :session :session-id))))


(defmethod nrepl-request-tx-data :eval [req]
  [{:db/id (d/tempid :db.part/user)
    :nrepl.request/op :eval
    :nrepl.request/code (:code req)
    :loop.nrepl/_request (:id req)}])

(defmulti response (fn [k v] k))

(defn nrepl-response-tx-data [response-map]
  [(let [response-id (d/tempid :db.part/user)]
     (reduce (fn [res [k v]]
               (if-let [[attr val] (response k v)]
                 (assoc res attr val)
                 res)) ;; Skip unknown response keys for now
             {:db/id response-id
              :loop.nrepl/_response (:id response-map)}
             response-map))])

(defmethod response :default [k v]
  nil)

(defmethod response :value [k v]
  [:nrepl.response/value v])

(defmethod response :session [k v]
  [:nrepl.response/session v])

(defmethod response :status [k v]
  [:nrepl.response/status (map keyword v)])

(defmethod response :ns [k v]
  [:nrepl.response/ns v])

(defmethod response :out [k v]
  [:nrepl.response/out v])

(def response-query
  '[:find ?loop ?v ?input
    :in $ [[?e ?a ?v ?tx ?added]]
    :where
    [?a :db/ident :nrepl.response/value]
    [?loop :loop.nrepl/response ?e]
    [?loop :loop.nrepl/request ?request]
    [?request :nrepl.request/code ?input]
    [?e ?a ?v]])

(def out-query
  '[:find ?loop ?v
    :in $ [[?e ?a ?v ?tx ?added]]
    :where
    [?a :db/ident :nrepl.response/out]
    [?loop :loop.nrepl/response ?e]
    [?e ?a ?v]])

(defn respond
  [{:keys [tx-data db-after]} broadcast]
  (doseq [[id value code] (q response-query
                             db-after
                             tx-data)]
    (broadcast {:id (pr-str id)
                :input code
                :data (try (read-string value)
                           (catch Exception e [:unreadable-form value]))}))
  (doseq [[id out] (q out-query
                      db-after
                      tx-data)]
    (broadcast {:id :out
                :data out})))

(defn process-tx-report-queue [queue broadcast]
  (doseq [tx-report (repeatedly #(.take queue))]
    (respond tx-report broadcast)))
