(ns session.client.main
  (:require
   [clojure.browser.repl :as repl]
   [subpar.core]
   [session.client.keymap :as keymap]
   [session.client.readermap :as readermap]
   [session.client.remote :as remote]
   [session.client.mvc :as mvc]
   [session.client.session :as session]
   [cljs-jquery.core])
  (:use-macros [cljs-jquery.macros :only [$]]))

(repl/connect "http://localhost:9000/repl")

(def session (atom nil))

(defn load-session [id]
  (remote/send "/get_session"
               :data id
               :callback (fn [result]
                           (reset! session result)
                           (-> @session :model :subsessions first session/render-session))))

(defn ^:export start []
  (do (readermap/register-tag-parsers)
      (aset (.-keyMap js/CodeMirror) "subpar" keymap/subpar-keymap)
      (load-session "default-session")))

