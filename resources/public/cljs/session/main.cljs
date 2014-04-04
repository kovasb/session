(ns session.main
  (:import goog.History
           goog.history.EventType)
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [secretary.core :as secretary :include-macros true :refer [defroute]]
   [goog.events :as events]
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
   yantra.plot
   yantra.dom
   session.session
   session.loop
   session.boot
   session.io
   [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))



(enable-console-print!)

(defn new-id []
  (letfn [(f [] (.toString (rand-int 16) 16))
          (g [] (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))]
    (str (.append (goog.string.StringBuffer.)
                  (f) (f) (f) (f) (f) (f) (f) (f) "-" (f) (f) (f) (f)
                  "-4" (f) (f) (f) "-" (g) (f) (f) (f) "-"
                  (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f) (f)))))

(defn system []
  {:history (History.)
   :socket (goog.net.WebSocket.)
   :kernel-send (chan)
   :kernel-receive (chan)
   :loop-create (chan)
   :loop-delete (chan)
   :eval-send (chan)
   :eval-receive (chan)
   :host (aget js/window "location" "host")
   :app-state (atom (assoc (session.datatypes.Boot.)
                      :new-session (let [uuid (new-id)]
                                     {:id uuid :name uuid})
                      ))
   })

(def all-renderers
  (merge
    yantra.edn/edn-renderers
    yantra.graphics/graphics-renderers
    yantra.layout/layout-renderers
    yantra.controls/control-renderers
    yantra.plot/plot-renderers
    yantra.dom/dom-renderers
    session.session/session-renderers
    session.loop/loop-renderers
    session.boot/boot-renderers

    ))

(defn builder [x y]
  (om/build (all-renderers
              (type (om/value x)))
            x y))

(defn builder-raw [t x y]
  (om/build (all-renderers t) x y))


(secretary/set-config! :prefix "#")

;; bug workaround for secretary
(defroute home-path "/" [] nil)


(def ^:private SafePure
  (let [default-render (:render om/pure-methods)]
    (js/React.createClass
     (om/specify-state-methods!
       (clj->js
         (assoc om/pure-methods
           :render (fn [] (this-as this
                                   (try (.call default-render this)
                                   (catch :default e (dom/span nil "Render error")))))))))))


(defn safe-pure [obj] (SafePure. obj))

(defn safe-render
  ([data owner opts]
   (om/build*
     data
     owner
     (assoc opts :ctor safe-pure))))




(defn ^:export start! [system]

  (goog.events/listen (:history system) EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto (:history system) (.setEnabled true))

  (aset (.-keyMap js/CodeMirror) "subpar" keymap/subpar-keymap)

  (enable-console-print!)

  (.addEventListener (:socket system) goog.net.WebSocket.EventType.MESSAGE
                     (fn [e]
                       (let [msg (session.io/read-edn (.-message e))]
                         ;; total hack to get url to match that of a newly created session
                         ;; problem is b/c hard to control when changing the URL results in secretary dispatching, or not
                         (when (= :display-session (:op msg))
                           (.log js/console "displaying a session")
                           (doto (:history system) (.setEnabled false))
                           (.setToken (:history system) (str "/sessions/" (.-uuid (get-in msg [:session :meta :id]))) )

                           )
                         (put! (:kernel-receive system) msg)
                         ;; results in an infinite loop:
                         ;; (doto (:history system) (.setEnabled true))
                         )))

  (let [socket-opened (chan)]

    (.addEventListener (:socket system) goog.net.WebSocket.EventType.OPENED (fn [e] (put! socket-opened true)))
    (.open (:socket system) (str "ws://" (:host system) "/"))

    (go
      ;; wait for socket to open before beginning main loop
      (<! socket-opened)

      (while true
         (let [newin (<! (:kernel-send system))]
           (.send (:socket system) (session.io/write-edn newin))))))





  (om/root
    (fn [data owner]
    (reify
      om/IRender
      (render [_]
        (builder data {:opts (dissoc system :app-state)}))))
    (:app-state system)
    {:shared {:builder builder :builder-raw builder-raw}
     :target js/document.body
     :instrument safe-render}))




(def the-system (system))

(defroute sessions-path "/sessions/:uuid" [uuid]
          (.log js/console "load session from url")
          (put! (:kernel-send the-system)
                {:op :connect-session :index/id uuid}))





(start! the-system)