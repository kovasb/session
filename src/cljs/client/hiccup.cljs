(ns session.client.hiccup
  (:require
   [session.client.mvc :as mvc]
   [session.client.editor :as editor]
   [cljs.reader :as reader])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm])
  )

(deftype Hiccup [model]
     IPrintable
     (-pr-seq [a opts]
       (concat  ["#hiccup "] (-pr-seq model opts) ""))
     session.client.mvc/IMVC
     (view [this] ($ model))
     (control [this] viewobject))

(reader/register-tag-parser! "hiccup" (fn [x] (Hiccup. x) ))
