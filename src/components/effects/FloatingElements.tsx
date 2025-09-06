"use client";

import React from "react";
import { motion } from "framer-motion";

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Champagne glass */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img 
          src="/images/3dchampagne2.png" 
          alt="Champagne glass" 
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(236,72,153,0.3)]"
        />
      </motion.div>

      {/* Diamond */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-28 h-28 md:w-36 md:h-36"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img 
          src="/images/3ddiamond.png" 
          alt="Diamond" 
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(20,184,166,0.4)]"
        />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-4xl md:text-5xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      {/* Balloon */}
      <motion.div
        className="absolute top-1/2 right-1/3 text-4xl md:text-6xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🎈
      </motion.div>

      {/* Heart */}
      <motion.div
        className="absolute bottom-1/3 right-1/5 text-3xl md:text-4xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💖
      </motion.div>

      {/* Confetti pieces */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-6 md:w-3 md:h-8"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
            background: i % 2 === 0 
              ? "linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)))"
              : "linear-gradient(135deg, rgb(var(--brand-secondary)), rgb(var(--brand-accent)))",
          }}
          animate={{
            y: [0, 100, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};