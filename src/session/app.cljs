(ns session.app
  (:require
    [om.core :as om]
    [om.dom :as dom]
    [session.loop :as loop]))


(defn create-manager [data owner]
  (reify om/IRender
    (render [_]
      (dom/div
        nil
        #_(str "last: " (:last-saved data))
        (dom/input
          #js {:type    "submit"
               :value   "save"
               :onClick (fn [x]
                          ((om/get-shared owner :save)))})
        #_(dom/input
          #js {:type    "submit"
               :value   "restore"
               :onClick (fn [x]
                          ((om/get-shared owner :restore)
                            (:last-saved data)))})))))


(defn create-loops [data owner]
  (reify om/IRender
    (render [_]
      (dom/div
        nil
        (om/build create-manager data)
        (apply dom/div nil
          (map #(om/build loop/create-loop % {:react-key (:id %)})
            (:loops data)))))))


(defn main [system element-id]
  (om/root
    create-loops
    (:app-state system)
    {:target (. js/document (getElementById element-id))
     :shared system}))



