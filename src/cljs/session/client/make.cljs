(ns session.client.make
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require

    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))

(extend-type number
  ICloneable
  (-clone [n] (js/Number. n)))

(extend-type string
  ICloneable
  (-clone [n] (js/String. n)))



(js/alert (satisfies? ICloneable "asdf"))

(js/alert (satisfies? ICloneable 1))



(defmulti make
          (fn [y owner opts]
            (let [x (if (om/cursor? y) (om/value y) y)]
              (cond
               (keyword? x) :keyword
               (string? x) :string
               (number? x) :number
               (vector? x) :vector
               (and (map? x) (:tag x)) (:tag x)
               (map? x) :map
               (sequential? x) :sequential
               :default :default))))


(defn primitive? [x]
  (or
    (keyword? x)
    (string? x)
    (number? x)))


(defmethod make :keyword [x owner opts]
  (str x))

(defmethod make :string [x owner opts]
  (om/component nil (dom/span nil (om/value x)) ))

(defmethod make :number [x owner opts]
  (str x))


(defn merge-properties [opts path data]
  ;; set up event handlers
  ;; :onClick -> (fn [e] (.put (:onClick chan) {:event-type :onClick :path p :data x :event e} )
  ;; if onClick has more than 1 destination, dispatch to all

  (reduce-kv
    (fn [i k v]
      (aset i
            (name k)
            (if (sequential? v)
              (fn [e] (.stopPropagation e) (doseq [c v] (put! c {:eventType k :event e :path path :data data})))
              (fn [e] (.stopPropagation e) (put! v {:eventType k :event e :path path :data data}))))
      i)
    #js {}
    (merge-with vector (:handlers opts) (:handlers (:global opts)))))


(defn render2 [f x pre-opts]
  (let [y (get-in x (:path pre-opts))]
    (if (primitive? y)
      (dom/span
        (merge-properties (:and pre-opts) (into ((meta x) :om.core/path) (:path pre-opts)) y)
        (str y))
     (om/build f x pre-opts))))



(defmethod make :sequential [x owner opts]
  (om/component
    (dom/span
      nil
      (into-array
        (concat
          ["("]
          (interpose " " (map #(render2 make x [%]) (range (count x))))
          [")"])))))



(defmethod make :vector [x owner opts]
  (om/component
    (dom/span
      (merge-properties opts ((meta x) :om.core/path) x)
     (into-array
       (concat
         ["["]
         (interpose " " (map #(render2 make x {:path [%] :and {:global (:global opts)} }) (range (count x))))
         ["]"])))))



(defmethod make :track-onClick [x owner opts]
  (reify
    om/IWillMount
    (-will-mount [_]
      (go (while true
            (let [n (:path (<! (get-in opts [:global :handlers :onClick])))] (om/update! x [:last-path] (fn [y] n))))))
    om/IRender
    (-render [_]
      (dom/div
        nil
        (into-array
          [
            (dom/div
              nil
              (dom/label nil (om/build make x {:path [:last-path] :and {}} )))
            (dom/div nil
                     (om/build make x {:path [:data] :and opts}))])))))




(defmethod make :mirror-textarea [x owner opts]
  (om/component
    (dom/div
      (merge-properties opts)
      (into-array
        [
          (om/build make x {:path [:textarea]})
          (:value (:textarea x))
          ])
      ))

  )

(defmethod make :textarea [x owner opts]
  (om/component
    (dom/textarea #js {:onChange (fn [e] (let [y (.-value (.-target e))] (om/update! x [:value] (fn [z] y))))}
                  (:value x))))




(defn insert-output [loops newout]
  (let [i (first
            (keep-indexed
               #(when (= (:id newout) (:id %2)) %1)
              loops))]
    (assoc-in loops [i :out] (:out newout))
    )

  )


(defn new-loop-creator [id chan]
  (dom/button #js {:onClick (fn [e] (put! chan id))} "new" ))


(def idcount (atom 3))

(defn new-id [] (swap! idcount + 1) @idcount)

(defn loop-create [loops id]
  (let [newloop {:tag :loop :id (new-id) :in "" :out nil}]

    (if (= :session-top id)
      (vec (concat [newloop] loops))

       (loop [l [] r loops]
         (let [x (first r)]
           (if (= id (:id x))
             (vec (concat l [x newloop] (next r)))
             (recur (conj l x) (next r))))))))



(defmethod make :session [x owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (om/value x)
      (let [c (:eval-receive (om/value x))]
        (go (while true
             (let [y]
               (om/transact! x
                             [:loops]
                             insert-output
                             (<! c))))))

      (let [c (:loop-create (om/value x))]
        (go (while true
             (let []
               (om/transact! x
                             [:loops]
                             loop-create
                             (<! c))))))

      )
    om/IRender
    (render [_]
      (dom/div {}
               (into-array
                 (concat
                   [(new-loop-creator :session-top (:loop-create (om/value x)))]
                   (map
                    #(om/build make
                               (get-in x [:loops %])
                               {:react-key (get-in (om/value x) [:loops % :id])
                                :opts (dissoc (om/value x) :loops)})
                    (range (count (:loops (om/value x)))))))))))



(comment
  (go (while true
        (let [y (<! (:eval-receive x))]
          (om/update! x [:out] (fn [z] y))))))

(defmethod make :loop [x owner opts]
  (reify
    om/IWillMount
    (will-mount [_ ]
        )
    om/IRender
    (render [_ ]
            (dom/div
              {}
              #js [
                    (dom/textarea #js {:onChange (fn [e] (let [y (.-value (.-target e))] (om/transact! x [:in] (fn [z] y))))})
                    (dom/button #js {:onClick (fn [e] (put! (:eval-send opts) (pr-str (dissoc (om/value x) :out)) ))} "eval")
                    ;; this means the event handler function must change every time?
                    (.log js/console (:out (om/value x)))
                    (om/build make (get-in x [:out]))
                    (new-loop-creator (:id (om/value x)) (:loop-create opts))
                    ]))))









(defmethod make :default [x]
  (om/component
    (dom/span nil  "DEFAULT" )))



;; how to annotate each expr?
;; for each subexpr need click handler
;; just have generic way of passing the channels to the child components
;; need to extend make to support more args
;; but what about passing to the subchildren?
;; maybe need a combinator/indirection/middleware


(defmethod make :moveable-circle [x]
  (om/component
    (dom/svg #js {:width "300" :height "300"
                  :onClick (fn [e] (let [t (.-target e) ]
                                     (let [p (.createSVGPoint t)]
                                       (aset p "x" (.-clientX e))
                                       (aset p "y" (.-clientY e))
                                       (let [p2 (.matrixTransform p (.inverse (.getScreenCTM t)))]
                                         (om/update! x [:point] (fn [z] [(.-x p2) (.-y p2)])))
                                       )))}

            (dom/circle
              #js {:r "40" :cx ((:point x) 0) :cy ((:point x) 1) :stroke "black" :strokeWidth "3" :fill "red"}


              ""))))


(defn svg-event-coordinate [svgnode e]
  (let [p (.createSVGPoint svgnode)]
    (aset p "x" (.-clientX e))
    (aset p "y" (.-clientY e))
    (let [p2 (.matrixTransform p (.inverse (.getScreenCTM svgnode)))]
      [(.-x p2) (.-y p2)])))


(def mouse-down-chan (chan ))
(def mouse-up-chan (chan))
(def mouse-move-chan (chan ))



(go
  (loop [state :up]
    (let [[val ch]
          (alts! [
                   mouse-down-chan
                   mouse-up-chan
                   mouse-move-chan
                   ])]
       ;(js/alert (str val))
       (cond
         (= mouse-down-chan ch) (recur :down)

         (and (= :down state) (= ch mouse-move-chan))
         (do (om/update! (:x val) [:point] (fn [z] (:p val))) (recur :down))

         (= mouse-up-chan ch) (recur :up)

         :default (recur :up)))))


(defmethod make :draggable-circle [x]
  (reify
    om/IRender
    (-render [_ owner]
      (dom/svg #js {:width "300" :height "300"
                    :ref "thesvg"

                    :onMouseDown (fn [e] (let [t (om/get-node owner "thesvg")]
                                           (let [p2 (svg-event-coordinate t e)]
                                             (put! mouse-down-chan {:p p2 :x x}))))

                    :onMouseUp (fn [e] (let [t (om/get-node owner "thesvg")]
                                           (let [p2 (svg-event-coordinate t e)]
                                             (put! mouse-up-chan {:p p2 :x x}))))

                    :onMouseMove (fn [e] (let [t (om/get-node owner "thesvg")]
                                         (let [p2 (svg-event-coordinate t e)]
                                           (put! mouse-move-chan {:p p2 :x x}))))}

               (dom/circle
                 #js {:r "40" :cx ((:point x) 0) :cy ((:point x) 1) :stroke "black" :strokeWidth "3" :fill "red"}


                 "")))
    )
  )




(comment
  (om/render make x
             {:path [:counters %] :opts {:global x}}

             {:global {:onClick chan :onChange chan}})

  ;; need all these things, or can use bubbling?



  )































