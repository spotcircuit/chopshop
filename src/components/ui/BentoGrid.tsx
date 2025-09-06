"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4 | "auto";
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className,
  columns = "auto",
}) => {
  const gridClass =
    columns === "auto"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : `grid-cols-${columns}`;

  return (
    <div
      className={cn(
        "grid gap-6 md:gap-8 auto-rows-[minmax(300px,_auto)]",
        gridClass,
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoItemProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  variant?: "light" | "dark" | "gradient" | "aurora";
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  image?: string;
  badge?: string;
}

export const BentoItem: React.FC<BentoItemProps> = ({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  variant = "light",
  icon,
  title,
  description,
  href,
  onClick,
  image,
  badge,
}) => {
  const spanClass = cn(
    colSpan > 1 && `md:col-span-${colSpan}`,
    rowSpan > 1 && `md:row-span-${rowSpan}`
  );

  const content = (
    <div className="relative h-full">
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Background image with cinematic hover zoom */}
          <img
            src={image}
            alt={title || ''}
            className="h-full w-full object-cover scale-100 group-hover:scale-[1.06] transition-transform duration-500 will-change-transform"
          />
          {/* Soft vignette edge (kept subtle, no solid overlay) */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      )}

      {/* Badge */}
      {badge && (
        <span className="absolute top-3 right-3 z-20 px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow">
          {badge}
        </span>
      )}

      {/* Bottom content with NO background panel */}
      <div className="absolute inset-x-5 bottom-5 z-20">
        {/* Icon (minimal chip, no fill) */}
        {icon && (
          <div className="mb-2">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/50 text-white/95 backdrop-blur-0">
              {icon}
            </span>
          </div>
        )}

        {/* Title */}
        {title && (
          <h3 className="text-white text-2xl md:text-3xl font-display font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="mt-1 text-white/85 text-sm md:text-base line-clamp-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
            {description}
          </p>
        )}
      </div>

      {/* Reserve space for children if passed (non-absolute) */}
      {children && <div className="pt-40" />}
    </div>
  );

  const effectiveVariant = image ? ("dark" as const) : variant;
  const cardProps = {
    variant: effectiveVariant,
    hover: onClick || href ? ("glow-lift" as const) : ("lift" as const),
    padding: 'none' as const,
    className: cn(
      spanClass,
      // Ensure the card has height even with absolutely positioned layers
      "group cursor-pointer h-full rounded-2xl border border-white/10 bg-transparent",
      // Let grid's auto-rows handle base height; keep a sensible minimum
      "aspect-[4/3] min-h-[300px]",
      // If there's a background image, remove any gradient/bg-image from the card itself
      image && "bg-none",
      "transition-shadow duration-300 hover:shadow-glow-lg",
      className
    ),
  };

  if (href) {
    return (
      <a href={href} className={spanClass}>
        <GlassCard {...cardProps}>{content}</GlassCard>
      </a>
    );
  }

  if (onClick) {
    return (
      <GlassCard {...cardProps} onClick={onClick}>
        {content}
      </GlassCard>
    );
  }

  return (
    <GlassCard {...cardProps} className={cn(spanClass, "h-full", className)}>
      {content}
    </GlassCard>
  );
};

interface BentoShowcaseProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3;
    variant?: "light" | "dark" | "gradient" | "aurora";
    badge?: string;
    href?: string;
    onClick?: () => void;
  }>;
  columns?: 2 | 3 | 4 | "auto";
}

export const BentoShowcase: React.FC<BentoShowcaseProps> = ({
  items,
  columns = "auto",
}) => {
  return (
    <BentoGrid columns={columns}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BentoItem
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan}
            variant={item.variant}
            badge={item.badge}
            href={item.href}
            onClick={item.onClick}
          />
        </motion.div>
      ))}
    </BentoGrid>
  );
};