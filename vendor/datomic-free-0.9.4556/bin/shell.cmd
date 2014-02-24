@echo off

setlocal

if not defined LOG_DIR set LOG_DIR="log"

call bin\classpath

java -server -Xmx1g -cp lib\jline-win-1.0.jar;%CP_LIST% jline.ConsoleRunner clojure.main bin\shell.clj %*

endlocal
