# PowerShell script for Chop Shop development

param(
    [Parameter(Position=0)]
    [string]$Command = "dev"
)

$banner = @"
╔═══════════════════════════════════════╗
║      CHOP SHOP - Bachelorette Site   ║
║         Scottsdale's Premier          ║
╚═══════════════════════════════════════╝
"@

Write-Host $banner -ForegroundColor Magenta
Write-Host ""

switch ($Command) {
    "install" {
        Write-Host "📦 Installing packages..." -ForegroundColor Cyan
        npm install
        Write-Host "✅ Installation complete!" -ForegroundColor Green
    }
    "dev" {
        Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
        Write-Host "📍 Opening http://localhost:3000" -ForegroundColor Yellow
        Start-Process "http://localhost:3000"
        npm run dev
    }
    "build" {
        Write-Host "🔨 Building for production..." -ForegroundColor Cyan
        npm run build
        Write-Host "✅ Build complete!" -ForegroundColor Green
    }
    "start" {
        Write-Host "🌟 Starting production server..." -ForegroundColor Cyan
        Write-Host "📍 Opening http://localhost:3000" -ForegroundColor Yellow
        Start-Process "http://localhost:3000"
        npm start
    }
    "clean" {
        Write-Host "🧹 Cleaning project..." -ForegroundColor Cyan
        Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "✅ Clean complete!" -ForegroundColor Green
    }
    "help" {
        Write-Host "Available commands:" -ForegroundColor Yellow
        Write-Host "  install  - Install all dependencies" -ForegroundColor White
        Write-Host "  dev      - Start development server (default)" -ForegroundColor White
        Write-Host "  build    - Build for production" -ForegroundColor White
        Write-Host "  start    - Start production server" -ForegroundColor White
        Write-Host "  clean    - Remove node_modules and .next" -ForegroundColor White
        Write-Host "  help     - Show this help message" -ForegroundColor White
        Write-Host ""
        Write-Host "Usage: .\ChopShop.ps1 [command]" -ForegroundColor Gray
    }
    default {
        Write-Host "Unknown command: $Command" -ForegroundColor Red
        Write-Host "Run '.\ChopShop.ps1 help' for available commands" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")