(ns session.client.make
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))

(extend-type number
  ICloneable
  (-clone [n] (js/Number. n)))

(extend-type string
  ICloneable
  (-clone [n] (js/String. n)))



(comment
  (deftype SequentialCursor []
    ICursor
    (-value [cursor])
    (-path [cursor])
    (-state [cursor])
    (-shared [cursor]))


  (satisfies? IToCursor val) (-to-cursor val state path shared)


  (extend-type SequentialType
    IToCursor
    (-to-cursor [value state] [value state path] [value state path shared])))





(defmulti make
          (fn [y owner opts]
            (let [x (if (om/cursor? y) (om/value y) y)]
              (cond
               (keyword? x) :keyword
               (string? x) :string
               (number? x) :number
               (vector? x) :vector
               (and (map? x) (:tag x)) (:tag x)
               (map? x) :map
               (sequential? x) :sequential
               :default :default))))


(defmethod make :keyword [x owner opts]
  (om/component nil (dom/span (str (om/value x)))))

(defmethod make :string [x owner opts]
  (om/component nil (dom/span nil (om/value x)) ))

(defmethod make :number [x owner opts]
  (om/component nil (dom/span nil (str (om/value x)))))


(comment
  (defmethod make :sequential [x owner opts]
   (om/component
     (dom/span
       nil
       (into-array
         (concat
           ["("]
           (interpose " " (map #(om/build make (nth (om/value x) %)) (range (count x))))
           [")"]))))))



(defmethod make :vector [x owner opts]
  (om/component
    (dom/span
      nil
      (into-array
       (concat
         ["["]
         (interpose " " (map #(om/build make (get x %)) (range (count x))))
         ["]"])))))


(defmethod make :default [x y z]
  (om/component
    (dom/span nil  (pr-str (om/value x)) )))


































