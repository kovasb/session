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

(defrecord Session [model dom])

(defn load-subsession-tab [x]
  ($ [:tab-pane (mvc/render x)] (appendTo ($ ".tab-content")))
  ($ ".loop-container" (trigger "post-render")))


(extend-type Session
  mvc/IMVC
  (view [this]
    ($ [:div.session.row

        [:div.tab-content ""]]
       (data "model" (:model this))))
  (control [this] (reset! last-loop-id (:last-loop-id (:model this)))))
