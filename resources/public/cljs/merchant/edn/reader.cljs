(ns merchant.edn.reader
  (:require cljs.reader))


(defn- record-name [record-class]
  "Returns the record's name as a String given the class `record-class`."
  ;; inconsistency btwn clj and cljs
  (.replace (pr-str record-class) "/" ".")
  )


(defn class->factory
  "Returns the map-style record factory for the `record-class`."
  [record-class]
  (let [cname (record-name record-class)
        dot (.lastIndexOf ^String cname ".")]
    (when (pos? dot)
      (js/eval (str (subs cname 0 dot) ".map__GT_" (subs cname (inc dot)))))))

(defn tl-mapping-to-constructor [tl-mapping]
  [(:tag tl-mapping) (class->factory (:record tl-mapping))])


(defn import-edn [data-string tl-mappings]
  (let [old-tag-table @cljs.reader/*tag-table*
        readers (into {} (map tl-mapping-to-constructor tl-mappings))]
    (swap! cljs.reader/*tag-table* merge readers)
    (let [result (cljs.reader/read-string data-string)]
      (reset! cljs.reader/*tag-table* old-tag-table)
      result)))

