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
   [goog.object :as gobject]
   [session.ui :as ui]
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



;;(js-obj  "dataType" "json"  "done" (fn [e data] (js/alert "result") ))


(defn load-new-file [x]
  (let [
         s (js/eval x)
         v ($ (mvc/view s))
         ]
     (reset! session s)
     (mvc/control s v)
     ($ "body > .container" (html ""))
     ($ v (appendTo ($ "body > .container")))
     ($ ".loop-container" (trigger "post-render"))
     )
  )

(defn download-session []
  ($ "#downloadformdata" (val (binding [*print-meta* true]  (pr-str @session))))
  ($ "#downloadform" (submit)))



(defn ds2 []  (let [dataurl (str "data:text/csv;charset=UTF-8," (js/encodeURIComponent (binding [*print-meta* true]  (pr-str @session))))]
                (js* "window.location.href=~{}" dataurl)))

($ js/document (ready
                #(do
                   ($ "#savebutton" (on "click" (fn [] (download-session))))
                   (editor/add-keybindings)

                   ($ "#fileupload"
                      (fileupload
                       (gobject/create "add" (fn [e data]
                                               (.
                                                (. data (submit))
                                                (complete (fn [result status xx] (load-new-file (.-responseText result)))))))
                       ))
                   (load-session "default-session"))))
