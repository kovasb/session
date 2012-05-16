(ns session.client.mvc
  (:use-macros [cljs-jquery.macros :only [$]]))

(defprotocol IMVC
  (view [this])
  (control [this viewobject])
  )

(defmulti control2 #(identity (:view (meta %))))

(defmethod control2 :default nil)

(defmulti view2 #(identity (:view (meta %))))

(defmethod view2 :dom [arg] ($ arg))



(defn jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (.-strobj (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (jsObj v)]
                               [k v])))
                         obj))))

;;(reshape-categorical-data [[25 "f" 1] [35 "f" 1] [45 "f" 1] [25 "m" 1] [35 "m" 3] [45 "m" 1]])

(defn reshape-categorical-data [d]
  (let [bins (distinct (map first d))
        categories (distinct (map #(nth % 1) d))
        value-map (into {} (map #(vector [(nth % 0) (nth % 1)] (last %)) d))]
    {:data
     (map
     (fn [c]
       (map #(value-map [% c] 0) bins)
       )
     categories)
     :categories categories
     :bins bins
     }))


(defn insertBarChart [data graphicsDivID]
  (new (.-Chart js/Highcharts)
       (jsObj
        {
         :chart {
                 :defaultSeriesType "bar"
                 :renderTo  graphicsDivID}
         :xAxis  {
                  :categories (to-array (map str (:bins data)))}
         :series (to-array (map #(jsObj {:name %1 :data (to-array %2)})  (:categories data)  (:data data)))
         })))


(defmethod view2 :barchart [arg]
  (let [d (reshape-categorical-data arg)
        elt (aget ($ [:div {:style "width:200px;height:200px"} ""]) 0)
        ]
    (insertBarChart d elt)
    elt))



(defmethod view2 :default [arg]
  (cond
   (instance? js/Element arg) arg
   (instance? js/jQuery arg) arg
   true (pr-str arg)))


(defn render [m] (let [v (view m)] (control m v) v))
