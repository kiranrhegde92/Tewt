import { Lesson } from "@/types";

export const pyBasics: Lesson = {
  id: "py-basics",
  trackId: "python-quest",
  title: "The Print Scroll",
  description: "Unroll the ancient Python scroll and discover the power of print!",
  xpReward: 100,
  difficulty: "beginner",
  estimatedMinutes: 5,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome, young Pythonista! 🐍 You've found an ancient scroll. Legend says those who master it can command the serpent of code! Let's start with the most basic spell: print()!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Print & Variables in Python",
      explanation: "Python is known for its clean, readable syntax. No semicolons, no curly braces — just beautiful simplicity!",
      code: `# The most powerful spell: print!
print("Hello, World! 🌍")

# Variables - no need for let/const
name = "Pythonista"
level = 1
is_awesome = True

# f-strings: the fancy way to print
print(f"Welcome, {name}! You are level {level}")
print(f"Is awesome? {is_awesome}")`,
      language: "python",
      highlightLines: [2, 5, 10],
    },
    {
      type: "quiz",
      question: "How do you embed a variable inside a string in Python?",
      options: [
        'name + " hello"',
        "f\"Hello {name}\"",
        "Hello ${name}",
        "print(name + hello)",
      ],
      correctIndex: 1,
      explanation: "f-strings (formatted string literals) let you embed expressions inside curly braces {} directly in strings!",
      xpBonus: 15,
    },
    {
      type: "typeracer",
      instruction: "Type this Python code as fast as you can!",
      code: 'print(f"Hello, {name}!")',
      language: "python",
      targetWPM: 15,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "The scroll glows brightly! 📜✨ You've learned to speak Python. Next, we'll tame the legendary Python Lists!",
      mood: "celebrating",
    },
  ],
};

export const pyLists: Lesson = {
  id: "py-lists",
  trackId: "python-quest",
  title: "Taming the Lists",
  description: "Master the art of organizing data with Python lists!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "In the Python kingdom, Lists are like magical bags that can hold anything! 🎒 Let's learn how to create, access, and manipulate them.",
      mood: "excited",
    },
    {
      type: "code",
      title: "Python Lists",
      explanation: "Lists are ordered collections that can hold any type of data. They're one of Python's most powerful features!",
      code: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]

# Accessing elements (0-indexed)
print(fruits[0])   # "apple"
print(fruits[-1])  # "cherry" (last item!)

# Adding & removing
fruits.append("mango")     # Add to end
fruits.insert(0, "kiwi")   # Add at position
fruits.remove("banana")    # Remove by value

# Slicing
print(numbers[1:3])  # [2, 3]`,
      language: "python",
      highlightLines: [6, 7, 10, 15],
    },
    {
      type: "quiz",
      question: "What does fruits[-1] return if fruits = ['a', 'b', 'c']?",
      options: ["'a'", "'b'", "'c'", "Error"],
      correctIndex: 2,
      explanation: "Negative indexing starts from the end! -1 is the last element, -2 is second to last, etc.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the list method with what it does:",
      pairs: [
        { left: ".append(x)", right: "Add x to end of list" },
        { left: ".pop()", right: "Remove and return last item" },
        { left: ".sort()", right: "Sort list in place" },
        { left: "len(list)", right: "Get number of elements" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've tamed the Lists! 🐉 You can now organize and manage data like a true Pythonista. Onward to functions!",
      mood: "celebrating",
    },
  ],
};

export const pyFunctions: Lesson = {
  id: "py-functions",
  trackId: "python-quest",
  title: "The Def Dojo",
  description: "Train in the Dojo of def and master Python functions!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Def Dojo! 🥋 Here, we train the art of 'def' — the keyword that creates functions in Python. Functions are reusable blocks of code that make your programs powerful!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Python Functions",
      explanation: "Use 'def' to define a function. Python uses indentation instead of braces to define code blocks!",
      code: `# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameter
def power(base, exp=2):
    return base ** exp

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

# Using them:
print(greet("Coder"))     # "Hello, Coder!"
print(power(3))            # 9 (3^2)
print(power(2, 10))        # 1024 (2^10)
lo, hi = min_max([5, 1, 9, 3])`,
      language: "python",
      highlightLines: [2, 6, 10],
    },
    {
      type: "puzzle",
      instruction: "Build a function that checks if a number is even:",
      codeLines: [
        "def is_even(number):",
        "    remainder = number % 2",
        "    return remainder == 0",
        "print(is_even(4))",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "python",
      xpBonus: 20,
    },
    {
      type: "quiz",
      question: "What does this function return: def add(a, b=5): return a + b — when called as add(3)?",
      options: ["3", "5", "8", "Error"],
      correctIndex: 2,
      explanation: "When b is not provided, it uses the default value of 5. So add(3) returns 3 + 5 = 8!",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've earned your black belt in Python functions! 🥋✨ You've completed the Python Quest basics. You're now a certified Pythonista!",
      mood: "celebrating",
    },
  ],
};
