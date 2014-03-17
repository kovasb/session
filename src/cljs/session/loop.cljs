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




(defn loop-delete-button [loop-delete-chan loop-id]
  (dom/span #js {:onClick (fn [e] (put! loop-delete-chan loop-id))
                 :style   #js {:font-size "10px"
                               :color "#888888"
                               :font-family "monospace"
                               :float "right"
                               :padding-right "5px"}} "X"))


(defn loop-input-indicator []
  (dom/span #js {:style #js {:font-size "10px"
                             :color "#888888"
                             :font-family "monospace"
                             :float "left"
                             :padding-right "5px"}} ">>"))


(defn loop-output-block [cursor owner]
  (let [builder-fn (om/get-shared owner :builder)]
    (dom/div nil
             (dom/span #js {:style #js {:font-size "10px" :color "#888888" :padding-right "5px"}} "<<")
             (builder-fn (get-in cursor [:out]) {:react-key :output}))))

(defn loop-input-block [cursor opts]
  (dom/div
    nil
    (loop-input-indicator)
    (dom/span
      nil
      (om/build
        editor/create-editor
        cursor
        {:react-key :editor :opts opts}))
    (loop-delete-button (:loop-delete opts) (:id (om/value cursor)))))


;(let [id (:id (om/value cursor))] (dom/button #js {:id "delete" } "delete"))


(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))


(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))



(defn editable [data owner {:keys [edit-key on-edit] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [edit-text editing]}]
      (let [text (get data edit-key)]
        (dom/span nil
                (dom/span #js {:style (display (not editing))} text)
                (dom/input
                  #js {:style (display editing)
                       :value text
                       :onChange #(handle-change % data edit-key owner)
                       :onKeyPress #(when (and (om/get-state owner :editing)
                                               (== (.-keyCode %) 13))
                                     (end-edit text owner on-edit))
                       :onBlur (fn [e]
                                 (when (om/get-state owner :editing)
                                   (end-edit text owner on-edit)))})
                (dom/button
                  #js {:style (display (not editing))
                       :onClick #(om/set-state! owner :editing true)}
                  "Edit"))))))


;;;;;;;;;



(defn loop-toolbar [cursor owner opts]
  (om/build editable cursor {:opts {:edit-key :note
                                    :on-edit  (fn [text]
                                                (.log js/console "update note")

                                                (put! (:kernel-send opts)
                                                      {:op :update-note
                                                       :id (:id @(om/get-props owner))
                                                       :note text})
                                                (om/transact! (om/get-props owner) [] (fn [e] (assoc e :note text))))}}))


(def loop-renderers
  {dt/Loop
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render [_ ]
          (dom/div
            nil
            (dom/div
             #js {:style  #js {:font-family "monospace"}}
             (loop-toolbar cursor owner opts)

             (loop-input-block cursor opts)
             (dom/p nil "")
             (loop-output-block cursor owner)

             (om/build session.loopcreator/new-loop-creator
                       (om/graft {:id (:id (om/value cursor)) :chan (:loop-create opts)} cursor)))))))}
  )



