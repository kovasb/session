(ns session.client.loop
  (:require
   [session.client.subscribe :as subscribe]
   [session.client.mvc :as mvc]
   [session.client.editor :as editor]
   [cljs.reader :as reader]
   [session.client.loop-creator :as loop-creator])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))


(deftype Loop [model dom]
  session.client.subscribe/ISubscribe
  (receive [this msg]
    (reset! (:output model) (:data msg)))
  ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))
  session.client.mvc/IMVC
  (view [model]
    (let [v (let [id (:id model)]
       ($
        [:div.row.loop-container
         [:div.span5 [:textarea {:id (str "area" id)}
                      @(:input model)]]
         [:div.span5.loopout
          (session.client.mvc/view @(:output model))]]
        (data "model" model)))]
      (reset! dom v)
      v))
  (control [this]
    (let [dom-elt @dom]
      (subscribe/subscribe! (:id model) this)
      (let [
            id (:id model) editor (atom [])]
        ($ dom-elt (on "click" ".loop-creator" #(do ($ dom-elt (trigger "insert-new-loop")) )))
        ($ dom-elt (on "post-render" #(reset! editor (editor/create-editor (str "area" id)))))
        ($ dom-elt (on "click" ".loop-deleter" #($ dom-elt (trigger "delete-loop"))))
        ($ dom-elt (on "evaluate-input"
                       #(do
                          (reset!
                           (:input model)
                           (.  @editor (getValue)))
                          (subscribe/send! {:op :evaluate-clj :id (:id model) :data @(:input model)}))))
        (add-watch (:output model) :update-output
                   (fn [key atom old new]
                     ($ dom-elt (find ".loopout") (html "") (append ($ [:div (mvc/view new)])))))))))
