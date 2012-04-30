(ns session.client.session
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc])
  (:use-macros [cljs-jquery.macros :only [$]])
  )


;; session format
;; {:subsessions [subsession {:type :cljs :loops XX }  ] }

(def last-loop-id (atom 0))
(defn new-loop-id [] (str (swap! last-loop-id #(+ 1 %))))


(defrecord Session [model])

(extend-type Session

  IPrintable
  (-pr-seq [this opts]
    (concat  ["#session/session "] (-pr-seq (assoc (:model this) :last-loop-id @last-loop-id) opts) ""))


  mvc/IMVC
  (view [this]
    ($ [:div.session.row
        [:div.span12 [:div.row (map mvc/render (:subsessions (:model this)))]]

        ] (data "model" (:model this))))

  (control [this session-view] (reset! last-loop-id (:last-loop-id (:model this))))


  )
