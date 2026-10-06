@echo off
title BMC Academia - Localhost Launcher
echo ========================================================
echo        🎓 Starting BMC Academia Local Server...
echo ========================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js detected. Starting server with Node...
    node server.js
    goto end
)

:: Check for Python
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python detected. Starting server on http://localhost:3000 ...
    start "" http://localhost:3000
    python -m http.server 3000
    goto end
)

:: Check for Python launcher
where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python detected. Starting server on http://localhost:3000 ...
    start "" http://localhost:3000
    py -m http.server 3000
    goto end
)

:: Fallback to opening index.html directly
echo [NOTE] Neither Node.js nor Python was found on your system PATH.
echo Opening index.html directly in your default web browser...
start "" "%~dp0index.html"

:end
pause
