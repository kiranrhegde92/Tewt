"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { tracks } from "@/data/tracks";
import { allLessons } from "@/data/lessons/index";
import {
  Gamepad2,
  Brain,
  Keyboard,
  Puzzle,
  Link2,
  BarChart3,
} from "lucide-react";

const gameTypes = [
  {
    type: "quiz",
    icon: <Brain size={32} />,
    title: "Quiz Challenges",
    description: "Test your knowledge with fun multiple-choice questions!",
    color: "text-primary",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    type: "puzzle",
    icon: <Puzzle size={32} />,
    title: "Code Puzzles",
    description: "Arrange code lines in the correct order!",
    color: "text-secondary",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    type: "match",
    icon: <Link2 size={32} />,
    title: "Matching Games",
    description: "Connect concepts with their definitions!",
    color: "text-accent",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    type: "typeracer",
    icon: <Keyboard size={32} />,
    title: "Type Racer",
    description: "Type code as fast as you can for speed XP!",
    color: "text-warning",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    type: "visualizer",
    icon: <BarChart3 size={32} />,
    title: "Sorting Visualizer",
    description: "Watch and control sorting algorithms in action!",
    color: "text-blue-500",
    gradient: "from-blue-400 to-cyan-500",
  },
];

export default function PlaygroundPage() {
  // Find lessons that have each game type
  const lessonsByGameType: Record<
    string,
    { lessonId: string; trackId: string; title: string }[]
  > = {};

  for (const [lessonId, lesson] of Object.entries(allLessons)) {
    for (const step of lesson.steps) {
      if (!lessonsByGameType[step.type]) {
        lessonsByGameType[step.type] = [];
      }
      const existing = lessonsByGameType[step.type].find(
        (l) => l.lessonId === lessonId
      );
      if (!existing) {
        lessonsByGameType[step.type].push({
          lessonId,
          trackId: lesson.trackId,
          title: lesson.title,
        });
      }
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <Gamepad2 size={48} className="mx-auto mb-4 text-primary" />
        <h1 className="mb-2 text-4xl font-extrabold">
          <span className="gradient-text">Playground</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Jump into any mini-game and have fun while learning!
        </p>
      </motion.div>

      {/* Game types */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gameTypes.map((game, i) => {
          const lessons = lessonsByGameType[game.type] || [];

          return (
            <motion.div
              key={game.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card gradient={game.gradient} className="h-full">
                <div className={`mb-3 ${game.color}`}>{game.icon}</div>
                <h3 className="mb-1 text-lg font-bold">{game.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {game.description}
                </p>

                {lessons.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">
                      Available in:
                    </p>
                    {lessons.slice(0, 3).map((lesson) => (
                      <Link
                        key={lesson.lessonId}
                        href={`/tracks/${lesson.trackId}/lessons/${lesson.lessonId}`}
                        className="flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        <span>
                          {tracks.find((t) => t.id === lesson.trackId)?.icon}
                        </span>
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    ))}
                    {lessons.length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        +{lessons.length - 3} more lessons
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground italic">
                    Coming soon!
                  </p>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Quick play suggestion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <p className="text-muted-foreground">
          Want structured learning?{" "}
          <Link href="/tracks" className="font-semibold text-primary hover:underline">
            Check out our Learning Tracks →
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
