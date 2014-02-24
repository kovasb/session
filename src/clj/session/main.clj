(ns session.main
  (:require
    [session.system :as system]
    [com.stuartsierra.component :as component]))



(defn -main
  ([] (-main "{}"))
  ([opts-string]
   (let [s-init (system/session-system nil)
         s-running (component/start s-init)]
     s-running)))

(defn stop [s-running]
  (component/stop s-running))