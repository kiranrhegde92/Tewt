// ============================================
// DevPlay - Type Definitions
// ============================================

export type TrackCategory = "language" | "algorithms" | "techstack" | "devops" | "ui";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type CharacterMood = "happy" | "thinking" | "excited" | "confused" | "celebrating";

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  category: TrackCategory;
  lessonIds: string[];
  totalXP: number;
}

export interface Lesson {
  id: string;
  trackId: string;
  title: string;
  description: string;
  steps: LessonStep[];
  xpReward: number;
  difficulty: Difficulty;
  estimatedMinutes: number;
}

export type LessonStep =
  | StoryStep
  | CodeStep
  | QuizStep
  | PuzzleStep
  | MatchStep
  | TypeRacerStep
  | VisualizerStep;

export interface StoryStep {
  type: "story";
  character: string;
  dialogue: string;
  mood: CharacterMood;
  codeSnippet?: string;
  language?: string;
}

export interface CodeStep {
  type: "code";
  title: string;
  explanation: string;
  code: string;
  language: string;
  highlightLines?: number[];
}

export interface QuizStep {
  type: "quiz";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpBonus: number;
}

export interface PuzzleStep {
  type: "puzzle";
  instruction: string;
  codeLines: string[];
  correctOrder: number[];
  language: string;
  xpBonus: number;
}

export interface MatchStep {
  type: "match";
  instruction: string;
  pairs: { left: string; right: string }[];
  xpBonus: number;
}

export interface TypeRacerStep {
  type: "typeracer";
  instruction: string;
  code: string;
  language: string;
  targetWPM: number;
  xpBonus: number;
}

export interface VisualizerStep {
  type: "visualizer";
  title: string;
  description: string;
  visualizerType: "sorting" | "tree" | "stack" | "queue";
  data: number[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string;
  personality: string;
  catchphrase: string;
  color: string;
}

export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
}

export interface UserProgress {
  totalXP: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  completedLessons: string[];
  completedTracks: string[];
  badges: string[];
  quizScores: Record<string, number>;
  lessonStepProgress: Record<string, number>;
}
