(ns yantra.plot
  (:require
    [yantra.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]))


(defn bar-chart-vega-values [x]
  (mapv (fn [d l] {"x" l "y" d})
    (:data x)
    (:labels (:opts x))))


(defn bar-chart-spec [x]
  { :width 200
    :height 200
    :padding {:top 10 :left 30 :bottom 20 :right 10}
    :data
    [{:name "table"
      :values (bar-chart-vega-values x)}]
    :axes [{:type "x" :scale "x"}
           {:type "y" :scale "y"}]
    :scales
    [{:name "x"
      :type "ordinal"
      :range "width"
      :domain {:data "table"
               :field "data.x"}}
     {:name "y"
      :range "height"
      :nice true
      :domain {:data "table",
               :field "data.y"}}]
    :marks [{:type "rect"
             :from {:data "table"}
             :properties
                   {:enter
                     {:x {:scale "x"
                          :field "data.x"}
                      :width  {:scale "x"
                               :band true
                               :offset -1}
                      :y {:scale "y"
                          :field "data.y"}
                      :y2 {:scale "y"
                           :value 0}}
                    :update {:fill {:value "steelBlue"}}}}]})


(defn list-line-plot-vega-values [x]
  (let [d (:data x)]
    (if-let [f (first d)]
      (if (vector? f)
        (mapv (fn [[x y]] {:x x :y y}) d)
        (vec (map-indexed (fn [i y] {:x i :y y}) d)))
      nil)))


(defn list-line-plot-spec [x]
  { :width 400
    :height 200
    :padding {:top 10 :left 30 :bottom 20 :right 10}
    :data
           [{:name "table"
             :values (list-line-plot-vega-values x)}]
    :axes [{:type "x" :scale "x" :tickSizeEnd 0}
           {:type "y" :scale "y"}]
    :scales
           [{:name "x"
             :type "linear"
             :range "width"
             :domain {:data "table"
                      :field "data.x"}}
            {:name "y"
             :range "height"
             :nice "true"
             :domain {:data "table",
                      :field "data.y"}}]
    :marks [{:type "line"
             :from {:data "table"}
             :properties
                   {:enter
                     {:x {:scale "x" :field "data.x"}
                      :y {:scale "y" :field "data.y"}
                      :stroke {:value "steelBlue"}
                      :strokeWidth {:value 2}}}}]})



(def plot-renderers
  {
    dt/ListLinePlot
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render  [_] (dom/span #js {:ref "theElt"} ""))
        om/IDidUpdate
        (did-update [this prev-props prev-state]
          (.spec vg.parse
                 (clj->js (list-line-plot-spec (om/value cursor)))
                 (fn [chart]
                   (.update (chart #js {:el (om/get-node owner "theElt")})))))

        om/IDidMount
        (did-mount [_]
          (.spec vg.parse
                 (clj->js (list-line-plot-spec (om/value cursor)))
                 (fn [chart]
                   (.update (chart #js {:el (om/get-node owner "theElt")})))))))

    dt/BarChart
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render  [_] (dom/span #js {:ref "theElt"} ""))
        om/IDidUpdate
        (did-update [this prev-props prev-state]
          (.spec vg.parse
                 (clj->js (bar-chart-spec (om/value cursor)))
                 (fn [chart]
                   (.update (chart #js {:el (om/get-node owner "theElt")})))))
        om/IDidMount
        (did-mount [_]
          (.spec vg.parse
                 (clj->js (bar-chart-spec (om/value cursor)))
                 (fn [chart]
                   (.update (chart #js {:el (om/get-node owner "theElt")})))))))




    })