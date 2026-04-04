"use client";

import { motion } from "motion/react";
import { useState, useCallback, useRef, useEffect } from "react";
import { VisualizerStep } from "@/types";
import Button from "@/components/ui/Button";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

interface SortingVisualizerProps {
  step: VisualizerStep;
}

export default function SortingVisualizer({ step }: SortingVisualizerProps) {
  const [arr, setArr] = useState<number[]>([...step.data]);
  const [comparing, setComparing] = useState<[number, number] | null>(null);
  const [sorted, setSorted] = useState<Set<number>>(new Set());
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [stepCount, setStepCount] = useState(0);
  const cancelRef = useRef(false);

  useEffect(() => {
    return () => {
      cancelRef.current = true;
    };
  }, []);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = useCallback(async () => {
    cancelRef.current = false;
    setIsRunning(true);
    const a = [...arr];
    const n = a.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (cancelRef.current) return;
        setComparing([j, j + 1]);
        setStepCount((s) => s + 1);
        await sleep(speed);

        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          setArr([...a]);
        }
      }
      setSorted((prev) => new Set([...prev, n - 1 - i]));
    }
    setSorted(new Set(a.map((_, i) => i)));
    setComparing(null);
    setIsRunning(false);
  }, [arr, speed]);

  const handleReset = () => {
    cancelRef.current = true;
    setArr([...step.data]);
    setComparing(null);
    setSorted(new Set());
    setIsRunning(false);
    setStepCount(0);
  };

  const maxVal = Math.max(...arr);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div>
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="text-2xl">📊</span> {step.title}
        </h3>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-center gap-1.5 rounded-2xl border border-border bg-card p-6 min-h-[200px]">
        {arr.map((val, i) => {
          const height = (val / maxVal) * 150 + 20;
          const isComparing = comparing?.includes(i);
          const isSorted = sorted.has(i);

          return (
            <motion.div
              key={i}
              layout
              className={cn(
                "rounded-t-lg w-10 flex items-end justify-center pb-1 text-xs font-bold transition-colors",
                isComparing
                  ? "bg-secondary"
                  : isSorted
                  ? "bg-accent"
                  : "bg-primary"
              )}
              style={{ height }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span className="text-white">{val}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {!isRunning ? (
          <Button onClick={bubbleSort} size="sm">
            <Play size={16} className="mr-1" /> Sort
          </Button>
        ) : (
          <Button
            onClick={() => {
              cancelRef.current = true;
              setIsRunning(false);
            }}
            size="sm"
            variant="secondary"
          >
            <Pause size={16} className="mr-1" /> Pause
          </Button>
        )}
        <Button onClick={handleReset} size="sm" variant="ghost">
          <RotateCcw size={16} className="mr-1" /> Reset
        </Button>

        {/* Speed control */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-muted-foreground">Speed:</span>
          {[
            { label: "Slow", ms: 800 },
            { label: "Normal", ms: 500 },
            { label: "Fast", ms: 200 },
          ].map((s) => (
            <button
              key={s.label}
              onClick={() => setSpeed(s.ms)}
              className={cn(
                "rounded-lg px-2 py-1 text-xs font-medium transition-colors cursor-pointer",
                speed === s.ms
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Comparisons: {stepCount} | Algorithm: Bubble Sort
      </p>
    </motion.div>
  );
}
