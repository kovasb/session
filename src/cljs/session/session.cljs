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
          (apply dom/div nil
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




