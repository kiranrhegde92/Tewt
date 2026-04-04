"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { tracks } from "@/data/tracks";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import { useProgressStore } from "@/stores/useProgressStore";
import { ArrowRight, BookOpen } from "lucide-react";

const categoryLabels: Record<string, string> = {
  language: "Programming Languages",
  algorithms: "Algorithms & Data Structures",
  techstack: "Tech Stacks & Frameworks",
  devops: "DevOps & Deployment",
  ui: "UI/UX & Design",
};

export default function TracksPage() {
  const { completedLessons } = useProgressStore();

  const grouped = tracks.reduce(
    (acc, track) => {
      const cat = track.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(track);
      return acc;
    },
    {} as Record<string, typeof tracks>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="mb-2 text-4xl font-extrabold">
          <BookOpen className="mr-2 inline-block text-primary" size={36} />
          Learning Tracks
        </h1>
        <p className="text-lg text-muted-foreground">
          Pick a track and start your coding adventure!
        </p>
      </motion.div>

      {Object.entries(grouped).map(([category, categoryTracks], catIdx) => (
        <div key={category} className="mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: catIdx * 0.1 }}
            className="mb-4 text-xl font-bold text-foreground"
          >
            {categoryLabels[category] || category}
          </motion.h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTracks.map((track, i) => {
              const completed = track.lessonIds.filter((id) =>
                completedLessons.includes(id)
              ).length;
              const isComplete = completed === track.lessonIds.length;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                >
                  <Link href={`/tracks/${track.id}`}>
                    <Card gradient={track.gradient} className="h-full">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-4xl">{track.icon}</span>
                        {isComplete && (
                          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                            Completed ✓
                          </span>
                        )}
                      </div>
                      <h3 className="mb-1 text-lg font-bold">{track.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                        {track.description}
                      </p>
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{track.lessonIds.length} lessons</span>
                        <span>•</span>
                        <span>{track.totalXP} XP</span>
                      </div>
                      <ProgressBar
                        value={completed}
                        max={track.lessonIds.length}
                        size="sm"
                      />
                      <div className="mt-3 flex items-center justify-end text-sm font-semibold text-primary">
                        {completed > 0 ? "Continue" : "Start"}{" "}
                        <ArrowRight size={14} className="ml-1" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
