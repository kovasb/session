(ns session.boot
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [session.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))





(defn display-index-element [cursor owner opts]
  (reify
    om/IInitState
    (init-state [_] {:hover false})
    om/IRenderState
    (render-state [_ {:keys [hover]}]
      (let [elt (om/value cursor)]
        (dom/li #js {
                     :style #js
                     {:width "400px"
                      :border-top (if (= 0 (last (.-path cursor))) "1px solid #ccc" "")
                      :border-bottom "1px solid #ccc"
                      :text-decoration "none"}

                      :onMouseEnter (fn [e] (om/set-state! owner :hover true))
                      :onMouseLeave (fn [e] (om/set-state! owner :hover false))

                                    }
                 (dom/a
                   #js { :style #js {"text-decoration" "none"}
                         :href (str "#/sessions/" (.-uuid (:index/id elt)))}
                   (dom/i #js {:className "fa fa-arrow-circle-right"
                               :style #js {:float "left"
                                           :padding-right "5px"
                                           :padding-top "6px"
                                           :font-size "0.8em"
                                           :opacity (if hover 1 0)
                                           :color (if hover "#5479B0" "#000000")}} "")
                   (dom/span #js {:style
                                   #js {
                                         :color (if hover "#5479B0" "#000000")
                                         :font "200 1em/1.5 Helvetica, Verdana, sans-serif"}}
                             (if (get-in elt [:index/name])
                               (get-in elt [:index/name])
                               (.-uuid (get-in elt [:index/id]))))))))))




(defn display-index [cursor owner opts]
  (dom/div
    nil
    (dom/div nil
             "available sessions:")
    (dom/ul #js {:style #js {:list-style-type "none" :padding "0" :margin "0"}}
           (into-array
             (map
               #(om/build display-index-element % {:opts opts})
               (:session-list cursor))))))


(defn handle-change [e data edit-key owner]
  (let [value (.. e -target -value)]
    (om/transact! data edit-key (fn [_] value))
    (om/set-state! owner :edit-text value)))

(defn create-new-session [cursor owner opts]
  (dom/div nil
           (dom/div nil "create new session:")

           (dom/span nil
                     ;(dom/i #js {:className "fa fa-plus-square-o"} "")
                     (dom/input
                       #js {:style #js {:font "200 1em/1.5 Helvetica, Verdana, sans-serif"}
                            :size "36"
                            :value (get-in (om/value cursor) [:new-session :name])
                            :onChange #(let [value (.. % -target -value)]
                                        (om/transact! cursor [:new-session :name] (fn [_] value))
                                        ;(om/set-state! owner :edit-text value)
                                        )}

                                )
                     (let [id (get-in (om/value cursor) [:new-session :id])
                           name (get-in (om/value cursor) [:new-session :name])]
                       (dom/button #js {:onClick
                                        (fn [e]
                                          (put! (:kernel-send opts) {:op   :create-session
                                                                     :name name
                                                                     :id   id}))}
                                  "go!")))))






(def
  boot-renderers
  {dt/Boot
    (let [session-connect-chan (chan)]
      (fn [cursor owner opts]
       (reify
         om/IWillMount
         (will-mount [_]
           (go
             (>! (:kernel-send opts) {:op :list-sessions})
             (loop []
               (let [res (<! (:kernel-receive opts))]
                 (condp = (:op res)
                        :list-sessions (do
                                         (om/transact! cursor [] (fn [y ]
                                                                   (assoc y :session-list (:session-list res))))
                                         (recur))

                        :display-session (om/transact! cursor [] (fn [y ] (:session res))))))))
         om/IRender
         (render [_]
           (dom/div
             nil
             (dom/div #js {:style #js {:font-size "3em"}} "Session")
             (create-new-session cursor owner opts)
             (dom/p nil "")
             (if (:session-list (om/value cursor))
               (display-index cursor owner opts)
              (dom/div #js {:key "initial-load"} "loading session index...")))))))})








