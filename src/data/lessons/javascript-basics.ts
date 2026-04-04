import { Lesson } from "@/types";

export const jsVariables: Lesson = {
  id: "js-variables",
  trackId: "javascript-adventures",
  title: "The Variable Village",
  description: "Meet the villagers who store all kinds of values!",
  xpReward: 100,
  difficulty: "beginner",
  estimatedMinutes: 5,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to Variable Village! 🏘️ Here, every house has a label and something stored inside. That's exactly what variables are in JavaScript — named containers that hold values!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Three Ways to Declare Variables",
      explanation: "JavaScript gives us three keywords to create variables: let, const, and var. Think of them as different types of storage boxes!",
      code: `// 🟢 let - a box you can change later
let score = 0;
score = 100; // ✅ works!

// 🔒 const - a locked box, can't change it
const name = "DevPlay";
// name = "Other"; // ❌ Error!

// 🟡 var - the old way (avoid this!)
var oldStyle = "legacy";`,
      language: "javascript",
      highlightLines: [2, 6, 10],
    },
    {
      type: "story",
      character: "bug",
      dialogue: "Hehe! I just replaced all the 'const' with 'var' in the village records! Now everything can be accidentally changed! 😈 Can you figure out which variables SHOULD be constant?",
      mood: "excited",
    },
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
        'let count = 0;',
        'count = count + 1;',
        'console.log(greeting, count);',
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
      dialogue: "Excellent work! You've mastered the basics of variables! Remember: use 'const' by default, 'let' when you need to reassign, and avoid 'var'. You're on your way to becoming a JavaScript hero! 🎉",
      mood: "celebrating",
    },
  ],
};

export const jsFunctions: Lesson = {
  id: "js-functions",
  trackId: "javascript-adventures",
  title: "The Function Factory",
  description: "Build reusable code machines in the Function Factory!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Function Factory! 🏭 Functions are like machines — you put something in, they do work, and give you something back. Let's build some!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Creating Functions",
      explanation: "Functions let you package code into reusable blocks. There are several ways to create them:",
      code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (modern way)
const add = (a, b) => a + b;

// Using them:
console.log(greet("Player")); // "Hello, Player!"
console.log(add(5, 3));       // 8`,
      language: "javascript",
      highlightLines: [2, 7],
    },
    {
      type: "quiz",
      question: "What does the 'return' keyword do in a function?",
      options: [
        "Stops the program",
        "Sends a value back to where the function was called",
        "Prints to the console",
        "Creates a new variable",
      ],
      correctIndex: 1,
      explanation: "'return' sends a value back to the caller. Without it, the function returns 'undefined'.",
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
      dialogue: "You're a natural function builder! 🛠️ Functions are the backbone of all programming. Next up, we'll explore the magical world of loops!",
      mood: "celebrating",
    },
  ],
};

export const jsLoops: Lesson = {
  id: "js-loops",
  trackId: "javascript-adventures",
  title: "Loop Lake",
  description: "Dive into the repetitive waters of Loop Lake!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to Loop Lake! 🌊 Sometimes you need to do something over and over. That's where loops come in — they repeat code until a condition is met!",
      mood: "excited",
    },
    {
      type: "code",
      title: "For Loops & While Loops",
      explanation: "The 'for' loop is perfect when you know how many times to repeat. The 'while' loop repeats until a condition is false.",
      code: `// For loop - repeat 5 times
for (let i = 0; i < 5; i++) {
  console.log("Lap " + (i + 1));
}

// While loop
let fish = 0;
while (fish < 3) {
  console.log("Caught a fish! 🐟");
  fish++;
}

// For...of - loop through arrays
const fruits = ["🍎", "🍌", "🍇"];
for (const fruit of fruits) {
  console.log(fruit);
}`,
      language: "javascript",
      highlightLines: [2, 8, 15],
    },
    {
      type: "story",
      character: "bug",
      dialogue: "I love infinite loops! They run forever and crash everything! 😈 Watch out for loops without a proper ending condition!",
      mood: "excited",
      codeSnippet: `// 🚨 BUG's infinite loop!
while (true) {
  console.log("FOREVER!!!");
  // Missing break or condition change!
}`,
      language: "javascript",
    },
    {
      type: "quiz",
      question: "How many times does this loop run?\nfor (let i = 0; i < 3; i++) { }",
      options: ["2 times", "3 times", "4 times", "Infinite"],
      correctIndex: 1,
      explanation: "i starts at 0, runs while i < 3 (0, 1, 2), so it runs exactly 3 times!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each loop type with its best use case:",
      pairs: [
        { left: "for loop", right: "Known number of iterations" },
        { left: "while loop", right: "Loop until a condition changes" },
        { left: "for...of", right: "Iterate over array elements" },
        { left: "forEach", right: "Array method for each element" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've conquered Loop Lake! 🏆 You now know the core building blocks of JavaScript: variables, functions, and loops. You're officially a JavaScript adventurer!",
      mood: "celebrating",
    },
  ],
};
