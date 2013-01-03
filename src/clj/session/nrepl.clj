(ns session.nrepl
  (:require [clojure.tools.nrepl :as nrepl]
            [session.datomic :as datomic]
            [datomic.api :as d]))

(defn make-client [uri timeout]
  (nrepl/client (nrepl/url-connect uri) timeout))

(defmulti nrepl-request (fn [req ctx] (:op req)))

(defmulti nrepl-request-tx-data :op)
(declare nrepl-response-tx-data)

(defmethod datomic/service-request :nrepl [request ctx]
  (nrepl-request (:nrepl request) ctx))

(defmethod nrepl-request :eval [req {:keys [nrepl-client broadcast transact]}]
  (let [result (nrepl/message nrepl-client req)]
    (transact [(nrepl-request-tx-data req)])
    (transact (map nrepl-response-tx-data result))
    (broadcast {:id (pr-str (:id req))
                :input (:code req)
                :data (some :value result)})))

(defmethod nrepl-request-tx-data :eval [req]
  {:db/id (d/tempid :db.part/user)
   :nrepl.request/op :eval
   :nrepl.request/code (:code req)
   :loop.nrepl/_request (:id req)})

(defmulti response (fn [k v] k))

(defn nrepl-response-tx-data [response-map]
  (let [response-id (d/tempid :db.part/user)]
    (reduce (fn [res [k v]]
              (if-let [[attr val] (response k v)]
                (assoc res attr val)
                res)) ;; Skip unknown response keys for now
            {:db/id response-id
             :loop.nrepl/_response (:id response-map)}
            response-map)))

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