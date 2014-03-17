(ns session.session
  (:require-macros [cljs.core.async.macros :refer [go]])

  (:require
    session.loopcreator
    React
    goog.string.StringBuffer
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]
    [session.datatypes :as dt]))




(defn new-id []
  ;; from
  (letfn [(f [] (.toString (rand-int 16) 16))
          (g [] (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))]
    (str (.append (goog.string.StringBuffer.)
                  (f) (f) (f) (f) (f) (f) (f) (f) "-" (f) (f) (f) (f)
                  "-4" (f) (f) (f) "-" (g) (f) (f) (f) "-"
                  (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f)))))


(defn insert-output [loops newout]
  (let [i (first
            (keep-indexed
              #(when (= (:id newout) (:id %2)) %1)
              loops))]
    (assoc-in loops [i :out] (:out newout))))


(defn loop-insert [loops id newloop]
  (let []

    (if (= :session-top id)
      (vec (concat [newloop] loops))

      (loop [l [] r loops]
        (let [x (first r)]
          (if (= id (:id x))
            (vec (concat l [x newloop] (next r)))
            (recur (conj l x) (next r))))))))


(defn loop-delete [loops id]
  (vec (remove #(= (:id %) id) loops)))


(defmulti handle-kernel-response (fn [response cursor owner opts] (:op response)))

(defmethod handle-kernel-response :eval-response [response cursor owner opts]
  (om/transact! cursor [:loops]
                insert-output
                response))


(defmethod handle-kernel-response :eval-error [response cursor owner opts]
  (.log js/console "eval error:")
  (.log js/console (:error response)))


(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))


(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))


(defn on-edit [title id send]
  (.log js/console "done edit")
  (put! send {:op :update-name :name title :id id}))



(defn session-top [cursor owner {:keys [on-edit] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [edit-text editing]}]
      (let [name (get-in (om/value cursor) [:meta :name])
            id (get-in (om/value cursor) [:meta :id])]
        (if editing
         (dom/input
           #js {:value      name
                :onChange   (fn [e] (om/transact! cursor [:meta :name] (fn [_] (.. e -target -value))))
                :onKeyPress  #(when (and (om/get-state owner :editing)
                                         (== (.-keyCode %) 13))
                               (end-edit name owner on-edit))
                :onBlur     (fn [e]
                              (when (om/get-state owner :editing)
                                (end-edit name owner on-edit)))})
         (dom/span
           #js {:onClick #(om/set-state! owner :editing true)}
           (if name name (.-uuid id))))))))




(def session-renderers
  {dt/SessionObject
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render [_]
          (dom/span nil "#session/Object "
                    ((om/get-shared owner :builder-raw)
                     (type {})
                     cursor)))))



    dt/Session
    (fn [cursor owner opts]
      (reify
        om/IWillMount
        (will-mount [_]
          ;; todo: simplify to a single go block
          ;; todo: make keywords consistent across front & back end (use Schema?)
          (go (while true
                (handle-kernel-response (<! (:kernel-receive opts)) cursor owner opts)))
          (let [c (:loop-create opts)]
            (go (while true
                  (let [insertion-id (<! c)]
                    (let [
                           new-loop  (dt/Loop. (new-id) "" :default)]
                      (>! (:kernel-send opts) {:op :insert-loop :id insertion-id :new-id (:id new-loop)})
                      (om/transact! (om/get-props owner)
                                    [:loops]
                                    loop-insert
                                    insertion-id
                                    new-loop))))))
          (let [c (:loop-delete opts)]
            (go (while true
                  (let [deletion-id (<! c)]
                    (let []
                      (>! (:kernel-send opts) {:op :delete-loop :id deletion-id})
                      (om/transact! (om/get-props owner)
                                    [:loops]
                                    loop-delete
                                    deletion-id)))))))

        om/IRender
        (render [_]
          ;(.log js/console "rendering  session")

          ;; session top regalia


          (apply dom/div nil

                 ;(session-top cursor owner opts)
                 (let [id (get-in (om/value cursor) [:meta :id]) p (:kernel-send opts)]
                   (om/build session-top
                             cursor
                             {:opts {:on-edit #(on-edit % id p)}}))

                 (om/build session.loopcreator/new-loop-creator
                           (om/graft {:id :session-top :chan (:loop-create opts)} cursor))
                   (map
                     #((om/get-shared owner :builder)
                       %1
                       {:key :id
                        :om.core/index %2
                        :opts opts})
                     (:loops cursor)
                     (range))))))})




