(ns session.client.mvc
  (:use-macros [cljs-jquery.macros :only [$]]))

(defprotocol IMVC
  (view [this])
  (control [this]))

(defn render [m] (let [v (view m)] (control m) v))

(extend-type default IMVC
             (view [this] (cond
                           (instance? js/Element this) this
                           (instance? js/jQuery this) this
                           true (pr-str this)))
             (control [this] this))
