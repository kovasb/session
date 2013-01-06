(ns session.client.subscribe
  (:require [cljs.reader :as reader]))

(defprotocol ISubscribe
  (receive [this msg]))

(def ws (new js/WebSocket (str "ws://" document.location.host "/service")))

(def callbacks (atom {}))

(defn subscribe! [id target]
  (swap! callbacks assoc id #(receive target %)))

(aset ws "onmessage"
      (fn [e] (let [data (reader/read-string (.-data e))]
                ((@callbacks (:id data))
                 data))))

(defn send! [msg]
  (.send ws (pr-str msg)))
