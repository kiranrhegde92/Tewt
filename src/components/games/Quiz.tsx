"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { QuizStep } from "@/types";
import { CheckCircle2, XCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizProps {
  step: QuizStep;
  onCorrect: (xp: number) => void;
  onWrong: () => void;
}

export default function Quiz({ step, onCorrect, onWrong }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);

    if (index === step.correctIndex) {
      onCorrect(step.xpBonus);
    } else {
      onWrong();
    }
  };

  const isCorrect = selected === step.correctIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-start gap-2">
        <span className="text-2xl">🤔</span>
        <h3 className="text-lg font-bold">{step.question}</h3>
      </div>

      <div className="grid gap-3">
        {step.options.map((option, i) => {
          const isThis = selected === i;
          const isCorrectOption = i === step.correctIndex;

          return (
            <motion.button
              key={i}
              whileHover={!showResult ? { scale: 1.02 } : undefined}
              whileTap={!showResult ? { scale: 0.98 } : undefined}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={cn(
                "flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all cursor-pointer",
                !showResult &&
                  "border-border hover:border-primary/50 hover:bg-primary/5",
                showResult && isCorrectOption &&
                  "border-accent bg-accent/10 text-accent",
                showResult && isThis && !isCorrectOption &&
                  "border-red-500 bg-red-500/10 text-red-500",
                showResult && !isThis && !isCorrectOption &&
                  "border-border opacity-50"
              )}
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-muted text-sm font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1 font-medium">{option}</span>
              {showResult && isCorrectOption && (
                <CheckCircle2 size={20} className="text-accent" />
              )}
              {showResult && isThis && !isCorrectOption && (
                <XCircle size={20} className="text-red-500" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Result feedback */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "rounded-2xl p-4",
            isCorrect ? "bg-accent/10" : "bg-red-500/10"
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <CheckCircle2 size={18} className="text-accent" />
                <span className="font-bold text-accent">Correct!</span>
                <span className="ml-auto flex items-center gap-1 text-sm text-warning font-semibold">
                  <Zap size={14} /> +{step.xpBonus} XP
                </span>
              </>
            ) : (
              <>
                <XCircle size={18} className="text-red-500" />
                <span className="font-bold text-red-500">Not quite!</span>
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{step.explanation}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
