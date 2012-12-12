(ns session.client.loop-creator
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require [session.client.mvc :as mvc]
            [session.client.subscribe :as subscribe])

  )


(defn foobar "docstring" [x] x)

(defrecord LoopCreator [x dom]
  mvc/IMVC
  (view [this]
    (let [v ($
             [:div.loop-creator
              {:style "margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}  [:i.new-loop-icon""]]
               (data "model" "loop-creator"))]
      (reset! dom v)
      v))

  (control [this]
    (if x ($ @dom (on "click"
                      #(subscribe/send! {:op :insert-loop :id "a" :data {:position {:after x}}})
                      ;;#($ :this (trigger "insert-new-loop"))
                      )))

    ($ @dom (on "mouseover" #($ :this (find ".new-loop-icon") (toggleClass "icon-arrow-right"))))
    ($ @dom (on "mouseout" #($ :this (find ".new-loop-icon") (toggleClass "icon-arrow-right"))))))

;;($ viewobject (on "click" #($ :this (trigger "insert-new-loop"))))
