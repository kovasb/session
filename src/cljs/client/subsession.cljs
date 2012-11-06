(ns session.client.subsession
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc]
   [session.client.session :as session]
   [cljs.reader :as reader]
   [session.client.subscribe :as subscribe])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))

(defprotocol ISubsession
  (insert-new-loop [this event])
  (delete-loop [this event]))

;; {:op :insert-loop :data {:position {:after "subsession-root" :loop #loop {...}}}

(deftype Subsession [model dom]
  session.client.subscribe/ISubscribe
  (receive [this msg]
    (cond
     (= :insert-loop (:op msg)) (insert-new-loop this (:data msg))))

   ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))

  mvc/IMVC
  (view [this]
    (let [v
          ($ [:div.subsession
         (mvc/render (loop-creator/LoopCreator. true (atom nil)))
         (map mvc/render @(:loops model))
              ] (data "model" model))]
      (reset! dom v)
      v))
  (control [this]
    (subscribe/subscribe!
     ;;(:id model)
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

    (if
        (=  "subsession-root" (:after position))
      (do
        (swap! (:loops this) #(vec (concat [loop] %)))
        ($ loop-view (insertAfter ($ "#subsession-root-lc"))))
      (do (swap! (:loops this)
              #(let
                   [[left right] (split-with (fn [m] (not=  (:id m) (:after position))) %)]
                 (vec (concat left (if (first right) [(frist right)]) [loop] (rest right)))))
          ($ loop-view (insertAfter ($ (str "#" (:after position)))))))

    ($ loop-view (trigger "post-render"))))

  (delete-loop [this event]
    (let [
        event-target (. event -target)
        event-model ($ event-target (data "model"))
        session-model this]
     ($ event-target (remove))
     (swap! (:loops session-model) #(vec (filter (fn [m] (not= m event-model)) %))))))
