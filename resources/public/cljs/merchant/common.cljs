(ns merchant.common
  )


(defprotocol ITaggedValue
  (-tag [this])
  (-value [this]))

(defprotocol IValueWriter
  (write [this o])
  (write-nil [this o])
  (write-boolean [this o])
  (write-symbol [this o])
  (write-keyword [this o])
  (write-integer [this ^Long o])
  (write-float [this o])
  (write-string [this o])
  (write-character [this o])
  (write-list [this o])
  (write-vector [this o])
  (write-set [this o])
  (write-map [this o])
  (write-tagged [this tag write-fn o]))

(def default-type-map
  {nil :nil

   js/String :string
   js/Number :float
   Keyword :keyword
   Symbol :symbol
   LazySeq :list
   IndexedSeq :list
   RSeq :list
   ;;PersistentQueue
   PersistentTreeMapSeq :list
   NodeSeq :list
   ArrayNodeSeq :list
   List :list
   Cons :list
   EmptyList :list
   PersistentVector :vector
   ChunkedCons :list
   ChunkedSeq :list
   Subvec :vector
   BlackNode :vector
   RedNode :vector
   ObjMap :map
   KeySeq :list
   ValSeq :list
   PersistentArrayMapSeq :list
   PersistentArrayMap :map
   PersistentHashMap :map
   PersistentTreeMap :map
   PersistentHashSet :set
   PersistentTreeSet :set
   Range :list

   })

(def default-dispatch-map
  {:nil write-nil
   :boolean write-boolean
   :symbol write-symbol
   :keyword write-keyword
   :integer write-integer
   :float write-float
   :string write-string
   :character write-character
   :list write-list
   :vector write-vector
   :set write-set
   :map write-map
   :tagged write-tagged})


(defn str-date [obj]
  (let [normalize (fn [n len]
                    (loop [ns (str n)]
                      (if (< (count ns) len)
                        (recur (str "0" ns))
                        ns)))]
    (str
     (.getUTCFullYear obj) "-"
     (normalize (inc (.getUTCMonth obj)) 2) "-"
     (normalize (.getUTCDate obj) 2) "T"
     (normalize (.getUTCHours obj) 2) ":"
     (normalize (.getUTCMinutes obj) 2) ":"
     (normalize (.getUTCSeconds obj) 2) "."
     (normalize (.getUTCMilliseconds obj) 3) "-"
     "00:00")))


(def default-tag-map
  {js/Date {:tag "inst" :write-fn #(write %1 (str-date %2))}
   UUID {:tag "uuid" :write-fn #(write %1 (str (.-uuid %2)))}})


(defrecord TaggedValue [tag value]
  ITaggedValue
  (-tag [this] tag)
  (-value [this] value))


