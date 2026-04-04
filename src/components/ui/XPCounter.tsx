"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { Trophy } from "lucide-react";

interface XPCounterProps {
  value: number;
  size?: "sm" | "md" | "lg";
}

export default function XPCounter({ value, size = "md" }: XPCounterProps) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const textSize = size === "lg" ? "text-3xl" : size === "md" ? "text-xl" : "text-sm";
  const iconSize = size === "lg" ? 28 : size === "md" ? 20 : 14;

  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        key={value}
      >
        <Trophy size={iconSize} className="text-warning" />
      </motion.div>
      <motion.span className={`font-bold text-primary ${textSize}`}>
        {display}
      </motion.span>
      <span className={`font-semibold text-muted-foreground ${size === "lg" ? "text-lg" : "text-xs"}`}>
        XP
      </span>
    </div>
  );
}
