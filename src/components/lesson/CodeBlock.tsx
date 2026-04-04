"use client";

import { motion } from "motion/react";
import { CodeStep } from "@/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Code2 } from "lucide-react";

interface CodeBlockProps {
  step: CodeStep;
}

export default function CodeBlock({ step }: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <Code2 size={20} className="text-primary" />
        <h3 className="text-lg font-bold">{step.title}</h3>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {step.explanation}
      </p>

      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center gap-2 border-b border-border bg-[#1e1e2e] px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-gray-400">{step.language}</span>
        </div>
        <SyntaxHighlighter
          language={step.language}
          style={oneDark}
          showLineNumbers
          wrapLines
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: step.highlightLines?.includes(lineNumber)
                ? "rgba(139, 92, 246, 0.15)"
                : undefined,
            },
          })}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: "0.875rem",
          }}
        >
          {step.code}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}
