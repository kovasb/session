(ns session.system
  (:require
    [om.core :as om]
    [om.dom :as dom]
    [session.io :as io]
    [cljs.reader :as reader]
    [cljs.js :as cljs]
    [session.eval]))



(defn save [service-url app-state state]
  (let [x (update-in @app-state [:loops] (fn [x] (mapv #(dissoc % :output) x)))]
    (io/session-put
      service-url
      x
      (fn [y]
        (let [r (.getResponseText (.-target y))]
          ;(println r)
          (swap!
            app-state
            assoc
            :last-saved
            (:id
              (reader/read-string
                (reader/read-string r)))))))))


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
     :save             (fn [x] (save service-url app-state x))
     :restore          (fn [x]
                         (restore session-base-url app-state x))}))


