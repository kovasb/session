(ns session.client.subsession
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc]
   [session.client.session :as session]
   [cljs.reader :as reader]
   [session.client.subscribe :as subscribe])
  (:use-macros [cljs-jquery.macros :only [$]]))

(defprotocol ISubsession
  (insert-new-loop [this event])
  (delete-loop [this event]))

(deftype Subsession [model dom]
  session.client.subscribe/ISubscribe
  (receive [this msg]

    (cond
     (= :insert-loop (:op msg)) (insert-new-loop this (:data msg))
     (= :delete-loop (:op msg)) (delete-loop this (:data msg))))


  mvc/IMVC
  (view [this]
    (let [v
          ($ [:div.subsession
              [:div#subsession-root {:style "margin-left:-20px"}
               (mvc/render (loop-creator/LoopCreator. "subsession-root" (atom nil)))]
         (map mvc/render @(:loops model))])]
      (reset! dom v)
      v))
  (control [this]
    (subscribe/subscribe!
     "subsession"
     this)
    ($ @dom
       (on "insert-new-loop" #(insert-new-loop this  %)))
    ($ @dom (on "delete-loop" #(delete-loop this  %))))

  ISubsession
  (insert-new-loop [this data]
    (let [
          loop (:loop data)
          position (:position data)
          loop-view (mvc/render loop)]

    ($ loop-view (insertAfter ($ (str "#" (:after position) ))))
    ($ loop-view (trigger "post-render"))))

  (delete-loop [this data]
    ($ (str "#" (:id data)) (remove))))
