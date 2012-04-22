(ns session.client.editor
(:use-macros [cljs-jquery.macros :only [$]])

  )

(defn jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (. (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (jsObj v)]
                               [k v])))
                   obj))
     -strobj))

(def ace (js* "ace"))

(def js-require (js* "require"))

(def canon (js-require "pilot/canon"))

(defn add-keybindings []
  (.addCommand canon
 (jsObj {
   :name "evaluateCell"
   :bindKey {:win "Shift-Return" :mac "Shift-Return" :sender "editor"}
   :exec (fn [env args request] (def keyevent [env args request])
           ($ (. (. env -editor) -container) (trigger "evaluate-input")))})))

(defn fit-to-length-function [id editor]
  (fn []
    (let [val
          (str  (*
                 (. (. editor -renderer ) -lineHeight)
                 (. (. editor (getSession)) (getLength))
                 )
                "px")]
      ($ (str "#" id)
         (css "height" val))
      (. editor (resize))
      )))

(defn create-editor [id]
  (let [
       editor (.edit ace id)
       mode (. (js-require "ace/mode/clojure") -Mode)
       fitfn (fit-to-length-function id editor)
        ]
    (.setMode (. editor (getSession)) (mode.))
    (.addEventListener (. editor (getSession))  "change" fitfn)
    (.setShowGutter (. editor -renderer) false)
    (.setHScrollBarAlwaysVisible  (. editor -renderer) false)
    ;(.setVScrollBarAlwaysVisible  (.renderer editor) false)
    editor))
