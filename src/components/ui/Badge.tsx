"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon: string;
  name: string;
  description?: string;
  unlocked?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-12 h-12 text-lg",
  md: "w-16 h-16 text-2xl",
  lg: "w-20 h-20 text-3xl",
};

export default function Badge({
  icon,
  name,
  description,
  unlocked = false,
  size = "md",
}: BadgeProps) {
  return (
    <motion.div
      whileHover={unlocked ? { scale: 1.1, rotate: 5 } : undefined}
      className="flex flex-col items-center gap-2"
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl border-2 transition-all",
          sizeMap[size],
          unlocked
            ? "border-warning bg-warning/10 shadow-lg shadow-warning/20"
            : "border-border bg-muted opacity-40 grayscale"
        )}
      >
        <span className={unlocked ? "" : "opacity-50"}>{icon}</span>
      </div>
      <div className="text-center">
        <p
          className={cn(
            "text-xs font-semibold",
            unlocked ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {name}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
