(ns session.client.session
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc])
  (:use-macros [cljs-jquery.macros :only [$]])
  )

(defprotocol ISession
  (insert-new-loop [this session-view event])
  (delete-loop [this session-view event]))




(deftype Session [model]

   ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))


  mvc/IMVC
  (view [this]
    ($ [:div.session
        (let [v (mvc/view2 ^{:view :loop-creator} [:loop-creator])]
          (mvc/control2 ^{:view :loop-creator} [:loop-creator] v)
          v
          )
        (map mvc/render @(:loops model))
        ] (data "model" model)))
  (control [this session-view]
    ($ session-view
       (on "insert-new-loop" #(insert-new-loop this session-view %)))
    ($ session-view (on "delete-loop" #(delete-loop this session-view %))))

  ISession
  (insert-new-loop [this session-view event]
    (let [
        event-target (. event -target)
        event-model ($ event-target (data "model"))
        loop-model (let [id (loop/new-loop-id)] (loop/Loop. {:id id :input (atom [:loop id]) :output (atom [:loop id])}))
        loop-view (mvc/render loop-model)
        session-model this
          ]

    ;;(def insert-test [event event-target event-model loop-model loop-view])
    (if
        (= event-model [:loop-creator])
      (swap! (:loops session-model) #(vec (concat [loop-model] %)))
      (swap! (:loops session-model)
             #(let
                  [[left right] (split-with (fn [m] (not= m event-model)) %)]
                (vec (concat left [event-model loop-model] (rest right))))))
    ($ loop-view (insertAfter event-target))
    ($ loop-view (trigger "post-render"))))

  (delete-loop [this session-view event]
    (let [
        event-target (. event -target)
        event-model ($ event-target (data "model"))
        session-model this
        ]
     ($ event-target (remove))
     (swap! (:loops session-model) #(vec (filter (fn [m] (not= m event-model)) %)))))

  )
