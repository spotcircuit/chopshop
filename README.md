# 🎉 Chop Shop - Custom Bachelorette Experiences

A modern, high-performance website for Scottsdale's premier bachelorette party planning service. Built with Next.js 15.5, TypeScript, and Tailwind CSS 4.0.

## 🚀 Features

- **Glassmorphic Design**: Modern glass effects with backdrop blur
- **Aurora Gradients**: Animated gradient backgrounds
- **Bento Grid Layout**: Modular service showcase
- **Interactive Components**: Framer Motion animations
- **Mobile Responsive**: Optimized for all devices
- **Brand Kit Adaptable**: Easy color theming system
- **WCAG AAA Contrast**: Accessibility-first design

## 🛠️ Tech Stack

- **Next.js 15.5** with Turbopack
- **TypeScript** for type safety
- **Tailwind CSS 4.0** (alpha) for styling
- **Framer Motion** for animations
- **Class Variance Authority** for component variants
- **Lucide React** for icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Color Palette

- **Primary**: Hot Pink (#ec4899)
- **Secondary**: Teal (#14b8a6)
- **Accent**: Orange (#f97316)
- **Dark**: Deep Purple (#1A0033)

All colors are customizable via CSS variables in the theme provider.

### Components

- **Button**: Multiple variants (primary, glass, neon, outline)
- **GlassCard**: Glassmorphic cards with various effects
- **BentoGrid**: Flexible grid system for showcasing services

## 📁 Project Structure

```
chopshop/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── sections/        # Page sections
│   │   └── effects/         # Animation components
│   ├── styles/              # Global styles
│   ├── lib/                 # Utilities and helpers
│   └── providers/           # Context providers
├── public/                  # Static assets
└── IMAGE_GENERATION_GUIDE.md # Guide for creating images
```

## 🖼️ Images Needed

See `IMAGE_GENERATION_GUIDE.md` for a complete list of images to generate using AI tools like Midjourney or DALL-E.

## 🌟 Key Features

### Hero Section
- Full-screen video background
- Animated floating 3D elements
- Glassmorphic content overlay
- Neon text effects

### Services Grid
- Bento-style layout
- Interactive hover effects
- Badge indicators
- Mixed card sizes for visual interest

### Package Tiers
- Three-tier pricing (MILD, MEDIUM, HOT)
- Visual hierarchy with popular badge
- Animated selection states
- Custom package CTA

## 🚀 Deployment

The site is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimized interactions
- Optimized animations for mobile performance

## ⚡ Performance

- Next.js 15.5 with Turbopack for fast builds
- Optimized images with next/image
- Lazy loading for heavy animations
- Progressive enhancement approach

## 🔧 Customization

### Changing Brand Colors

Update the theme in `src/providers/ThemeProvider.tsx`:

```typescript
const defaultColors: BrandColors = {
  primary: "236 72 153",    // Your primary color
  secondary: "20 184 166",   // Your secondary color
  accent: "249 115 22",      // Your accent color
  // ...
};
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to the page layout

## 📝 SEO Optimization

- Meta tags configured in `layout.tsx`
- Open Graph images
- Structured data ready
- Sitemap generation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Private and confidential - All rights reserved

---

Built with 💖 for Chop Shop Scottsdale
