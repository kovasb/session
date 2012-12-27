(ns session.client.main
  (:require
   [clojure.browser.repl :as repl]
   [fetch.remotes :as remotes]
   [subpar.core]
   [session.client.keymap]
   [session.client.readermap]
   [session.client.mvc :as mvc]
   [cljs.reader :as reader]
   [cljs-jquery.core])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm]))

(repl/connect "http://localhost:9000/repl")

(defn uuid
  "returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  []
  (let [r (repeatedly 30 (fn [] (.toString (rand-int 16) 16)))]
    (apply str (concat (take 8 r) ["-"]
                       (take 4 (drop 8 r)) ["-4"]
                       (take 3 (drop 12 r)) ["-"]
                       [(.toString  (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16)]
                       (take 3 (drop 15 r)) ["-"]
                       (take 12 (drop 18 r))))))

(def session-uuid (uuid))

(def session (atom nil))

(defn load-session [id]
  (pm/remote
   (get-session id)
   [result]
   (reset! session result)
   (session.client.session/render-session (first (:subsessions (:model @session))))))

($ js/document (ready
                #(do
                   ;;(aset CodeMirror.defaults "theme" "ambiance")
                   (session.client.readermap/register-tag-parsers)
                   (aset CodeMirror.keyMap "subpar" session.client.keymap/subpar-keymap)
                   (load-session "default-session"))))
