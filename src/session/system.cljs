(ns session.system
  (:require
    [om.core :as om]
    [om.dom :as dom]
    [session.io :as io]
    [cljs.reader :as reader]
    [cljs.js :as cljs]
    [session.eval]
    [cljs-uuid-utils.core :as uuid]))



(defn save [service-url app-state]
  (let [x (update-in @app-state [:loops] (fn [x] (mapv #(dissoc % :output) x)))]
    (io/session-put
      service-url
      x
      (fn [y]
        (let [r (.getResponseText (.-target y))
              id (:id
                   (reader/read-string
                    (reader/read-string r)))]
          ;(println r)
          (swap!
            app-state
            assoc
            :last-saved
            id)
          (set! js/window.location.hash (str "#/sessions/" id))
          )))))


(defn restore [session-base-url state id]
  (let [x (io/session-get
            session-base-url
            id
            (fn [y]
              (reset!
                state
                (reader/read-string
                  (.getResponseText (.-target y))))))]
    x))


(defn new-loop
  ([] (new-loop (uuid/uuid-string (uuid/make-random-uuid))))
  ([uuid]
    {:id uuid :input {:text ""} :output {:text ""}}))


(defn loop-insert [app-state id]
  (if (= id :last)
    (swap! app-state
      #(update-in
        %
        [:loops]
        (fn [loops]
          (conj loops (new-loop)))))
    (swap! app-state
      #(update-in
        %
        [:loops]
        (fn [loops]
          (let [x (split-with (fn [l] (not= id (:id l))) loops)]
            (vec
             (concat (first x) [(new-loop)] (last x)))))))))

(defn loop-delete [app-state id]
  (swap! app-state
    #(update-in
      %
      [:loops]
      (fn [loops]
        (filterv (fn [l] (not= id (:id l))) loops)))))


(defn system []
  (let [env (cljs/empty-state)
        session-base-url "http://session-repl.com/sessions/"
        service-url "https://m06zrogt30.execute-api.us-east-1.amazonaws.com/prod/SessionService"
        app-state (atom {:loops [{:id "1" :input {:text ""} :output {:data ""}}]})]
    {:app-state        app-state
     :session-base-url session-base-url
     :service-url      service-url
     :compiler-state   env
     :codemirror-map   (atom {})

     :eval             (fn [x] (session.eval/eval-str env x))
     :save             (fn [] (save service-url app-state))
     :restore          (fn [x]
                         (restore session-base-url app-state x))
     :loop-insert    #(loop-insert app-state %)
     :loop-delete     #(loop-delete app-state %)}))


