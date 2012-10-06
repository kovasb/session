(ns session.evaluation
  (:require session.datafile)
  (:use [noir.fetch.remotes])
  (:use [client.macros])
  (:use [noir.core])
  (:use [clojure.java.io :only [resource]])
  (:use [datomic.api :only [db q] :as d])
  (:require [noir.server :as server]
            [session.tags :as tags]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.tagged-literals :as tl]
            ;;[noir.cljs.core :as cljs]
            ;;[ring.util [response :as response]]
            [noir.response :as response]
            [ring.middleware [multipart-params :as mp]]))

(def conn (d/connect "datomic:free://localhost:4334/session"))

(defremote new-loop [id]
  (datomic.api/transact conn [{:db/id #db/id[:db.part/user] :loop/id id}]) true) ;; return true for now since tl is not parsed

(defn loop-input-datoms [input id] ;; id required to be string currently
  (let [entity
        (first (first (q [:find '?e :where ['?e :loop/id id]] (datomic.api/db conn))))]
   [[:db/add entity :loop/input input]]))

(defn loop-input-transaction [input id]
  (datomic.api/transact conn (loop-input-datoms input id)))

(defn loop-output-datoms [output-position id]
  (let [entity
        (first (first (q [:find '?e :where ['?e :loop/id id]] (datomic.api/db conn))))]
    [[:db/add entity :loop/output-position output-position]]))
;; eventually need [:db/add entity :loop/output-location code]

(defn loop-output-transaction [output-position id]
  (datomic.api/transact conn (loop-output-datoms output-position id)))

(def data-file-writer (atom (session.datafile/get-writer "/Users/kovasb/avrotest.avro")))

(def data-file-reader (atom (session.datafile/get-reader "/Users/kovasb/avrotest.avro")))

(defn add-loop-output-data [data id]
  (let [position (session.datafile/write-loop-output @data-file-writer data)]
    (loop-output-transaction position id)))

(defn get-loop-output-data [id]
  (let [position (first (first (q [:find '?f :where ['?e :loop/id id] ['?e :loop/output-position '?f] ] (datomic.api/db conn))))]
    (session.datafile/read-loop-output @data-file-reader position)))

;;(q [:find '?f '?g :where [17592186045450 '?f '?g] ] (datomic.api/db conn))

(defn get-loop-entities []
  (map #(datomic.api/entity (datomic.api/db conn) (first %)) (q [:find '?e :where ['?e :loop/id '_]] (datomic.api/db conn))))

(defn loop-entity-to-loop-tl [ent]
  {
   :id (str (:loop/id ent))
   :input (:loop/input ent)
   :output (if (:loop/output-position ent)
             (session.datafile/read-loop-output @data-file-reader (:loop/output-position ent))
             nil)
   })


(:loop/output-position :loop/input :loop/id)

(defn loop-data [])


(defremote eval-expr-string [x id]
  (loop-input-transaction x id)
  (let [result (tags/bind-clj-data-readers (eval (read-string x)))]
    (add-loop-output-data result id)
    {:status 200 :result result}
    ))


(defremote compile-expr-string [x id]
  (datomic.api/transact conn (loop-input-datoms x id))
  (tags/bind-cljs-data-readers
   (try
     (let [expr (read-string x)]
       {:result
        (binding [ana/*cljs-ns* 'session.client.main]
          (let [env {:ns (@ana/namespaces ana/*cljs-ns*)
                     :uses #{'cljs.core}
                     :context :statement
                     :locals {}}]
            (with-out-str (comp/with-core-cljs (comp/emits (ana/analyze env expr))))))
        :status 200})
     (catch Exception e (println (str "compiler-expr-string: " x))))))
