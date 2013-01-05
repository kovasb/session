(defproject session "0.1.2-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies
  [[org.clojure/clojure "1.5.0-RC1"]
   [org.clojure/clojurescript "0.0-1552"]
   [org.clojure/tools.nrepl "0.2.0-RC1"]
   [com.datomic/datomic-free "0.8.3664"]
   [aleph "0.3.0-beta8"]
   [lamina "0.5.0-beta8"]
   [compojure "1.1.3"]
   [ring "1.1.6"]
   [hiccup "1.0.2"]
   
   [org.clojars.nmeyer/simple-avro "0.0.6"]
   [storm/carbonite "1.5.0"]
   
   [cheshire "2.0.4"]
   [jayq "0.1.0-alpha1" :exclusions [org.clojure/clojure]]
   [crate "0.1.0-alpha3" :exclusions [org.clojure/clojure]]
   [cljs-jquery "1.0.4-SNAPSHOT" :exclusions [org.clojure/clojure org.clojure/clojurescript]]]
  :dev-dependencies []
  :source-path "src/clj"
  :source-paths ["src/clj"]
  :plugins [[lein-cljsbuild "0.2.10"]
            [lein-localrepo "0.4.1"]]
  :cljsbuild {
              :builds [{
                        :source-path "src/cljs"
                        :compiler {
                                   :output-to "resources/public/cljs/bootstrap.js"  ; default: main.js in current directory
                                   :output-dir "resources/public/cljs"
                                   :optimizations :simple}}]}
  :main ^{:skip-aot true} session.server)
