"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LessonStepperProps {
  totalSteps: number;
  currentStep: number;
}

export default function LessonStepper({
  totalSteps,
  currentStep,
}: LessonStepperProps) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "h-2 rounded-full transition-colors",
            i === currentStep
              ? "bg-primary w-8"
              : i < currentStep
              ? "bg-primary/40 w-4"
              : "bg-muted w-4"
          )}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground">
        {currentStep + 1} / {totalSteps}
      </span>
    </div>
  );
}
