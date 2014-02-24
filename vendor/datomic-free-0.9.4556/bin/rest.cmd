@echo off
setlocal

call bin\classpath

java -server %DATOMIC_JAVA_OPTS% -Xmx1g -cp lib\jline-win-1.0.jar;%CP_LIST% clojure.main -i bin\bridge.clj --main datomic.rest %*

endlocal




