(ns session.client.editor
  (:require [subpar.core :as sp])
  (:use-macros [cljs-jquery.macros :only [$]]))


(defn create-editor [id]
  (let [
        editor (.fromTextArea
                js/CodeMirror
                (.getElementById js/document id)
                (js-obj "lineNumbers" false
                        "mode" "text/x-clojure"
                        "keyMap" "subpar"))]
    editor))
