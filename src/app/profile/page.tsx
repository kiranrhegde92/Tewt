"use client";

import { motion } from "motion/react";
import { useProgressStore } from "@/stores/useProgressStore";
import { tracks } from "@/data/tracks";
import { badges as allBadges } from "@/data/badges";
import XPCounter from "@/components/ui/XPCounter";
import StreakFire from "@/components/ui/StreakFire";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { xpForNextLevel } from "@/lib/utils";
import {
  Trophy,
  Target,
  BookOpen,
  Flame,
  Star,
  RotateCcw,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
  const {
    totalXP,
    level,
    streak,
    completedLessons,
    completedTracks,
    badges: earnedBadges,
    reset,
  } = useProgressStore();

  const { current, needed } = xpForNextLevel(totalXP);

  const totalLessons = tracks.reduce(
    (sum, t) => sum + t.lessonIds.length,
    0
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-5xl"
          >
            🎮
          </motion.div>
          <h1 className="text-3xl font-extrabold">Your Profile</h1>
          <p className="text-muted-foreground">
            Track your learning journey!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Trophy size={24} className="text-warning" />,
              label: "Total XP",
              value: <XPCounter value={totalXP} size="md" />,
            },
            {
              icon: <Star size={24} className="text-primary" />,
              label: "Level",
              value: (
                <span className="text-2xl font-bold text-primary">
                  {level}
                </span>
              ),
            },
            {
              icon: <Flame size={24} className="text-warning" />,
              label: "Streak",
              value: streak > 0 ? (
                <StreakFire streak={streak} size="md" />
              ) : (
                <span className="text-muted-foreground">Start today!</span>
              ),
            },
            {
              icon: <BookOpen size={24} className="text-accent" />,
              label: "Lessons Done",
              value: (
                <span className="text-2xl font-bold text-accent">
                  {completedLessons.length}
                  <span className="text-sm text-muted-foreground">
                    /{totalLessons}
                  </span>
                </span>
              ),
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-2">
                  {stat.icon}
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                {stat.value}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Level Progress */}
        <Card hover={false} className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Level {level}</span>
            <span className="text-sm text-muted-foreground">
              Level {level + 1}
            </span>
          </div>
          <ProgressBar value={current} max={needed} showLabel size="lg" />
          <p className="mt-2 text-xs text-muted-foreground text-center">
            {needed - current} XP until next level
          </p>
        </Card>

        {/* Track Progress */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
            <Target size={20} className="text-primary" /> Track Progress
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {tracks.map((track) => {
              const completed = track.lessonIds.filter((id) =>
                completedLessons.includes(id)
              ).length;
              return (
                <Card key={track.id} hover={false}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{track.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{track.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {completed}/{track.lessonIds.length} lessons
                      </p>
                    </div>
                    {completed === track.lessonIds.length && (
                      <span className="text-accent text-xs font-bold">
                        ✓ Done
                      </span>
                    )}
                  </div>
                  <ProgressBar
                    value={completed}
                    max={track.lessonIds.length}
                    size="sm"
                  />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
            🏅 Badges
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            {allBadges.map((badge) => (
              <Badge
                key={badge.id}
                icon={badge.icon}
                name={badge.name}
                description={badge.description}
                unlocked={earnedBadges.includes(badge.id)}
              />
            ))}
          </div>
        </div>

        {/* Reset */}
        <div className="text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (
                window.confirm(
                  "Reset all progress? This cannot be undone!"
                )
              ) {
                reset();
              }
            }}
          >
            <RotateCcw size={14} className="mr-1" /> Reset Progress
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
