(defproject session "0.1.3"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies
  [
   ;; Platform
   [com.datomic/datomic-free "0.9.4556"]
   [org.clojure/clojure "1.5.1"]
   [org.clojure/clojurescript "0.0-2156"]
   [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

   [com.stuartsierra/component "0.2.1"]

   ;; Primary Libs
   [om "0.3.6"]
   [yantra "0.1.3"]
   [merchant "0.1.4"]

   ;; Tools
   [compojure "1.1.5" :exclusions [ring/ring-core]]
   [com.keminglabs/jetty7-websockets-async "0.1.0"]
   [ring/ring-jetty-adapter "1.2.0"]
   [ring/ring-servlet "1.2.0"]
   [secretary "1.1.0"]


   ;; XXXXX
   [criterium "0.4.3"]
   [alembic "0.1.0"]
   [me.raynes/conch "0.5.0"]
   ]

  :dev-dependencies []
  :source-paths ["src/clj"]
  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-localrepo "0.4.1"]]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {
                                    :source-map true
                                    :foreign-libs [{:file "om/react.js"
                                                    :provides ["React"]}]
                                    :externs ["om/externs/react.js"]
                                    :output-to "resources/public/cljs/bootstrap.js"  ; default: main.js in current directory
                                    :output-dir "resources/public/cljs"
                                    :optimizations :none}}]}

  :main ^{:skip-aot true} session.main)
