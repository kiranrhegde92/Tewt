"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ConceptBreakdownStep } from "@/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface ConceptBreakdownProps {
  step: ConceptBreakdownStep;
}

export default function ConceptBreakdown({ step }: ConceptBreakdownProps) {
  const [expandedStep, setExpandedStep] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔬</span>
        <div>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="relative space-y-3">
        {/* Connecting line */}
        <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-border" />

        {step.steps.map((s, i) => {
          const isExpanded = expandedStep === i;
          const isPast = i < expandedStep;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <button
                onClick={() => setExpandedStep(i)}
                className={cn(
                  "w-full text-left flex items-start gap-4 rounded-2xl border p-4 transition-all cursor-pointer",
                  isExpanded
                    ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                    : isPast
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-card hover:border-primary/30"
                )}
              >
                {/* Step icon/number */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl",
                    isExpanded
                      ? "bg-primary/10"
                      : isPast
                      ? "bg-accent/10"
                      : "bg-muted"
                  )}
                >
                  {s.icon}
                </div>

                <div className="flex-1">
                  <p
                    className={cn(
                      "font-semibold",
                      isExpanded && "text-primary"
                    )}
                  >
                    {s.title}
                  </p>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-3"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.explanation}
                      </p>
                      {s.codeSnippet && (
                        <div className="overflow-hidden rounded-xl border border-border">
                          <SyntaxHighlighter
                            language={s.language || "javascript"}
                            style={oneDark}
                            customStyle={{
                              margin: 0,
                              borderRadius: 0,
                              fontSize: "0.8rem",
                              padding: "0.75rem",
                            }}
                          >
                            {s.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Step indicator */}
                <div className="flex-shrink-0 mt-1">
                  {isPast && (
                    <span className="text-accent text-sm font-bold">✓</span>
                  )}
                  {isExpanded && (
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-primary text-sm font-bold"
                    >
                      ●
                    </motion.span>
                  )}
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Progress text */}
      <p className="text-center text-xs text-muted-foreground">
        Tap each step to explore — {expandedStep + 1} of {step.steps.length}
      </p>
    </motion.div>
  );
}
