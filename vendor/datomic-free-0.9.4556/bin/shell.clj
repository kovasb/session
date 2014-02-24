;; Copyright (c) Metadata Partners, LLC.
;; All rights reserved.

(import 'bsh.Interpreter)
(import 'java.io.InputStreamReader)

(require '[clojure.string :as str]
         '[datomic.slf4j.bridge :as bridge])

(bridge/install)

;; make an interpreter wired to console
(def in (InputStreamReader. System/in))
(def out (System/out))
(def err (System/err))

(def bsh (Interpreter. in out err true))

;; import API and keyword constants
(.eval bsh "import datomic.Entity;")
(.eval bsh "import datomic.Connection;")
(.eval bsh "import datomic.Database;")
(.eval bsh "import datomic.Datom;")
(.eval bsh "import datomic.Peer;")
(.eval bsh "import datomic.TxReport;")
(.eval bsh "import datomic.Util;")
(.eval bsh "import datomic.impl.Shell;")
(.eval bsh "import java.io.*;")
(.eval bsh "import java.util.*;")

;;(.eval bsh "pause() { System.out.println(\"Press enter to continue...\"); (new java.util.Scanner).nextLine(); };")

(if *command-line-args*
  ;; run script file
  (do
    (let [script (first *command-line-args*)
          args (to-array (rest *command-line-args*))]
      (.set bsh "args" args)
      (.source bsh script)))
  ;; run interactive
  (do
    ;; setup banner and prompt
    (.eval bsh "printBanner() { print(\"Datomic Java Shell\"); print (\"Type Shell.help(); for help.\");}")
    (.eval bsh "getBshPrompt() { return \"datomic % \"; }")
    ;; turn on show so results are visible w/o print
    (.setShowResults bsh true)
    ;; start Datomic loading
    (future (require 'datomic.peer))
    ;; let it run
    (.run bsh)))


