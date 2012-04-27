(ns session.client.session
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc])
  (:use-macros [cljs-jquery.macros :only [$]])
  )


;; session format
;; {:subsessions [subsession {:type :cljs :loops XX }  ] }


(defrecord Session [model])

(extend-type Session

  IPrintable
  (-pr-seq [this opts]
    (concat  ["#session/session "] (-pr-seq (:model this) opts) ""))


  mvc/IMVC
  (view [this]
    ($ [:div.session.row
        [:div.span12 [:div.row (map mvc/render (:subsessions (:model this)))]]

        ] (data "model" (:model this))))

  (control [this session-view] nil)


  )
