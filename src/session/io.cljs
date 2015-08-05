(ns session.io
  (:require [goog.net.XhrIo :as xhr]))

(defn session-get [session-base id callback]
  (xhr/send
    (str session-base id)
    callback
    "GET"
    ""
    #js {}))


(defn session-put [service-url data callback]
  (xhr/send
    service-url
    callback
    "POST"
    (.stringify js/JSON #js {"edn" (pr-str data)})
    #js {}))


(comment
  (session-get
    "3153413548"
    (fn [x] (println (.getResponseText (.-target x)))))

  (session-put
    {:foo "foo"}
    (fn [x] (println (.getResponseText (.-target x)))))
  )