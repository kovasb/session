(ns session.tags
  (:require [cljs.tagged-literals :as tl])
  )

;; should be default fall-through reader in cljs mode
(defn taghelper [tag data] `((cljs.core/get (cljs.core/deref cljs.reader/*tag-table*) ~tag) ~data))

(def *clj-auto-data-readers* (atom {}))

(def *cljs-data-readers* (atom {}))

(def *clj-auto-data-readers* (atom {}))

(defmacro deftag [tag]
  (let [f (gensym)]
    `(do
      (defn ~f [~'x] (taghelper ~tag ~'x))
      (swap! *cljs-data-readers* assoc (symbol ~tag) ~f)
      (defrecord tag# [~'data])
      (defn clj-tag-reader# [~'x] (new tag# ~'x))
      (swap! *clj-auto-data-readers* assoc (symbol ~tag) (var clj-tag-reader#))
      (defmethod print-method tag# [~'o, ^Writer ~'w] (.write ~'w (str "#" ~tag " ")) (.write ~'w (str (:data ~'o)))))))

(deftag "testtag")
(deftag "hiccup")
(deftag "session")
(deftag "subsession")
(deftag "loop")

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

(defmethod print-method session.tags.TaggedData [o w]
  (.write w (str "#" (tag o) " "))
  (print-method (data o) w))

(defmethod print-dup session.tags.TaggedData [o w]
  (.write w (str "#" (tag o) " "))
  (print-dup (data o) w))


(prefer-method print-method  session.tags.TaggedData clojure.lang.IRecord)
(prefer-method print-method  session.tags.TaggedData clojure.lang.IPersistentMap)
(prefer-method print-dup  session.tags.TaggedData clojure.lang.IRecord)
(prefer-method print-dup  session.tags.TaggedData clojure.lang.IPersistentMap)


;; issue is if data readers itself gets redefined later by the compiler

(defmacro bind-cljs-data-readers [x]
  `(do (alter-var-root #'tl/*cljs-data-readers* merge @*cljs-data-readers*)
       (binding [*data-readers* tl/*cljs-data-readers*] ~x))
  ;;`(binding [ (merge  tl/*cljs-data-readers*)] ~x)
  )

(defmacro bind-clj-data-readers [x]
  `(binding [*data-readers* (merge @*cljs-data-readers* tl/*cljs-data-readers*)] ~x))

(alter-var-root #'tl/*cljs-data-readers* merge @*cljs-data-readers*)
