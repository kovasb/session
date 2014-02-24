@echo off
setlocal

if "%1" == "" (
 echo "Usage: %0 properties-file-or-uri"
 goto end
)

set XMS=-Xms96m
set XMX=-Xmx1024m

call bin\classpath.cmd

set JAVA_ARGS=%XMX% %XMS% -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -cp %CP_LIST%

:arg-loop
if "%2" == "" goto continue
set JAVA_ARGS=%JAVA_ARGS% %1
shift
goto arg-loop

:continue

java -server %JAVA_ARGS% %DATOMIC_JAVA_OPTS% clojure.main --main datomic.launcher %1

:end
endlocal
