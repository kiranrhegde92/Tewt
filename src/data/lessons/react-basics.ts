import { Lesson } from "@/types";

export const reactComponents: Lesson = {
  id: "react-components",
  trackId: "react-realm",
  title: "Building the Kingdom",
  description: "Create your first React components — the building blocks of UIs!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "Welcome to the React Realm! 👑 Here, everything is built from Components — small, reusable pieces that snap together like LEGO blocks to build amazing UIs!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Your First Component",
      explanation: "React components are JavaScript functions that return JSX — a special syntax that looks like HTML but lives inside JavaScript!",
      code: `// A simple component
function Welcome() {
  return (
    <div>
      <h1>Hello, React! ⚛️</h1>
      <p>I am a component!</p>
    </div>
  );
}

// Components can be nested!
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}`,
      language: "jsx",
      highlightLines: [2, 5, 15],
    },
    {
      type: "quiz",
      question: "What is JSX?",
      options: [
        "A new programming language",
        "A syntax extension that lets you write HTML-like code in JavaScript",
        "A CSS framework",
        "A database query language",
      ],
      correctIndex: 1,
      explanation: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup directly in your code. React transforms it into regular JavaScript!",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Build a UserCard component:",
      codeLines: [
        "function UserCard() {",
        "  return (",
        '    <div className="card">',
        "      <h2>Player One</h2>",
        "    </div>",
        "  );",
        "}",
      ],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      language: "jsx",
      xpBonus: 20,
    },
    {
      type: "story",
      character: "stackie",
      dialogue: "You've built your first React components! 🏗️ They're the atoms of your UI universe. Next up: Props — the way components talk to each other!",
      mood: "celebrating",
    },
  ],
};

export const reactProps: Lesson = {
  id: "react-props",
  trackId: "react-realm",
  title: "The Props Messenger",
  description: "Learn how components communicate with props!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "In the React Realm, components talk to each other through Props — think of them as messages you attach to component letters! 💌 Let me show you!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Passing & Using Props",
      explanation: "Props are like function arguments for components. Parents pass data down to children via props!",
      code: `// Component that accepts props
function Greeting({ name, emoji }) {
  return (
    <h1>{emoji} Hello, {name}!</h1>
  );
}

// Parent passes props down
function App() {
  return (
    <div>
      <Greeting name="Alice" emoji="👋" />
      <Greeting name="Bob" emoji="🚀" />
      <Greeting name="Charlie" emoji="🎮" />
    </div>
  );
}`,
      language: "jsx",
      highlightLines: [2, 12, 13, 14],
    },
    {
      type: "quiz",
      question: "Can a child component modify the props it receives?",
      options: [
        "Yes, freely",
        "No — props are read-only (immutable)",
        "Only strings can be modified",
        "Only with a special function",
      ],
      correctIndex: 1,
      explanation: "Props are READ-ONLY! This is a core React principle. If a component needs to change data, it should use State (coming up next!).",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match React concepts with their descriptions:",
      pairs: [
        { left: "Props", right: "Data passed from parent to child" },
        { left: "Component", right: "Reusable piece of UI" },
        { left: "JSX", right: "HTML-like syntax in JavaScript" },
        { left: "Rendering", right: "Displaying components on screen" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue: "Props mastered! 📮 You now know how to build components AND make them communicate. Next: State — giving your components memory!",
      mood: "celebrating",
    },
  ],
};

export const reactState: Lesson = {
  id: "react-state",
  trackId: "react-realm",
  title: "The State Treasury",
  description: "Give your components memory with React State!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 7,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "The Treasury holds the kingdom's memory! 🏦 In React, 'State' is like a component's personal notebook. When state changes, the component magically re-renders with the new data!",
      mood: "excited",
    },
    {
      type: "code",
      title: "useState Hook",
      explanation: "The useState hook gives components their own private state. When you update it, React re-renders the component!",
      code: `import { useState } from "react";

function Counter() {
  // Declare state: [value, setter]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
      language: "jsx",
      highlightLines: [5, 10],
    },
    {
      type: "quiz",
      question: "What does useState(0) return?",
      options: [
        "Just the value 0",
        "An array with [currentValue, setterFunction]",
        "An object with {value, setValue}",
        "A promise",
      ],
      correctIndex: 1,
      explanation: "useState returns an array with two items: the current state value, and a function to update it. We use destructuring to name them!",
      xpBonus: 15,
    },
    {
      type: "typeracer",
      instruction: "Type this useState declaration quickly!",
      code: "const [count, setCount] = useState(0);",
      language: "jsx",
      targetWPM: 15,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue: "You've unlocked the React Treasury! 🗝️ Components, Props, and State — the Holy Trinity of React. You're ready to build anything! The React Realm salutes you! 👑",
      mood: "celebrating",
    },
  ],
};
