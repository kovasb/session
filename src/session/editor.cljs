(ns session.editor
  (:require
    [om.core :as om]
    [om.dom :as dom]
    [cljsjs.codemirror]))


(defn cm-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/textarea nil (:text data)))))


(defn shift-enter-fn [owner handler]
  (fn [cm]
    (let [output (pr-str ((om/get-shared owner :eval) (.getValue cm)))]
      (println output)
      (handler output))))


(defn create-editor [x owner opts]
  (reify
    om/IRender
    (render [_]
      (dom/span
        #js {:style #js {:padding "-0.4em" :display "inline-block" "min-width" "500px"}}
        (dom/textarea
          #js {:ref "theInput"
               :style
               #js {:padding "-0.4em"
                    :display "inline-block"
                    "min-width" "500px"}}
          (om/value (:text x)))))

    om/IDidUpdate
    (did-update [this prev-state prev-props]
      (let [cm-map (om/get-shared owner :codemirror-map)]
        (if (not= (:text (om/get-props owner))
             (.getValue (@cm-map (:id opts))))
         (.setValue
           (@cm-map (:id opts))
           (:text (om/get-props owner))
           ))))

    om/IDidMount
    (did-mount [_]
      (let [n (om/get-node owner "theInput")]
        (let [cm-map (om/get-shared owner :codemirror-map)
              cm
              (.fromTextArea
                js/CodeMirror
                n
                #js {
                     :viewportMargin js/Infinity
                     :matchBrackets true
                     :lineNumbers   false
                     ;:mode          "text/x-clojure"
                     ;:keyMap        "subpar"
                     :extraKeys     #js {"Shift-Enter"
                                         (shift-enter-fn owner (:loop-output-fn opts))}
                     })]
          (swap! cm-map assoc (:id opts) cm)

          (.on
            cm
            "change"
            (fn [cm change]
              (om/transact!
                (om/get-props owner)
                [:text]
                (fn [e] (.getValue cm))))))))))