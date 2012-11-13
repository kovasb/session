(ns session.tags
  (:require [cljs.tagged-literals :as tl])
  )

(defprotocol TaggedData
  (tag [x])
  (data [x]))

(defrecord Session [subsessions id last-loop-id]
  TaggedData
  (tag [x] "session")
  (data [x] (into {} x)))

(defrecord Subsession [loops type]
  TaggedData
  (tag [x] "subsession")
  (data [x] (into {} x)))

(defrecord Loop [id output input]
  TaggedData
  (tag [x] "loop")
  (data [x] (into {} x)))

(defrecord GenericData [tag data]
  TaggedData
  (tag [x] tag)
  (data [x] data))

(defmethod print-method session.tags.TaggedData [o w]
  (.write w (str "#" (tag o) " "))
  (print-method (data o) w))

(defmethod print-dup session.tags.TaggedData [o w]
  (.write w (str "#" (tag o) " "))
  (print-dup (data o) w))

(prefer-method print-method  session.tags.TaggedData java.util.Map)
(prefer-method print-method  session.tags.TaggedData clojure.lang.IRecord)
(prefer-method print-method  session.tags.TaggedData clojure.lang.IPersistentMap)
(prefer-method print-dup  session.tags.TaggedData java.util.Map)
(prefer-method print-dup  session.tags.TaggedData clojure.lang.IRecord)
(prefer-method print-dup  session.tags.TaggedData clojure.lang.IPersistentMap)


;; should be default fall-through reader in cljs compilation mode
(defn cljs-default-data-reader-fn [tag data] `((cljs.core/get (cljs.core/deref cljs.reader/*tag-table*) ~tag) ~data))
