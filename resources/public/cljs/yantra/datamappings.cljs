(ns yantra.datamappings
  (:require [yantra.datatypes :as dt]))


(def data-mappings
  [{:record dt/Slider :tag "yantra.controls/Slider"}
   {:record dt/Column :tag "yantra.layout/Column"}
   {:record dt/Graphics :tag "yantra.graphics/Graphics"}
   {:record dt/Point :tag "yantra.graphics/Point"}
   {:record dt/Line :tag "yantra.graphics/Line"}
   {:record dt/Disk :tag "yantra.graphics/Disk"}
   {:record dt/Rectangle :tag "yantra.graphics/Rectangle"}
   {:record dt/Style :tag "yantra.graphics/Style"}
   {:record dt/ListLinePlot :tag "yantra.plot/ListLinePlot"}
   {:record dt/BarChart :tag "yantra.plot/BarChart"}
   {:record dt/HTMLElement :tag "yantra.dom/HTMLElement"}])

