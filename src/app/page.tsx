"use client";

import Hero from "@/components/home/Hero";
import TrackCarousel from "@/components/home/TrackCarousel";
import DailyChallenge from "@/components/home/DailyChallenge";
import { useProgressStore } from "@/stores/useProgressStore";
import { useEffect } from "react";

export default function Home() {
  const updateStreak = useProgressStore((s) => s.updateStreak);

  useEffect(() => {
    updateStreak();
  }, [updateStreak]);

  return (
    <div className="flex flex-col">
      <Hero />
      <DailyChallenge />
      <TrackCarousel />
    </div>
  );
}
