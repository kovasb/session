(ns session.boot
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [session.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))





(defn show-index [cursor owner opts]
  (dom/ul nil
          (into-array
            (map
              (fn [elt]
                (dom/li nil
                        (dom/a #js {:href "#"
                                    :onClick
                                          (fn [e]
                                            (put! (:kernel-send opts)
                                                  {:op :connect-session :index/id (:index/id elt)}))}
                               (if (get-in elt [:index/name])
                                 (get-in elt [:index/name])
                                 (.-uuid (get-in elt [:index/id]))
                                 )
                               )))
              (:session-list (om/value cursor))))))




(def
  boot-renderers
  {dt/Boot
    (let [session-connect-chan (chan)]
      (fn [cursor owner opts]
       (reify
         om/IWillMount
         (will-mount [_]
           (go
             (>! (:kernel-send opts) {:op :list-sessions})

             (let [res (<! (:kernel-receive opts))]
               ;; update data so that render can show available sessions
               (om/update! cursor (fn [y z] (assoc y :session-list res)))

               ; (<! session-connect-chan)
               ; (>! (:kernel-send opts) {:op :connect-session :session :default})

               (let [res2 (<! (:kernel-receive opts))]
                 (om/update! cursor (fn [y z] z) res2)))))
         om/IRender
         (render [_]
           (if (:session-list (om/value cursor))
             (dom/div nil
               (dom/button #js {:onClick
                                 (fn [e]
                                   (put! (:kernel-send opts) {:op :create-session}))}
                           "new session")

               (show-index cursor owner opts))

             (dom/div #js {:key "initial-load"} "LOADING"))))))})








