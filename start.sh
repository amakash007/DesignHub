#!/bin/bash

# UI Design Marketplace - Quick Start Guide

echo "🎨 UI Design Marketplace - DesignHub"
echo "===================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "📱 Frontend will be available at: http://localhost:3000"
echo ""
echo "Available Pages:"
echo "  ✅ / (Homepage)"
echo "  ✅ /browse (Marketplace)"
echo "  ✅ /categories (Categories)"
echo "  ✅ /cart (Shopping Cart)"
echo "  ✅ /auth/login (Login)"
echo "  ✅ /auth/signup (Sign Up)"
echo "  ✅ /designer-dashboard (Designer Dashboard)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
