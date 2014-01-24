(ns session.client.session
  (:require-macros [cljs.core.async.macros :refer [go]])

  (:require
    React
    goog.string.StringBuffer
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [session.client.make :as m]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))

(defn new-id []
  ;; from
  (letfn [(f [] (.toString (rand-int 16) 16))
          (g [] (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))]
    (str (.append (goog.string.StringBuffer.)
                  (f) (f) (f) (f) (f) (f) (f) (f) "-" (f) (f) (f) (f)
                  "-4" (f) (f) (f) "-" (g) (f) (f) (f) "-"
                  (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f)))))

(defn new-loop-creator [id chan]
  (dom/button #js {:key (str "newloop-" id) :onClick (fn [e] (put! chan id))} "new" ))


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



(defmethod m/make :session [x owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      ;; todo: simplify to a single go block
      ;; todo: make keywords consistent across front & back end (use Schema?)
      (go (while true
            (handle-kernel-response (<! (:kernel-receive opts)) x owner opts)))
      (let [c (:loop-create opts)]
        (go (while true
              (let [insertion-id (<! c)]
                (let [
                     new-loop {:tag :loop :id (new-id) :in "" :out :default}]
                 (>! (:kernel-send opts) {:op :insert-loop :id insertion-id :new-id (:id new-loop)})
                 (om/transact! x
                               [:loops]
                               loop-insert
                               insertion-id
                               new-loop))))))
      (let [c (:loop-delete opts)]
        (go (while true
              (let [deletion-id (<! c)]
                (let []
                  (>! (:kernel-send opts) {:op :delete-loop :id deletion-id})
                  (om/transact! x
                                [:loops]
                                loop-delete
                                deletion-id))))))

      )

    om/IRender
    (render [_]
      (.log js/console "rendering session")
      (dom/div nil
               (into-array
                 (concat
                   [(new-loop-creator :session-top (:loop-create opts))]
                   (map
                     #(om/build m/make
                                (get-in x [:loops %])
                                {:react-key (get-in (om/value x) [:loops % :id])
                                 :opts      opts})
                     (range (count (:loops (om/value x)))))))))) )