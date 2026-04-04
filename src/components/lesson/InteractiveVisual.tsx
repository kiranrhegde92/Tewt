"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { InteractiveVisualStep } from "@/types";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";

interface InteractiveVisualProps {
  step: InteractiveVisualStep;
}

// ============================================
// Thread Race Visualization
// ============================================
function ThreadRace({ config }: { config: Record<string, unknown> }) {
  const threads = (config.threads as { name: string; color: string; tasks: string[] }[]) || [
    { name: "Thread 1", color: "#8B5CF6", tasks: ["Download", "Parse", "Display"] },
    { name: "Thread 2", color: "#3B82F6", tasks: ["Load CSS", "Apply styles"] },
    { name: "Thread 3", color: "#10B981", tasks: ["Fetch API", "Process data", "Update UI"] },
  ];
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState<number[]>(threads.map(() => 0));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev.map((p, i) => {
          if (p >= threads[i].tasks.length) return p;
          return p + (Math.random() > 0.4 ? 0.05 : 0);
        });
        if (next.every((p, i) => p >= threads[i].tasks.length)) {
          clearInterval(intervalRef.current!);
          setRunning(false);
        }
        return next;
      });
    }, 100);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
    setProgress(threads.map(() => 0));
  };

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Watch multiple threads execute tasks simultaneously — this is parallelism!
      </p>
      {threads.map((thread, ti) => (
        <div key={ti} className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: thread.color }} />
            <span className="text-sm font-semibold">{thread.name}</span>
          </div>
          <div className="flex gap-1">
            {thread.tasks.map((task, taskIdx) => {
              const taskProgress = Math.max(0, Math.min(1, progress[ti] - taskIdx));
              return (
                <div
                  key={taskIdx}
                  className="relative flex-1 h-10 rounded-lg border border-border overflow-hidden bg-muted/50"
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-lg"
                    style={{ backgroundColor: thread.color }}
                    animate={{ width: `${taskProgress * 100}%` }}
                    transition={{ duration: 0.1 }}
                  />
                  <span className="relative z-10 flex h-full items-center justify-center text-xs font-medium">
                    {task} {taskProgress >= 1 ? "✓" : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        {!running ? (
          <button onClick={start} className="flex items-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white cursor-pointer">
            <Play size={14} /> Run Threads
          </button>
        ) : (
          <button onClick={() => { clearInterval(intervalRef.current!); setRunning(false); }} className="flex items-center gap-1 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white cursor-pointer">
            <Pause size={14} /> Pause
          </button>
        )}
        <button onClick={reset} className="flex items-center gap-1 rounded-xl bg-muted px-4 py-2 text-sm font-semibold cursor-pointer">
          <RotateCcw size={14} /> Reset
        </button>
      </div>
    </div>
  );
}

// ============================================
// Memory Boxes Visualization
// ============================================
function MemoryBoxes({ config }: { config: Record<string, unknown> }) {
  const vars = (config.variables as { name: string; value: string; type: string }[]) || [
    { name: "age", value: "25", type: "number" },
    { name: "name", value: '"Alice"', type: "string" },
    { name: "active", value: "true", type: "boolean" },
  ];
  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Each variable is a labeled box in memory. Tap a box to see what&apos;s inside!
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {vars.map((v, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHighlighted(highlighted === i ? null : i)}
            className={cn(
              "flex flex-col items-center rounded-2xl border-2 p-4 transition-all cursor-pointer",
              highlighted === i ? "border-primary bg-primary/10 shadow-lg shadow-primary/20" : "border-border bg-card"
            )}
          >
            {/* Label */}
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              {v.name}
            </span>
            {/* Box */}
            <motion.div
              animate={highlighted === i ? { scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-muted text-lg font-mono font-bold"
            >
              {v.value}
            </motion.div>
            {/* Type */}
            <span className={cn(
              "mt-2 rounded-full px-2 py-0.5 text-xs font-medium",
              v.type === "number" ? "bg-blue-500/10 text-blue-500" :
              v.type === "string" ? "bg-green-500/10 text-green-500" :
              "bg-amber-500/10 text-amber-500"
            )}>
              {v.type}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Call Stack Visualization
// ============================================
function CallStack({ config }: { config: Record<string, unknown> }) {
  const frames = (config.frames as string[]) || ["main()", "greet('Alice')", "toUpperCase()"];
  const [visibleCount, setVisibleCount] = useState(0);
  const [popping, setPopping] = useState(false);

  const pushNext = () => {
    if (visibleCount < frames.length) setVisibleCount(visibleCount + 1);
  };

  const popTop = () => {
    if (visibleCount > 0) {
      setPopping(true);
      setTimeout(() => {
        setVisibleCount(visibleCount - 1);
        setPopping(false);
      }, 300);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        The call stack tracks which function is currently running. Push to add, pop to remove!
      </p>
      <div className="flex flex-col-reverse items-center gap-1.5 min-h-[180px] rounded-2xl border border-border bg-muted/30 p-4">
        {visibleCount === 0 && (
          <p className="text-sm text-muted-foreground italic">Stack is empty</p>
        )}
        {frames.slice(0, visibleCount).map((frame, i) => {
          const isTop = i === visibleCount - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{
                opacity: isTop && popping ? 0 : 1,
                y: isTop && popping ? -30 : 0,
                scale: isTop && popping ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={cn(
                "w-full max-w-xs rounded-xl border px-4 py-2 text-center font-mono text-sm",
                isTop ? "border-primary bg-primary/10 font-bold" : "border-border bg-card"
              )}
            >
              {frame}
              {isTop && <span className="ml-2 text-xs text-primary">← running</span>}
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={pushNext} disabled={visibleCount >= frames.length} className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40 cursor-pointer">
          Push ↓
        </button>
        <button onClick={popTop} disabled={visibleCount === 0} className="rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40 cursor-pointer">
          Pop ↑
        </button>
      </div>
    </div>
  );
}

// ============================================
// OOP Kingdom Visualization
// ============================================
function OOPKingdom({ config }: { config: Record<string, unknown> }) {
  const classes = (config.classes as { name: string; emoji: string; parent?: string; properties: string[]; methods: string[] }[]) || [
    { name: "Animal", emoji: "🐾", properties: ["name", "sound"], methods: ["speak()"] },
    { name: "Dog", emoji: "🐕", parent: "Animal", properties: ["breed"], methods: ["fetch()"] },
    { name: "Cat", emoji: "🐈", parent: "Animal", properties: ["indoor"], methods: ["purr()"] },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Tap a class to see its properties and methods. Children inherit from parents!
      </p>
      <div className="flex flex-col items-center gap-2">
        {/* Parent class */}
        {classes.filter((c) => !c.parent).map((cls, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(selected === i ? null : i)}
            className={cn("w-full max-w-sm rounded-2xl border-2 p-4 text-center cursor-pointer transition-all",
              selected === i ? "border-primary bg-primary/10" : "border-border bg-card"
            )}
          >
            <span className="text-3xl">{cls.emoji}</span>
            <p className="font-bold mt-1">{cls.name}</p>
            {selected === i && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-left text-xs">
                <p className="text-muted-foreground mb-1">Properties: <span className="text-foreground">{cls.properties.join(", ")}</span></p>
                <p className="text-muted-foreground">Methods: <span className="text-primary">{cls.methods.join(", ")}</span></p>
              </motion.div>
            )}
          </motion.button>
        ))}

        {/* Inheritance arrows */}
        <div className="text-muted-foreground text-lg">↙️ inherits ↘️</div>

        {/* Child classes */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {classes.filter((c) => c.parent).map((cls, i) => {
            const actualIdx = classes.indexOf(cls);
            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelected(selected === actualIdx ? null : actualIdx)}
                className={cn("rounded-2xl border-2 p-3 text-center cursor-pointer transition-all",
                  selected === actualIdx ? "border-accent bg-accent/10" : "border-border bg-card"
                )}
              >
                <span className="text-2xl">{cls.emoji}</span>
                <p className="font-bold text-sm mt-1">{cls.name}</p>
                <p className="text-xs text-muted-foreground">extends {cls.parent}</p>
                {selected === actualIdx && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-left text-xs">
                    <p className="text-muted-foreground">Own: <span className="text-foreground">{cls.properties.join(", ")}</span></p>
                    <p className="text-muted-foreground">Methods: <span className="text-accent">{cls.methods.join(", ")}</span></p>
                    <p className="text-muted-foreground mt-1 italic">+ inherited from {cls.parent}</p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================
export default function InteractiveVisual({ step }: InteractiveVisualProps) {
  const renderVisual = () => {
    switch (step.visualType) {
      case "thread-race":
        return <ThreadRace config={step.config} />;
      case "memory-boxes":
        return <MemoryBoxes config={step.config} />;
      case "call-stack":
        return <CallStack config={step.config} />;
      case "oop-kingdom":
        return <OOPKingdom config={step.config} />;
      default:
        return (
          <div className="rounded-2xl bg-muted/50 p-8 text-center">
            <span className="text-4xl mb-3 block">🔧</span>
            <p className="text-muted-foreground">Interactive visual: {step.visualType}</p>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎬</span>
        <div>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        {renderVisual()}
      </div>
    </motion.div>
  );
}
