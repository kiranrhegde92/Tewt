"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { tracks } from "@/data/tracks";
import Card from "@/components/ui/Card";
import { useProgressStore } from "@/stores/useProgressStore";
import ProgressBar from "@/components/ui/ProgressBar";
import { ArrowRight } from "lucide-react";

export default function TrackCarousel() {
  const { completedLessons } = useProgressStore();

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold">
            Choose Your <span className="gradient-text">Adventure</span>
          </h2>
          <p className="text-muted-foreground">
            {tracks.length} tracks. Endless fun. Pick your path and start learning!
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => {
            const completed = track.lessonIds.filter((id) =>
              completedLessons.includes(id)
            ).length;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link href={`/tracks/${track.id}`}>
                  <Card gradient={track.gradient} className="h-full">
                    <div className="mb-3 flex items-start justify-between">
                      <span className="text-4xl">{track.icon}</span>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {track.category}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-card-foreground">
                      {track.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {track.description}
                    </p>
                    <ProgressBar
                      value={completed}
                      max={track.lessonIds.length}
                      size="sm"
                    />
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {completed}/{track.lessonIds.length} lessons
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-primary">
                        Start <ArrowRight size={12} />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
