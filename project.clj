(defproject session "0.1.2-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies
  [[org.clojure/clojure "1.5.0-RC1"]
   [org.clojure/clojurescript "0.0-1552"]
   [org.clojure/tools.nrepl "0.2.1"]
   [org.clojure/tools.logging "0.2.4"]
   [com.datomic/datomic-free "0.8.3664" :exclusions [com.google.guava/guava
                                                     org.slf4j/slf4j-nop
                                                     org.slf4j/log4j-over-slf4j]]
   [org.slf4j/slf4j-log4j12 "1.6.4"]
   [aleph "0.3.0-beta8" :exclusions [org.clojure/tools.logging]]
   [lamina "0.5.0-beta8"]
   [compojure "1.1.5" :exclusions [org.clojure/tools.macro]]
   [hiccup "1.0.2"]
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
