(ns session.client.loop-creator
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require [session.client.mvc :as mvc])
  )


(defrecord LoopCreator [x]
  mvc/IMVC
  (view [this]
    ($ [:div.row.loop-creator {:style "margin-left:0px;height:18px"}  [:i.new-loop-icon ""]] (data "model" "loop-creator")))
  (control [this viewobject]
    (if x ($ viewobject (on "click" #($ :this (trigger "insert-new-loop")))))
    ($ viewobject (on "mouseover" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))
    ($ viewobject (on "mouseout" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))))


;;($ viewobject (on "click" #($ :this (trigger "insert-new-loop"))))
