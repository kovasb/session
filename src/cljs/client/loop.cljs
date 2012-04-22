(ns session.client.loop
  (:require
   [session.client.editor :as editor]
   [session.client.mvc :as mvc]
   )
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm])
  )


(def last-loop-id (atom 0))
(defn new-loop-id [] (str (swap! last-loop-id #(+ 1 %))))

(defprotocol ILoop
  (evaluate-loop [model]))


(deftype Loop [model]
  IPrintable
  (-pr-seq [a opts]
    (concat  ["#session/loop "] (-pr-seq model) ""))

   ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))


  mvc/IMVC
  (view [model]
    (let [id (:id model)]
    ($
     [:div.loop-container
      [:div.row.input {:id id}
       [:div.span10.row
        [:a.close.loop-deleter {:href "#" :id (str "delete" id) :style "float:right"} "x"]]
       [:div.span8 {:id (str "area" id) :style "position:relative;height:36px"} @(:input model)]]
      [:div.row {:id (str "out" id)}
       [:div.span8.loopout {:style "background:#DDD;position:relative;height:20px"}
        (mvc/view2 @(:output model))]]
      (mvc/view2 ^{:view :loop-creator} [:loop-creator])
      ]
     (data "model" model))))
  (control [model viewobject]
    (let [model ($ viewobject (data "model")) id (:id model) editor (atom [])]
      ($ viewobject (on "click" ".loop-creator" #(do ($ viewobject (trigger "insert-new-loop")) )))
    ;;($ viewobject (on "click" "a.close"))
      ($ viewobject (on "post-render" #(reset! editor (editor/create-editor (str "area" id)))))
      ($ viewobject (on "click" ".loop-deleter" #($ viewobject (trigger "delete-loop"))))
      ($ viewobject (on "evaluate-input"
                      #(do
                         ;;(js/alert "evaluate-input")
                         (reset! (:input model) (. (. @editor (getSession)) (getValue)))
                         (evaluate-loop model))))
      (add-watch (:output model) :update-output
                 (fn [key atom old new]
                   ($ viewobject (find ".loopout") (html "") (append ($ [:div (mvc/view2 new)])))))))

  ILoop
  (evaluate-loop [model]
    (pm/remote
     (compile-expr-string @(:input model))
     [result]
     ;;(js/alert (pr-str (:result result)))
     (reset! (:output model) (js/eval (:result result))))))
