"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-primary to-brand-secondary text-contrast-primary hover:shadow-glow hover:scale-105",
        secondary:
          "bg-brand-secondary text-contrast-secondary hover:shadow-lg hover:scale-105",
        accent:
          "bg-brand-accent text-contrast-accent hover:shadow-lg hover:scale-105",
        glass:
          "glass text-white border border-white/20 hover:bg-white/20 hover:border-white/30",
        "glass-dark":
          "glass-dark text-white border border-white/10 hover:bg-black/30",
        outline:
          "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-contrast-primary",
        ghost:
          "text-brand-primary hover:bg-brand-primary/10",
        neon:
          "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white hover:shadow-glow-lg hover:scale-105 text-neon",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
        icon: "p-2",
      },
      effect: {
        glow: "shadow-glow animate-pulse-glow",
        float: "animate-float",
        shimmer: "overflow-hidden",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      effect: "none",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "size">,
    VariantProps<typeof buttonVariants> {
  shimmer?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      effect,
      shimmer,
      loading,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const showShimmer = shimmer || effect === "shimmer";

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, effect }), className)}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {showShimmer && (
          <motion.div
            className="absolute inset-0 bg-gradient-shimmer"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
        
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        
        <span className="relative z-10">{children as React.ReactNode}</span>
        
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };