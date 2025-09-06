"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Check, Flame, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    id: "mild",
    name: "MILD",
    price: "$799",
    description: "Perfect for intimate gatherings",
    icon: <Sparkles className="w-8 h-8" />,
    variant: "light" as const,
    image: "/images/mildpackage.png",
    features: [
      "Basic Airbnb decoration",
      "Welcome champagne",
      "Playlist curation",
      "Itinerary planning",
      "Restaurant reservations",
      "Basic photo props",
    ],
    popular: false,
  },
  {
    id: "medium",
    name: "MEDIUM",
    price: "$1,499",
    description: "Our most popular package",
    icon: <Star className="w-8 h-8" />,
    variant: "gradient" as const,
    image: "/images/mediumpackage.png",
    features: [
      "Everything in MILD",
      "Premium decorations & balloons",
      "Mobile bar cart (2 hours)",
      "Professional photographer (2 hours)",
      "Pool party setup",
      "Custom party favors",
      "Fridge stocking service",
      "VIP nightclub entry",
    ],
    popular: true,
  },
  {
    id: "hot",
    name: "HOT",
    price: "$2,999+",
    description: "The ultimate luxury experience",
    icon: <Flame className="w-8 h-8" />,
    variant: "aurora" as const,
    image: "/images/hotpackage.png",
    features: [
      "Everything in MEDIUM",
      "Full weekend coordination",
      "Private chef experience",
      "Luxury transportation",
      "Spa & wellness package",
      "Desert adventure tour",
      "All-day photographer",
      "Custom neon signs",
      "Surprise entertainment",
      "Cleanup service",
    ],
    popular: false,
  },
];

export const PackageTiers: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section id="packages" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-transparent to-pink-200/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.25),transparent_50%)]" />
      </div>
      
      {/* Vibrant gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-br from-orange-400/40 to-yellow-400/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-tl from-pink-400/40 to-purple-400/40 blur-3xl animate-pulse" />
      
      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold uppercase tracking-wider text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg shadow-orange-500/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-white font-black">Choose Your Level</span>
            <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-4 sm:mb-6 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600">Turn Up</span>
            <motion.span 
              className="block relative mt-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 blur-2xl opacity-75 animate-pulse"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-gradient-shimmer">
                THE WEEKEND
              </span>
            </motion.span>
          </h2>
          
          <motion.div 
            className="mx-auto w-60 sm:w-72 md:w-80 h-2 sm:h-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mb-6 sm:mb-8 shadow-glow"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto leading-relaxed px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-pink-700 to-purple-700">Three levels of</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 font-black mx-2">pure luxury</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700">— from</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-black mx-2">chill vibes</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-pink-700 to-purple-700">to</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 font-black mx-2 text-xl sm:text-2xl md:text-3xl">FULL SEND</span>
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
          {packages.map((pkg, index) => {
            const isHot = pkg.id === "hot";
            const isMild = pkg.id === "mild";
            const isMedium = pkg.id === "medium";
            return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-black rounded-full shadow-lg animate-pulse">
                    🔥 MOST POPULAR 🔥
                  </span>
                </div>
              )}
              
              {/* Accent background wrapper for each card */}
              <div className={cn(
                "relative p-1 rounded-2xl",
                isHot && "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 animate-gradient-shimmer",
                isMedium && "bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500",
                isMild && "bg-gradient-to-br from-cyan-400 via-teal-400 to-green-400"
              )}>
                <div className={cn(
                  "bg-gradient-to-br rounded-2xl h-full flex flex-col min-h-[500px] sm:min-h-[600px] cursor-pointer transition-all duration-300 group",
                  isHot && "from-orange-900/95 via-pink-900/95 to-purple-900/95",
                  isMedium && "from-purple-900/95 via-pink-900/95 to-cyan-900/95",
                  isMild && "from-cyan-900/95 via-teal-900/95 to-green-900/95",
                  selectedPackage === pkg.id && "ring-2 ring-white/50 shadow-glow"
                )}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                  {/* Background image with better overlay */}
                  {pkg.image && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={`${pkg.name} package`}
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
                    </div>
                  )}
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                    {/* Header section with icon and title */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className={cn(
                        "inline-flex p-4 rounded-full mb-4",
                        isHot && "bg-gradient-to-br from-orange-500/30 to-pink-500/30 border-2 border-orange-400",
                        isMedium && "bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-400",
                        isMild && "bg-gradient-to-br from-cyan-500/30 to-teal-500/30 border-2 border-cyan-400"
                      )}>
                        <span className={cn(
                          isHot && "text-orange-300",
                          isMedium && "text-purple-300",
                          isMild && "text-cyan-300"
                        )}>{pkg.icon}</span>
                      </div>
                      
                      <h3 className={cn(
                        "text-3xl sm:text-4xl font-display font-black mb-2",
                        isHot && "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-300",
                        isMedium && "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300",
                        isMild && "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-green-300"
                      )}>
                        {pkg.name}
                      </h3>
                      
                      <p className="text-sm text-white/80 mb-4">
                        {pkg.description}
                      </p>
                      
                      <div className={cn(
                        "font-black",
                        isHot && "text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]",
                        isMedium && "text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]",
                        isMild && "text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      )}>
                        {pkg.price}
                      </div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">per party</p>
                    </div>

                    {/* Features list - grows to fill space */}
                    <div className="flex-grow space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className={cn(
                            "w-5 h-5 mt-0.5 flex-shrink-0",
                            isHot && "text-orange-400",
                            isMedium && "text-purple-400",
                            isMild && "text-cyan-400"
                          )} />
                          <span className="text-sm text-white/90 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button - always at bottom */}
                    <button
                      className={cn(
                        "w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105",
                        isHot && "bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60",
                        isMedium && "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60",
                        isMild && "bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60"
                      )}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {isHot ? "🔥 " : isMedium ? "⭐ " : "✨ "}
                      Select {pkg.name}
                      {isHot ? " 🔥" : isMedium ? " ⭐" : " ✨"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );})}
        </div>

        {/* Custom package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
                Need Something Custom?
              </span>
            </h3>
            <p className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 px-4 sm:px-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700">
                Let&apos;s create a package that&apos;s uniquely yours
              </span>
            </p>
            <motion.button 
              className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-bold text-lg sm:text-xl rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 uppercase tracking-wider hover:from-orange-600 hover:via-pink-600 hover:to-purple-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3 justify-center">
                <Sparkles className="w-7 h-7 text-yellow-300" />
                Build Custom Package
                <Sparkles className="w-7 h-7 text-yellow-300" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};