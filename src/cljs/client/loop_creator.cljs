(ns session.client.loop-creator
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require [session.client.mvc :as mvc])
  )





(defmethod mvc/view2 :loop-creator [model]
  ($ [:div.row.span6.loop-creator {:style "margin-left:0px;height:18px"}  [:i.new-loop-icon ""]] (data "model" model)))

(defmethod mvc/control2 :loop-creator [model viewobject]
  ($ viewobject (on "click" #($ :this (trigger "insert-new-loop"))))
  ($ viewobject (on "mouseover" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))
  ($ viewobject (on "mouseout" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))

  )
