"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { tracks } from "@/data/tracks";
import { allLessons } from "@/data/lessons";
import { characters } from "@/data/characters";

const floatingEmojis = ["💻", "🚀", "🧩", "⚡", "🎯", "🐍", "☕", "⚛️", "🎨"];
const practiceStepTypes = new Set([
  "quiz",
  "puzzle",
  "match",
  "typeracer",
  "visualizer",
]);

export default function Hero() {
  const trackCount = tracks.length;
  const lessonCount = Object.keys(allLessons).length;
  const characterCount = Object.keys(characters).length;
  const miniGameCount = new Set(
    Object.values(allLessons).flatMap((lesson) =>
      lesson.steps
        .map((step) => step.type)
        .filter((type) => practiceStepTypes.has(type))
    )
  ).size;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-10 sm:text-4xl"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${5 + (i * 17) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6 text-7xl sm:text-8xl"
        >
          🎮
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Learn to Code the{" "}
          <span className="gradient-text">Fun Way</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Master programming through{" "}
          <span className="font-semibold text-primary">stories</span>,{" "}
          <span className="font-semibold text-secondary">mini-games</span>, and{" "}
          <span className="font-semibold text-accent">visual adventures</span>.
          No boring textbooks. Just pure fun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/tracks">
            <Button size="lg" variant="primary">
              🚀 Start Your Adventure
            </Button>
          </Link>
          <Link href="/playground">
            <Button size="lg" variant="outline">
              🎮 Try Mini-Games
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { label: "Learning Tracks", value: `${trackCount}`, icon: "📚" },
            { label: "Interactive Lessons", value: `${lessonCount}`, icon: "🎯" },
            { label: "Mini-Games", value: `${miniGameCount} Types`, icon: "🎮" },
            { label: "Fun Characters", value: `${characterCount}`, icon: "🧙‍♂️" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
