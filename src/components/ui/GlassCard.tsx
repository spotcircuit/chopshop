"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const glassCardVariants = cva(
  "relative overflow-hidden rounded-2xl transition-all duration-500",
  {
    variants: {
      variant: {
        light: "glass text-neutral-900 border border-white/20",
        dark: "glass-dark text-white border border-white/10",
        heavy: "glass-heavy text-white border border-white/30",
        gradient:
          "bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 backdrop-blur-glass border border-white/20",
        aurora:
          "aurora-bg backdrop-blur-glass border border-white/20 text-white",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-2 hover:shadow-2xl",
        glow: "hover:shadow-glow",
        scale: "hover:scale-105",
        "glow-lift": "hover:-translate-y-2 hover:shadow-glow-lg",
      },
    },
    defaultVariants: {
      variant: "light",
      padding: "md",
      hover: "lift",
    },
  }
);

export interface GlassCardProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof glassCardVariants> {
  shimmer?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, padding, hover, shimmer, glow, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(glassCardVariants({ variant, padding, hover }), className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {shimmer && (
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        )}
        
        {glow && (
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent opacity-50 blur animate-pulse-glow" />
        )}
        
        <div className="relative z-10 h-full">{children}</div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-2 left-2 w-2 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
          <div className="absolute top-2 left-2 w-8 h-2 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
        </div>
        
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-2 right-2 w-2 h-8 bg-gradient-to-t from-white/20 to-transparent rounded-full" />
          <div className="absolute bottom-2 right-2 w-8 h-2 bg-gradient-to-l from-white/20 to-transparent rounded-full" />
        </div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };