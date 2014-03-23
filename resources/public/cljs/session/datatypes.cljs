(ns session.datatypes)

(defrecord Session [loops])

(defrecord Loop [id in out])

(defrecord Boot [])

(defrecord SessionObject [type id])


