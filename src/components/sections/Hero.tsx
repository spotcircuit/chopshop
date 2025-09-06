"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Sparkles, Star } from "lucide-react";
import { FloatingElements } from "@/components/effects/FloatingElements";

export const Hero: React.FC = () => {
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

      {/* Floating 3D elements */}
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-20 container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-white">
              Scottsdale&apos;s Premier Bachelorette Experience
            </span>
            <Sparkles className="w-4 h-4 text-brand-accent" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6"
          >
            <span className="text-white text-neon">CHOP</span>
            <span className="gradient-text"> SHOP</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Custom-Crafted Bachelorette Experiences
            <span className="block text-lg md:text-xl mt-2 text-brand-accent">
              Where Every Detail is Perfectly Tailored
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="neon"
              size="xl"
              effect="glow"
              shimmer
              icon={<Star className="w-5 h-5" />}
            >
              Start Planning Your Party
            </Button>
            
            <Button
              variant="glass"
              size="xl"
              onClick={() => window.open("/gallery", "_self")}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm">500+ Parties Planned</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm">Local Experts</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />
    </section>
  );
};