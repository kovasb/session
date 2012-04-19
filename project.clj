(defproject session "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-971"]

                 [jayq "0.1.0-alpha1" :exclusions [org.clojure/clojure]]
                 [fetch "0.1.0-alpha2" :exclusions [org.clojure/clojure]]
                 [crate "0.1.0-alpha3" :exclusions [org.clojure/clojure]]
                 [noir "1.3.0-beta2" :exclusions [org.clojure/clojure]]
               ;; [himera "0.1.0-SNAPSHOT" :exclusions [org.clojure/clojure org.clojure/clojurescript ]]
                [cljs-jquery "1.0.0-20120331.015641-2" :exclusions [org.clojure/clojure org.clojure/clojurescript]]
                [noir-cljs "0.3.0" :exclusions [org.clojure/clojure org.clojure/clojurescript]]
                 ]
  :dev-dependencies [

                     ]


   :source-path "src/clj"
  ;;:plugins [[lein-cljsbuild "0.1.7"] ]
:main ^{:skip-aot true} session.server)
