import { Lesson } from "@/types";

export const cssFlexbox: Lesson = {
  id: "css-flexbox",
  trackId: "css-sorcery",
  title: "The Flexbox Spell",
  description: "Master the most powerful CSS layout spell!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue: "Welcome to CSS Sorcery! 🧙‍♀️✨ Today we learn Flexbox — the most popular layout spell in all the land! With it, you can align anything, anywhere. No more crying over centering divs!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Flexbox Fundamentals",
      explanation: "Flexbox makes layouts easy! Set display: flex on a container, then control how children align and distribute space.",
      code: `.container {
  display: flex;          /* Activate flexbox! */
  justify-content: center; /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */
  gap: 16px;               /* Space between items */
}

/* Direction control */
.row    { flex-direction: row; }    /* → horizontal */
.column { flex-direction: column; } /* ↓ vertical */

/* Distribution */
.spread { justify-content: space-between; }
.wrap   { flex-wrap: wrap; }`,
      language: "css",
      highlightLines: [2, 3, 4],
    },
    {
      type: "quiz",
      question: "How do you perfectly center a div both horizontally AND vertically?",
      options: [
        "text-align: center",
        "margin: auto",
        "display: flex; justify-content: center; align-items: center;",
        "position: absolute; top: 50%; left: 50%;",
      ],
      correctIndex: 2,
      explanation: "Flexbox makes centering trivial! justify-content centers horizontally, align-items centers vertically. The age-old CSS problem, solved!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match Flexbox properties with what they control:",
      pairs: [
        { left: "justify-content", right: "Main axis alignment (horizontal)" },
        { left: "align-items", right: "Cross axis alignment (vertical)" },
        { left: "flex-wrap", right: "Whether items wrap to new lines" },
        { left: "gap", right: "Space between flex items" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "sally",
      dialogue: "You've mastered the Flexbox spell! ✨ You can now center anything (yes, even that div!). Next up: CSS Grid — the layout system for entire page structures!",
      mood: "celebrating",
    },
  ],
};

export const cssGrid: Lesson = {
  id: "css-grid",
  trackId: "css-sorcery",
  title: "The Grid Grimoire",
  description: "Unlock the power of CSS Grid for complex layouts!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue: "Open the Grid Grimoire! 📖 CSS Grid is like drawing a magic blueprint on your page. You define rows and columns, then place elements exactly where you want. Pure artistry!",
      mood: "excited",
    },
    {
      type: "code",
      title: "CSS Grid Layout",
      explanation: "Grid lets you create two-dimensional layouts with rows AND columns. Perfect for page layouts, galleries, and dashboards!",
      code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 columns */
  grid-template-rows: auto 1fr auto;   /* 3 rows */
  gap: 20px;
}

/* Place items precisely */
.header  { grid-column: 1 / -1; } /* Span all cols */
.sidebar { grid-row: 2 / 3; }
.main    { grid-column: 2 / 3; }

/* Responsive magic */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}`,
      language: "css",
      highlightLines: [3, 9, 16],
    },
    {
      type: "quiz",
      question: "What does 'grid-template-columns: repeat(3, 1fr)' create?",
      options: [
        "1 column repeated 3 times",
        "3 equal-width columns",
        "A column that is 3 fractions wide",
        "3 rows",
      ],
      correctIndex: 1,
      explanation: "'repeat(3, 1fr)' creates 3 columns, each taking 1 fraction of the available space — so they're all equal width!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "When to use Flexbox vs Grid:",
      pairs: [
        { left: "Flexbox", right: "One-dimensional (row OR column)" },
        { left: "Grid", right: "Two-dimensional (rows AND columns)" },
        { left: "Navbar items", right: "Best with Flexbox" },
        { left: "Page layout", right: "Best with Grid" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "sally",
      dialogue: "The Grid Grimoire's knowledge is yours! 📐 You can now build any layout imaginable. One more spell to learn: CSS Animations!",
      mood: "celebrating",
    },
  ],
};

export const cssAnimations: Lesson = {
  id: "css-animations",
  trackId: "css-sorcery",
  title: "Animation Alchemy",
  description: "Bring your designs to life with CSS transitions and animations!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue: "The final sorcery! 🌟 CSS Animations breathe LIFE into your designs. Buttons that bounce, elements that fade in, cards that flip — this is where art meets code!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Transitions & Keyframe Animations",
      explanation: "Transitions animate between two states (hover, click). Keyframe animations define multi-step sequences!",
      code: `/* Transition: smooth state changes */
.button {
  background: #8b5cf6;
  transition: all 0.3s ease;
}
.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

/* Keyframe animation: multi-step! */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bouncy {
  animation: bounce 1s ease-in-out infinite;
}

/* Fade in on page load */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`,
      language: "css",
      highlightLines: [4, 12, 18],
    },
    {
      type: "quiz",
      question: "What CSS property makes hover effects smooth instead of instant?",
      options: ["animation", "transform", "transition", "keyframes"],
      correctIndex: 2,
      explanation: "'transition' smoothly interpolates between property values over time. It's the easiest way to add polish to your UI!",
      xpBonus: 15,
    },
    {
      type: "typeracer",
      instruction: "Type this transition shorthand!",
      code: "transition: all 0.3s ease-in-out;",
      language: "css",
      targetWPM: 15,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "sally",
      dialogue: "You've mastered ALL THREE CSS spells! 🎨✨ Flexbox, Grid, and Animations — you're a certified CSS Sorcerer! Now go forth and make the web beautiful!",
      mood: "celebrating",
    },
  ],
};
