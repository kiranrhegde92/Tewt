"use client";

import { motion } from "motion/react";
import { StoryStep } from "@/types";
import { characters } from "@/data/characters";
import CharacterAvatar from "./CharacterAvatar";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface StoryPanelProps {
  step: StoryStep;
}

export default function StoryPanel({ step }: StoryPanelProps) {
  const character = characters[step.character];
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < step.dialogue.length) {
        setDisplayedText(step.dialogue.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [step.dialogue]);

  const handleSkip = () => {
    setDisplayedText(step.dialogue);
    setIsTyping(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Character + Dialogue */}
      <div className="flex gap-4">
        <CharacterAvatar
          characterId={step.character}
          mood={step.mood}
          size="lg"
        />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span
              className="text-sm font-bold"
              style={{ color: character?.color }}
            >
              {character?.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {character?.role}
            </span>
          </div>
          <motion.div
            className="rounded-2xl rounded-tl-sm border border-border bg-card p-4 shadow-sm"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <p className="text-base leading-relaxed" onClick={handleSkip}>
              {displayedText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="ml-0.5 inline-block w-2 h-4 bg-primary align-middle"
                />
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Optional code snippet */}
      {step.codeSnippet && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-border"
        >
          <SyntaxHighlighter
            language={step.language || "javascript"}
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {step.codeSnippet}
          </SyntaxHighlighter>
        </motion.div>
      )}
    </motion.div>
  );
}
