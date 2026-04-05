"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Sparkles, Clock, Zap } from "lucide-react";

const challenges = [
  {
    title: "Sort It Out!",
    description: "Can you sort these numbers using bubble sort in under 30 seconds?",
    track: "Algorithm Arena",
    xp: 50,
    icon: "🧩",
    href: "/tracks/algorithm-arena",
  },
  {
    title: "Variable Dash",
    description: "Type out JavaScript variable declarations as fast as you can!",
    track: "JavaScript Adventures",
    xp: 40,
    icon: "⚡",
    href: "/tracks/javascript-adventures",
  },
  {
    title: "Flexbox Frenzy",
    description: "Match CSS flexbox properties to their visual effects!",
    track: "CSS Sorcery",
    xp: 45,
    icon: "🎨",
    href: "/tracks/css-sorcery",
  },
  {
    title: "Bug Dragon Defense",
    description: "Catch a crashing Java exception before the dragon turns your stack trace into smoke.",
    track: "Java Kingdom",
    xp: 55,
    icon: "☕",
    href: "/tracks/java-kingdom",
  },
  {
    title: "Type or Die",
    description: "Race through TypeScript type definitions — generics, utility types, and conditional types.",
    track: "TypeScript Terrains",
    xp: 50,
    icon: "🔷",
    href: "/tracks/typescript-terrains",
  },
  {
    title: "Promise Juggler",
    description: "Arrange async/await code lines in the correct order before the timeout fires!",
    track: "JavaScript Adventures",
    xp: 45,
    icon: "🔄",
    href: "/tracks/javascript-adventures",
  },
  {
    title: "Query Quest",
    description: "Match SQL clauses to their roles — SELECT, JOIN, GROUP BY, and window functions.",
    track: "SQL Swamp",
    xp: 50,
    icon: "🗃️",
    href: "/tracks/sql-swamp",
  },
  {
    title: "Goroutine Gauntlet",
    description: "Order Go concurrency code — channels, WaitGroups, and select statements.",
    track: "Go Highlands",
    xp: 55,
    icon: "🐹",
    href: "/tracks/go-highlands",
  },
  {
    title: "Borrow Checker Blitz",
    description: "Identify which Rust snippets violate ownership rules before the compiler does.",
    track: "Rust Frontier",
    xp: 60,
    icon: "🦀",
    href: "/tracks/rust-frontier",
  },
  {
    title: "Pattern Patrol",
    description: "Match design patterns to their intent — Builder, Observer, Strategy, Proxy.",
    track: "Design Patterns Palace",
    xp: 50,
    icon: "🎭",
    href: "/tracks/design-patterns-palace",
  },
  {
    title: "React Hook Scramble",
    description: "Fix the broken React component — identify the missing dependency, stale closure, or wrong hook order.",
    track: "React Realm",
    xp: 50,
    icon: "⚛️",
    href: "/tracks/react-realm",
  },
  {
    title: "k8s Deployment Duel",
    description: "Arrange Kubernetes YAML fields in the correct order to deploy your first pod.",
    track: "Kubernetes Cloud",
    xp: 55,
    icon: "☸️",
    href: "/tracks/kubernetes-cloud",
  },
];

export default function DailyChallenge() {
  const today = new Date();
  const challengeIndex = today.getDate() % challenges.length;
  const challenge = challenges[challengeIndex];

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 sm:p-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -top-8 text-8xl opacity-10"
          >
            ✨
          </motion.div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-warning" />
                <span className="text-sm font-bold uppercase tracking-wider text-warning">
                  Daily Challenge
                </span>
              </div>

              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl">{challenge.icon}</span>
                <h3 className="text-2xl font-bold">{challenge.title}</h3>
              </div>

              <p className="mb-4 text-muted-foreground">
                {challenge.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> ~5 min
                </span>
                <span className="flex items-center gap-1">
                  <Zap size={14} className="text-warning" /> +{challenge.xp} XP
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                  {challenge.track}
                </span>
              </div>
            </div>

            <Link href={challenge.href}>
              <Button variant="primary" size="lg">
                🎯 Accept Challenge
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
