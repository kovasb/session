(ns session.user
  (:use yantra.datatypes
        [criterium.core :only [quick-benchmark benchmark]])
  (:require [datomic.api :as d]))


(declare ^:dynamic *datomic-conn*)

(declare ^:dynamic *reader*)

(defn read-edn [x] (*reader* x))

(defn column [contents] (->Column contents))

(defn graphics [contents] (->Graphics contents))

(defn point [point] (->Point point))

(defn line [points] (->Line points))

(defn disk [point radius] (->Disk point radius))

(defn rectangle [p1 p2] (->Rectangle p1 p2))

(defn style [style prims] (->Style style prims))

(defn list-line-plot
  ([data] (->ListLinePlot data nil))
  ([data opts] (->ListLinePlot data opts)))

(defn bar-chart
  ([data] (->BarChart data nil))
  ([data opts] (->BarChart data opts)))

(defn html-element [tag attributes children]
  (->HTMLElement tag attributes children))







(comment
  (defn read-string [x]
   (*merchant-reader* x)

   ))


