(ns session.client.plot
  (:require [session.client.mvc :as mvc])
  (:use-macros [cljs-jquery.macros :only [$]]))

(defn series-plot [x]
  (let [elt ($ [:div {:style "width:600px;height:200px;position:relative"} ""])]
    (. js/$ (plot elt
                  (array (js-obj "data"  (apply array
                                          (map #(apply array %) (:data x)))))
                  (js-obj "yaxis" (js-obj  "labelWidth" 25 "position" "left") )
                  ;;(js-obj "xaxis" (js-obj "labelWidth" 25))
                  ))
    elt))

(defn timeseries-plot [x]
  (let [elt ($ [:div {:style "width:600px;height:200px;position:relative"} ""])]
    (. js/$ (plot elt
                  (array (js-obj "data"
                                 (apply array
                                       (map #(array (.getTime (first %)) (last %)) (:data x)))))
                  (js-obj
                   "xaxis" (js-obj  "mode" "time" "timeformat" "%y/%m/%d")
                   "yaxis" (js-obj  "labelWidth" 25 "position" "left") )
                  ;;(js-obj "xaxis" (js-obj "labelWidth" 25))
                  ))
    elt))

(defn table [x]
  ($ [:table {:style "width:100%"}
    (map (fn [r] [:tr (map (fn [c] [:td (mvc/render c)] ) r)] )  (:data x))]))
