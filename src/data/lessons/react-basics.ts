import { Lesson } from "@/types";

export const reactComponents: Lesson = {
  id: "react-components",
  trackId: "react-realm",
  title: "Building the Kingdom",
  description: "Create your first React components — the building blocks of UIs!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "Welcome to the React Realm! 👑 Everything in React is built from COMPONENTS — small, reusable pieces that snap together like LEGO blocks. A button is a component. A navbar is a component. Even an entire page is just components inside components!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Components = LEGO Bricks",
      analogy: "React components are like LEGO bricks — simple pieces that combine to build anything",
      realWorld: "LEGO Set",
      realWorldEmoji: "🧱",
      codeConcept: "React Components",
      codeConceptEmoji: "⚛️",
      mappings: [
        { real: "Individual LEGO brick", code: "A single component (Button, Card)" },
        { real: "Bricks snap together", code: "Components nest inside each other" },
        { real: "Same brick used many times", code: "Reuse components across pages" },
        { real: "Follow the instruction manual", code: "JSX describes the UI structure" },
      ],
      conclusion: "Just like LEGO, React's power comes from composability. Build small components, then combine them into bigger ones. A page is just a tree of nested components!",
    },
    {
      type: "comic",
      title: "What Makes React Special?",
      panels: [
        { illustration: "📦", narration: "Component = Function that returns UI", character: "stackie", dialogue: "A React component is just a JavaScript function that returns JSX — HTML-like code inside JavaScript!", mood: "happy" },
        { illustration: "🔄", narration: "Reusable everywhere", character: "stackie", dialogue: "Write <Button> once, use it 100 times! Change the Button code? Every instance updates. Magic!", mood: "excited" },
        { illustration: "🌳", narration: "Components form a tree", character: "stackie", dialogue: "App contains Header, Main, Footer. Header contains Logo and Nav. Nav contains NavLink, NavLink... It's trees all the way down!", mood: "thinking" },
      ],
    },
    {
      type: "code",
      title: "Your First Components",
      explanation: "React components are JavaScript functions that return JSX. JSX looks like HTML but lives inside JavaScript — it's React's secret sauce!",
      code: `// A simple component — just a function!
function Welcome() {
  return (
    <div>
      <h1>Hello, React! ⚛️</h1>
      <p>I am a component!</p>
    </div>
  );
}

// Components can be NESTED — this is the magic!
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
// Renders three copies of Welcome!`,
      language: "jsx",
      highlightLines: [2, 12, 15],
    },
    {
      type: "concept-breakdown",
      title: "JSX — HTML in JavaScript",
      description: "JSX is the syntax that makes React so intuitive. It looks like HTML but has superpowers:",
      steps: [
        { icon: "📝", title: "JSX looks like HTML", explanation: "Write div, h1, p, button — just like HTML. React converts it to actual DOM elements.", codeSnippet: "return <h1>Hello World</h1>;" },
        { icon: "🔀", title: "Use JavaScript with {curly braces}", explanation: "Embed any JavaScript expression inside {braces}. Variables, math, function calls — anything!", codeSnippet: 'const name = "Alice";\nreturn <h1>Hello, {name}! Score: {42 * 2}</h1>;' },
        { icon: "⚠️", title: "className instead of class", explanation: "Since 'class' is a reserved word in JavaScript, React uses 'className' for CSS classes.", codeSnippet: 'return <div className="container">...</div>;' },
        { icon: "📦", title: "One root element required", explanation: "Each component must return a single root element. Use a <div> or empty fragment <> to wrap multiple elements.", codeSnippet: "return (\n  <>  {/* Fragment — invisible wrapper */}\n    <h1>Title</h1>\n    <p>Paragraph</p>\n  </>\n);" },
      ],
    },
    // ===== TEST =====
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
      explanation: "JSX is a syntax extension for JavaScript. It lets you write UI markup directly in your code. React transforms it into regular JavaScript under the hood!",
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
      dialogue: "You've built your first React components! 🏗️ Components and JSX are the atoms of your UI universe. Next: Props — the messenger system that lets components talk to each other!",
      mood: "celebrating",
    },
  ],
};

