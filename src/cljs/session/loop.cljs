(ns session.loop
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    session.loopcreator
    [session.datatypes :as dt]
    [session.editor :as editor]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]
    [goog.style :as gstyle]))




(defn loop-delete-button [loop-delete-chan loop-id]
  (dom/i #js {:onClick (fn [e] (put! loop-delete-chan loop-id))
              :className "fa fa-times"
              :style #js {:float "right" :font-size "0.7em"}} ""))




(defn loop-input-indicator []
  (dom/span #js {:style #js {:font-size "10px"
                             :color "#888888"
                             :font-family "monospace"
                             :float "left"
                             :padding-right "5px"}} ">>"))


(defn loop-output-block [cursor owner]
  (reify
    om/IRender
    (render [_]
      (let [builder-fn (om/get-shared owner :builder)]
       (dom/div #js {:style #js {:font-family "monospace"}}
                (dom/i #js {:className "fa fa-chevron-left" :style #js {:font-size "0.7em" :padding-right "5px"}} "")
                ;(dom/span #js {:style #js {:font-size "10px" :color "#888888" :padding-right "5px"}} "<<")
                (builder-fn (get-in cursor [:out]) {:react-key :output}))))))

(defn loop-input-block [cursor opts]
  (dom/div
    nil
    (dom/span #js {:style #js {:display "inline-block"} } (dom/i #js {:className "fa fa-chevron-right" :style #js {:font-size "0.7em" :padding-right "5px"}} ""))
    ;(loop-input-indicator)
    (dom/span
      #js {:style  #js {:font-family "monospace" :display "inline-block"}}
      (om/build
        editor/create-editor
        cursor
        {:react-key :editor :opts opts}))
    ))



;(let [id (:id (om/value cursor))] (dom/button #js {:id "delete" } "delete"))

(defn display [show]
   (if show
     #js {}
     #js {:display "none"}))

(defn input-display [show]
  (let [ret #js {:outline "none"
                 :width "90%"
                 :border "none"
                 :fontSize "13px"
                 :fontFamily "Georgia"
                 :padding "inherit"
                 :margin-left "-1px"}]
    (if-not show
      (do
        (aset ret "display" "none")
        ret)
      ret)))




(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (om/set-state! owner :edit-text text)
  (cb text))

(defn gsize->vec [size]
  [(.-width size) (.-height size)])


(defn editable [data owner {:keys [edit-key on-edit] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :edit-text (get data edit-key)
       :hover false
       :dimensions nil})
    om/IDidMount
    (did-mount [_]
      (comment
        (let [node (om/get-node owner "display")]
         (om/set-state! owner :dimensions (gsize->vec (gstyle/getSize node)))
         (println (om/get-state owner :dimensions)))))
    om/IRenderState
    (render-state [_ {:keys [edit-text editing hover]}]
      (let [text (get data edit-key)]
        (println editing)
        (dom/div
          #js {:onClick #(om/set-state! owner :editing true)
               :onMouseEnter (fn [e] (om/set-state! owner :hover true))
               :onMouseLeave (fn [e] (om/set-state! owner :hover false))

               :style #js {:width "100%" :height "20px"}}

                (if hover (dom/i #js {:className "fa fa-pencil" :style #js {:font-size "0.7em" :padding-right "5px"}} "")
                          (dom/i #js {:className "fa fa-pencil" :style #js {:opacity 0 :font-size "0.7em" :padding-right "5px"}} ""))

                (dom/input
                  #js {:ref "theInput"
                        :style #js
                               {:outline "none"
                               :width "90%"
                               :border "none"
                               :fontSize "13px"
                               :fontFamily "Georgia"
                               :padding "inherit"
                               :margin-left "-1px"}
                       :value edit-text
                       :onChange #(handle-change % data edit-key owner)
                       :onKeyPress #(when (and (om/get-state owner :editing)
                                               (== (.-keyCode %) 13))
                                     (.blur (om/get-node owner "theInput") )
                                     (end-edit text owner on-edit))
                       :onBlur (fn [e]
                                 (when (om/get-state owner :editing)
                                   (end-edit text owner on-edit)))})
                (if hover (loop-delete-button (:loop-delete opts) (:id (om/value data)))
                          "")
                )))))


;;;;;;;;;


(defn note-view [cursor owner opts]
  ())


(defn loop-toolbar [cursor owner opts]
  (om/build editable cursor {:opts {:loop-delete (:loop-delete opts)
                                    :edit-key :note
                                    :on-edit  (fn [text]
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

            ;;<i class="fa fa-camera-retro"></i>
            (dom/div
             nil
             (loop-toolbar cursor owner opts)

             (loop-input-block cursor opts)
             (dom/p nil "")
             (om/build loop-output-block cursor)

             (om/build session.loopcreator/new-loop-creator
                       (om/graft {:id (:id (om/value cursor)) :chan (:loop-create opts)} cursor)))))))}
  )



