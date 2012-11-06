(ns session.client.loop-creator
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require [session.client.mvc :as mvc]
            [session.client.subscribe :as subscribe])

  )


(defrecord LoopCreator [x dom]
  mvc/IMVC
  (view [this]
    (let [v ($ [:div.row.loop-creator (merge (if x {:id "subsession-root-lc"} {})
                                             {:style "margin-left:0px;height:18px"})  [:i.new-loop-icon ""]]
               (data "model" "loop-creator"))]
      (reset! dom v)
      v))

  (control [this]
    (if x ($ @dom (on "click"
                      #(subscribe/send! {:op :insert-loop :id "a" :data "b"})
                      ;;#($ :this (trigger "insert-new-loop"))
                      )))

    ($ @dom (on "mouseover" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))
    ($ @dom (on "mouseout" #($ :this (find ".new-loop-icon") (toggleClass "icon-chevron-right"))))))

;;($ viewobject (on "click" #($ :this (trigger "insert-new-loop"))))
