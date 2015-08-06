(require '[cljs.build.api :as b])
(require '[cljs.repl :as repl])
(require '[cljs.repl.browser :as browser])

(b/build (b/inputs "src")
  {:main 'session.main
   :asset-path "/js"
   :output-to "resources/js/main.js"
   :output-dir "resources/js"
   :verbose true
   :static-fns true
   :optimizations :simple})

(cljs.repl/repl
  (browser/repl-env
    :static-dir ["resources/html" "resources"])
  :output-dir "resources/js"
  :asset-path "js"
  :static-fns true)