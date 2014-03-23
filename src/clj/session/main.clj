(ns session.main
  (:require
    [session.system :as system]
    [com.stuartsierra.component :as component]))



(defn -main
  ([] (-main "{}"))
  ([opts-string]
   (let [

          s-init (system/session-system (read-string opts-string))
         s-running (component/start s-init)]
     s-running)))

(defn stop [s-running]
  (component/stop s-running))



(comment
  (def s1 (system/session-system nil))
  (def s2 (component/start s1))

  (def s3 (component/stop s2))


  )
