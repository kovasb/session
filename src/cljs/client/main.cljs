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
   [session.client.subsession :as subsession]
   [session.client.hiccup :as hiccup]
   [subpar.core]
   [goog.object :as gobject]
   [session.ui :as ui]
   [cljs.reader :as reader]
   )

  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm] [client.macros :as cm])

  )


(repl/connect "http://localhost:9000/repl")




;;(def tagtest #inst "2012-01-01")

;;(defn shift-enter-event? [e] (and (. e (shiftKey)) (= 13 (. e (keycode)))))

(def session (atom nil))

(defn load-session [id]
  (pm/remote
   (get-session id)
   [result]
   (def saved-result (:result result))
   (let [
         s (reader/read-string (:result result))
         v  ($ (mvc/view s))
         ]


     (reset! session s)

     (mvc/control s v)

     ($ "body > .container" (html ""))
     ($ v (appendTo ($ "body > .container")))
     ;;($ ".loop-container" (trigger "post-render"))
     )))


(defn save-session []
  (pm/remote
   (store-session (:id @session) (pr-str @session))
   [result]
   result))



;;(js-obj  "dataType" "json"  "done" (fn [e data] (js/alert "result") ))


(defn load-new-file [x]
  (let [
        s (reader/read-string x)
         v ($ (mvc/view s))
         ]
     (reset! session s)
     (mvc/control s v)
     ($ "body > .container" (html ""))
     ($ v (appendTo ($ "body > .container")))
     ;;($ ".loop-container" (trigger "post-render"))
     )
  )

(defn download-session []
  ($ "#downloadformdata" (val (binding [*print-meta* true]  (pr-str @session))))
  ($ "#downloadform" (submit)))



(defn ds2 []  (let [dataurl (str "data:text/csv;charset=UTF-8," (js/encodeURIComponent (binding [*print-meta* true]  (pr-str @session))))]
                (js* "window.location.href=~{}" dataurl)))



(def keymap
  (js-obj
   "Shift-Enter" (fn [cm] ($ (.getWrapperElement cm) (trigger "evaluate-input")))
   "Backspace" (fn [cm] (subpar.core/backward-delete cm))
   "Delete" (fn [cm] (subpar.core/forward-delete cm))
   "Ctrl-D" (fn [cm] (subpar.core/forward-delete cm))
   "Shift-9" (fn [cm] (subpar.core/open-expression cm "()"))
   "[" (fn [cm] (subpar.core/open-expression cm "[]"))
   "Shift-[" (fn [cm] (subpar.core/open-expression cm "{}"))
   "Shift-0" (fn [cm] (subpar.core/close-expression cm ")"))
   "]" (fn [cm] (subpar.core/close-expression cm "]"))
   "Shift-]" (fn [cm] (subpar.core/close-expression cm "}"))
   "Shift-'" (fn [cm] (subpar.core/double-quote cm))
   "Ctrl-Alt-F" (fn [cm] (subpar.core/forward cm))
   "Ctrl-Alt-B" (fn [cm] (subpar.core/backward cm))
   "Ctrl-Alt-U" (fn [cm] (subpar.core/backward-up cm))
   "Ctrl-Alt-D" (fn [cm] (subpar.core/forward-down cm))
   "Ctrl-Alt-P" (fn [cm] (subpar.core/backward-down cm))
   "Ctrl-Alt-N" (fn [cm] (subpar.core/forward-up cm)) ;; doesn't work for chrome on windows
   "Shift-Ctrl-[" (fn [cm] (subpar.core/backward-barf cm))
   "Ctrl-Alt-Right" (fn [cm] (subpar.core/backward-barf cm))
   "Ctrl-]" (fn [cm] (subpar.core/backward-barf cm))
   "Shift-Ctrl-]" (fn [cm] (subpar.core/forward-barf cm))
   "Ctrl-Left" (fn [cm] (subpar.core/forward-barf cm))
   "Shift-Ctrl-9" (fn [cm] (subpar.core/backward-slurp cm))
   "Ctrl-Alt-Left" (fn [cm] (subpar.core/backward-slurp cm))
   "Ctrl-[" (fn [cm] (subpar.core/backward-slurp cm))
   "Shift-Ctrl-0" (fn [cm] (subpar.core/forward-slurp cm)) ;; todo key combination didn't work in chrome on windows
   "Ctrl-Right" (fn [cm] (subpar.core/forward-slurp cm))
   ;;todo add padding space if necessary for all splices
   "Alt-Up" (fn [cm] (subpar.core/splice-delete-backward cm))
   "Alt-Down" (fn [cm] (subpar.core/splice-delete-forward cm))
   "Alt-S" (fn [cm] (subpar.core/splice cm))
   ;;todo wrap expression in round, square, curly.
   "Ctrl-Alt-\\" (fn [cm] (subpar.core/indent-selection cm))
   "fallthrough" (array "basic" "emacs"))) ;; not sure if this is right


(aset CodeMirror.keyMap "subpar" keymap)

;; on shift return:  codemirror get corresponding widget, trigger event

($ js/document (ready
                #(do

                   (reader/register-tag-parser! "testtag" (fn [x] [[x]] ))

                   ($ ".example" (on "click"
                                     (fn [] (load-session ($ :this (attr "id"))))

                                     ))

                   ($ "#savebutton" (on "click" (fn [] (download-session))))



                   ($ "#fileupload"
                      (fileupload
                       (gobject/create "add" (fn [e data]
                                               (.
                                                (. data (submit))
                                                (complete (fn [result status xx] (load-new-file (.-responseText result)))))))
                       ))

                   (load-session "default-session")



                   )))
