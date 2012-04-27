(ns session.client.loop-creator
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require [session.client.mvc :as mvc])
  )





(defmethod mvc/view2 :loop-creator [model]
  ($ [:div.row.span6.loop-creator {:style "background:#000000;height:30px"} ""] (data "model" model)))

(defmethod mvc/control2 :loop-creator [model viewobject]
  ($ viewobject (on "click" #($ :this (trigger "insert-new-loop")))))
