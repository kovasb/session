(ns yantra.edn
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

(extend-type boolean
  ICloneable
  (-clone [n] (js/Boolean. n)))


(defn render-sequential [begin render-one sep end sequence]
  (dom/span
    nil
    (into-array
      (concat
        [begin]
        (interpose sep (mapv render-one sequence))
        [end]
        ))))



(deftype SequentialCursor [value state path]
  ISequential
  IDeref
  (-deref [this]
    (if-not om/*read-enabled*
      (get-in @state path)
      (throw (js/Error. (str "Cannot deref cursor during render phase: " this)))))
  IWithMeta
  (-with-meta [_ new-meta]
    (om/check
      (SequentialCursor. (with-meta value new-meta) state path)))
  IMeta
  (-meta [_] (om/check (meta value)))
  om/IValue
  (-value [_] (om/check value))
  om/ICursor
  (-path [_] (om/check path))
  (-state [_] (om/check state))
  om/ITransact
  (-transact! [_ f]
    (swap! state f path))
  ICloneable
  (-clone [_]
    (SequentialCursor. value state path))
  ICounted
  (-count [_]
    (om/check (-count value)))
  ICollection
  (-conj [_ o]
    (om/check (SequentialCursor. (-conj value o) state path)))
  ISeqable
  (-seq [this]
    (om/check
      (when (pos? (count value))
        (map (fn [v i] (om/to-cursor v state (conj path i))) value (range)))))
  IStack
  (-peek [_]
    (om/check (om/to-cursor (-peek value) state path)))
  (-pop [_]
    (om/check (om/to-cursor (-pop value) state path)))
  IEquiv
  (-equiv [_ other]
    (om/check
      (if (om/cursor? other)
        (= value (om/-value other))
        (= value other))))
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (om/check (-pr-writer value writer opts))))


(defn extend-sequential-cursor [type]
  (extend-type type
    om/IToCursor
    (-to-cursor [value state] (SequentialCursor. value state []))
    (-to-cursor [value state path] (SequentialCursor. value state path))
    ))

(map extend-sequential-cursor
     #{
       LazySeq IndexedSeq RSeq PersistentTreeMapSeq NodeSeq
       List ArrayNodeSeq Cons EmptyList ChunkedCons  KeySeq ValSeq PersistentArrayMapSeq Range
       })


(defn thread-sets [x]
  (reduce
    (fn [m [k v]]
      (if (set? k)
        (reduce #(assoc %1 %2 v) m k)
        (assoc m k v)))
    {}
    x))


(def edn-renderers
  (thread-sets
    {
    nil (fn [cursor owner opts] (dom/span nil "nil"))
    UUID (fn [cursor owner opts] (dom/span nil (pr-str (om/value cursor))))

    js/String
     (fn [cursor owner opts]
       (reify
         om/IRender
         (render [_] (dom/span nil (pr-str (str (om/value cursor)))))))
    js/Number
     (fn [cursor owner opts]
       (reify
         om/IRender
         (render [_] (dom/span nil (str (om/value cursor))))))
    js/Boolean
      (fn [cursor owner opts]
        (reify
          om/IRender
          (render [_] (dom/span nil (str (om/value cursor))))))
    Keyword
     (fn [cursor owner opts]
       (reify
         om/IRender
         (render [_] (dom/span nil (str (om/value cursor))))))
    Symbol
     (fn [cursor owner opts]
       (reify
         om/IRender
         (render [_] (dom/span nil (str (om/value cursor))))))
    ;; seqs
    #{LazySeq IndexedSeq RSeq PersistentTreeMapSeq NodeSeq
      List ArrayNodeSeq Cons EmptyList ChunkedCons ChunkedSeq KeySeq ValSeq PersistentArrayMapSeq Range
      }
     (fn [cursor owner opts]
       (let [builder (om/get-shared owner :builder)]
         (reify
           om/IRender
           (render [_]
             (render-sequential "(" #(builder %) " " ")" cursor)))))
    ;; vectors
    #{PersistentVector Subvec BlackNode RedNode}
     (fn [cursor owner opts]
       (let [builder (om/get-shared owner :builder)]
         (reify

           om/IRender

           (render [_]

             (render-sequential "[" #(builder %) " " "]" cursor)))))
    ;; sets
    #{PersistentHashSet PersistentTreeSet}
     (fn [cursor owner opts]
       (let [builder (om/get-shared owner :builder)]
         (reify
           om/IRender
           (render [_]
             (render-sequential "#{" #(builder %) " " "}" cursor)))))
    ;; maps
    #{PersistentArrayMap PersistentHashMap PersistentTreeMap}
     (fn [cursor owner opts]
       (let [builder (om/get-shared owner :builder)]
         (reify
           om/IRender
           (render [_]
             (render-sequential "{"
                                #(dom/span
                                  nil
                                  #js [(builder (key %)) " " (builder (val %) {:opts opts})])
                                ", "
                                "}"
                                cursor)))))

    }))


