"use client";

import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { MatchStep } from "@/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Zap } from "lucide-react";

interface MatchingGameProps {
  step: MatchStep;
  onCorrect: (xp: number) => void;
  onWrong: () => void;
}

export default function MatchingGame({ step, onCorrect, onWrong }: MatchingGameProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<[number, number] | null>(null);
  const [timer, setTimer] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const shuffledRight = useMemo(() => {
    const indices = step.pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [step.pairs]);

  useEffect(() => {
    if (isComplete) return;
    const t = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(t);
  }, [isComplete]);

  const handleRightClick = (rightOriginalIndex: number) => {
    if (selectedLeft === null || isComplete) return;
    if (matched.has(selectedLeft)) return;

    if (selectedLeft === rightOriginalIndex) {
      const newMatched = new Set(matched);
      newMatched.add(selectedLeft);
      setMatched(newMatched);
      setSelectedLeft(null);

      if (newMatched.size === step.pairs.length) {
        setIsComplete(true);
        onCorrect(step.xpBonus);
      }
    } else {
      setWrongPair([selectedLeft, rightOriginalIndex]);
      onWrong();
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 800);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <span className="text-2xl">🔗</span>
          <div>
            <h3 className="text-lg font-bold">Match the Pairs</h3>
            <p className="text-sm text-muted-foreground">{step.instruction}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock size={14} />
          {timer}s
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-2">
          {step.pairs.map((pair, i) => (
            <motion.button
              key={`l-${i}`}
              whileHover={!matched.has(i) ? { scale: 1.02 } : undefined}
              whileTap={!matched.has(i) ? { scale: 0.98 } : undefined}
              onClick={() => !matched.has(i) && setSelectedLeft(i)}
              className={cn(
                "w-full rounded-xl border-2 p-3 text-sm font-medium text-left transition-all cursor-pointer",
                matched.has(i) && "border-accent bg-accent/10 opacity-60",
                selectedLeft === i &&
                  !matched.has(i) &&
                  "border-primary bg-primary/10 ring-2 ring-primary/30",
                wrongPair?.[0] === i && "border-red-500 bg-red-500/10",
                !matched.has(i) &&
                  selectedLeft !== i &&
                  !wrongPair &&
                  "border-border hover:border-primary/50"
              )}
              disabled={matched.has(i)}
            >
              {pair.left}
            </motion.button>
          ))}
        </div>

        {/* Right column (shuffled) */}
        <div className="space-y-2">
          {shuffledRight.map((origIdx) => (
            <motion.button
              key={`r-${origIdx}`}
              whileHover={!matched.has(origIdx) ? { scale: 1.02 } : undefined}
              whileTap={!matched.has(origIdx) ? { scale: 0.98 } : undefined}
              onClick={() => handleRightClick(origIdx)}
              className={cn(
                "w-full rounded-xl border-2 p-3 text-sm font-medium text-left transition-all cursor-pointer",
                matched.has(origIdx) && "border-accent bg-accent/10 opacity-60",
                wrongPair?.[1] === origIdx && "border-red-500 bg-red-500/10",
                !matched.has(origIdx) && "border-border hover:border-secondary/50"
              )}
              disabled={matched.has(origIdx)}
            >
              {step.pairs[origIdx].right}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Completion */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl bg-accent/10 p-4 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={20} className="text-accent" />
            <span className="font-bold text-accent">All matched in {timer}s!</span>
            <span className="ml-2 flex items-center gap-1 text-sm text-warning font-semibold">
              <Zap size={14} /> +{step.xpBonus} XP
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
