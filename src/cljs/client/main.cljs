(ns session.client.main
  (:require
   [clojure.browser.repl :as repl]
   [subpar.core]
   [session.client.keymap]
   [session.client.readermap]
   [session.client.remote :as remote]
   [session.client.mvc :as mvc]
   [session.client.session :as session]
   [cljs-jquery.core])
  (:use-macros [cljs-jquery.macros :only [$]]))

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
  (remote/send "/get_session"
               :data id
               :callback (fn [result]
                           (reset! session result)
                           (-> @session :model :subsessions first session/render-session))))

($ js/document (ready
                #(do
                   ;;(aset CodeMirror.defaults "theme" "ambiance")
                   (session.client.readermap/register-tag-parsers)
                   (aset CodeMirror.keyMap "subpar" session.client.keymap/subpar-keymap)
                   (load-session "default-session"))))
