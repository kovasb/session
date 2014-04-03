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
      (dom/span #js {:style #js {:padding "-0.4em"
                                 :display "inline-block"
                                 "min-width" "500px"
                                 } } (dom/textarea #js {:ref "theInput"} (om/value (:in x)))))

    om/IDidMount
    (did-mount [_]
      (let [n (om/get-node owner "theInput")]

        (let [cm
              (.fromTextArea
                js/CodeMirror
                n
                #js {
                      :matchBrackets true
                      :lineNumbers   false
                      :mode          "text/x-clojure"
                      :keyMap        "subpar"
                      :extraKeys     #js {"Shift-Enter"
                                           (fn [cm] (put! (:kernel-send opts)
                                                          (assoc
                                                              (dissoc (deref (om/get-props owner)) :out)
                                                            :op :eval-request)))}

                                     })]
          (.on cm "change" (fn [cm change]
                             (om/transact! (om/get-props owner) [:in] (fn [e]  (.getValue cm)))))
          )))))





