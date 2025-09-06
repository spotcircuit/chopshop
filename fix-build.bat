@echo off
echo Fixing ChopShop build issues...
echo.

echo Step 1: Stopping any running Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 >nul

echo Step 2: Cleaning build directories...
if exist .next rmdir /s /q .next
if exist .turbopack rmdir /s /q .turbopack
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Step 3: Clearing npm cache...
npm cache clean --force

echo Step 4: Ready to start fresh!
echo.
echo Now run: npm run dev
echo.
pause