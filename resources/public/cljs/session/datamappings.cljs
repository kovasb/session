(ns session.datamappings
  (:require
    [session.datatypes :as dt]))


(def data-mappings
  [{:record dt/SessionObject :tag "session/Object"}
   {:record dt/Loop :tag "session/Loop"}
   {:record dt/Session :tag "session/Session"}])




