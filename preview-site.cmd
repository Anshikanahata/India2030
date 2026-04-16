@echo off
cd /d "%~dp0"
echo.
echo  India 2030 microsite — local preview
echo  --------------------------------------
echo  1. Wait until you see: Accepting connections at http://localhost:3456
echo  2. Open in your browser (must be HTTP, not HTTPS):
echo.
echo     http://127.0.0.1:3456/india-2030.html
echo.
echo  Press Ctrl+C in this window to stop the server.
echo.
npx --yes serve -l 3456 .
