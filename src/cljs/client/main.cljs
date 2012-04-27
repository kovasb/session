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
   [session.client.svgtest :as svgtest]
   )

  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm] [client.macros :as cm])

  )


(repl/connect "http://localhost:9000/repl")


;;(defn shift-enter-event? [e] (and (. e (shiftKey)) (= 13 (. e (keycode)))))

(def session (atom nil))

(defn load-session [id]
  (pm/remote
   (get-session id)
   [result]
   (let [
         s (js/eval (:result result))
         v ($ (mvc/view s))
         ]
     (reset! session s)
     (mvc/control s v)
     ($ "body > .container" (html ""))
     ($ v (appendTo ($ "body > .container")))
     ($ ".loop-container" (trigger "post-render"))
     )))


(defn save-session []
  (pm/remote
   (store-session (:id @session) (pr-str @session))
   [result]
   result))


($ js/document (ready
                #(do

                   (editor/add-keybindings)
                   (load-session 1))))
