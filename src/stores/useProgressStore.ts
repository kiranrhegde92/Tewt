"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProgress } from "@/types";
import { calculateLevel, isToday, isYesterday } from "@/lib/utils";

interface ProgressStore extends UserProgress {
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  completeTrack: (trackId: string) => void;
  addBadge: (badgeId: string) => void;
  setQuizScore: (lessonId: string, score: number) => void;
  setLessonStep: (lessonId: string, step: number) => void;
  updateStreak: () => void;
  reset: () => void;
}

const initialState: UserProgress = {
  totalXP: 0,
  level: 1,
  streak: 0,
  lastActiveDate: "",
  completedLessons: [],
  completedTracks: [],
  badges: [],
  quizScores: {},
  lessonStepProgress: {},
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount: number) =>
        set((state) => {
          const newXP = state.totalXP + amount;
          return {
            totalXP: newXP,
            level: calculateLevel(newXP),
          };
        }),

      completeLesson: (lessonId: string) =>
        set((state) => {
          if (state.completedLessons.includes(lessonId)) return state;
          return {
            completedLessons: [...state.completedLessons, lessonId],
          };
        }),

      completeTrack: (trackId: string) =>
        set((state) => {
          if (state.completedTracks.includes(trackId)) return state;
          return {
            completedTracks: [...state.completedTracks, trackId],
          };
        }),

      addBadge: (badgeId: string) =>
        set((state) => {
          if (state.badges.includes(badgeId)) return state;
          return { badges: [...state.badges, badgeId] };
        }),

      setQuizScore: (lessonId: string, score: number) =>
        set((state) => ({
          quizScores: { ...state.quizScores, [lessonId]: score },
        })),

      setLessonStep: (lessonId: string, step: number) =>
        set((state) => ({
          lessonStepProgress: { ...state.lessonStepProgress, [lessonId]: step },
        })),

      updateStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          if (isToday(state.lastActiveDate)) return state;

          if (isYesterday(state.lastActiveDate)) {
            return {
              streak: state.streak + 1,
              lastActiveDate: today,
            };
          }

          return {
            streak: 1,
            lastActiveDate: today,
          };
        }),

      reset: () => set(initialState),
    }),
    {
      name: "devplay-progress",
    }
  )
);
