import { Lesson } from "@/types";

export const pyBasics: Lesson = {
  id: "py-basics",
  trackId: "python-quest",
  title: "The Print Scroll",
  description: "Unroll the ancient Python scroll and discover the power of print!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome, young Pythonista! 🐍 You've found an ancient scroll. Legend says those who master it can command the serpent of code! Python is known for its beautiful, readable syntax — no curly braces, no semicolons. Just clean, elegant code!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Python = Plain English",
      analogy: "Python reads almost like English — it was designed to be the most human-friendly language",
      realWorld: "Writing a Letter",
      realWorldEmoji: "✉️",
      codeConcept: "Python Code",
      codeConceptEmoji: "🐍",
      mappings: [
        { real: "Say 'Hello!'", code: "print('Hello!')" },
        { real: "Name a thing: 'My cat is Luna'", code: "cat = 'Luna'" },
        { real: "Is it raining? Yes/No", code: "is_raining = True" },
        { real: "My shopping list: milk, eggs", code: "shopping = ['milk', 'eggs']" },
      ],
      conclusion: "Python's philosophy is 'there should be one obvious way to do it.' That's why it reads so naturally — it was literally designed to look like pseudocode!",
    },
    {
      type: "comic",
      title: "Python vs Other Languages",
      panels: [
        {
          illustration: "🐍",
          narration: "Python: clean and simple",
          dialogue: "print('Hello World') — That's it. One line. Done. Beautiful.",
          character: "pixel",
          mood: "happy",
        },
        {
          illustration: "☕",
          narration: "Java: a bit more ceremony",
          dialogue: "public static void main(String[] args) { System.out.println('Hello World'); } — Phew!",
          character: "pixel",
          mood: "confused",
        },
        {
          illustration: "✨",
          narration: "Python's secret weapon: f-strings!",
          character: "pixel",
          dialogue: "f'Hello {name}, you are level {level}' — embed variables right inside strings!",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "Print, Variables & f-strings",
      explanation: "Python uses indentation instead of braces, and you don't need to declare variable types — Python figures them out automatically!",
      code: `# The most powerful spell: print!
print("Hello, World! 🌍")

# Variables — no 'let' or 'const' needed
name = "Pythonista"
level = 1
is_awesome = True

# f-strings: the fancy way to format text
print(f"Welcome, {name}!")
print(f"You are level {level}")
print(f"Is awesome? {is_awesome}")

# Math is easy
score = 95
bonus = score * 1.1
print(f"With bonus: {bonus}")  # 104.5`,
      language: "python",
      highlightLines: [2, 5, 10],
    },
    {
      type: "concept-breakdown",
      title: "Python Data Types",
      description: "Python has several built-in types. It figures out the type automatically based on what you assign!",
      steps: [
        {
          icon: "🔢",
          title: "Numbers: int & float",
          explanation: "Integers are whole numbers (42), floats have decimals (3.14). Python handles the math automatically.",
          codeSnippet: "age = 25        # int\npi = 3.14159    # float\nresult = age + pi  # 28.14159",
          language: "python",
        },
        {
          icon: "📝",
          title: "Strings: text in quotes",
          explanation: "Text data wrapped in quotes. Single or double quotes both work. f-strings let you embed variables!",
          codeSnippet: "name = 'Alice'\ngreeting = f\"Hello, {name}!\"",
          language: "python",
        },
        {
          icon: "✅",
          title: "Booleans: True or False",
          explanation: "Only two values: True or False (capitalized!). Used for decisions and conditions.",
          codeSnippet: "is_logged_in = True\nhas_premium = False",
          language: "python",
        },
        {
          icon: "📋",
          title: "Lists: ordered collections",
          explanation: "Lists hold multiple values in order. You can add, remove, and access items by index.",
          codeSnippet: "colors = ['red', 'green', 'blue']\nprint(colors[0])  # 'red'",
          language: "python",
        },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "How do you embed a variable inside a string in Python?",
      options: [
        'name + " hello"',
        'f"Hello {name}"',
        '"Hello ${name}"',
        "print(name + hello)",
      ],
      correctIndex: 1,
      explanation: "f-strings (formatted string literals) let you embed expressions inside curly braces {} directly in strings! Just put 'f' before the quote.",
      xpBonus: 15,
    },
    {
      type: "typeracer",
      instruction: "Type this Python f-string as fast as you can!",
      code: "print(f\"Hello, {name}!\")",
      language: "python",
      targetWPM: 15,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "The scroll glows brightly! 📜✨ You've learned to speak Python. Next, we'll tame the legendary Python Lists — powerful collections that hold anything!",
      mood: "celebrating",
    },
  ],
};

export const pyLists: Lesson = {
  id: "py-lists",
  trackId: "python-quest",
  title: "Taming the Lists",
  description: "Master the art of organizing data with Python lists!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "In the Python kingdom, Lists are like magical bags that can hold ANYTHING — numbers, strings, even other lists! 🎒 Let's learn to tame these powerful creatures!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Lists = Train Carriages",
      analogy: "A Python list is like a train — each carriage holds something, and they're connected in order",
      realWorld: "Train",
      realWorldEmoji: "🚂",
      codeConcept: "Python List",
      codeConceptEmoji: "📋",
      mappings: [
        { real: "Carriage 1 (first in line)", code: "list[0] (first element)" },
        { real: "Last carriage", code: "list[-1] (last element)" },
        { real: "Attach a new carriage at the end", code: "list.append(item)" },
        { real: "Remove a carriage from the middle", code: "list.remove(item)" },
      ],
      conclusion: "Lists keep things in ORDER and numbered from 0. You can add carriages (append), remove them (remove), or check any carriage by its position (index)!",
    },
    {
      type: "code",
      title: "Python Lists — The Full Tour",
      explanation: "Lists are ordered collections that can hold any type of data. They're one of Python's most powerful and commonly used features!",
      code: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [42, "hello", True, 3.14]  # Different types!

# Accessing elements (0-indexed!)
print(fruits[0])    # "apple" (first)
print(fruits[-1])   # "cherry" (last!)

# Adding & removing
fruits.append("mango")      # Add to end → [..., "mango"]
fruits.insert(0, "kiwi")    # Add at position 0
fruits.remove("banana")     # Remove by value

# Slicing — get a sub-list
print(numbers[1:3])    # [2, 3] (index 1 and 2)
print(numbers[:3])     # [1, 2, 3] (first 3)

# Useful operations
print(len(fruits))      # Length: how many items
print(sorted(numbers))  # Returns sorted copy`,
      language: "python",
      highlightLines: [7, 8, 11, 16],
    },
    {
      type: "concept-breakdown",
      title: "Essential List Operations",
      description: "These are the list methods you'll use every single day as a Python developer:",
      steps: [
        {
          icon: "➕",
          title: ".append(x) — add to end",
          explanation: "Adds a single item to the end of the list. The most common way to grow a list.",
          codeSnippet: "pets = ['dog', 'cat']\npets.append('hamster')\n# ['dog', 'cat', 'hamster']",
          language: "python",
        },
        {
          icon: "📤",
          title: ".pop() — remove from end",
          explanation: "Removes and returns the last item. Like popping a bubble off the top of a stack.",
          codeSnippet: "last = pets.pop()\nprint(last)  # 'hamster'\n# pets is now ['dog', 'cat']",
          language: "python",
        },
        {
          icon: "🔍",
          title: "Negative indexing — count from the end",
          explanation: "Python's killer feature! -1 = last item, -2 = second to last. No more 'list[list.length-1]' madness.",
          codeSnippet: "colors = ['red', 'green', 'blue']\nprint(colors[-1])  # 'blue'\nprint(colors[-2])  # 'green'",
          language: "python",
        },
        {
          icon: "✂️",
          title: "Slicing — get a sub-list",
          explanation: "list[start:end] gives you elements from start up to (but not including) end. Omit start or end for defaults.",
          codeSnippet: "nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])  # [20, 30, 40]\nprint(nums[:3])   # [10, 20, 30]\nprint(nums[2:])   # [30, 40, 50]",
          language: "python",
        },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What does fruits[-1] return if fruits = ['a', 'b', 'c']?",
      options: ["'a'", "'b'", "'c'", "Error"],
      correctIndex: 2,
      explanation: "Negative indexing starts from the end! -1 is the last element, -2 is second to last.",
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
      dialogue: "You've tamed the Lists! 🐉 You can now organize and manage data like a true Pythonista. Onward to the Def Dojo — where we master functions!",
      mood: "celebrating",
    },
  ],
};

