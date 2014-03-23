(ns merchant.edn.writer
  (:require
    [goog.string :as gstring]
    [goog.string.StringBuffer :as gstringbuf]
    [merchant.common :as mc]))



(def char-escapes
  (js-obj
    "\"" "\\\""
    "\\" "\\\\"
    "\b" "\\b"
    "\f" "\\f"
    "\n" "\\n"
    "\r" "\\r"
    "\t" "\\t"))

(defn  quote-string
  [s]
  (str \"
       (.replace s (js/RegExp "[\\\\\"\b\f\n\r\t]" "g")
                 (fn [match] (aget char-escapes match)))
       \"))


(defn- write-sequential [^String begin, print-one, ^String sep, ^String end, sequence, w ]
  (do
    (.append w begin)
    (when-let [xs (seq sequence)]
      (loop [[x & xs] xs]
        (print-one x)
        (when xs
          (.append w sep)
          (recur xs))))
    (.append w end)))

(defrecord EdnWriter [ w wm]
  mc/IValueWriter
  (write [this o] (wm this o))
  (write-nil [this o]     (.append w "nil"))
  (write-boolean [this o] (.append w (str o)))
  (write-symbol [this o]  (.append w (str o)))
  (write-keyword [this o] (.append w (str o)) )
  (write-integer [this o] (.append w (str o)))
  (write-float [this o]   (.append w (str o)))
  (write-string [this o] (.append w (quote-string o)))
  ;; no characters in clojurescript
  (write-character [this o])
  (write-list [this o]    (write-sequential "(" #(mc/write this %) " " ")" o w))
  (write-vector [this o]  (write-sequential "[" #(mc/write this %) " " "]" o w))
  (write-set [this o]     (write-sequential "#{" #(mc/write this %) " " "}" o w))
  (write-map [this o]
    (write-sequential
      "{"
      (fn [e]
        (do (mc/write this (key e))
            (.append w \space)
            (mc/write this (val e))))
      ", "
      "}"
      (seq o)
      w))
  (write-tagged [this tag write-fn o]  (.append w \#)
    (.append w tag)
    (.append w \space)
    (write-fn this o)))


(defn type-dispatch-map [type-map dispatch-map]
  (into {} (map (fn [[k v]] [k (dispatch-map v)]) type-map)))


(defn make-writer-fn [type-map tag-map default-fn]
  (fn [this o]
    (let [c (type o)]
      (if-let [writefn (type-map c)]
        (writefn this o)
        (if-let [tlmap (tag-map c)]
          (mc/write-tagged this (:tag tlmap) (:write-fn tlmap) o)
          (default-fn this o))))))


(defn edn-writer [jwriter opts]
  (let [{:keys [type-map tag-map default-fn]
         :or {default-fn  (fn [this o] (throw (js/Error. "No EDN mapping for type")))}} opts]
    (EdnWriter.
      jwriter
      (make-writer-fn
        (type-dispatch-map (merge mc/default-type-map type-map) mc/default-dispatch-map)
        (merge mc/default-tag-map tag-map)
        default-fn))))


(defn export-edn
  ([x] (export-edn x {}))
  ([x opts]
   (let [sw (gstring/StringBuffer.) ew (edn-writer sw opts)]
     (mc/write ew x)
     (str sw))))


