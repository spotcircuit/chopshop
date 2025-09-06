"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Sparkles, Star } from "lucide-react";

export const HeroSimple: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 aurora-bg opacity-90" />
      
      {/* Hero background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-transparent to-brand-dark/50 z-10" />
        <img 
          src="/images/hero3.png" 
          alt="Scottsdale nightlife" 
          className="h-full w-full object-cover opacity-40"
        />
      </div>


      {/* Main content */}
      <div className="relative z-20 container-custom section-padding">
        <div className="relative animate-slide-up text-center max-w-4xl mx-auto">
          {/* Dark overlay behind text for readability */}
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" style={{background: 'radial-gradient(70% 60% at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'}} />

          {/* Micro-tag instead of big badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Scottsdale Bachelorette Experts
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tight leading-none mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-pink-400 to-brand-accent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">CHOP</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-teal-400 drop-shadow-[0_0_30px_rgba(20,184,166,0.5)]"> SHOP</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              Unforgettable Bachelorette Weekends
            </span>
          </p>
          {/* Shimmer underline */}
          <div className="mx-auto w-48 sm:w-56 md:w-64 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary mb-4 sm:mb-6 animate-gradient-shimmer shadow-glow" />

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            From luxury rentals and décor to nightlife and private chefs — we plan it all,
            so you can show up and celebrate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              className="bg-gradient-to-r from-brand-primary to-brand-accent inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold transition-all w-full sm:w-auto sm:min-w-[220px] transform hover:scale-105 shadow-glow hover:shadow-glow-lg text-sm sm:text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="w-5 h-5" />
              <span>Plan Your Weekend</span>
            </button>

            <button
              className="bg-gradient-to-r from-brand-secondary to-teal-400 inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold transition-all w-full sm:w-auto sm:min-w-[220px] transform hover:scale-105 shadow-glow hover:shadow-glow-lg text-sm sm:text-base"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Packages</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 px-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm">500+ Parties Planned</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm">Local Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
      >
        <ChevronDown className="w-6 sm:w-8 h-6 sm:h-8" />
      </button>
    </section>
  );
};