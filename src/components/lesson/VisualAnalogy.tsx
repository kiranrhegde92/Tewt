"use client";

import { motion } from "motion/react";
import { VisualAnalogyStep } from "@/types";
import { ArrowRight } from "lucide-react";

interface VisualAnalogyProps {
  step: VisualAnalogyStep;
}

export default function VisualAnalogy({ step }: VisualAnalogyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">💡</span>
        <h3 className="text-lg font-bold">{step.title}</h3>
      </div>

      {/* Main analogy banner */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-6 text-center"
      >
        <p className="text-lg font-semibold text-foreground">
          &ldquo;{step.analogy}&rdquo;
        </p>
      </motion.div>

      {/* Two columns: real world vs code concept */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Real world */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-warning/30 bg-warning/5 p-5"
        >
          <div className="mb-3 flex items-center gap-3">
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {step.realWorldEmoji}
            </motion.span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-warning">
                Real World
              </p>
              <p className="font-bold">{step.realWorld}</p>
            </div>
          </div>
        </motion.div>

        {/* Code concept */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-primary/30 bg-primary/5 p-5"
        >
          <div className="mb-3 flex items-center gap-3">
            <motion.span
              className="text-4xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {step.codeConceptEmoji}
            </motion.span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                In Code
              </p>
              <p className="font-bold">{step.codeConcept}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Point-by-point mappings */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          How they map:
        </p>
        {step.mappings.map((mapping, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-center gap-3 rounded-xl bg-muted/50 p-3"
          >
            <div className="flex-1 rounded-lg bg-warning/10 px-3 py-2 text-center text-sm font-medium">
              {mapping.real}
            </div>
            <ArrowRight size={16} className="flex-shrink-0 text-muted-foreground" />
            <div className="flex-1 rounded-lg bg-primary/10 px-3 py-2 text-center text-sm font-medium">
              {mapping.code}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-xl bg-accent/10 border border-accent/20 p-4"
      >
        <p className="text-sm font-medium text-accent flex items-start gap-2">
          <span className="text-lg">✨</span>
          {step.conclusion}
        </p>
      </motion.div>
    </motion.div>
  );
}
