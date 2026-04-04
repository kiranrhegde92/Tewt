import { BadgeDefinition } from "@/types";

export const badges: BadgeDefinition[] = [
  {
    id: "first-lesson",
    name: "First Steps",
    description: "Complete your first lesson",
    icon: "🎯",
    condition: "completedLessons >= 1",
  },
  {
    id: "five-lessons",
    name: "Getting Serious",
    description: "Complete 5 lessons",
    icon: "📚",
    condition: "completedLessons >= 5",
  },
  {
    id: "ten-lessons",
    name: "Knowledge Seeker",
    description: "Complete 10 lessons",
    icon: "🏆",
    condition: "completedLessons >= 10",
  },
  {
    id: "first-track",
    name: "Track Master",
    description: "Complete an entire track",
    icon: "⭐",
    condition: "completedTracks >= 1",
  },
  {
    id: "quiz-master",
    name: "Quiz Master",
    description: "Get 100% on 5 quizzes",
    icon: "🧠",
    condition: "perfectQuizzes >= 5",
  },
  {
    id: "streak-3",
    name: "On Fire",
    description: "Maintain a 3-day streak",
    icon: "🔥",
    condition: "streak >= 3",
  },
  {
    id: "streak-7",
    name: "Unstoppable",
    description: "Maintain a 7-day streak",
    icon: "💎",
    condition: "streak >= 7",
  },
  {
    id: "speed-demon",
    name: "Speed Demon",
    description: "Type code at 50+ WPM",
    icon: "⚡",
    condition: "typeSpeed >= 50",
  },
  {
    id: "bug-squasher",
    name: "Bug Squasher",
    description: "Fix 10 code puzzles",
    icon: "🪲",
    condition: "puzzlesSolved >= 10",
  },
  {
    id: "level-5",
    name: "Rising Star",
    description: "Reach Level 5",
    icon: "🌟",
    condition: "level >= 5",
  },
];
