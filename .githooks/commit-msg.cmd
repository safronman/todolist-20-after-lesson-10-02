@echo off
setlocal EnableExtensions DisableDelayedExpansion

set "MSG_FILE=%~1"
if "%MSG_FILE%"=="" exit /b 1

set /p FIRST_LINE=<"%MSG_FILE%"

if /I "%FIRST_LINE:~0,6%"=="Merge " exit /b 0
if /I "%FIRST_LINE:~0,7%"=="Revert " exit /b 0

powershell -NoProfile -Command ^
  "$line = Get-Content -LiteralPath '%MSG_FILE%' -TotalCount 1;" ^
  "if ($line -match '^[a-z]+(\([a-zA-Z0-9._/-]+\))?(!)?: .+') { exit 0 } else { exit 1 }"

if %ERRORLEVEL% EQU 0 exit /b 0

echo Invalid commit message format.
echo Expected: ^<type^>[^optional scope^][!]: ^<description^>
echo Example: feat(auth): add remember-me token refresh
echo Examples: fix: handle empty API response ^| refactor(store)!: simplify state shape
exit /b 1
