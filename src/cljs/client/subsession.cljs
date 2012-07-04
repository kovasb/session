(ns session.client.subsession
  (:require
   ;; Ughhhhh, file names and namespace names don't match up here
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc]
   [session.client.session :as session]
   [client.nrepl :as nrepl])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))

(defprotocol ISubsession
  (insert-new-loop [this session-view event])
  (delete-loop [this session-view event])
  (evaluate-loop [this session-view event]))

(defn evaluate-clj [event-model]
  (nrepl/nrepl-eval @(:input event-model)
                    (fn [result]
                      (reset! (:output event-model)
                              result))))

(defn evaluate-cljs [event-model]
  (pm/remote
   (compile-expr-string @(:input event-model))
   [result]
   ;;(js/alert (pr-str (:result result)))
   (reset! (:output event-model) (let [x (js/eval (:result result))] (if x x nil)))))


(deftype Subsession [model]

  ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))

  IPrintable
  (-pr-seq [a opts]
    (concat  ["#session/subsession "] (-pr-seq (assoc model :loops @(:loops model)) opts) ""))




  mvc/IMVC
  (view [this]
    ($ [:div.subsession.span6
        [:div.row [:div.span2 [:h3 (if (= :clj (:type this))  "Clojure" "Clojurescript")]]]
        (let [v (mvc/view2 ^{:view :loop-creator} [:loop-creator])]
          (mvc/control2 ^{:view :loop-creator} [:loop-creator] v)
          v
          )
        (map mvc/render @(:loops model))
        ] (data "model" model)))
  (control [this session-view]
    ($ session-view
       (on "insert-new-loop" #(insert-new-loop this session-view %)))
    ($ session-view (on "delete-loop" #(delete-loop this session-view %)))
    ($ session-view (on "evaluate-loop" #(evaluate-loop this session-view %))))

  ISubsession
  (insert-new-loop [this session-view event]
    (let [
          event-target (. event -target)
          event-model ($ event-target (data "model"))
          loop-model (let [id (session/new-loop-id)] (loop/Loop. {:id id :input (atom "") :output (atom nil)}))
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

  (evaluate-loop [this session-view event]

    (let [
          event-target (. event -target)
          event-model ($ event-target (data "model"))
          ]

      (cond
       (= :cljs (:type this)) (evaluate-cljs event-model)
       (= :clj (:type this)) (evaluate-clj event-model)
       )
      )))
