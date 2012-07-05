(ns session.server
  (:use [noir.fetch.remotes]
        [client.macros]
        [noir.core]
        [clojure.java.io :only [resource]])
  (:require [noir.server :as server]
            ;;[himera.server.cljs :as himera]
            [cljs.compiler :as comp]
            [noir.cljs.core :as cljs]
            ;;[ring.util [response :as response]]
            [noir.response :as response]
            [ring.middleware [multipart-params :as mp]]
            [cemerick.drawbridge :as db])
  (:import (java.io Writer)))

(server/load-views-ns 'session.views)

(defmethod print-method Object [o, ^Writer w]
  (.write w " \"#<")
  (.write w (.getSimpleName (class o)))
  (.write w " ")
  (.write w (str o))
  (.write w ">\""))

(defn table-row [x]  [:tr (map #(vector :td (str %)) x)])

(defn table [x]
  (with-meta
    [:table.table.table-bordered.table-striped.table-condensed (map table-row x)]
   {:view :dom}
))

(defn bar-chart [x] (with-meta x {:view :barchart}))

(def cljs-options {:simple {:src-dir "src/cljs/"}   :advanced {:externs ["externs/jquery.js"]}})

(defremote eval-expr [x]
  (try (eval x)
       (catch Exception e (println "eval-expr: " x))
       ))

(defremote eval-expr-string [x]
  {:status 200 :result (eval (read-string x))})

(defremote testr [x] (+ 1 x))


(defremote compile-expr-string [x]
  (try
    (let [expr (read-string x)] {:result
                                (binding [comp/*cljs-ns* 'session.client.main]
                                  (let [env {:ns (@comp/namespaces comp/*cljs-ns*)
                                             :uses #{'cljs.core}
                                             :context :statement
                                             :locals {}}]

                                    (comp/with-core-cljs (comp/emits (comp/analyze env expr)))))
                                 :status 200})
    (catch Exception e (println (str "compiler-expr-string: " x)))
    ))

;;(defremote compile-expr-string [x]   (himera/compilation (read-string x) :simple true))

(defn tag-html [x] (with-meta x {:view :dom} ))
(defn tag-test [x] {:foo x})

(defn tag-session [x]
  (let [loops (:loops x)]
    `(session.client.session/Session. ~x)))

(defn tag-loop [x]
  (let [in (:input x) out (:output x)]
    `(session.client.loop/Loop. ~(assoc x :input `(atom ~in) :output `(atom  (quote ~out))) )))

(defn tag-subsession [x]
  (let [loops (:loops x)]
    `(session.client.subsession/Subsession. ~(assoc x :loops `(atom ~loops)))))


(set! *data-readers* {'session/loop #'tag-loop 'session/session #'tag-session 'session/subsession #'tag-subsession 'ui/test #'tag-test})

(defremote store-session [id data]
  (let [filename (str "resources/public/sessions/" id ".clj")]
    (spit filename data)
    (str "sessions" id ".clj")))

(defremote get-session [id]
  (let [filename (str "public/sessions/" id ".clj")]
    (compile-expr-string (slurp (resource filename)))))

(defpage [:post "/upload"] x
  ; do some work
  ;;(println x)
  (:result (compile-expr-string (slurp (:tempfile (first (:files x))))))

  )

(defpage [:post "/download"] x
  ;;(println x)
  (response/set-headers {"Content-Disposition" "attachment; filename=\"session.clj\""}
                        (:session-data x)))

(def psuedo-session-store (atom {}))

(defn wrap-with-my-own-non-cookie-based-sessions
  [handler]
  (fn [req]
    (let [session-id (get-in req [:headers "x-session"]) 
          result
          (handler
           (if session-id
             (assoc req
               :session (get @psuedo-session-store
                             session-id))
             req))]
      (if (:session result)
        (let [id (or session-id
                     (str (java.util.UUID/randomUUID)))]
          (swap! psuedo-session-store assoc id
                 (:session result))
          (update-in (dissoc result :session)
                     [:headers]
                     assoc "X-Session"
                     id))
        result))))

(defn -main [& m]
  (binding [*print-meta* true]
    (let [mode (keyword (or (first m) :dev))
         port (Integer. (get (System/getenv) "PORT" "8090"))]
    ;;  (cljs/start mode cljs-options)
      (server/add-middleware
       (fn [handler] (fn [req]
                      (binding [
                                *ns* (the-ns 'session.server)
                                *data-readers* {'session/loop #'tag-loop 'session/subsession #'tag-subsession 'session/session #'tag-session 'ui/test #'tag-test 'ui/html #'tag-html}
                                *print-meta* true] (handler req)))))
      (server/add-middleware mp/wrap-multipart-params)
      (server/add-middleware
       (fn [handler]
         (fn [req]
           (if (= "/repl" (:uri req))
             ((-> (db/ring-handler)
                  ring.middleware.keyword-params/wrap-keyword-params
                  ring.middleware.nested-params/wrap-nested-params
                  ring.middleware.params/wrap-params
                  mp/wrap-multipart-params
                  wrap-with-my-own-non-cookie-based-sessions)
              req)
             (handler req)))))
     (server/start port {:mode mode
                         :ns 'htmlrepl}))))
