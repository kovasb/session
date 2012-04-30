(ns session.server
  (:use [noir.fetch.remotes])
  (:use [client.macros])
  (:use [noir.core])
  (:require [noir.server :as server]
            ;;[himera.server.cljs :as himera]
            [cljs.compiler :as comp]
            [noir.cljs.core :as cljs]
            ;;[ring.util [response :as response]]
            [noir.response :as response]
            [ring.middleware [multipart-params :as mp]]
            )
  )

(server/load-views-ns 'session.views)

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
                                             :context :expr
                                             :locals {}}]

                                    (#(comp/emits (comp/analyze % %2)) env expr)))
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
    `(session.client.loop/Loop. ~(assoc x :input `(atom ~in) :output `(atom  ~out)) )))

(defn tag-subsession [x]
  (let [loops (:loops x)]
    `(session.client.subsession/Subsession. ~(assoc x :loops `(atom ~loops)))))


(set! *data-readers* {'session/loop #'tag-loop 'session/session #'tag-session 'session/subsession #'tag-subsession 'ui/test #'tag-test})

(defremote store-session [id data]
  (let [filename (str "resources/public/sessions/" id ".clj")]
    (spit filename data)
    (str "sessions" id ".clj")))

(defremote get-session [id]
  (let [filename (str "resources/public/sessions/" id ".clj")]
    (compile-expr-string (slurp filename))))

(defpage [:post "/upload"] x
  ; do some work
  ;;(println x)
  (:result (compile-expr-string (slurp (:tempfile (first (:files x))))))

  )

(defpage [:post "/download"] x
  ;;(println x)
  (response/set-headers {"Content-Disposition" "attachment; filename=\"myfile.txt\""}
  (:session-data x)))

(defn -main [& m]
  (binding [*print-meta* true]
    (let [mode (keyword (or (first m) :dev))
         port (Integer. (get (System/getenv) "PORT" "8090"))]
    ;;  (cljs/start mode cljs-options)
      (server/add-middleware
       (fn [handler] (fn [req]
                      (binding [
                                *data-readers* {'session/loop #'tag-loop 'session/subsession #'tag-subsession 'session/session #'tag-session 'ui/test #'tag-test 'ui/html #'tag-html}
                                *print-meta* true] (handler req)))))
      (server/add-middleware mp/wrap-multipart-params)

     (server/start port {:mode mode
                         :ns 'htmlrepl}))))
