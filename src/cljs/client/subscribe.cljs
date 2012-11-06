(ns session.client.subscribe
  (:use-macros [cljs-jquery.macros :only [$]]))

(defprotocol ISubscribe
  (receive [this msg]))

(def ws  (new js/WebSocket "ws://localhost:8090/service"))

(def callbacks (atom {}))

(defn subscribe! [id target]
  (swap! callbacks assoc id #(receive target %)))

(aset ws "onmessage"
      (fn [e] (let [data (cljs.reader/read-string (.-data e))]
           ((@callbacks (:id data))
            data))))

(defn send! [msg]
  (.send ws (pr-str msg)))
