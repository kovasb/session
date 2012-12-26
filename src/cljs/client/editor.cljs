(ns session.client.editor
  (:require [subpar.core :as sp]
            [session.client.subscribe :as subscribe])
  (:use-macros [cljs-jquery.macros :only [$]]))



(defn create-editor [id]
  (let [editor (.fromTextArea
                js/CodeMirror
                (.getElementById js/document (str "area" id))
                (js-obj "lineNumbers" false
                        "mode" "text/x-clojure"
                        "onKeyEvent" (fn [editor event]
                                       (let [text (. editor (getValue))]
                                         (when (= event/type "keyup")
                                           (subscribe/send! {:op :update-textarea :id id :input text :origin session.client.main/session-uuid}))
                                         false))
                        "keyMap" "subpar"))]
    editor))
