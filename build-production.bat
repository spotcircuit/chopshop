@echo off
echo ===================================
echo   CHOP SHOP - Production Build
echo ===================================
echo.
echo Building for production...
echo This may take a few minutes...
echo.
npm run build
echo.
echo ===================================
echo   Build Complete!
echo ===================================
echo.
echo To start production server, run: start-production.bat
echo.
pause