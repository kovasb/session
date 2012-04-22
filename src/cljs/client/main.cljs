(ns session.client.main
  (:require
   [cljs-jquery.core :as cj]
   [clojure.browser.repl :as repl]
   [fetch.remotes :as remotes]
   [goog.events :as events]
   [goog.events.EventType :as event-type]
   [session.client.editor :as editor]
   [session.client.loop :as loop]
   [session.client.session :as session]
   [session.client.mvc :as mvc]
   )
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm])

  ;;(:use [jayq.core :only [$ append]])
  ;;(:use-macros [crate.macros :only [defpartial]])
  )


(repl/connect "http://localhost:9000/repl")


;;(defn shift-enter-event? [e] (and (. e (shiftKey)) (= 13 (. e (keycode)))))


($ js/document (ready
                #(do

                   (editor/add-keybindings)
                   (def session
                     (let [id (loop/new-loop-id)]
                       (session/Session. {:id 1 :loops (atom [(loop/Loop. {:id 1 :input (atom [:loop id]) :output (atom [:loop id])})])})))
                   (def viewobject ($ (mvc/view session)))
                   (mvc/control session viewobject)
                   ($ viewobject (appendTo ($ "body > .container")))
                   ($ ".loop-container" (trigger "post-render"))

                   )))
