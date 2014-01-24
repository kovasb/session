(ns session.client.editor
  (:require-macros [cljs.core.async.macros :refer [go]])

  (:require
    React

    goog.string.StringBuffer
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [session.client.make :as m]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))




(defn create-editor [x owner opts]
  (reify
    om/IWillMount
    (will-mount [_])

    om/IRender
    (render [_]
      (dom/textarea #js {:ref "theInput"} (om/value x)))

    om/IDidMount
    (did-mount [_ _]
      (let [n (om/get-node owner "theInput")]
        (.log js/console "mounted editor")
        (.fromTextArea
          js/CodeMirror
          n
          #js {

                :lineNumbers true
                :mode "text/x-clojure"
                :keyMap "subpar"
                :onKeyEvent (fn [editor event]
                              (.log js/console "in handler")
                              (let [ ]
                                (when (= (.-type event) "keyup")
                                  (om/transact! x [] (fn [e]  (.getValue editor))))
                                false))
                }
          )))))



