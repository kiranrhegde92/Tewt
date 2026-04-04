"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  gradient?: string;
}

export default function Card({
  children,
  className,
  onClick,
  hover = true,
  gradient,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow",
        hover && "cursor-pointer hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      {gradient && (
        <div
          className={cn(
            "absolute inset-0 opacity-5 bg-gradient-to-br",
            gradient
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
