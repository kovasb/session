(ns session.client.session
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc]
   [cljs.reader :as reader])
  (:require-macros [fetch.macros :as pm])
  (:use-macros [cljs-jquery.macros :only [$]])
  )




;; session format
;; {:subsessions [subsession {:type :cljs :loops XX }  ] }

(def last-loop-id (atom 0))
(defn new-loop-id [] (let [id (swap! last-loop-id #(+ 1 %))]
                       (pm/remote (new-loop id) [x] x)
                       (str id)))

(defrecord Session [model])

(defn load-subsession-tab [x]
  ($ ".tab-content" (html ""))
  ($ [:tab-pane (mvc/render x)] (appendTo ($ ".tab-content")))
  ($ ".loop-container" (trigger "post-render"))
  ($ "#sessiontabs > li" (removeClass "active"))
  ($ (str "#tab" (name (:type x))) (addClass "active")))

(defn make-session-tabs [x]
  [:div.tabbable
         [:ul#sessiontabs.nav.nav-tabs
          (map (fn [ss]
                 ($ [:li {:id (str "tab" (name (:type ss)))}  [:a {:href (str "#tab" (name (:type ss))) } (name (:type ss))]]
                    (click (fn [] (load-subsession-tab ss)))))
               x)]])

(extend-type Session
  mvc/IMVC
  (view [this]
    ($ [:div.session.row
        (make-session-tabs (:subsessions (:model this)))
        [:div.tab-content ""]]
       (data "model" (:model this))))
  (control [this session-view] (reset! last-loop-id (:last-loop-id (:model this)))))
