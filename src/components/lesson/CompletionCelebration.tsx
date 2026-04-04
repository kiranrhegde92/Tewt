"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import XPCounter from "@/components/ui/XPCounter";
import { CheckCircle2, ArrowRight, RotateCcw } from "lucide-react";

interface CompletionCelebrationProps {
  xpEarned: number;
  lessonTitle: string;
  trackId: string;
  nextLessonId?: string;
}

const confettiColors = ["#8B5CF6", "#F472B6", "#34D399", "#FBBF24", "#3B82F6", "#EF4444"];

export default function CompletionCelebration({
  xpEarned,
  lessonTitle,
  trackId,
  nextLessonId,
}: CompletionCelebrationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col items-center py-12 text-center"
    >
      {/* Confetti particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: confettiColors[i % confettiColors.length],
            left: `${Math.random() * 100}%`,
            top: "-20px",
          }}
          animate={{
            y: [0, 500 + Math.random() * 300],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={48} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-2 text-3xl font-extrabold"
      >
        Lesson Complete! 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-6 text-muted-foreground"
      >
        You finished &quot;{lessonTitle}&quot;
      </motion.p>

      {/* XP Reward */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.6 }}
        className="mb-8 rounded-2xl bg-primary/10 px-8 py-4"
      >
        <XPCounter value={xpEarned} size="lg" />
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        {nextLessonId ? (
          <Link href={`/tracks/${trackId}/lessons/${nextLessonId}`}>
            <Button variant="primary" size="lg">
              Next Lesson <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        ) : (
          <Link href={`/tracks/${trackId}`}>
            <Button variant="primary" size="lg">
              Back to Track <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        )}
        <Link href={`/tracks/${trackId}`}>
          <Button variant="ghost" size="lg">
            <RotateCcw size={16} className="mr-2" /> Review Track
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
