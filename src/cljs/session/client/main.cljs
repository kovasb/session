(ns session.client.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   goog.net.WebSocket
   cljs.reader
   React
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [session.client.make :as m]
   [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))





(def host
  (aget js/window "location" "host"))




(enable-console-print!)



(comment
  (def app-state
   (atom ["asf" 2 [1 2 3] {:tag      :mirror-textarea
                           :textarea {:tag :textarea :value "asdf"}}]
         )))

(comment (def app-state (atom ["asdfasdfasasdfasdfasdfasdfasdfasfdasdfasdfadfasdf"
                               {:tag :track-onClick :data [[1] [2 3]] :last-path [1]}
                               ])))

(comment )

(comment
  (def app-state (atom ["asdasasdfasdfasdfasdfasdfasfdasdfadfasdfa" {:tag :draggable-circle :point [50 50]}
                       ])))

(def recorded (atom []))

(comment
  (add-watch app-state ::recorded
            (fn [_ _ _ new] (swap! recorded conj new))))

(defn ^:export start []

  (let [c (chan (sliding-buffer 1))]
    (om/root
     app-state
     (fn [data]
       (om/component
         (om/build m/make data {:opts {:global {:handlers {:onClick c}}}})))
     js/document.body)))



(def eval-send-chan (chan))
(def eval-receive-chan (chan))
(def loop-create-chan (chan))


(def the-socket (goog.net.WebSocket.))

(.addEventListener the-socket goog.net.WebSocket.EventType.OPENED
                   (fn [e]
                     (.log js/console "OPENED")))

(.addEventListener the-socket goog.net.WebSocket.EventType.MESSAGE
                   (fn [e]
                     (.log js/console e)
                     (put! eval-receive-chan (cljs.reader/read-string (.-message e)))))

(.open the-socket (str "ws://" host "/"))




(go (while true
      (let [newin (<! eval-send-chan)]
        (.log js/console (str newin))
        (.send the-socket newin)
        )))


(def app-state (atom {:tag :session
                      :loops [{:tag :loop :id 1 :in "a" :out "5"}  ]
                      :loop-create loop-create-chan
                      :eval-send eval-send-chan
                      :eval-receive eval-receive-chan}))




(start)




(comment
  (let [socket (goog.net.WebSocket.)]




   ;(.send socket "sup?")

   (.addEventListener socket goog.net.WebSocket.EventType.OPENED
                      (fn [e]
                        (js/alert "OPENED")
                        (.send socket "whaa")
                        ))

   (.addEventListener socket goog.net.WebSocket.EventType.MESSAGE
                      (fn [e]
                        (.log js/console e)
                        (.send socket "sup?")
                        (.send socket "yeah.")))

   (.open socket (str "ws://" host "/"))

   ))

