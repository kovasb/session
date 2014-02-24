@echo off
set CP_LIST=

for %%i in (.\lib\*.jar) do call bin\cpbuild.cmd %%i
for %%i in (.\*transactor*.jar) do call bin\cpbuild.cmd %%i
set CP_LIST=bin;resources;%CP_LIST%


