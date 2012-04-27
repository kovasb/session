(ns client.macros
  (require [fetch.macros :as pm])
  )

;;(let [a (atom 1)]  (pm/remote (testr 2) [x] (reset! a x)) a)



(defmacro sremote
  [[sym & params] & [destruct & body]]
  `(let [a# (atom nil)]
     (pm/remote (~sym ~@params) ~destruct (reset! a# (do ~@body)))
     a#))

;;
(defmacro clj [expr]
  (let [y (conj '() expr 'eval-expr)]
    `(let [a# (atom nil)]
       (pm/remote ~y [result#] (reset! a# result#))
     a#)
    ))
