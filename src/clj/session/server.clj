(ns session.server
  (:use [noir.fetch.remotes])
  (:use [client.macros])
  (:use [noir.core])
  (:use [clojure.java.io :only [resource]])
  (:use [datomic.api :only [db q] :as d])
  (:require [noir.server :as server]
            [session.tags :as tags]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.tagged-literals :as tl]
            ;;[noir.cljs.core :as cljs]
            ;;[ring.util [response :as response]]
            [noir.response :as response]
            [ring.middleware [multipart-params :as mp]]))

(import '(java.io Writer))

(server/load-views-ns 'session.views)

;;obsolete
(defremote store-session [id data]
  (let [filename (str "resources/public/sessions/" id ".clj")]
    (spit filename data)
    (str "sessions" id ".clj")))

;;obsolete
(defremote get-session [id]
  (let [filename (str "public/sessions/" id ".clj")]
    {:result (slurp (resource filename)) :status 200} ))

;;obsolete
(defpage [:post "/upload"] x
  (slurp (:tempfile (first (:files x)))))

;;obsolete
(defpage [:post "/download"] x
  (response/set-headers {"Content-Disposition" "attachment; filename=\"session.clj\""}
  (:session-data x)))

(defn -main [& m]
  (binding [*print-meta* true]
    (let [mode (keyword (or (first m) :dev))
         port (Integer. (get (System/getenv) "PORT" "8090"))]

      (server/add-middleware
       (fn [handler]
         (fn [req]
           (binding [
                     *ns* (the-ns 'session.server)
                     *print-meta* true] (handler req)))))
      (server/add-middleware mp/wrap-multipart-params)
      (server/start port {:mode mode :ns 'htmlrepl}))))
