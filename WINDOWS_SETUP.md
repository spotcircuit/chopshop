# 🎉 Chop Shop - Windows Setup Guide

## 📋 Prerequisites

Make sure you have these installed on Windows:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** (optional) - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### Option 1: Using Batch Files (Easiest)

1. **Install Dependencies**
   - Double-click `install.bat`
   - Wait for installation to complete

2. **Start Development Server**
   - Double-click `start-dev.bat`
   - Browser will open automatically at http://localhost:3000

3. **Build for Production** (optional)
   - Double-click `build-production.bat`
   - Then double-click `start-production.bat`

### Option 2: Using PowerShell Script

1. **Open PowerShell** (Right-click → Run as Administrator)

2. **Navigate to project folder**
   ```powershell
   cd "C:\Users\Big Daddy Pyatt\CascadeProjects\chopshop\chopshop"
   ```

3. **Enable script execution** (first time only)
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

4. **Run commands**
   ```powershell
   # Install packages
   .\ChopShop.ps1 install
   
   # Start development server
   .\ChopShop.ps1 dev
   
   # Build for production
   .\ChopShop.ps1 build
   
   # Start production server
   .\ChopShop.ps1 start
   
   # Clean project
   .\ChopShop.ps1 clean
   
   # Show help
   .\ChopShop.ps1 help
   ```

### Option 3: Using Command Prompt

1. **Open Command Prompt**
   - Press `Win + R`, type `cmd`, press Enter

2. **Navigate to project**
   ```cmd
   cd /d "C:\Users\Big Daddy Pyatt\CascadeProjects\chopshop\chopshop"
   ```

3. **Run commands**
   ```cmd
   rem Install packages
   npm install
   
   rem Start development server
   npm run dev
   
   rem Build for production
   npm run build
   
   rem Start production server
   npm start
   ```

## 🌐 Accessing the Site

Once the server is running:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000 (for testing on other devices)

## 🛠️ Troubleshooting

### Port 3000 is already in use
The server will automatically use port 3001 or the next available port.

### Permission errors
- Run Command Prompt or PowerShell as Administrator
- Make sure Windows Defender/Antivirus isn't blocking Node.js

### Slow performance
- Turbopack is enabled by default for faster builds
- Close other applications to free up resources
- Consider using production build for better performance

### Can't run PowerShell scripts
Run this command in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

## 📁 Project Structure

```
chopshop\
├── install.bat           # Install dependencies
├── start-dev.bat        # Start development server
├── build-production.bat # Build for production
├── start-production.bat # Start production server
├── ChopShop.ps1        # PowerShell management script
├── src\                # Source code
├── public\             # Static files and images
└── package.json        # Project configuration
```

## 🎨 Making Changes

1. **Edit files** in the `src` folder
2. **Changes auto-refresh** in development mode
3. **Images** go in `public/images`
4. **Styles** are in `src/styles/globals.css`

## 🚢 Deployment

For production deployment:
1. Run `build-production.bat`
2. Upload the `.next` folder to your hosting service
3. Or deploy to Vercel with one click

## 💡 Tips

- Use **Visual Studio Code** for editing
- Install **ES7+ React snippets** extension for faster coding
- Press `Ctrl+C` in terminal to stop the server
- Check `http://localhost:3000` in Chrome for best experience

## 🆘 Need Help?

- Check the console for error messages
- Make sure all images are in `public/images`
- Restart the server if styles don't update
- Delete `node_modules` and run `install.bat` if packages are corrupted

---

Ready to party! 🎉 Your Chop Shop site is all set up for Windows!