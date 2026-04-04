"use client";

import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { PuzzleStep } from "@/types";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { CheckCircle2, RotateCcw, Zap } from "lucide-react";

interface CodePuzzleProps {
  step: PuzzleStep;
  onCorrect: (xp: number) => void;
  onWrong: () => void;
}

export default function CodePuzzle({ step, onCorrect, onWrong }: CodePuzzleProps) {
  const [shuffled] = useState(() => {
    const indices = step.codeLines.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const [placed, setPlaced] = useState<number[]>([]);
  const [available, setAvailable] = useState<number[]>(shuffled);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handlePlace = useCallback((lineIndex: number) => {
    if (isChecked) return;
    setPlaced((p) => [...p, lineIndex]);
    setAvailable((a) => a.filter((i) => i !== lineIndex));
  }, [isChecked]);

  const handleRemove = useCallback((pos: number) => {
    if (isChecked) return;
    const lineIndex = placed[pos];
    setPlaced((p) => p.filter((_, i) => i !== pos));
    setAvailable((a) => [...a, lineIndex]);
  }, [isChecked, placed]);

  const handleCheck = () => {
    const correct = placed.every((lineIdx, pos) => lineIdx === step.correctOrder[pos]);
    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      onCorrect(step.xpBonus);
    } else {
      onWrong();
    }
  };

  const handleReset = () => {
    setPlaced([]);
    setAvailable(shuffled);
    setIsChecked(false);
    setIsCorrect(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-2">
        <span className="text-2xl">🧩</span>
        <div>
          <h3 className="text-lg font-bold">Code Puzzle</h3>
          <p className="text-sm text-muted-foreground">{step.instruction}</p>
        </div>
      </div>

      {/* Drop zone */}
      <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 min-h-[120px]">
        <p className="text-xs text-muted-foreground mb-2">
          Your code (tap lines below to add):
        </p>
        <div className="space-y-2">
          {placed.map((lineIdx, pos) => (
            <motion.button
              key={`placed-${pos}`}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => handleRemove(pos)}
              className={cn(
                "block w-full rounded-xl border px-4 py-2 font-mono text-sm text-left cursor-pointer transition-colors",
                isChecked && lineIdx === step.correctOrder[pos]
                  ? "border-accent bg-accent/10"
                  : isChecked
                  ? "border-red-500 bg-red-500/10"
                  : "border-border bg-card hover:border-primary/50"
              )}
            >
              <span className="text-muted-foreground mr-2">{pos + 1}.</span>
              {step.codeLines[lineIdx]}
            </motion.button>
          ))}
          {placed.length === 0 && (
            <p className="py-4 text-center text-sm text-muted-foreground italic">
              Tap code lines below to build your solution...
            </p>
          )}
        </div>
      </div>

      {/* Available lines */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Available lines:</p>
        {available.map((lineIdx) => (
          <motion.button
            key={`avail-${lineIdx}`}
            layout
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePlace(lineIdx)}
            className="block w-full rounded-xl border border-border bg-card px-4 py-2 font-mono text-sm text-left cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            {step.codeLines[lineIdx]}
          </motion.button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {!isChecked ? (
          <>
            <Button
              onClick={handleCheck}
              disabled={placed.length !== step.correctOrder.length}
            >
              Check Answer
            </Button>
            <Button variant="ghost" onClick={handleReset}>
              <RotateCcw size={16} className="mr-1" /> Reset
            </Button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "flex-1 rounded-2xl p-4",
              isCorrect ? "bg-accent/10" : "bg-red-500/10"
            )}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="font-bold text-accent">Perfect!</span>
                  <span className="ml-auto flex items-center gap-1 text-sm text-warning font-semibold">
                    <Zap size={14} /> +{step.xpBonus} XP
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-red-500">Not quite right.</span>
                  <Button variant="ghost" size="sm" onClick={handleReset} className="ml-auto">
                    Try Again
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
