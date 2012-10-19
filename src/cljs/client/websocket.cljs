(ns session.client.websocket
  (:require 
  	    ;;[logger :as log]
            [goog.events :as events]
            [goog.net.WebSocket :as websocket]
            [goog.net.WebSocket.EventType :as websocket-event]
            [goog.net.WebSocket.MessageEvent :as websocket-message]))

;; WebSocket
(defn create []
  (goog.net.WebSocket.))



(defn configure
  "Configures WebSocket"
  ([soc opened message]
     (configure soc opened message nil))
  ([soc opened message error]
     (configure soc opened message error nil))
  ([soc opened message error closed]
     (let [handler (events/EventHandler.)]
       (.listen handler soc websocket-event/OPENED opened)
       (.listen handler soc websocket-event/MESSAGE
                #(let [payload (.message %)
                       [_ cmd body] (re-matches #"/([^ ]+) (.*)" payload)]
                   (js/alert "websocket" (str "R: " payload))
                   (message cmd body)))
       (when error
         (.listen handler soc websocket-event/ERROR error))
       (when closed
         (.listen handler soc websocket-event/CLOSED closed))
       soc)))

(defn connect!
  "Connects WebSocket"
  [socket url]
  (try
   (.open socket url)
   socket
   (catch js/Error e
     (js/alert "websocket" "No WebSocket supported, get a decent browser."))))

(defn close!
  "Closes WebSocket"
  [socket]
  (.close socket))

(defn emit!
  "Sends a command to server, optionally with message."
  ([socket cmd]
     (emit! socket cmd nil))
  ([socket cmd msg]
     (let [packet (str "/" cmd (when msg (str " " msg)))]
       (js/alert "websocket" (str "T: " packet))
       (.send socket packet))))
