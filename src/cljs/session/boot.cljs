(ns session.boot
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [session.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))


;; on mount, send msg to kernel to request the session
;; when receive the session, set the app state to be the session
;; future work: allow option to browser, load existing sessions



(def
  boot-renderers
  {dt/Boot
   (fn [cursor owner opts]
     (reify
       om/IWillMount
       (will-mount [_]
         (go
           (>! (:kernel-send opts) {:op :connect-session :session :default})

           (let [res (<! (:kernel-receive opts))]
             (om/update! cursor (fn [y z] z) res))))
       om/IRender
       (render [_]
         (dom/div #js {:key "initial-load"} "LOADING"))))})








