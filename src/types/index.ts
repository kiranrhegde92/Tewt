// ============================================
// DevPlay - Type Definitions
// ============================================

export type TrackCategory = "language" | "algorithms" | "techstack" | "devops" | "ui" | "tools";
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
  | VisualizerStep
  | ComicStep
  | VisualAnalogyStep
  | ConceptBreakdownStep
  | InteractiveVisualStep;

// ==========================================
// LEARNING STEPS (Teach First!)
// ==========================================

/** Story dialogue with a character — narrative-driven teaching */
export interface StoryStep {
  type: "story";
  character: string;
  dialogue: string;
  mood: CharacterMood;
  codeSnippet?: string;
  language?: string;
}

/** Comic strip panels — visual storytelling for concepts */
export interface ComicStep {
  type: "comic";
  title: string;
  panels: ComicPanel[];
}

export interface ComicPanel {
  character?: string;
  mood?: CharacterMood;
  dialogue?: string;
  narration?: string;
  illustration: string; // emoji-based scene description
  background?: string;  // color/gradient
}

/** Visual analogy — teach concepts through real-world metaphors */
export interface VisualAnalogyStep {
  type: "visual-analogy";
  title: string;
  analogy: string;        // "X is like Y"
  realWorld: string;       // the real-world thing
  realWorldEmoji: string;
  codeConcept: string;     // the code concept
  codeConceptEmoji: string;
  mappings: { real: string; code: string }[]; // point-by-point comparisons
  conclusion: string;
}

/** Concept breakdown — step-by-step animated explanation */
export interface ConceptBreakdownStep {
  type: "concept-breakdown";
  title: string;
  description: string;
  steps: {
    icon: string;
    title: string;
    explanation: string;
    codeSnippet?: string;
    language?: string;
  }[];
}

/** Interactive visual — animated diagram the user can interact with */
export interface InteractiveVisualStep {
  type: "interactive-visual";
  title: string;
  description: string;
  visualType:
    | "thread-race"
    | "memory-boxes"
    | "call-stack"
    | "event-loop"
    | "oop-kingdom"
    | "git-tree"
    | "network-request"
    | "css-box-model"
    | "dom-tree"
    | "state-flow";
  config: Record<string, unknown>;
}

/** Code with explanation — syntax highlighted code block */
export interface CodeStep {
  type: "code";
  title: string;
  explanation: string;
  code: string;
  language: string;
  highlightLines?: number[];
}

// ==========================================
// TESTING STEPS (After Learning!)
// ==========================================

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

// ==========================================
// Non-step types
// ==========================================

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
