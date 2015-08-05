(ns session.eval
  (:require
    [cljs.js :as cljs]))


(defn eval-str [env x]
  (cljs/eval-str
    env
    x
    nil
    {:eval cljs/js-eval
     :ns   'test1}
    (fn [{:keys [value error]}]
      (if (not error)
        value))))
