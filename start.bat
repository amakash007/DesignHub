@echo off
REM UI Design Marketplace - Quick Start Guide

echo.
echo   ======================================
echo   UI Design Marketplace - DesignHub
echo   ======================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo   [*] Installing dependencies...
    call npm install
)

echo.
echo   [OK] Starting development server...
echo.
echo   ^>^> Frontend available at: http://localhost:3000
echo.
echo   Available Pages:
echo   - http://localhost:3000/                   (Homepage)
echo   - http://localhost:3000/browse             (Marketplace)
echo   - http://localhost:3000/categories         (Categories)
echo   - http://localhost:3000/cart               (Shopping Cart)
echo   - http://localhost:3000/auth/login         (Login)
echo   - http://localhost:3000/auth/signup        (Sign Up)
echo   - http://localhost:3000/designer-dashboard (Designer Dashboard)
echo.
echo   Press Ctrl+C to stop the server
echo.

call npm run dev
pause
