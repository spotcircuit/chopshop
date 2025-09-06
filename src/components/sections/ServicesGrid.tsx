"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import { 
  Sparkles, 
  Music, 
  Camera, 
  MapPin, 
  Calendar, 
  Martini,
  Palette,
  Heart,
  Cake,
  Star,
} from "lucide-react";

const services = [
  {
    id: "pool-party",
    title: "Pool Party Paradise",
    description: "Transform any pool into the ultimate party destination",
    icon: <Sparkles className="w-10 h-10" />,
    colSpan: 2 as const,
    variant: "gradient" as const,
    badge: "Most Popular",
    image: "/images/luxurypoolsetup.png",
  },
  {
    id: "bar-cart",
    title: "Mobile Bar Cart",
    description: "Professional mixologists with craft cocktails",
    icon: <Martini className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    image: "/images/mobilebarcart.png",
  },
  {
    id: "photography",
    title: "Pro Photography",
    description: "Instagram-worthy photo shoots all day",
    icon: <Camera className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    image: "/images/professionalphotography.png",
  },
  {
    id: "decorating",
    title: "Airbnb Decorating",
    description: "Walk into a fully decorated party paradise",
    icon: <Palette className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    badge: "Game Changer",
    image: "/images/decoratingservicesAFTER.png",
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description: "Mobile spa services for relaxation",
    icon: <Heart className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    image: "/images/spapackage.png",
  },
  {
    id: "adventure",
    title: "Desert Adventures",
    description: "ATVs, hot air balloons, and tours",
    icon: <MapPin className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    image: "/images/desertadventure.png",
  },
  {
    id: "catering",
    title: "Custom Catering",
    description: "From brunch to late-night bites",
    icon: <Cake className="w-10 h-10" />,
    colSpan: 1 as const,
    variant: "gradient" as const,
    image: "/images/vegasglam2.png",
  },
  {
    id: "entertainment",
    title: "VIP Nightlife",
    description: "Skip lines at Scottsdale's hottest clubs",
    icon: <Music className="w-10 h-10" />,
    colSpan: 2 as const,
    variant: "gradient" as const,
    badge: "Exclusive Access",
    image: "/images/nightclubvip.png",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.25),transparent_50%)]" />
      </div>
      
      {/* Vibrant gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-br from-pink-400/40 to-purple-400/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-tl from-teal-400/40 to-cyan-400/40 blur-3xl animate-pulse" />
      <div className="container-custom section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-wider text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg shadow-purple-500/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-white font-black">Design Your Weekend</span>
            <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight mb-4 sm:mb-6 leading-none px-4 sm:px-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">Everything You Need For An</span>
            <motion.span 
              className="block relative mt-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 blur-2xl opacity-75 animate-pulse"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black animate-gradient-shimmer">
                Unforgettable Party
              </span>
            </motion.span>
          </h2>
          
          <motion.div 
            className="mx-auto w-60 sm:w-72 md:w-80 h-2 sm:h-3 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary mb-6 sm:mb-8 shadow-glow"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-700 to-teal-700">
              From setup to cleanup, we handle every detail so you can focus on
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 font-black mx-1"> making memories</span>
          </p>
        </motion.div>

        {/* Services grid - use BentoGrid for consistent rows/cols and sizing */}
        <BentoGrid columns="auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <BentoItem
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant={service.variant}
                badge={service.badge}
                image={service.image}
                onClick={() => console.log(`Clicked ${service.id}`)}
                colSpan={service.colSpan}
              />
            </motion.div>
          ))}
        </BentoGrid>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12 px-4 sm:px-0"
        >
          <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600">
              Want something totally custom?
            </span>
          </p>
          <motion.button 
            className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-lg sm:text-xl rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 uppercase tracking-wider hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-yellow-300" />
              Create Your Experience
              <Sparkles className="w-7 h-7 text-yellow-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};