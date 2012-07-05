(defproject session "0.1.2-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1011"]
                 [com.keminglabs/c2 "0.1.0-beta1"]
                 [com.cemerick/pomegranate "0.0.12"]
                 ;;[cascalog "1.8.7"]
                 [jayq "0.1.0-alpha1" :exclusions [org.clojure/clojure]]
                 [fetch "0.1.0-alpha2" :exclusions [org.clojure/clojure]]
                 [crate "0.1.0-alpha3" :exclusions [org.clojure/clojure]]
                 [noir "1.3.0-beta2" :exclusions [org.clojure/clojure]]
                 ;; [himera "0.1.0-SNAPSHOT" :exclusions
                 ;; [org.clojure/clojure org.clojure/clojurescript ]]
                 [cljs-jquery "1.0.4-SNAPSHOT"
                  :exclusions [org.clojure/clojure org.clojure/clojurescript]]
                 [noir-cljs "0.3.0"
                  :exclusions [org.clojure/clojure org.clojure/clojurescript]]
                 [com.cemerick/drawbridge "0.0.6"]]
  :dev-dependencies []
  :source-path "src/clj"
  :plugins [[lein-cljsbuild "0.1.8"] ]
  :cljsbuild {:builds [{;; The path to the top-level ClojureScript
                        ;; source directory:
                        :source-path "src/cljs"
                        ;; The standard ClojureScript compiler
                        ;; options: (See the ClojureScript compiler
                        ;; documentation for details.)
                        :compiler {
                                   ;; default: main.js in current directory
                                   :output-to
                                   "resources/public/cljs/bootstrap.js"
                                   ;;:output-to nil
                                   :output-dir "resources/public/cljs"
                                   :optimizations :simple}}]}
  :main ^{:skip-aot true} session.server)
