(ns session.editor
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    React
    goog.string.StringBuffer
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))





(defn create-editor [x owner opts]
  (reify
    om/IWillMount
    (will-mount [_])

    om/IRender
    (render [_]
      (dom/span #js {:style #js {:padding "-0.4em" :display "inline-block" } } (dom/textarea #js {:ref "theInput"} (om/value (:in x)))))

    om/IDidMount
    (did-mount [_ _]
      (let [n (om/get-node owner "theInput")]
        (.fromTextArea
          js/CodeMirror
          n
          #js {
                :lineNumbers false
                :mode "text/x-clojure"
                :keyMap "subpar"
                :onKeyEvent (fn [editor event]
                              (if (and (.-shiftKey event)
                                       (= "keydown" (.-type event))
                                       (= "Enter" (.-keyIdentifier event)))


                                (put! (:kernel-send opts)
                                      (assoc
                                          (dissoc (deref (om/get-props owner)) :out)
                                        :op :eval-request)))


                              (let [ ]
                                (when (= (.-type event) "keyup")
                                  (om/transact! (om/get-props owner) [:in] (fn [e]  (.getValue editor))))
                                false))
                })))))





