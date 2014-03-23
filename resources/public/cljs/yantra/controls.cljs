(ns yantra.controls
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [yantra.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]

    [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))



(def control-renderers
  {dt/Slider (fn [cursor owner opts]
            (let [v (om/value cursor)
                  val (:value v)
                  r (:range v)
                  min (first r)
                  max (second r)
                  step (if (= 3 (count r)) (last r) 1)]
              (dom/input
                #js {:type "range"
                     :defaultValue val
                     :min min
                     :max max
                     :step step}
                )))} )



