"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ComicStep, ComicPanel as ComicPanelType } from "@/types";
import { characters } from "@/data/characters";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComicPanelProps {
  step: ComicStep;
}

const panelBackgrounds = [
  "from-purple-500/10 to-pink-500/10",
  "from-blue-500/10 to-cyan-500/10",
  "from-amber-500/10 to-orange-500/10",
  "from-green-500/10 to-emerald-500/10",
  "from-red-500/10 to-rose-500/10",
  "from-indigo-500/10 to-violet-500/10",
];

function SinglePanel({
  panel,
  index,
  isActive,
}: {
  panel: ComicPanelType;
  index: number;
  isActive: boolean;
}) {
  const character = panel.character ? characters[panel.character] : null;
  const bg = panel.background || panelBackgrounds[index % panelBackgrounds.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative rounded-2xl border-2 border-border overflow-hidden min-h-[250px] flex flex-col",
        "bg-gradient-to-br",
        bg
      )}
    >
      {/* Panel number */}
      <div className="absolute top-2 left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-foreground/80 text-xs font-bold text-background">
        {index + 1}
      </div>

      {/* Illustration area */}
      <div className="flex-1 flex items-center justify-center p-6 pt-8">
        <motion.span
          className="text-6xl sm:text-7xl"
          animate={isActive ? { scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {panel.illustration}
        </motion.span>
      </div>

      {/* Narration box (if any) */}
      {panel.narration && (
        <div className="mx-3 mb-2 rounded-lg bg-background/80 px-3 py-2 text-center text-sm italic text-muted-foreground backdrop-blur-sm">
          {panel.narration}
        </div>
      )}

      {/* Dialogue bubble */}
      {panel.dialogue && character && (
        <div className="flex items-end gap-2 p-3 pt-0">
          <motion.div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
            style={{ backgroundColor: `${character.color}20` }}
            animate={isActive ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {character.avatar}
          </motion.div>
          <div className="relative flex-1 rounded-2xl rounded-bl-sm bg-card/90 backdrop-blur-sm border border-border p-3">
            <p className="text-xs font-bold mb-0.5" style={{ color: character.color }}>
              {character.name}
            </p>
            <p className="text-sm leading-relaxed">{panel.dialogue}</p>
          </div>
        </div>
      )}

      {/* Dialogue without character */}
      {panel.dialogue && !character && (
        <div className="p-3 pt-0">
          <div className="rounded-2xl bg-card/90 backdrop-blur-sm border border-border p-3 text-center">
            <p className="text-sm leading-relaxed">{panel.dialogue}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function ComicPanelComponent({ step }: ComicPanelProps) {
  const [activePanel, setActivePanel] = useState(0);
  const isMultiPanel = step.panels.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">📰</span>
        <h3 className="text-lg font-bold">{step.title}</h3>
      </div>

      {/* Panels */}
      {step.panels.length <= 2 ? (
        // Side by side for 1-2 panels
        <div className={cn("grid gap-4", step.panels.length === 2 && "sm:grid-cols-2")}>
          {step.panels.map((panel, i) => (
            <SinglePanel key={i} panel={panel} index={i} isActive={true} />
          ))}
        </div>
      ) : (
        // Slideshow for 3+ panels
        <div className="space-y-3">
          <SinglePanel
            panel={step.panels[activePanel]}
            index={activePanel}
            isActive={true}
          />

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActivePanel(Math.max(0, activePanel - 1))}
              disabled={activePanel === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-primary/10 disabled:opacity-30 cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {step.panels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePanel(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all cursor-pointer",
                    i === activePanel ? "w-6 bg-primary" : "w-2.5 bg-muted"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActivePanel(Math.min(step.panels.length - 1, activePanel + 1))
              }
              disabled={activePanel === step.panels.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-primary/10 disabled:opacity-30 cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
