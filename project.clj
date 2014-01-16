(defproject session "0.1.2-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies
  [[org.clojure/clojure "1.5.1"]
   [org.clojure/clojurescript "0.0-2138"]
   [om "0.1.7"]
   [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

   [com.keminglabs/jetty7-websockets-async "0.1.0"]

   [ring/ring-jetty-adapter "1.2.0"]
   [ring/ring-servlet "1.2.0"]
   [compojure "1.1.5" :exclusions [ring/ring-core]]

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
  :main ^{:skip-aot true} session.server)
