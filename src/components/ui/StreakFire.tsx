"use client";

import { motion } from "motion/react";

interface StreakFireProps {
  streak: number;
  size?: "sm" | "md" | "lg";
}

export default function StreakFire({ streak, size = "md" }: StreakFireProps) {
  const scale = streak >= 7 ? 1.3 : streak >= 3 ? 1.15 : 1;
  const textSize = size === "lg" ? "text-3xl" : size === "md" ? "text-xl" : "text-sm";
  const fireSize = size === "lg" ? "text-4xl" : size === "md" ? "text-2xl" : "text-base";

  return (
    <div className="flex items-center gap-1.5">
      <motion.span
        className={fireSize}
        animate={{
          scale: [scale, scale * 1.2, scale],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🔥
      </motion.span>
      <span className={`font-bold text-warning ${textSize}`}>{streak}</span>
      {size !== "sm" && (
        <span className="text-xs text-muted-foreground">
          day{streak !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
