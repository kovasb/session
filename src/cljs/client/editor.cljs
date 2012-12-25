(ns session.client.editor
  (:require [subpar.core :as sp]
            [session.client.subscribe :as subscribe])
  (:use-macros [cljs-jquery.macros :only [$]]))

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

(defn create-editor [id]
  (let [editor (.fromTextArea
                js/CodeMirror
                (.getElementById js/document (str "area" id))
                (js-obj "lineNumbers" false
                        "mode" "text/x-clojure"
                        "onKeyEvent" (fn [editor event]
                                       (let [text (. editor (getValue))]
                                         (when (= event/type "keyup")
                                           (subscribe/send! {:op :update-textarea :id id :input text :origin session-uuid}))
                                         false))
                        "keyMap" "subpar"))]
    editor))
