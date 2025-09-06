"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart, Star, Zap, PartyPopper } from "lucide-react";

export const FeedbackPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem("feedbackPopupShown");
    if (popupShown) {
      return;
    }

    // Track scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set timer for 10 seconds
    const timer = setTimeout(() => {
      if (hasScrolled && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("feedbackPopupShown", "true");
      }
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled, hasShown]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 300
              }
            }}
            exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            {/* Animated background gradient */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-75 animate-pulse" />
            
            {/* Main popup content */}
            <div className="relative bg-gradient-to-br from-purple-900/95 via-pink-900/95 to-cyan-900/95 rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Floating emojis */}
              <div className="absolute -top-6 -left-6 animate-bounce">
                <PartyPopper className="w-12 h-12 text-yellow-400" />
              </div>
              <div className="absolute -top-6 -right-6 animate-bounce" style={{ animationDelay: "0.2s" }}>
                <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 animate-bounce" style={{ animationDelay: "0.4s" }}>
                <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
              </div>
              <div className="absolute -bottom-6 -right-6 animate-bounce" style={{ animationDelay: "0.6s" }}>
                <Zap className="w-12 h-12 text-cyan-400 fill-cyan-400" />
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Animated title */}
                <motion.h2 
                  className="text-4xl font-black mb-4"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
                    Loving this site?
                  </span>
                </motion.h2>

                {/* Sparkles decoration */}
                <div className="flex justify-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>

                {/* Message */}
                <p className="text-white text-lg mb-2">
                  Designed & Created with 💖 by
                </p>
                
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <h3 className="text-5xl font-black mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                      SPOTCIRCUIT
                    </span>
                  </h3>
                </motion.div>

                {/* Contact info */}
                <div className="space-y-3 mb-6">
                  <a 
                    href="https://spotcircuit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all"
                  >
                    🌐 spotcircuit.com
                  </a>
                  <a 
                    href="mailto:brian@spotcircuit.com"
                    className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all"
                  >
                    ✉️ brian@spotcircuit.com
                  </a>
                </div>

                {/* Fun CTA buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Love it!
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Star className="w-5 h-5" />
                      Amazing!
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Confetti effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: ["#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#9370DB", "#32CD32"][i],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};