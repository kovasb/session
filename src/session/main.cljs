(ns session.main
  (:require
    [session.system]
    [clojure.browser.repl :as repl]
    [session.app]))

(enable-console-print!)

(defonce conn (repl/connect "http://localhost:9000/repl"))

(defn -main []
  (session.app/main (session.system/system) "app"))


