(ns cljs-jquery.core
(:require
            [clojure.string :as string]
            ))

(def jquery (js* "$"))

;; From Weavejester's Hiccup: https://github.com/weavejester/hiccup/blob/master/src/hiccup/core.clj#L57
(def ^{:doc "Regular expression that parses a CSS-style id and class from a tag name." :private true}
  re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")


(defn dom-element? [elt] (instance? js/Element elt))

(defn jquery-dom-element? [elt] (instance? jquery elt))

(defn dom-append [parent child] (.append parent child))

(defn set-dom-attribute [elt [attribute value]]
  (cond
   (string? value) (.attr elt (name attribute) value)
   (= :css attribute) (dorun (map #(.css elt (name (first %)) (last %)) value))))

;(set-dom-attribute (jquery "<p>x</p>") [:id "pid2"])

(def xmlns {:xhtml "http://www.w3.org/1999/xhtml"
            :svg "http://www.w3.org/2000/svg"})

(defn keyword-to-dom-object [kw]
  (let [
        [_ tag id class] (re-matches re-tag (name kw))
        [nsp tag]  (let [[nsp t] (string/split tag #":")
                               ns-xmlns (xmlns (keyword nsp))]
                           (if t
                             [(or ns-xmlns nsp) t]
                             [(:xhtml xmlns) nsp]))
        elt (jquery (. js/document (createElementNS nsp tag)))
        ]
    (if id (.attr elt "id" id))
    (if class (.addClass elt (string/replace class #"\." " ")))
    elt
    )
  )

(defn dom-create [arg]
  (cond
   (dom-element? arg) (jquery arg)
   (jquery-dom-element? arg) arg
   (keyword? arg) (keyword-to-dom-object arg)
   (string? arg) (jquery (. js/document (createTextNode arg)))
   (and (or (vector? arg) (seq? arg)) (first arg))
   (let [elt (dom-create (first arg)) nextelt (next arg)]
     (if (map? (first nextelt))
       (let [] (dorun (map #(set-dom-attribute elt %) (first nextelt))) (dorun (map #(dom-append elt (dom-create %)) (next nextelt))) elt)
       (let [] (dorun (map #(dom-append elt (dom-create %)) nextelt)) elt)))))

(defn jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (.strobj (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (jsObj v)]
                               [k v])))
                         obj))))

(defn camel-case [fnkeyword]
  (name fnkeyword)
  )

(defn call-jquery [obj [fn & args]]
  (if (and (not (empty? args)) (map? (nth args 0)))
  (let [method (.get obj (camel-case fn))]
    (dorun (map #(.call method obj (name (first %)) (last %)) (nth args 0)))
    obj)
  (condp = (count args)
       0 (.call (.get obj (camel-case fn)) obj)
       1 (.call (.get obj (camel-case fn)) obj (nth args 0))
       2 (.call (.get obj (camel-case fn)) obj (nth args 0) (nth args 1))
       3 (.call (.get obj (camel-case fn)) obj (nth args 0) (nth args 1) (nth args 2))
       )
  )
  )
