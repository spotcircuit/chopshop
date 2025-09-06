import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors with CSS variables for easy theming
        "brand-primary": "rgb(var(--brand-primary) / <alpha-value>)",
        "brand-secondary": "rgb(var(--brand-secondary) / <alpha-value>)",
        "brand-accent": "rgb(var(--brand-accent) / <alpha-value>)",
        "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
        
        // Contrast colors for text
        "contrast-primary": "rgb(var(--contrast-primary) / <alpha-value>)",
        "contrast-secondary": "rgb(var(--contrast-secondary) / <alpha-value>)",
        "contrast-accent": "rgb(var(--contrast-accent) / <alpha-value>)",
        
        // Glass morphism colors
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          dark: "rgba(0, 0, 0, 0.2)",
        }
      },
      backdropBlur: {
        xs: "2px",
        glass: "12px",
        heavy: "24px",
      },
      animation: {
        "aurora": "aurora 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgb(var(--brand-primary)), 0 0 40px rgb(var(--brand-primary) / 0.5)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgb(var(--brand-primary)), 0 0 60px rgb(var(--brand-primary) / 0.5), 0 0 80px rgb(var(--brand-secondary) / 0.3)" 
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-aurora": "linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)), rgb(var(--brand-accent)))",
        "gradient-shimmer": "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Bebas Neue", "system-ui", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      boxShadow: {
        "glow": "0 0 20px rgb(var(--brand-primary) / 0.5)",
        "glow-lg": "0 0 40px rgb(var(--brand-primary) / 0.5)",
        "inner-glow": "inset 0 0 20px rgb(var(--brand-primary) / 0.2)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      addUtilities({
        // Glass morphism utilities
        ".glass": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
        ".glass-dark": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glass-heavy": {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
        
        // Text contrast utilities
        ".text-contrast": {
          color: "white",
          mixBlendMode: "difference",
        },
        
        // Neon text effect
        ".text-neon": {
          textShadow: `
            0 0 10px rgb(var(--brand-primary)),
            0 0 20px rgb(var(--brand-primary)),
            0 0 30px rgb(var(--brand-primary)),
            0 0 40px rgb(var(--brand-primary))
          `,
        },
        
        // Aurora background
        ".aurora-bg": {
          background: "linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)), rgb(var(--brand-accent)))",
          backgroundSize: "400% 400%",
          animation: "aurora 15s ease infinite",
        },
        
        // Bento grid
        ".bento-grid": {
          display: "grid",
          gap: theme("spacing.4"),
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        },
        
        // Hover lift effect
        ".hover-lift": {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme("boxShadow.2xl"),
          },
        },
      });
    }),
  ],
};

export default config;