export const reactProps: Lesson = {
  id: "react-props",
  trackId: "react-realm",
  title: "The Props Messenger",
  description: "Learn how components communicate using props!",
  xpReward: 150,
  difficulty: "beginner",
  estimatedMinutes: 9,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "In the React Realm, components talk to each other through PROPS! 💌 Think of props as messages a parent component sends down to its children. The parent decides WHAT to display, the child decides HOW to display it!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Props = Filling Out a Form Template",
      analogy: "Props are like filling in blanks on a template — same structure, different data each time",
      realWorld: "Form Template",
      realWorldEmoji: "📄",
      codeConcept: "React Props",
      codeConceptEmoji: "📬",
      mappings: [
        { real: "The form template (empty fields)", code: "Component definition (parameters)" },
        { real: "Filling in Name: 'Alice'", code: "Passing name='Alice' as a prop" },
        { real: "Same form, different people", code: "Same component, different props" },
        { real: "Can't change a filled form (permanent)", code: "Props are READ-ONLY (immutable)" },
      ],
      conclusion: "Props flow ONE WAY: parent → child. The child can READ props but NEVER modify them. This makes React apps predictable and easy to debug!",
    },
    {
      type: "code",
      title: "Passing & Using Props",
      explanation: "Props are like function arguments for components. The parent passes data down, and the child destructures and uses it:",
      code: `// Component that accepts props
function Greeting({ name, emoji }) {
  return <h1>{emoji} Hello, {name}!</h1>;
}

// Parent passes different props to each instance
function App() {
  return (
    <div>
      <Greeting name="Alice" emoji="👋" />
      <Greeting name="Bob" emoji="🚀" />
      <Greeting name="Charlie" emoji="🎮" />
    </div>
  );
}
// Renders:
// 👋 Hello, Alice!
// 🚀 Hello, Bob!
// 🎮 Hello, Charlie!`,
      language: "jsx",
      highlightLines: [2, 10, 11, 12],
    },
    {
      type: "concept-breakdown",
      title: "Props Rules & Patterns",
      description: "Master these rules and you'll use props like a pro:",
      steps: [
        { icon: "⬇️", title: "Props flow DOWN only", explanation: "Data flows from parent to child, never the other way. This is React's 'one-way data flow' principle." },
        { icon: "🔒", title: "Props are READ-ONLY", explanation: "A child component must NEVER modify the props it receives. If it needs to change data, it uses State (next lesson!).", codeSnippet: "// ❌ NEVER do this:\nfunction Bad({ name }) {\n  name = 'hacked'; // WRONG!\n}" },
        { icon: "📦", title: "Pass anything as props", explanation: "Strings, numbers, arrays, objects, even other components and functions can be passed as props!", codeSnippet: '<Card\n  title="My Card"\n  count={42}\n  items={["a", "b"]}\n  onClick={() => alert("clicked!")}\n/>' },
        { icon: "🎯", title: "Destructure for clean code", explanation: "Use { } in the parameter to pluck out the props you need. Much cleaner than typing props.name everywhere.", codeSnippet: "// Clean:\nfunction Card({ title, count }) { ... }\n\n// Instead of:\nfunction Card(props) {\n  props.title, props.count...\n}" },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "Can a child component modify the props it receives?",
      options: [
        "Yes, freely",
        "No — props are read-only (immutable)",
        "Only string props can be modified",
        "Only with a special function",
      ],
      correctIndex: 1,
      explanation: "Props are READ-ONLY! This is a core React principle. If a component needs to change data, it should use State (coming up next!).",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match React concepts:",
      pairs: [
        { left: "Props", right: "Data passed from parent to child" },
        { left: "Component", right: "Reusable piece of UI" },
        { left: "JSX", right: "HTML-like syntax in JavaScript" },
        { left: "Destructuring", right: "Extract specific props by name" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue: "Props mastered! 📮 You now know how to build components AND make them communicate. The final piece: State — giving your components MEMORY so they can change over time!",
      mood: "celebrating",
    },
  ],
};

export const reactState: Lesson = {
  id: "react-state",
  trackId: "react-realm",
  title: "The State Treasury",
  description: "Give your components memory with React State!",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue: "The Treasury holds the kingdom's memory! 🏦 Right now, your components are stateless — they display data but can't REMEMBER or CHANGE anything. State is like giving a component its own personal notebook. When the notebook changes, the component automatically re-renders!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "State = A Whiteboard",
      analogy: "State is like a whiteboard in a meeting room — anyone can see it, and when it's updated, everyone notices the change",
      realWorld: "Whiteboard",
      realWorldEmoji: "📋",
      codeConcept: "React useState",
      codeConceptEmoji: "🧠",
      mappings: [
        { real: "What's written on the board", code: "Current state value" },
        { real: "Erasing and writing new info", code: "Calling the setter function" },
        { real: "Everyone in the room sees the change", code: "Component re-renders with new state" },
        { real: "Board starts with a default message", code: "Initial value passed to useState()" },
      ],
      conclusion: "When state changes, React automatically re-renders the component with the new values. You don't manually update the DOM — React handles it all!",
    },
    {
      type: "comic",
      title: "Props vs State",
      panels: [
        { illustration: "📬", narration: "PROPS — data from parents", character: "stackie", dialogue: "Props are like a letter from your boss. You READ it but can't change it. The parent controls what's in the letter.", mood: "thinking" },
        { illustration: "📓", narration: "STATE — component's own data", character: "stackie", dialogue: "State is YOUR personal notebook. You control it. You read it, write to it, and when it changes, your world (UI) updates!", mood: "excited" },
      ],
    },
    {
      type: "code",
      title: "useState Hook",
      explanation: "The useState hook gives components private, mutable state. It returns [currentValue, setterFunction]. When you call the setter, the component re-renders!",
      code: `import { useState } from "react";

function Counter() {
  // Declare state: [value, setter] = useState(initial)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        + Add
      </button>

      <button onClick={() => setCount(count - 1)}>
        - Subtract
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
      language: "jsx",
      highlightLines: [5, 11, 15, 19],
    },
    {
      type: "concept-breakdown",
      title: "useState Rules & Patterns",
      description: "These rules will save you from common useState mistakes:",
      steps: [
        { icon: "📦", title: "Returns [value, setter]", explanation: "useState always returns an array of two items. Use destructuring to name them clearly.", codeSnippet: "const [name, setName] = useState('Alice');\nconst [items, setItems] = useState([]);\nconst [isOpen, setIsOpen] = useState(false);" },
        { icon: "🚫", title: "Never modify state directly", explanation: "Always use the setter function. Direct mutation won't trigger a re-render!", codeSnippet: "// ❌ WRONG — won't re-render!\ncount = count + 1;\n\n// ✅ CORRECT — triggers re-render!\nsetCount(count + 1);" },
        { icon: "🔄", title: "State updates trigger re-render", explanation: "Every time you call the setter, React re-runs your component function with the new state value. The UI updates automatically." },
        { icon: "📚", title: "Multiple state variables are fine", explanation: "Use as many useState calls as you need — one per piece of data. Don't cram everything into one object.", codeSnippet: "const [name, setName] = useState('');\nconst [age, setAge] = useState(0);\nconst [dark, setDark] = useState(false);" },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What does useState(0) return?",
      options: [
        "Just the value 0",
        "An array with [currentValue, setterFunction]",
        "An object with {value, setValue}",
        "A promise that resolves to 0",
      ],
      correctIndex: 1,
      explanation: "useState returns an array with two items: the current state value (0) and a function to update it. We use destructuring to name them!",
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
      dialogue: "You've mastered the React Trinity! 👑 Components, Props, and State — the three pillars of every React app. You're ready to build real-world UIs! The React Realm crowns you a true Component Knight! ⚛️🎉",
      mood: "celebrating",
    },
  ],
};
