(ns session.main
  (:require
    [session.system]
    [clojure.browser.repl :as repl]
    [session.app]))

(enable-console-print!)

;(defonce conn (repl/connect "http://localhost:9000/repl"))


(defn -main []
  (let [s (session.system/system)]
    (let [h js/window.location.hash]
      (if
        (and (<= 11 (.-length h)) (= (subs h 0 11) "#/sessions/"))
        ((s :restore) (subs h 11 (.-length h)))))
    (session.app/main s "app")
    s))

(-main)

(comment
  (def s (-main))

  ((:loop-insert s) :last)
  ((:loop-insert s) "17518cea-6907-4eac-a1a9-46e901b2b202")

  ((:save s))
  ((:restore s) "2671603389")

  ((:restore s) "2676795662")

  ;;2671603389

  js/window.location.pathname

  )