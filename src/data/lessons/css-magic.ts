import { Lesson } from "@/types";

export const cssFlexbox: Lesson = {
  id: "css-flexbox",
  trackId: "css-sorcery",
  title: "The Flexbox Spell",
  description: "Master the most powerful CSS layout spell!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue:
        "Welcome to CSS Sorcery! Today we learn Flexbox — the most popular layout spell in all the land! With it, you can align anything, anywhere. No more crying over centering divs!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Flexbox is Like a Bookshelf",
      analogy: "Flexbox is like a bookshelf",
      realWorld: "Imagine a bookshelf. You can arrange books left-to-right (row) or stack them top-to-bottom (column). You can spread them evenly, push them all to one side, or center them. You can even let them wrap to the next shelf when they run out of space.",
      realWorldEmoji: "📚",
      codeConcept: "Flexbox arranges child elements along a single axis. Set flex-direction for the axis, justify-content for spacing along it, and align-items for alignment perpendicular to it. flex-wrap lets items flow to the next line.",
      codeConceptEmoji: "📐",
      mappings: [
        { real: "Bookshelf", code: "Flex container (display: flex)" },
        { real: "Books on the shelf", code: "Flex items (children)" },
        { real: "Left-to-right or top-down", code: "flex-direction: row | column" },
        { real: "Spacing between books", code: "justify-content & gap" },
      ],
      conclusion:
        "Flexbox is like a smart bookshelf that automatically arranges and spaces your items perfectly!",
    },
    {
      type: "comic",
      title: "The Rise of Flexbox",
      panels: [
        {
          illustration: "1",
          narration: "The Dark Ages: Float Layout",
          character: "sally",
          dialogue: "Once upon a time, developers used 'float: left' for layouts. It was hacky, broke constantly, and required 'clearfix' magic. Dark times indeed!",
          mood: "thinking",
          background: "from-gray-500/20 to-slate-500/20",
        },
        {
          illustration: "2",
          narration: "The Hero Arrives: Flexbox!",
          character: "sally",
          dialogue: "Then Flexbox arrived! Just add 'display: flex' and suddenly everything lines up. justify-content for horizontal, align-items for vertical. Pure magic!",
          mood: "excited",
          background: "from-purple-500/20 to-pink-500/20",
        },
        {
          illustration: "3",
          narration: "The Holy Grail: Centering a Div",
          character: "sally",
          dialogue: "The legendary quest that took developers YEARS is now just 3 properties: display: flex, justify-content: center, align-items: center. Quest complete!",
          mood: "celebrating",
          background: "from-yellow-500/20 to-amber-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Flexbox Properties Decoded",
      description: "The key properties that make Flexbox work, from activation to spacing.",
      steps: [
        {
          title: "display: flex",
          icon: "📦",
          explanation:
            "The activation spell! Adding this to a container turns its children into flex items. They immediately line up in a row by default.",
          codeSnippet: ".container {\n  display: flex;\n}",
        },
        {
          title: "justify-content",
          icon: "↔️",
          explanation:
            "Controls alignment along the MAIN axis (horizontal by default). Values: flex-start, center, flex-end, space-between (spread out), space-around, space-evenly.",
          codeSnippet: ".container {\n  justify-content: space-between;\n}",
        },
        {
          title: "align-items",
          icon: "↕️",
          explanation:
            "Controls alignment along the CROSS axis (vertical by default). Values: flex-start (top), center (middle), flex-end (bottom), stretch (fill height).",
          codeSnippet: ".container {\n  align-items: center;\n}",
        },
        {
          title: "gap",
          icon: "⬜",
          explanation:
            "The modern way to add space between flex items. No more margin hacks! Works in both directions and doesn't add space on the outer edges.",
          codeSnippet: ".container {\n  gap: 16px;\n}",
        },
      ],
    },
    {
      type: "code",
      title: "Flexbox in Action",
      explanation:
        "Here's a complete Flexbox example showing the most common patterns you'll use every day.",
      code: `.container {
  display: flex;          /* Activate flexbox! */
  justify-content: center; /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */
  gap: 16px;               /* Space between items */
}

/* Direction control */
.row    { flex-direction: row; }    /* horizontal */
.column { flex-direction: column; } /* vertical */

/* Distribution */
.spread { justify-content: space-between; }
.wrap   { flex-wrap: wrap; }

/* Individual item control */
.grow   { flex: 1; }        /* Take available space */
.fixed  { flex: 0 0 200px; } /* Fixed 200px, no grow/shrink */`,
      language: "css",
      highlightLines: [2, 3, 4],
    },
    {
      type: "quiz",
      question:
        "How do you perfectly center a div both horizontally AND vertically?",
      options: [
        "text-align: center",
        "margin: auto",
        "display: flex; justify-content: center; align-items: center;",
        "position: absolute; top: 50%; left: 50%;",
      ],
      correctIndex: 2,
      explanation:
        "Flexbox makes centering trivial! justify-content centers horizontally, align-items centers vertically. The age-old CSS problem, solved!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match Flexbox properties with what they control:",
      pairs: [
        {
          left: "justify-content",
          right: "Main axis alignment (horizontal)",
        },
        { left: "align-items", right: "Cross axis alignment (vertical)" },
        { left: "flex-wrap", right: "Whether items wrap to new lines" },
        { left: "gap", right: "Space between flex items" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "sally",
      dialogue:
        "You've mastered the Flexbox spell! You can now center anything (yes, even that div!). Next up: CSS Grid — the layout system for entire page structures!",
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
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue:
        "Open the Grid Grimoire! CSS Grid is like drawing a magic blueprint on your page. While Flexbox is great for one direction, Grid rules in TWO dimensions — rows AND columns at once!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "CSS Grid is Like a City Grid",
      analogy: "CSS Grid is like a city grid",
      realWorld: "Think of a city with streets forming a grid. Buildings (content) occupy specific blocks. Some buildings are tall (span multiple rows), some are wide (span multiple columns). The city planner decides the grid layout, then places buildings within it.",
      realWorldEmoji: "🏙️",
      codeConcept: "CSS Grid creates a 2D grid of rows and columns. You define the grid structure on the container, then place child elements into specific cells. Items can span multiple rows or columns, just like buildings spanning city blocks.",
      codeConceptEmoji: "🔲",
      mappings: [
        { real: "City grid (streets & blocks)", code: "grid-template-columns/rows" },
        { real: "Buildings occupying blocks", code: "Grid items placed in cells" },
        { real: "Wide building across blocks", code: "grid-column: span 2" },
        { real: "City planner", code: "You, the developer!" },
      ],
      conclusion:
        "CSS Grid lets you be the city planner of your webpage — define the grid, then place content exactly where you want it!",
    },
    {
      type: "comic",
      title: "Grid Power Unleashed",
      panels: [
        {
          illustration: "1",
          narration: "Flexbox vs Grid: Know the Difference",
          character: "sally",
          dialogue: "Flexbox = ONE direction (row OR column). Grid = TWO directions (rows AND columns). Navbar? Flexbox. Full page layout? Grid. Know when to use each!",
          mood: "thinking",
          background: "from-blue-500/20 to-purple-500/20",
        },
        {
          illustration: "2",
          narration: "The Power of fr Units",
          character: "sally",
          dialogue: "'fr' means fraction of available space. '1fr 2fr 1fr' = three columns where the middle is TWICE as wide. No more calculating percentages!",
          mood: "excited",
          background: "from-green-500/20 to-teal-500/20",
        },
        {
          illustration: "3",
          narration: "auto-fit: The Responsive Hero",
          character: "sally",
          dialogue: "'repeat(auto-fit, minmax(250px, 1fr))' creates a grid that AUTOMATICALLY adjusts the number of columns based on screen width. One line, fully responsive!",
          mood: "celebrating",
          background: "from-orange-500/20 to-red-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "CSS Grid Essentials",
      description: "The core properties for creating powerful two-dimensional layouts with CSS Grid.",
      steps: [
        {
          title: "grid-template-columns",
          icon: "📊",
          explanation:
            "Defines how many columns and their widths. Use px for fixed, fr for fractional, auto for content-based, or repeat() for patterns.",
          codeSnippet:
            ".grid {\n  grid-template-columns: 200px 1fr 1fr;\n  /* fixed sidebar + 2 equal columns */\n}",
        },
        {
          title: "grid-template-rows",
          icon: "📏",
          explanation:
            "Defines row heights. 'auto' sizes to content. Use fr for proportional rows. Combine both for a complete 2D layout.",
          codeSnippet:
            ".grid {\n  grid-template-rows: auto 1fr auto;\n  /* header, stretchy main, footer */\n}",
        },
        {
          title: "Spanning cells",
          icon: "⬛",
          explanation:
            "Grid items can span multiple columns or rows. 'grid-column: 1 / -1' spans ALL columns (like a full-width header).",
          codeSnippet:
            ".header {\n  grid-column: 1 / -1; /* span all columns */\n}\n.sidebar {\n  grid-row: 2 / 4; /* span rows 2-3 */\n}",
        },
        {
          title: "Responsive Grid",
          icon: "📱",
          explanation:
            "The holy grail of responsive design: auto-fit + minmax. Grid automatically adds/removes columns based on available space. No media queries needed!",
          codeSnippet:
            ".cards {\n  grid-template-columns:\n    repeat(auto-fit, minmax(250px, 1fr));\n}",
        },
      ],
    },
    {
      type: "code",
      title: "CSS Grid in Action",
      explanation:
        "A complete page layout using CSS Grid, plus a responsive card grid that adapts automatically.",
      code: `/* Page layout with Grid */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-column: 1 / -1; } /* Full width */
.sidebar { grid-row: 2 / 3; }
.main    { grid-column: 2 / 3; }
.footer  { grid-column: 1 / -1; } /* Full width */

/* Responsive card grid - no media queries! */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}`,
      language: "css",
      highlightLines: [4, 5, 17],
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
      explanation:
        "'repeat(3, 1fr)' creates 3 columns, each taking 1 fraction of the available space — so they're all equal width!",
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
      dialogue:
        "The Grid Grimoire's knowledge is yours! You can now build any layout imaginable with Grid and Flexbox. One more spell to learn: CSS Animations!",
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
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "sally",
      dialogue:
        "The final sorcery! CSS Animations breathe LIFE into your designs. Buttons that bounce, elements that fade in, cards that flip — this is where art meets code!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "CSS Animations are Like a Flipbook",
      analogy: "CSS animations are like a flipbook",
      realWorld: "Remember flipbooks? You draw slightly different images on each page, then flip through them fast to create the illusion of movement. Each page is a 'frame' and the speed you flip determines the smoothness.",
      realWorldEmoji: "📖",
      codeConcept: "CSS animations work the same way! @keyframes define the 'pages' (states at different points in time). The browser smoothly interpolates between them. 'transition' is the simple version — just animate between two states (like hover).",
      codeConceptEmoji: "✨",
      mappings: [
        { real: "Flipbook pages", code: "@keyframes (0%, 50%, 100%)" },
        { real: "Flipping speed", code: "animation-duration" },
        { real: "Smooth vs choppy flipping", code: "animation-timing-function (ease, linear)" },
        { real: "Flip once vs loop forever", code: "animation-iteration-count" },
      ],
      conclusion:
        "CSS animations are digital flipbooks — define the key frames, set the timing, and the browser fills in the rest!",
    },
    {
      type: "comic",
      title: "Animation Magic",
      panels: [
        {
          illustration: "1",
          narration: "Transitions: The Simple Spell",
          character: "sally",
          dialogue: "Transitions animate between TWO states — like normal and :hover. Just say WHAT to animate, HOW LONG, and the EASING. The browser handles the rest!",
          mood: "thinking",
          background: "from-blue-500/20 to-indigo-500/20",
        },
        {
          illustration: "2",
          narration: "Keyframes: The Power Spell",
          character: "sally",
          dialogue: "@keyframes lets you define MULTIPLE steps! 0% to 100% with as many stops as you want. Bounce, spin, pulse, shake — the only limit is your creativity!",
          mood: "excited",
          background: "from-purple-500/20 to-pink-500/20",
        },
        {
          illustration: "3",
          narration: "Performance: The Secret Ingredient",
          character: "sally",
          dialogue: "Pro tip: only animate 'transform' and 'opacity'! These are GPU-accelerated and butter-smooth. Animating width, height, or margin causes layout recalculations = jank!",
          mood: "thinking",
          background: "from-green-500/20 to-teal-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Animation Building Blocks",
      description: "The essential properties for creating smooth transitions and complex animations.",
      steps: [
        {
          title: "transition",
          icon: "🔄",
          explanation:
            "The shorthand: 'transition: property duration timing-function delay'. Animates smoothly when a property changes (like on hover). Great for buttons, links, and interactive elements.",
          codeSnippet:
            ".button {\n  transition: all 0.3s ease;\n}\n.button:hover {\n  transform: scale(1.05);\n}",
        },
        {
          title: "@keyframes",
          icon: "🎬",
          explanation:
            "Define named animation sequences with multiple steps. Use percentages (0%, 50%, 100%) or 'from/to' for simple two-step animations.",
          codeSnippet:
            "@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}",
        },
        {
          title: "animation shorthand",
          icon: "▶️",
          explanation:
            "Apply a keyframe animation: 'animation: name duration timing iteration'. 'infinite' loops forever, a number plays that many times.",
          codeSnippet: ".bouncy {\n  animation: bounce 1s ease-in-out infinite;\n}",
        },
        {
          title: "transform",
          icon: "🔀",
          explanation:
            "The Swiss Army knife of animation. translate() moves, scale() resizes, rotate() spins, skew() tilts. All GPU-accelerated for smooth performance!",
          codeSnippet:
            "transform: translateX(100px);\ntransform: scale(1.5);\ntransform: rotate(45deg);\ntransform: scale(1.1) rotate(5deg);",
        },
      ],
    },
    {
      type: "code",
      title: "Transitions & Keyframe Animations",
      explanation:
        "Transitions for simple hover effects, keyframes for complex multi-step animations.",
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
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}`,
      language: "css",
      highlightLines: [4, 12, 18],
    },
    {
      type: "quiz",
      question:
        "What CSS property makes hover effects smooth instead of instant?",
      options: ["animation", "transform", "transition", "keyframes"],
      correctIndex: 2,
      explanation:
        "'transition' smoothly interpolates between property values over time. It's the easiest way to add polish to your UI!",
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
      dialogue:
        "You've mastered ALL THREE CSS spells! Flexbox, Grid, and Animations — you're a certified CSS Sorcerer! Now go forth and make the web beautiful!",
      mood: "celebrating",
    },
  ],
};
