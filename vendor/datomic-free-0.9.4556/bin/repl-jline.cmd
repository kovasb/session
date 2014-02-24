@echo off
setlocal

call bin\classpath

java -server -Xmx1g -cp lib\jline-win-1.0.jar;%CP_LIST% jline.ConsoleRunner clojure.main -i bin\bridge.clj -r

endlocal




