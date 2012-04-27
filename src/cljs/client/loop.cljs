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

;;(defprotocol ILoop (evaluate-loop [model]))


(deftype Loop [model]

  IPrintable
  (-pr-seq [a opts]
    (concat  ["#session/loop "] (-pr-seq (assoc model :input @(:input model) :output @(:output model)) opts) ""))

   ILookup
  (-lookup [o k] (model k))
  (-lookup [o k not-found] (model k not-found))


  mvc/IMVC
  (view [model]
    (let [id (:id model)]
    ($
     [:div.loop-container
      [:div.row.input {:id id}
       [:div.span6.row
        [:a.close.loop-deleter {:href "#" :id (str "delete" id) :style "float:right"} "x"]]
       [:div.span6 {:id (str "area" id) :style "position:relative;height:36px"} @(:input model)]]
      [:div.row {:id (str "out" id)}
       [:div.span6.loopout {:style "background:#DDD;position:relative;height:20px"}
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
                         ($ viewobject (trigger "evaluate-loop")))))
      (add-watch (:output model) :update-output
                 (fn [key atom old new]
                   (if (= cljs.core.Atom (type new))
                     (do
                       (js/alert "add atom to watch")
                       (add-watch new :update-from-atom
                                  (fn [key2 atom2 old2 new2]

                                    (js/alert "atom update")
                                    ($ viewobject
                                       (find ".loopout") (html "")
                                       (append ($ [:div (mvc/view2 new2)])))))
                       ($ viewobject (find ".loopout") (html "") (append ($ [:div (mvc/view2 @new)]))))
                     ($ viewobject (find ".loopout") (html "") (append ($ [:div (mvc/view2 new)])))))))))
