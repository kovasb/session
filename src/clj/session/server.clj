(ns session.server
  (:use [noir.fetch.remotes])
  (:require [noir.server :as server]
            ;;[himera.server.cljs :as himera]
            [cljs.compiler :as comp]
            [noir.cljs.core :as cljs]
            )
  )

(server/load-views-ns 'session.views)

(def cljs-options {:simple {:src-dir "src/cljs/"}   :advanced {:externs ["externs/jquery.js"]}})

(defremote eval-expr [x]
  (eval x))

(defremote eval-expr-string [x]
  (eval (read-string x)))


(defremote compile-expr-string [x]
  (let [expr (read-string x)] {:result
    (binding [comp/*cljs-ns* 'session.client.main]
      (let [env {:ns (@comp/namespaces comp/*cljs-ns*)
                 :uses #{'cljs.core}
                 :context :expr
                 :locals {}}]

        (#(comp/emits (comp/analyze % %2)) env expr)))
    :status 200}))

;;(defremote compile-expr-string [x]   (himera/compilation (read-string x) :simple true))

(defn tag-loop [x] ^{:view :loop} x)
(defn tag-session [x] ^{:view :session} x)
(defn tag-html [x] (with-meta x {:view :dom} ))
(defn tag-test [x] {:foo x})

(set! *data-readers* {'ui/loop #'tag-loop 'ui/session #'tag-session 'ui/test #'tag-test})

(defn -main [& m]
  (binding [*print-meta* true]
    (let [mode (keyword (or (first m) :dev))
         port (Integer. (get (System/getenv) "PORT" "8090"))]
      (cljs/start mode cljs-options)
      (server/add-middleware (fn [handler] (fn [req]
                                            (binding [
                                                      *data-readers* {'ui/loop #'tag-loop 'ui/session #'tag-session 'ui/test #'tag-test 'ui/html #'tag-html}
                                                      *print-meta* true] (handler req)))))
     (server/start port {:mode mode
                         :ns 'htmlrepl}))))
