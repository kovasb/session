(defproject session "0.1.2-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies
  [
   [org.clojure/clojure "1.5.0-alpha5"]
   ;;[org.clojure/clojure "1.4.0"]

   ;;[org.clojure/clojurescript "0.0-1450"]
   [org.clojars.nmeyer/simple-avro "0.0.6"]
   [storm/carbonite "1.5.0"]
   [com.datomic/datomic-free "0.8.3561"]
   [noir-async "1.1.0-beta10"]
   [cheshire "2.0.4"]
   [jayq "0.1.0-alpha1" :exclusions [org.clojure/clojure]]
   [fetch "0.1.0-alpha2" :exclusions [org.clojure/clojure]]
   [crate "0.1.0-alpha3" :exclusions [org.clojure/clojure]]
   [noir "1.3.0-beta2" :exclusions [org.clojure/clojure]]
   [cljs-jquery "1.0.4-SNAPSHOT" :exclusions [org.clojure/clojure org.clojure/clojurescript]]
]
  :dev-dependencies []
  :source-path "src/clj"
  :source-paths ["src/clj"]
  :plugins [[lein-cljsbuild "0.2.9"] [lein-localrepo "0.4.1"]]
  :cljsbuild {
              :builds [{
                        :source-path "src/cljs"
                        :compiler {
                                   :output-to "resources/public/cljs/bootstrap.js"  ; default: main.js in current directory
                                   :output-dir "resources/public/cljs"
                                   :optimizations :simple}}]}
  :main ^{:skip-aot true} session.server)
