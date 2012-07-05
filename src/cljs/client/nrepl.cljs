(ns client.nrepl
  (:require [cljs-jquery.core :as jq]
            [cljs.reader :as r]))

(defn make-js-map
  "makes a javascript map from a clojure one"
  [cljmap]
  (let [out (js-obj)]
    (doall (map #(aset out (name (first %)) (second %)) cljmap))
    out))

(def waiting-loops
  (atom {}))

(def nrepl-sessions
  (atom #{}))

(defn nrepl-result-handler [data status xhr]
  (doseq [item (seq data)]
    (swap! nrepl-sessions conj (.getResponseHeader xhr "X-Session"))
    (if (contains?
         @waiting-loops
         (aget item "id"))
      (if (and (aget item "status")
               (= (aget (aget item "status") 0) "done"))
        (do
          (swap! waiting-loops dissoc (aget item "id"))
          (swap! nrepl-sessions disj (aget item "session")))
        ((get @waiting-loops (aget item "id"))
         (r/read-string (aget item "value"))))
      (.log js/console "dropping"))))

(def polling-nrepl? (atom false))

(defn poll-nrepl []
  (when-not @polling-nrepl?
    (reset! polling-nrepl? true)
    (js/setInterval
     (fn []
       (.ajax
        jq/jquery
        "/repl"
        (make-js-map
         {"type" "GET"
          "cache" false
          "contentType" false
          "processData" false
          "dataType" "json"
          "success" nrepl-result-handler
          "error" (fn [xhr status error]
                    (alert error))
          "headers" (make-js-map
                     (merge
                      {"REPL-Response-Timeout" 1000}
                      (when-not (empty? @nrepl-sessions)
                        {"X-Session" (first @nrepl-sessions)})))})))
     1000)))


(defn nrepl-eval [form callback]
  (poll-nrepl)
  ;; TODO: id should really be a uuid
  (let [id (name (gensym 'id))]
    (swap! waiting-loops assoc id callback)
    (.ajax
     jq/jquery
     "/repl"
     (make-js-map
      {"type" "POST"
       "data" (doto (js/FormData.)
                (.append "op" "eval")
                (.append "code" form)
                (.append "id" id))
       "cache" false
       "contentType" false
       "processData" false
       "dataType" "json"
       "error" (fn [xhr status error]
                 (alert error))
       "success" nrepl-result-handler
       "headers" (make-js-map
                  (merge
                   {"REPL-Response-Timeout" 1000}
                   (when-not (empty? @nrepl-sessions)
                     {"X-Session" (first @nrepl-sessions)})))}))))
