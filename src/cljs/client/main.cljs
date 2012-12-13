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
   [cljs.reader :as reader])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))

(repl/connect "http://localhost:9000/repl")

(def session (atom nil))

(defn load-session [id]
  (pm/remote
   (get-session id)
   [result]
   (let [
         s (reader/read-string (:result result))
         v  ($ (mvc/view s))]
     (reset! session s)
     (mvc/control s v)
     ($ "body > .container" (html ""))
     ($ v (appendTo ($ "body > .container")))
     (session.client.session/load-subsession-tab (first (:subsessions (:model @session)))))))

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


(defn series-plot [x]
  (let [elt ($ [:div {:style "width:600px;height:200px;position:relative"} ""])]
    (. js/$ (plot elt
                  (array (js-obj "data"  (apply array
                                          (map #(apply array %) (:data x)))

                                 ))
                  (js-obj
                           "yaxis" (js-obj  "labelWidth" 25 "position" "left") )
                  ;;(js-obj "xaxis" (js-obj "labelWidth" 25))
                  ))
    elt))

(defn timeseries-plot [x]
  (let [elt ($ [:div {:style "width:600px;height:200px;position:relative"} ""])]
    (. js/$ (plot elt
                  (array (js-obj "data"  (apply array
                                          (map #(array (.getTime (first %)) (last %)) (:data x)))))
                  (js-obj
                   "xaxis" (js-obj  "mode" "time" "timeformat" "%y/%m/%d")
                   "yaxis" (js-obj  "labelWidth" 25 "position" "left") )
                  ;;(js-obj "xaxis" (js-obj "labelWidth" 25))
                  ))
    elt))


(defn table [x]
  ($ [:table {:style "width:100%"}
    (map (fn [r] [:tr (map (fn [c] [:td (mvc/render c)] ) r)] )  (:data x))]))


($ js/document (ready
                #(do
                   ;;(aset CodeMirror.defaults "theme" "ambiance")
                   (aset CodeMirror.keyMap "subpar" keymap)
                   (reader/register-tag-parser! "testtag" (fn [x] [[x]] ))
                   (reader/register-tag-parser! "flot" series-plot)
                   (reader/register-tag-parser! "table" table)


                   (reader/register-tag-parser! "series-plot" series-plot)
                   (reader/register-tag-parser! "timeseries-plot" timeseries-plot)
                   (reader/register-tag-parser! "loop"
                                                (fn [x] (loop/Loop. (assoc x :input (atom (:input x)) :output (atom (:output x))) (atom nil)) ))
                   (reader/register-tag-parser! "session"
                                                (fn [x] (session/Session. x (atom nil)) ))
                   (reader/register-tag-parser! "subsession"
                                                (fn [x] (subsession/Subsession. (assoc x :loops (atom (:loops x))) (atom nil))))
                   (load-session "default-session")
                   )
                ))
