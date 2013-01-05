(ns session.schema
  (:require [datomic.api :as d]))

(def schema
[
;; action entity attributes
{:db/ident :action/request
 :db/valueType :db.type/ref
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
{:db/ident :action/response
 :db/valueType :db.type/ref
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
{:db/ident :action/next
 :db/valueType :db.type/ref
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}

;; request entity attributes
{:db/ident :request/op
 :db/valueType :db.type/keyword
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
{:db/ident :request/data
 :db/valueType :db.type/ref
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}

;; response entity attributes
{:db/ident :response/summary
 :db/valueType :db.type/string
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
{:db/ident :response/status
 :db/valueType :db.type/keyword
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
{:db/ident :response/resource
 :db/valueType :db.type/ref ;; resource entity is a data entity
 :db/cardinality :db.cardinality/many
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}

;; data entity attributes
{:db/ident :data/edn
 :db/valueType :db.type/string
 :db/cardinality :db.cardinality/one
 :db.install/_attribute :db.part/db :db/id #db/id[:db.part/db]}
])

(def nrepl-schema
  (map #(assoc %
          :db.install/_attribute :db.part/db
          :db/id (d/tempid :db.part/db))
       [{:db/ident :loop.nrepl/request
         :db/valueType :db.type/ref
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :loop.nrepl/response
         :db/valueType :db.type/ref
         :db/cardinality :db.cardinality/many}
        
        {:db/ident :nrepl.request/code
         :db/valueType :db.type/string
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :nrepl.request/op
         :db/valueType :db.type/keyword
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :nrepl.response/value
         :db/valueType :db.type/string
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :nrepl.response/session
         :db/valueType :db.type/string
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :nrepl.response/status
         :db/valueType :db.type/keyword
         :db/cardinality :db.cardinality/many}
        
        {:db/ident :nrepl.response/ns
         :db/valueType :db.type/string
         :db/cardinality :db.cardinality/one}
        
        {:db/ident :nrepl.response/out
         :db/valueType :db.type/string
         :db/cardinality :db.cardinality/one}]))

