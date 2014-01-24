(ns session.client.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   goog.net.WebSocket
   cljs.reader
   React
   [subpar.core]
   [session.client.keymap :as keymap]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [session.client.make :as m]
   session.client.session
   session.client.loop
   session.client.boot
   [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))


(defn system []
  {:socket (goog.net.WebSocket.)
   :kernel-send (chan)
   :kernel-receive (chan)
   :loop-create (chan)
   :loop-delete (chan)
   :eval-send (chan)
   :eval-receive (chan)
   :host (aget js/window "location" "host")
   :app-state (atom {:tag :boot})
   })


;; hack for https://groups.google.com/forum/#!topic/clojurescript/zvcl1GAn8B0
(def t1 (fn [e] 1))
(def t2 (fn [e] 2))
(defn lookup-tag [x]
  ({:session t1 :boot t2} x))

(defn ^:export start! [system]

  (enable-console-print!)

  (.addEventListener (:socket system) goog.net.WebSocket.EventType.MESSAGE
                     (fn [e]
                       (.log js/console e)
                       (def t2 (js/Date.))
                       (put! (:kernel-receive system) (cljs.reader/read-string (.-message e)))))

  (let [socket-opened (chan)]

    (.addEventListener (:socket system) goog.net.WebSocket.EventType.OPENED (fn [e] (put! socket-opened true)))
    (.open (:socket system) (str "ws://" (:host system) "/"))

    (go
      ;; wait for socket to open before beginning main loop
      (<! socket-opened)

      (while true
         (let [newin (<! (:kernel-send system))]
           (.log js/console (str newin))
           (def t1 (js/Date.))
           (.send (:socket system) (pr-str newin))))))

  (om/root
    (:app-state system)
    (fn [data]
    (om/component
      (let [c (om/build m/make data {:opts (dissoc system :app-state)})]
          ;; hack for https://groups.google.com/forum/#!topic/clojurescript/zvcl1GAn8B0
        (set! (.-constructor c) (lookup-tag (:tag data)))
        c)))
    js/document.body))



(def the-system (system))

(start! the-system)