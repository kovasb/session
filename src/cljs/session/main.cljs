(ns session.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   goog.net.WebSocket
   cljs.reader
   React
   [subpar.core]
   [session.keymap :as keymap]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   yantra.edn
   yantra.graphics
   yantra.layout
   yantra.controls
   session.session
   session.loop
   session.boot
   session.io
   [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))


(enable-console-print!)


(defn system []
  {:socket (goog.net.WebSocket.)
   :kernel-send (chan)
   :kernel-receive (chan)
   :loop-create (chan)
   :loop-delete (chan)
   :eval-send (chan)
   :eval-receive (chan)
   :host (aget js/window "location" "host")
   :app-state (atom (session.datatypes.Boot.))
   })



(def all-renderers
  (merge
    yantra.edn/edn-renderers
    yantra.graphics/graphics-renderers
    yantra.layout/layout-renderers
    yantra.controls/control-renderers
    session.session/session-renderers
    session.loop/loop-renderers
    session.boot/boot-renderers

    ))

(defn builder [x y]
  (om/build (all-renderers
              (type (om/value x)))
            x y))


(defn ^:export start! [system]

  (aset (.-keyMap js/CodeMirror) "subpar" keymap/subpar-keymap)

  (enable-console-print!)

  (.addEventListener (:socket system) goog.net.WebSocket.EventType.MESSAGE
                     (fn [e]
                         (put! (:kernel-receive system) (session.io/read-edn (.-message e)))))

  (let [socket-opened (chan)]

    (.addEventListener (:socket system) goog.net.WebSocket.EventType.OPENED (fn [e] (put! socket-opened true)))
    (.open (:socket system) (str "ws://" (:host system) "/"))

    (go
      ;; wait for socket to open before beginning main loop
      (<! socket-opened)

      (while true
         (let [newin (<! (:kernel-send system))]
           (def t1 (js/Date.))
           (.send (:socket system) (session.io/write-edn newin))))))

  (om/root
    (:app-state system)
    {:builder builder}
    (fn [data]
    (om/component
      (builder data {:opts (dissoc system :app-state)})))
    js/document.body))




(def the-system (system))

(start! the-system)