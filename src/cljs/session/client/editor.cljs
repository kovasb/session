(ns session.client.editor
  (:require [session.client.subscribe :as subscribe]
            [session.client.util :as util]))

(defn create-editor [id]
  (let [editor (.fromTextArea
                js/CodeMirror
                (.getElementById js/document (str "area" id))
                (js-obj "lineNumbers" false
                        "mode" "text/x-clojure"
                        "onKeyEvent" (fn [editor event]
                                       (let [text (.getValue editor)]
                                         (when (= (.-type event) "keyup")
                                           (subscribe/send! {:op :update-textarea
                                                             :id id
                                                             :input text
                                                             :origin util/session-uuid})) 
                                         false))
                        "keyMap" "subpar"))]
    editor))
