(ns session.client.loop
  (:require
   [session.client.mvc :as mvc]
   [session.client.editor :as editor]
   [cljs.reader :as reader]
   [session.client.loop-creator :as loop-creator])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))


(deftype Loop [model]
   ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))
    session.client.mvc/IMVC
    (view [model]
      (let [id (:id model)]
        ($
         [:div.row.loop-container
          [:div.span5 [:textarea {:id (str "area" id)}
                       @(:input model)]]
          [:div.span5.loopout
           (session.client.mvc/view @(:output model))]]
         (data "model" model))))
    (control [model viewobject]
      (let [model ($ viewobject (data "model")) id (:id model) editor (atom [])]
        ($ viewobject (on "click" ".loop-creator" #(do ($ viewobject (trigger "insert-new-loop")) )))
        ($ viewobject (on "post-render" #(reset! editor (editor/create-editor (str "area" id)))))
        ($ viewobject (on "click" ".loop-deleter" #($ viewobject (trigger "delete-loop"))))
        ($ viewobject (on "evaluate-input"
                          #(do
                             (reset!
                              (:input model)
                              (.  @editor (getValue)))
                             ($ viewobject (trigger "evaluate-loop")))))
        (add-watch (:output model) :update-output
                   (fn [key atom old new]
                     ($ viewobject (find ".loopout") (html "") (append ($ [:div (mvc/view new)]))))))))
