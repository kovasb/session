(ns session.loop
  (:require
    [om.core :as om]
    [om.dom :as dom]
    [session.editor :as editor]))




(defn create-output [data owner]
  (reify om/IRender
    (render [_]
      (dom/div #js {:style #js {:padding-top "10px"}} (:text data)))))

(defn create-loop [data owner]
  (reify om/IRender
    (render [_]
      (let [id (:id data)
            loop-output-fn
            (fn [x]
              ;(println "handler output")
              (om/transact!
                (om/get-props owner)
                [:output :text]
                (fn [e] x)))]
        (dom/div
         nil
          (dom/div
            nil
            (dom/input
             #js {:type    "button"
                  :value   "insert"
                  :style #js {:margin-top "20px"
                              :margin-bottom "20px"}
                  :onClick (fn [x]
                             ((om/get-shared owner :loop-insert)
                               id))})
            )


          (dom/div
            #js {:style #js {:display "flex"
                             :alignItems "flex-start"}}
            (om/build
              editor/create-editor
              (:input data)
              {:opts
               {:id (:id data)
                :loop-output-fn
                    loop-output-fn}})
            (dom/input
              #js {:type    "button"
                   :value   "eval"
                   :style   #js {:margin-left "5px"}
                   :title "shortcut: shift+enter"
                   :onClick (fn [x]
                              (loop-output-fn
                                (pr-str
                                 ((om/get-shared owner :eval)
                                   (:text (:input (om/get-props owner)))))))})
            (dom/input
             #js {:type    "button"
                  :value   "delete"
                  :style #js {:margin-left "5px"}
                  :onClick (fn [x]
                             ((om/get-shared owner :loop-delete)
                               id))}))
         (om/build create-output (:output data)))))))
