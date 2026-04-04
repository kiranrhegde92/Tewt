"use client";

import { use } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { tracks } from "@/data/tracks";
import { allLessons } from "@/data/lessons/index";
import { useProgressStore } from "@/stores/useProgressStore";
import { characters } from "@/data/characters";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";

export default function TrackDetailPage({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId } = use(params);
  const track = tracks.find((t) => t.id === trackId);
  const { completedLessons } = useProgressStore();

  if (!track) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <span className="mb-4 text-6xl">{"\u{1F914}"}</span>
        <h1 className="text-2xl font-bold">Track Not Found</h1>
        <Link href="/tracks" className="mt-4 text-primary hover:underline">
          Back to Tracks
        </Link>
      </div>
    );
  }

  const lessons = track.lessonIds.map((id) => allLessons[id]).filter(Boolean);

  const completedCount = track.lessonIds.filter((id) =>
    completedLessons.includes(id)
  ).length;

  const guide = Object.values(characters).find((c) => {
    if (track.category === "language") return c.id === "pixel";
    if (track.category === "algorithms") return c.id === "algo";
    if (track.category === "techstack") return c.id === "stackie";
    if (track.category === "devops") return c.id === "captain";
    if (track.category === "ui") return c.id === "sally";
    return c.id === "pixel";
  })!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/tracks"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> All Tracks
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="mb-4 flex items-center gap-4">
          <motion.span
            className="text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            {track.icon}
          </motion.span>
          <div>
            <h1 className="text-3xl font-extrabold">{track.title}</h1>
            <p className="text-muted-foreground">{track.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-4">
          <span className="text-3xl">{guide.avatar}</span>
          <div>
            <p className="text-sm font-semibold">{guide.name}</p>
            <p className="text-sm italic text-muted-foreground">
              &quot;{guide.catchphrase}&quot;
            </p>
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar
            value={completedCount}
            max={lessons.length}
            showLabel
            size="md"
          />
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-border" />

        <div className="space-y-4">
          {lessons.map((lesson, i) => {
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-lg font-bold ${
                        isCompleted
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-primary bg-primary/10 text-primary animate-pulse-glow"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {isCompleted ? <CheckCircle2 size={24} /> : i + 1}
                    </motion.div>
                  </div>

                  <Link
                    href={`/tracks/${trackId}/lessons/${lesson.id}`}
                    className="flex-1"
                  >
                    <Card className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-1 font-bold">{lesson.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {lesson.description}
                          </p>
                        </div>
                        {isCompleted && (
                          <span className="text-sm font-semibold text-accent">
                            Done
                          </span>
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {lesson.estimatedMinutes} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap size={12} className="text-warning" /> +
                          {lesson.xpReward} XP
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5">
                          {lesson.difficulty}
                        </span>
                      </div>
                      {!isCompleted && (
                        <div className="mt-3 flex justify-end">
                          <Button variant="ghost" size="sm">
                            Start Lesson <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </div>
                      )}
                    </Card>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
