"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";

interface FlashCard {
  front: string;
  back: string;
}

interface FlashCardsProps {
  cards: FlashCard[];
  title?: string;
}

export default function FlashCards({ cards, title = "Flash Cards" }: FlashCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [reviewing, setReviewing] = useState<Set<number>>(new Set());

  const card = cards[currentIndex];
  const isComplete = known.size + reviewing.size === cards.length;

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleKnow = () => {
    setKnown((prev) => new Set([...prev, currentIndex]));
    goNext();
  };

  const handleReview = () => {
    setReviewing((prev) => new Set([...prev, currentIndex]));
    goNext();
  };

  const goNext = () => {
    setIsFlipped(false);
    const next = (currentIndex + 1) % cards.length;
    setCurrentIndex(next);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown(new Set());
    setReviewing(new Set());
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-2xl bg-accent/10 p-8 text-center"
      >
        <CheckCircle2 size={48} className="mx-auto mb-4 text-accent" />
        <h3 className="text-xl font-bold mb-2">All Cards Reviewed!</h3>
        <p className="text-muted-foreground mb-4">
          {known.size} known | {reviewing.size} need review
        </p>
        <Button onClick={handleReset} variant="ghost">
          <RotateCcw size={16} className="mr-1" /> Start Over
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="text-2xl">🃏</span> {title}
        </h3>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Card */}
      <div className="perspective-[1000px]" onClick={handleFlip}>
        <motion.div
          className="relative h-48 w-full cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-primary/30 bg-card p-6 text-center backface-hidden",
            )}
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-lg font-semibold">{card.front}</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 text-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-lg font-medium text-accent">{card.back}</p>
          </div>
        </motion.div>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {isFlipped ? "Did you know this?" : "Tap to reveal answer"}
      </p>

      {/* Actions */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3"
        >
          <Button variant="outline" onClick={handleReview} size="sm">
            😅 Review Again
          </Button>
          <Button variant="primary" onClick={handleKnow} size="sm">
            ✅ Got It!
          </Button>
        </motion.div>
      )}

      {!isFlipped && (
        <div className="flex justify-center">
          <Button variant="ghost" size="sm" onClick={goNext}>
            Skip <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      )}

      {/* Progress */}
      <div className="flex justify-center gap-1.5">
        {cards.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              known.has(i)
                ? "bg-accent"
                : reviewing.has(i)
                ? "bg-warning"
                : i === currentIndex
                ? "bg-primary"
                : "bg-muted"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}