export const pyFunctions: Lesson = {
  id: "py-functions",
  trackId: "python-quest",
  title: "The Def Dojo",
  description: "Train in the Dojo of def and master Python functions!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Def Dojo! 🥋 Here, we train the art of 'def' — the keyword that creates functions in Python. Python functions are clean, powerful, and support cool features like default parameters and multiple return values!",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Why Functions Are Your Superpower",
      panels: [
        {
          illustration: "😩",
          narration: "Without functions:",
          dialogue: "Copy-paste the same 20 lines of code in 10 places... then find a bug and have to fix it in ALL 10 places!",
          mood: "confused",
        },
        {
          illustration: "💪",
          narration: "With functions:",
          character: "pixel",
          dialogue: "Write it ONCE, call it anywhere! Fix it in one place, fixed everywhere. That's the power of DRY — Don't Repeat Yourself!",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "code",
      title: "Python Functions with def",
      explanation: "Python uses 'def' to define functions. Indentation (4 spaces) defines the function body — no braces needed!",
      code: `# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameter
def power(base, exp=2):
    return base ** exp

# Multiple return values — Python's secret weapon!
def min_max(numbers):
    return min(numbers), max(numbers)

# Using them:
print(greet("Coder"))       # "Hello, Coder!"
print(power(3))              # 9   (3²)
print(power(2, 10))          # 1024 (2¹⁰)

lo, hi = min_max([5, 1, 9])  # lo=1, hi=9`,
      language: "python",
      highlightLines: [2, 6, 10],
    },
    {
      type: "concept-breakdown",
      title: "Python Function Superpowers",
      description: "Python functions have features that other languages envy!",
      steps: [
        {
          icon: "🎯",
          title: "Default parameters",
          explanation: "Give parameters a default value. If the caller doesn't provide it, the default is used. Great for optional settings!",
          codeSnippet: "def greet(name, emoji='👋'):\n    return f\"{emoji} Hello, {name}!\"\n\ngreet('Alice')         # '👋 Hello, Alice!'\ngreet('Bob', '🚀')    # '🚀 Hello, Bob!'",
          language: "python",
        },
        {
          icon: "📦",
          title: "Multiple return values",
          explanation: "Return several values at once using tuples! No need for wrapper objects or arrays.",
          codeSnippet: "def analyze(numbers):\n    return sum(numbers), len(numbers), max(numbers)\n\ntotal, count, biggest = analyze([1, 2, 3])\n# total=6, count=3, biggest=3",
          language: "python",
        },
        {
          icon: "📝",
          title: "Docstrings — built-in documentation",
          explanation: "Add a string right after def to document your function. Tools can auto-generate docs from these!",
          codeSnippet: 'def calculate_tax(amount, rate=0.1):\n    """Calculate tax for a given amount.\n    \n    Args:\n        amount: Base amount\n        rate: Tax rate (default 10%)\n    """\n    return amount * rate',
          language: "python",
        },
      ],
    },
    // ===== TEST =====
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
      question: "What does add(3) return if defined as: def add(a, b=5): return a + b",
      options: ["3", "5", "8", "Error"],
      correctIndex: 2,
      explanation: "When b is not provided, it uses the default value of 5. So add(3) returns 3 + 5 = 8!",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've earned your black belt in Python functions! 🥋✨ You've completed the Python Quest basics. You're now a certified Pythonista! 🐍",
      mood: "celebrating",
    },
  ],
};
