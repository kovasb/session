(ns session.loopcreator
  (:require
    React
    goog.string.StringBuffer
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]
    [session.datatypes :as dt]))


(comment
  :style
  #js { :border "1px solid red"
        :background (if hover "#0000FF" "#F0FF00")}
  )
(defn new-loop-creator [data owner opts]
  (reify
    om/IInitState
    (init-state [_] {:hover false})
    om/IRenderState
    (render-state [_ {:keys [hover]}]
      (dom/div #js {:id "new"
                    :onMouseEnter (fn [e] (om/set-state! owner :hover true))
                    :onMouseLeave (fn [e] (om/set-state! owner :hover false))
                    :onClick (fn [e] (put! (:chan data) (:id data)))}
               (dom/div #js {:style #js {:height "1em"}}
                        (if hover
                          (dom/i #js {:className "fa fa-long-arrow-right"} "")
                          \u00A0
                                  ))))))

