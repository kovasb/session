(ns session.client.readermap
  (:require
   [cljs.reader :as reader]
   [session.client.editor :as editor]
   [session.client.loop :as loop]
   [session.client.session :as session]
   [session.client.mvc :as mvc]
   [session.client.subsession :as subsession]
   [session.client.hiccup :as hiccup]
   [session.client.plot :as plot]))

(defn register-tag-parsers []
  (reader/register-tag-parser! "flot" plot/series-plot)
  (reader/register-tag-parser! "table" plot/table)
  (reader/register-tag-parser! "hiccup" (fn [x] (hiccup/Hiccup. x) ))
  (reader/register-tag-parser! "series-plot" plot/series-plot)
  (reader/register-tag-parser! "timeseries-plot" plot/timeseries-plot)
  (reader/register-tag-parser! "loop"
                               (fn [x] (loop/Loop. (assoc x
                                                    :input (atom (:input x))
                                                    :output (atom (:output x)))
                                                  (atom nil))))
  (reader/register-tag-parser! "session"
                               (fn [x] (session/Session. x (atom nil)) ))
  (reader/register-tag-parser! "subsession"
                               (fn [x] (subsession/Subsession. (assoc x :loops (atom (:loops x))) (atom nil)))))
