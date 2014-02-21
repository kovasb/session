(ns session.loop
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    session.loopcreator
    [session.datatypes :as dt]
    [session.editor :as editor]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))







;(let [id (:id (om/value cursor))] (dom/button #js {:id "delete" } "delete"))

(def loop-renderers
  {dt/Loop
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render [_ ]
          (dom/div
            nil
            (dom/div
             #js {:style
                   #js {:font-family "monospace"
                        }}
             (dom/div
               nil
               (dom/span #js {:style #js {:font-size "10px"
                                          :color "#888888"
                                          :font-family "monospace"
                                          :float "left"
                                          :padding-right "5px"}} ">>")
               (dom/span
                 nil
                 (om/build editor/create-editor
                          cursor
                          {:react-key :editor
                           :opts      opts}))
               (let [id (om/value cursor)]
                 (dom/span #js {:onClick (fn [e] (put! (:loop-delete opts) (:id id)))
                               :style   #js {:font-size "10px" :color "#888888" :font-family "monospace" :float "right" :padding-right "5px"}} "X"))

               )
             (dom/p nil "")
             (let [builder-fn (om/get-shared owner :builder)]
               (dom/div nil
                        (dom/span #js {:style #js {:font-size "10px" :color "#888888" :padding-right "5px"}} "<<")
                        (builder-fn (get-in cursor [:out]) {:react-key :output})
                        ))

             (om/build session.loopcreator/new-loop-creator
                       (om/graft {:id (:id (om/value cursor)) :chan (:loop-create opts)} cursor))

             )))))}
  )



