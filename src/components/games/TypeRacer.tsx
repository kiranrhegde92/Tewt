"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { TypeRacerStep } from "@/types";
import { cn } from "@/lib/utils";
import { Clock, Zap, Keyboard } from "lucide-react";

interface TypeRacerProps {
  step: TypeRacerStep;
  onCorrect: (xp: number) => void;
  onWrong: () => void;
}

export default function TypeRacer({ step, onCorrect, onWrong }: TypeRacerProps) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      if (isComplete) return;

      if (!startTime) setStartTime(Date.now());
      setInput(value);

      // Count errors
      let errCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== step.code[i]) errCount++;
      }
      setErrors(errCount);
      setAccuracy(
        Math.round(((value.length - errCount) / Math.max(value.length, 1)) * 100)
      );

      // Check completion
      if (value === step.code) {
        const elapsed = (Date.now() - (startTime || Date.now())) / 1000 / 60;
        const words = step.code.split(/\s+/).length;
        const finalWpm = Math.round(words / Math.max(elapsed, 0.01));
        setWpm(finalWpm);
        setIsComplete(true);

        if (finalWpm >= step.targetWPM && accuracy >= 80) {
          onCorrect(step.xpBonus);
        } else {
          onWrong();
        }
      }
    },
    [isComplete, startTime, step.code, step.targetWPM, step.xpBonus, accuracy, onCorrect, onWrong]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-2">
        <Keyboard size={24} className="text-primary mt-0.5" />
        <div>
          <h3 className="text-lg font-bold">Type Racer</h3>
          <p className="text-sm text-muted-foreground">{step.instruction}</p>
        </div>
      </div>

      {/* Target code display */}
      <div className="rounded-2xl border border-border bg-[#1e1e2e] p-4 font-mono text-sm">
        {step.code.split("").map((char, i) => {
          let color = "text-gray-500";
          if (i < input.length) {
            color = input[i] === char ? "text-green-400" : "text-red-400 bg-red-500/20";
          }
          if (i === input.length) {
            color = "text-white bg-primary/30";
          }
          return (
            <span key={i} className={cn("transition-colors", color)}>
              {char === "\n" ? "↵\n" : char}
            </span>
          );
        })}
      </div>

      {/* Input area */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleChange}
        disabled={isComplete}
        className="w-full rounded-2xl border border-border bg-card p-4 font-mono text-sm resize-none focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        rows={Math.max(step.code.split("\n").length, 3)}
        placeholder="Start typing here..."
        spellCheck={false}
      />

      {/* Stats */}
      <div className="flex flex-wrap gap-4 text-sm">
        <span className="flex items-center gap-1 text-muted-foreground">
          <Clock size={14} />
          {startTime
            ? `${Math.round((Date.now() - startTime) / 1000)}s`
            : "Ready"}
        </span>
        <span className="text-muted-foreground">
          Accuracy: <strong className={accuracy >= 90 ? "text-accent" : "text-warning"}>{accuracy}%</strong>
        </span>
        <span className="text-muted-foreground">
          Errors: <strong className={errors > 0 ? "text-red-500" : "text-accent"}>{errors}</strong>
        </span>
        {isComplete && (
          <span className="flex items-center gap-1 font-bold text-primary">
            <Zap size={14} /> {wpm} WPM
            {wpm >= step.targetWPM ? " 🎉" : ""}
          </span>
        )}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "rounded-2xl p-4",
            wpm >= step.targetWPM ? "bg-accent/10" : "bg-warning/10"
          )}
        >
          {wpm >= step.targetWPM ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-accent">Speed Demon! 🏎️</span>
              <span className="ml-auto flex items-center gap-1 text-warning font-semibold">
                <Zap size={14} /> +{step.xpBonus} XP
              </span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Target: {step.targetWPM} WPM. Keep practicing to earn bonus XP!
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
