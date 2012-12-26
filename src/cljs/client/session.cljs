(ns session.client.session
  (:require
   [session.client.loop-creator :as loop-creator]
   [session.client.loop :as loop]
   [session.client.mvc :as mvc]
   [cljs.reader :as reader])
  (:require-macros [fetch.macros :as pm])
  (:use-macros [cljs-jquery.macros :only [$]]))

(defrecord Session [model dom])

(defn render-session [x]
  ($ [:div.session.row [:div.tab-content [:tab-pane (mvc/render x)]]] (appendTo ($ "body > .container")))
  ($ ".loop-container" (trigger "post-render")))
