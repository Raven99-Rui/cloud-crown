@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "NODE_EXE=C:\Users\LENOVO\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"
"%NODE_EXE%" scripts\server.mjs
if errorlevel 1 pause
