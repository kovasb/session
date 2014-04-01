(ns yantra.layout
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [yantra.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]

    [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))




(def layout-renderers
  {dt/Column (fn [cursor owner opts]
             (let [builder (om/get-shared owner :builder )]
               (reify
                 om/IRender
                 (render [_]
                   (dom/div
                    nil
                    (into-array
                      (map
                        #(dom/div nil (builder %))
                        (:contents cursor))))))))})
