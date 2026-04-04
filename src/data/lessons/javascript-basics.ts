import { Lesson } from "@/types";

export const jsVariables: Lesson = {
  id: "js-variables",
  trackId: "javascript-adventures",
  title: "The Variable Village",
  description: "Meet the villagers who store all kinds of values!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    // ===== TEACH =====
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to Variable Village! 🏘️ I'm Professor Pixel, your guide. Imagine a village where every house has a NAME on the door and SOMETHING stored inside. That's exactly what variables are in programming — named containers for values!",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Life in Variable Village",
      panels: [
        {
          illustration: "🏠",
          narration: "In Variable Village, every house has a label...",
          character: "pixel",
          dialogue: "See that house labeled 'score'? It has the number 100 inside!",
          mood: "happy",
        },
        {
          illustration: "📦",
          narration: "Some boxes are locked (const) — you can't change what's inside.",
          character: "pixel",
          dialogue: "This box is a CONST — once you put something in, it stays forever!",
          mood: "thinking",
        },
        {
          illustration: "🔄",
          narration: "Other boxes are flexible (let) — swap contents anytime!",
          character: "pixel",
          dialogue: "LET boxes are flexible. Today it's 0, tomorrow it could be 1000!",
          mood: "excited",
        },
        {
          illustration: "⚠️",
          narration: "And then there's 'var' — the old, leaky box...",
          character: "bug",
          dialogue: "Hehe! VAR boxes leak their contents everywhere. Chaos! I love it! 😈",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Variables = Labeled Boxes",
      analogy: "A variable is like a labeled jar in your kitchen",
      realWorld: "Kitchen Jars",
      realWorldEmoji: "🏺",
      codeConcept: "JavaScript Variables",
      codeConceptEmoji: "📦",
      mappings: [
        { real: "Label on the jar (Sugar)", code: "Variable name (score)" },
        { real: "Contents (sugar granules)", code: "Value (100)" },
        { real: "Glass jar (can see inside)", code: "let (can change)" },
        { real: "Sealed jar (permanent)", code: "const (can't reassign)" },
      ],
      conclusion: "Just like you label jars to find ingredients, variables let you name and store data so your program can use it later!",
    },
    {
      type: "code",
      title: "Three Ways to Declare Variables",
      explanation: "JavaScript gives us three keywords. Think of them as three types of storage boxes — each with different rules about what you can do with the contents!",
      code: `// 🟢 let — a box you can change later
let score = 0;
score = 100; // ✅ works! We updated the value

// 🔒 const — a locked box, can't change it
const appName = "DevPlay";
// appName = "Other"; // ❌ Error! Can't reassign

// 🟡 var — the old way (avoid this!)
var oldStyle = "legacy"; // leaks out of blocks!`,
      language: "javascript",
      highlightLines: [2, 6, 10],
    },
    {
      type: "concept-breakdown",
      title: "When to Use Each Keyword",
      description: "A simple rule of thumb for choosing the right variable type:",
      steps: [
        {
          icon: "🔒",
          title: "Use const by default",
          explanation: "Start with const for everything. If the value never needs to change (API URLs, config, fixed values), const prevents accidental changes.",
          codeSnippet: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";',
          language: "javascript",
        },
        {
          icon: "🔄",
          title: "Switch to let when you need to reassign",
          explanation: "Use let only when you KNOW the value will change — counters, accumulators, user input tracking.",
          codeSnippet: "let count = 0;\ncount++; // Now it's 1\nlet userName = \"\";\nuserName = input.value; // Updated!",
          language: "javascript",
        },
        {
          icon: "⛔",
          title: "Never use var",
          explanation: "var has confusing scoping rules (function-scoped instead of block-scoped). It's kept for old code compatibility, but there's zero reason to use it in new code.",
          codeSnippet: "// ❌ var leaks out of if-blocks!\nif (true) {\n  var leaked = 'oops';\n}\nconsole.log(leaked); // 'oops' — var leaked!\n\n// ✅ let stays inside the block\nif (true) {\n  let safe = 'contained';\n}\n// console.log(safe); // Error! Not accessible",
          language: "javascript",
        },
      ],
    },
    {
      type: "interactive-visual",
      title: "Variables in Memory",
      description: "Tap each box to see how variables store different types of data",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "score", value: "100", type: "number" },
          { name: "name", value: '"Alice"', type: "string" },
          { name: "active", value: "true", type: "boolean" },
        ],
      },
    },
    {
      type: "story",
      character: "bug",
      dialogue: "Hehe! I just replaced all the 'const' with 'var' in the village records! Now everything can be accidentally changed! 😈 Let's see if you actually learned anything...",
      mood: "excited",
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "Which keyword creates a variable that CANNOT be reassigned?",
      options: ["var", "let", "const", "define"],
      correctIndex: 2,
      explanation: "'const' creates a constant — once assigned, its value can't be changed. Use it for values that should stay the same!",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Arrange these lines to correctly declare and use variables:",
      codeLines: [
        'const greeting = "Hello";',
        "let count = 0;",
        "count = count + 1;",
        "console.log(greeting, count);",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "javascript",
      xpBonus: 20,
    },
    {
      type: "match",
      instruction: "Match each keyword with its behavior:",
      pairs: [
        { left: "const", right: "Cannot be reassigned" },
        { left: "let", right: "Can be reassigned, block-scoped" },
        { left: "var", right: "Can be reassigned, function-scoped" },
        { left: "undefined", right: "Variable declared but no value" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "Brilliant work, adventurer! 🎉 You've mastered the basics of variables! Remember the golden rule: const first, let when needed, var never. You're ready for the Function Factory!",
      mood: "celebrating",
    },
  ],
};

export const jsFunctions: Lesson = {
  id: "js-functions",
  trackId: "javascript-adventures",
  title: "The Function Factory",
  description: "Build reusable code machines in the Function Factory!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 9,
  steps: [
    // ===== TEACH =====
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Function Factory! 🏭 Imagine a factory with different machines. Each machine takes raw material IN, does something to it, and gives a product OUT. That's what functions do with data!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Functions = Vending Machines",
      analogy: "A function is like a vending machine — put something in, get something out",
      realWorld: "Vending Machine",
      realWorldEmoji: "🎰",
      codeConcept: "JavaScript Function",
      codeConceptEmoji: "⚙️",
      mappings: [
        { real: "Insert coin (input)", code: "Pass arguments (parameters)" },
        { real: "Press button (call it)", code: "Call the function: greet()" },
        { real: "Machine processes internally", code: "Function body executes" },
        { real: "Snack comes out (output)", code: "return value comes back" },
      ],
      conclusion: "Functions take input, process it, and return output — just like a vending machine! You can use the same machine (function) again and again.",
    },
    {
      type: "comic",
      title: "The Three Function Styles",
      panels: [
        {
          illustration: "📜",
          narration: "The Classic Way — Function Declaration",
          character: "pixel",
          dialogue: "This is the original style. Write 'function', give it a name, and fill in the recipe!",
          mood: "happy",
        },
        {
          illustration: "➡️",
          narration: "The Modern Way — Arrow Function",
          character: "pixel",
          dialogue: "Arrow functions are shorter and cooler! Perfect for quick one-liners: const add = (a, b) => a + b",
          mood: "excited",
        },
        {
          illustration: "🧩",
          narration: "Why functions matter",
          character: "pixel",
          dialogue: "Without functions, you'd copy-paste the same code 100 times. With functions, write it ONCE, use it EVERYWHERE!",
          mood: "thinking",
        },
      ],
    },
    {
      type: "code",
      title: "Creating Functions",
      explanation: "Functions let you package code into reusable blocks. Here are the two main ways to create them in modern JavaScript:",
      code: `// Function declaration — the classic way
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function — the modern shorthand
const add = (a, b) => a + b;

// Arrow with a body block
const describe = (item) => {
  const upper = item.toUpperCase();
  return \`This is: \${upper}\`;
};

// Using them:
console.log(greet("Player"));     // "Hello, Player!"
console.log(add(5, 3));            // 8
console.log(describe("widget"));   // "This is: WIDGET"`,
      language: "javascript",
      highlightLines: [2, 7, 10],
    },
    {
      type: "concept-breakdown",
      title: "Anatomy of a Function",
      description: "Every function has the same core parts — let's dissect one:",
      steps: [
        {
          icon: "📛",
          title: "Name — what you call it",
          explanation: "The name identifies the function so you can call it later. Choose descriptive names: calculateTotal, formatDate, isValid.",
          codeSnippet: "function calculateTotal(items) { ... }",
          language: "javascript",
        },
        {
          icon: "📥",
          title: "Parameters — what goes in",
          explanation: "Parameters are placeholders for the data your function needs. Think of them as the ingredient slots in a recipe.",
          codeSnippet: "function greet(name, emoji) {\n  // name and emoji are parameters\n}",
          language: "javascript",
        },
        {
          icon: "⚙️",
          title: "Body — what it does",
          explanation: "The code between { } is the function body. This is where the actual work happens — calculations, transformations, logic.",
          codeSnippet: "function double(n) {\n  const result = n * 2;  // body does work\n  return result;\n}",
          language: "javascript",
        },
        {
          icon: "📤",
          title: "Return — what comes out",
          explanation: "'return' sends a value back to whoever called the function. Without return, the function returns 'undefined'.",
          codeSnippet: "const total = add(5, 3);  // total = 8\n// The 'return' inside add() gave us 8",
          language: "javascript",
        },
      ],
    },
    {
      type: "interactive-visual",
      title: "The Call Stack",
      description: "Watch how functions call each other! Push to add a function call, pop when it returns.",
      visualType: "call-stack",
      config: {
        frames: ["main()", "greet('Alice')", "toUpperCase('alice')"],
      },
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What does the 'return' keyword do in a function?",
      options: [
        "Stops the program entirely",
        "Sends a value back to where the function was called",
        "Prints a value to the console",
        "Creates a new variable outside the function",
      ],
      correctIndex: 1,
      explanation: "'return' sends a value back to the caller and exits the function. Without it, the function returns 'undefined'.",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Build a function that calculates the area of a rectangle:",
      codeLines: [
        "function calculateArea(width, height) {",
        "  const area = width * height;",
        "  return area;",
        "}",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "javascript",
      xpBonus: 20,
    },
    {
      type: "typeracer",
      instruction: "Type this arrow function as fast as you can!",
      code: "const double = (n) => n * 2;",
      language: "javascript",
      targetWPM: 20,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You're a natural function builder! 🛠️ Functions are the backbone of ALL programming. Next up: the magical world of Loops!",
      mood: "celebrating",
    },
  ],
};

export const jsLoops: Lesson = {
  id: "js-loops",
  trackId: "javascript-adventures",
  title: "Loop Lake",
  description: "Dive into the repetitive waters of Loop Lake!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 9,
  steps: [
    // ===== TEACH =====
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to Loop Lake! 🌊 Imagine you're a fish swimming laps. You don't write 'swim' 100 times — you say 'swim until you've done 100 laps.' That's what loops do: repeat code until a condition is met!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Loops = Workout Sets",
      analogy: "A loop is like doing sets at the gym — repeat the exercise until your target reps are done",
      realWorld: "Gym Workout",
      realWorldEmoji: "🏋️",
      codeConcept: "For Loop",
      codeConceptEmoji: "🔄",
      mappings: [
        { real: "Set counter to 0 reps", code: "let i = 0" },
        { real: "Keep going until 10 reps", code: "i < 10" },
        { real: "Do one rep", code: "// loop body executes" },
        { real: "Count: 'that's rep 1!'", code: "i++" },
      ],
      conclusion: "Just like counting gym reps, a for loop has a start (i=0), a condition (i<10), and an increment (i++). It repeats the body until the condition is false!",
    },
    {
      type: "comic",
      title: "The Three Types of Loops",
      panels: [
        {
          illustration: "🔢",
          narration: "FOR loop — when you know exactly how many times",
          character: "pixel",
          dialogue: "Running 5 laps? FOR loop! It's like a coach counting: 'Lap 1... Lap 2... Lap 3...'",
          mood: "happy",
        },
        {
          illustration: "❓",
          narration: "WHILE loop — when you don't know how many times",
          character: "pixel",
          dialogue: "Fishing until you catch 3 fish? WHILE loop! Keep going WHILE fish < 3.",
          mood: "thinking",
        },
        {
          illustration: "📋",
          narration: "FOR...OF — when you have a list of things",
          character: "pixel",
          dialogue: "Processing each item in a shopping list? FOR...OF loops through every item automatically!",
          mood: "excited",
        },
        {
          illustration: "💀",
          narration: "DANGER: The Infinite Loop!",
          character: "bug",
          dialogue: "If you forget to update your condition, the loop runs FOREVER! The program freezes! Muahahaha! 😈",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "For Loops, While Loops & For...Of",
      explanation: "Each loop type shines in different situations. Here's how they work:",
      code: `// FOR loop — repeat exactly 5 times
for (let i = 0; i < 5; i++) {
  console.log("Lap " + (i + 1)); // Lap 1, 2, 3, 4, 5
}

// WHILE loop — repeat until condition is false
let fish = 0;
while (fish < 3) {
  console.log("Caught a fish! 🐟");
  fish++;  // Don't forget this! Otherwise: infinite loop
}

// FOR...OF — loop through an array
const fruits = ["🍎", "🍌", "🍇"];
for (const fruit of fruits) {
  console.log("I ate a " + fruit);
}`,
      language: "javascript",
      highlightLines: [2, 8, 15],
    },
    {
      type: "concept-breakdown",
      title: "For Loop: The Three Parts",
      description: "A for loop declaration has exactly 3 parts separated by semicolons:",
      steps: [
        {
          icon: "1️⃣",
          title: "Initialization — where does counting start?",
          explanation: "Runs once before the loop begins. Usually creates the counter variable.",
          codeSnippet: "for (let i = 0; ...)",
          language: "javascript",
        },
        {
          icon: "2️⃣",
          title: "Condition — when should we stop?",
          explanation: "Checked before each iteration. If false, the loop ends. If true, the body runs again.",
          codeSnippet: "for (...; i < 10; ...)",
          language: "javascript",
        },
        {
          icon: "3️⃣",
          title: "Update — how does the counter change?",
          explanation: "Runs after each iteration. Usually increments the counter. Without this, you get an infinite loop!",
          codeSnippet: "for (...; ...; i++)",
          language: "javascript",
        },
        {
          icon: "🔄",
          title: "Putting it all together",
          explanation: "Read it as: 'Starting at 0, while less than 5, do something and add 1'",
          codeSnippet: "for (let i = 0; i < 5; i++) {\n  console.log(i); // 0, 1, 2, 3, 4\n}",
          language: "javascript",
        },
      ],
    },
    {
      type: "story",
      character: "bug",
      dialogue: "I love infinite loops! They run forever and crash everything! 😈 Watch out — if you forget the i++ part, you'll be swimming in Loop Lake FOREVER!",
      mood: "excited",
      codeSnippet: "// 🚨 BUG's infinite loop!\nwhile (true) {\n  console.log(\"FOREVER!!!\");\n  // Missing break! 💀\n}",
      language: "javascript",
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "How many times does this loop run?\nfor (let i = 0; i < 3; i++) { }",
      options: ["2 times", "3 times", "4 times", "Infinite"],
      correctIndex: 1,
      explanation: "i starts at 0, runs while i < 3 (values 0, 1, 2), so it runs exactly 3 times!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each loop type with its best use case:",
      pairs: [
        { left: "for loop", right: "Known number of iterations" },
        { left: "while loop", right: "Loop until a condition changes" },
        { left: "for...of", right: "Iterate over array elements" },
        { left: "break", right: "Exit a loop early" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've conquered Loop Lake! 🏆 Variables, functions, and loops — the three pillars of JavaScript. You're officially a JavaScript adventurer!",
      mood: "celebrating",
    },
  ],
};
