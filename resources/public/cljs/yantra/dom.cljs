(ns yantra.dom
  (:require
    [yantra.datatypes :as dt]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]))


;; possible to use dom tags as fns?

(defn get-element [e]
  (aget js/React.DOM (name e)))




(def dom-renderers
  {dt/HTMLElement
    (fn [cursor owner opts]
      (let  [v (om/value cursor)
             tag (:tag v)
             attributes (:attributes v)
             builder (om/get-shared owner :builder)]
        (apply
          (get-element tag)
          (clj->js attributes)
          (into-array
           (map builder (:children cursor))))))
    })