(ns session.client.loop
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [session.client.editor :as editor]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [session.client.make :as m]
    [cljs.core.async :refer [>! <! chan put! sliding-buffer alts!] ]))


(defn new-loop-creator [id chan]
  (dom/button #js {:onClick (fn [e] (put! chan id))} "new" ))





(defmethod m/make :loop [x owner opts]
  (reify
    om/IRender
    (render [_ ]
      (dom/div
        nil
        #js [
              (om/build editor/create-editor (:in x))
              (dom/button #js {:onClick (fn [e]
                                          (put! (:kernel-send opts) (om/allow-reads (om/value (om/read x #(assoc
                                                                                              (dissoc % :out)
                                                                                            :op :eval-request))))))} "eval")

              (om/build m/make (get-in x [:out]))
              (let [id (:id (om/value x))] (dom/button #js {:onClick (fn [e] (put! (:loop-delete opts) id))} "delete"))
              (new-loop-creator (:id (om/value x)) (:loop-create opts))

              ]))))


