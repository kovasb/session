(ns session.eval
  (:require
    [cljs.js :as cljs]))


(defn eval-str [env x]
  (cljs/eval-str
    env
    x
    nil
    {:eval       cljs/js-eval
     :ns         'cljs.user
     :source-map true
     :context :expr
     ;:context    :expr
     ;:def-emits-var true
     }
    (fn [{:keys [value error]}]
      (if (not error)
        value
        (println error)))))
