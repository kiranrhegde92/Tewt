import { Lesson } from "@/types";

export const algoBigO: Lesson = {
  id: "algo-bigO",
  trackId: "algorithm-arena",
  title: "The Big O Colosseum",
  description: "Face the challenge of understanding algorithm efficiency!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Welcome to the Colosseum, champion! 🏟️ Today's lesson is CRUCIAL for every developer. Big O notation is the language we use to describe HOW FAST an algorithm is — not in seconds, but in terms of how it SCALES as input grows.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Big O = Speed Ratings",
      analogy: "Big O is like rating delivery services — not by one package, but by how they handle 1000 packages",
      realWorld: "Delivery Services",
      realWorldEmoji: "📦",
      codeConcept: "Big O Notation",
      codeConceptEmoji: "⏱️",
      mappings: [
        { real: "Teleporter: instant regardless of distance", code: "O(1) — constant time" },
        { real: "Binary search: halve the area each step", code: "O(log n) — logarithmic" },
        { real: "Deliver to each house one by one", code: "O(n) — linear" },
        { real: "Compare every house with every other house", code: "O(n²) — quadratic" },
      ],
      conclusion: "Big O tells you how an algorithm behaves AT SCALE. An O(n²) algorithm might be fine for 10 items but disastrous for 1 million!",
    },
    {
      type: "comic",
      title: "The Race of Algorithms",
      panels: [
        {
          illustration: "🏎️",
          narration: "O(1) — The Instant Champion",
          character: "algo",
          dialogue: "Array index access: arr[5]. No matter if the array has 10 or 10 million items, it takes the SAME time!",
          mood: "excited",
        },
        {
          illustration: "🔍",
          narration: "O(log n) — The Smart Searcher",
          character: "algo",
          dialogue: "Binary search cuts the problem in HALF each step. 1 billion items? Only ~30 steps! That's the power of logarithms!",
          mood: "thinking",
        },
        {
          illustration: "🚶",
          narration: "O(n) — The Linear Walker",
          character: "algo",
          dialogue: "Simple loops: check every item once. Double the input? Double the time. Predictable, but not always fast enough.",
          mood: "happy",
        },
        {
          illustration: "🐌",
          narration: "O(n²) — The Nested Nightmare",
          character: "algo",
          dialogue: "A loop inside a loop! 1000 items = 1,000,000 operations! This is where many beginners' code gets slow.",
          mood: "confused",
        },
      ],
    },
    {
      type: "code",
      title: "Big O in Real Code",
      explanation: "Let's see exactly what each complexity looks like in actual code. The key is counting how many operations run as input size (n) grows:",
      code: `// O(1) — Constant: same speed regardless of size
function getFirst(arr) {
  return arr[0]; // Always 1 operation!
}

// O(n) — Linear: one loop through the data
function findItem(arr, target) {
  for (let item of arr) {    // Visits each item once
    if (item === target) return true;
  }
  return false;
}

// O(n²) — Quadratic: nested loops = SLOW for large n
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {      // n times
    for (let j = i + 1; j < arr.length; j++) { // n times
      if (arr[i] === arr[j]) return true;      // n × n = n²!
    }
  }
  return false;
}`,
      language: "javascript",
      highlightLines: [3, 8, 16, 17],
    },
    {
      type: "concept-breakdown",
      title: "Big O Cheat Sheet",
      description: "Memorize this ranking from fastest to slowest:",
      steps: [
        { icon: "⚡", title: "O(1) — Constant", explanation: "Same time regardless of input size. Example: hash table lookup, array index access.", codeSnippet: "map.get('key')  // Always instant!" },
        { icon: "🔍", title: "O(log n) — Logarithmic", explanation: "Halves the problem each step. Example: binary search. For 1 billion items, only ~30 steps!", codeSnippet: "// Binary search: check middle, eliminate half\nfunction binarySearch(sorted, target) { ... }" },
        { icon: "📏", title: "O(n) — Linear", explanation: "Proportional to input. Double the data = double the time. Example: simple loop, linear search.", codeSnippet: "for (let item of arr) { ... }" },
        { icon: "📊", title: "O(n log n) — Linearithmic", explanation: "Typical of efficient sorts. Example: merge sort, quicksort. This is the BEST possible for comparison-based sorting!", codeSnippet: "arr.sort()  // JavaScript uses Timsort: O(n log n)" },
        { icon: "🐌", title: "O(n²) — Quadratic", explanation: "Nested loops over the same data. Bubble sort, checking all pairs. Avoid for large inputs!", codeSnippet: "for (i of arr)\n  for (j of arr)  // n × n = n²" },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "If an array has 1000 items, approximately how many operations does an O(n²) algorithm need?",
      options: ["1,000", "10,000", "1,000,000", "1,000,000,000"],
      correctIndex: 2,
      explanation: "O(n²) means n × n operations. 1000 × 1000 = 1,000,000! That's why nested loops can be slow for large inputs.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each Big O with its real-world example:",
      pairs: [
        { left: "O(1)", right: "Looking up a word in a dictionary by page number" },
        { left: "O(log n)", right: "Finding a name in a phone book (binary search)" },
        { left: "O(n)", right: "Reading every page of a book" },
        { left: "O(n²)", right: "Comparing every student with every other student" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "algo",
      dialogue: "Outstanding! 🏆 You can now think about code efficiency like a pro! Always ask: 'How does this scale?' — that's what separates good developers from great ones!",
      mood: "celebrating",
    },
  ],
};

export const algoSorting: Lesson = {
  id: "algo-sorting",
  trackId: "algorithm-arena",
  title: "The Sorting Showdown",
  description: "Watch algorithms battle to sort data the fastest!",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Welcome to The Sorting Showdown! 🥊 Sorting is one of the most fundamental operations in computing. Every app sorts data — search results, leaderboards, playlists. Let's understand HOW sorting works from the inside!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Sorting = Organizing a Bookshelf",
      analogy: "Sorting algorithms are like different strategies for organizing a messy bookshelf",
      realWorld: "Organizing Books",
      realWorldEmoji: "📚",
      codeConcept: "Sorting Algorithms",
      codeConceptEmoji: "🔢",
      mappings: [
        { real: "Compare two adjacent books, swap if wrong order", code: "Bubble Sort — compare neighbors" },
        { real: "Find the smallest book, put it first, repeat", code: "Selection Sort — find minimum" },
        { real: "Split books into piles, sort each, merge back", code: "Merge Sort — divide & conquer" },
      ],
      conclusion: "Different strategies have different speeds! Bubble sort is simple but slow O(n²). Merge sort is smarter at O(n log n) — 100x faster for large datasets!",
    },
    {
      type: "comic",
      title: "Bubble Sort: Step by Step",
      panels: [
        { illustration: "🫧", narration: "Bubble Sort gets its name because larger values 'bubble up' to the end", character: "algo", dialogue: "Imagine bubbles rising in water — the biggest float to the top!", mood: "happy" },
        { illustration: "👈👉", narration: "Step 1: Compare neighbors. If left > right, SWAP!", character: "algo", dialogue: "Compare 5 and 3: 5 > 3? Yes! Swap them → [3, 5, ...]", mood: "thinking" },
        { illustration: "🔄", narration: "Step 2: Keep going through the whole array", character: "algo", dialogue: "After one full pass, the LARGEST value is at the end. Guaranteed!", mood: "excited" },
        { illustration: "✅", narration: "Step 3: Repeat until no more swaps needed", character: "algo", dialogue: "Each pass guarantees one more element is in its final position!", mood: "celebrating" },
      ],
    },
    {
      type: "code",
      title: "Bubble Sort Implementation",
      explanation: "Bubble Sort compares adjacent pairs and swaps them if they're in the wrong order. Simple but O(n²) — not efficient for large data.",
      code: `function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    // After each outer loop, one more element is sorted!
  }
  return arr;
}

// Example: [5,3,8,1] → [3,5,8,1] → [3,5,1,8] → [1,3,5,8]`,
      language: "javascript",
      highlightLines: [7, 9],
    },
    {
      type: "visualizer",
      title: "Bubble Sort Visualizer",
      description: "Watch bubble sort in action! Hit 'Sort' to see how elements swap positions. Try different speeds!",
      visualizerType: "sorting",
      data: [38, 12, 45, 7, 23, 56, 15, 42],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What is the time complexity of Bubble Sort?",
      options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
      correctIndex: 3,
      explanation: "Bubble Sort uses nested loops, making it O(n²). For large arrays, faster algorithms like Merge Sort O(n log n) are preferred!",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "algo",
      dialogue: "You've witnessed your first sorting algorithm in action! 🎬 Bubble Sort is the 'hello world' of algorithms. Understanding it is the foundation for learning faster sorts like Merge Sort and Quick Sort!",
      mood: "celebrating",
    },
  ],
};

export const algoSearching: Lesson = {
  id: "algo-searching",
  trackId: "algorithm-arena",
  title: "The Search Quest",
  description: "Find the needle in the haystack — efficiently!",
  xpReward: 150,
  difficulty: "beginner",
  estimatedMinutes: 9,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Imagine you have a phone book with 1 million names. Do you read every single page? NO! 📖 You open to the middle and narrow it down. That's the genius of Binary Search — and today, you'll learn exactly how it works!",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "Linear vs Binary Search",
      panels: [
        { illustration: "🔎", narration: "Linear Search: check every item, one by one", character: "algo", dialogue: "Like reading every page of a phone book to find 'Smith'. Works, but SLOW for large data!", mood: "confused" },
        { illustration: "📖", narration: "Binary Search: open to the middle, eliminate half!", character: "algo", dialogue: "'Smith' — I opened to 'M'. Smith comes AFTER M, so I throw away the first half! Now half the work is gone!", mood: "excited" },
        { illustration: "✂️", narration: "Keep halving: 1000 → 500 → 250 → 125 → ...", character: "algo", dialogue: "Each step eliminates HALF the remaining data. 1 billion items? Only ~30 steps! That's O(log n)!", mood: "celebrating" },
      ],
    },
    {
      type: "concept-breakdown",
      title: "How Binary Search Works",
      description: "Binary search requires SORTED data. Here's the step-by-step process:",
      steps: [
        { icon: "📐", title: "Find the middle element", explanation: "Calculate the midpoint: mid = (left + right) / 2. Check if it's your target.", codeSnippet: "const mid = Math.floor((left + right) / 2);" },
        { icon: "🎯", title: "Is it the target? Done!", explanation: "If arr[mid] equals your target, you found it! Return the index." },
        { icon: "➡️", title: "Target is bigger? Search right half", explanation: "If target > arr[mid], it must be in the right half. Move left pointer to mid + 1.", codeSnippet: "if (arr[mid] < target) left = mid + 1;" },
        { icon: "⬅️", title: "Target is smaller? Search left half", explanation: "If target < arr[mid], it must be in the left half. Move right pointer to mid - 1.", codeSnippet: "else right = mid - 1;" },
        { icon: "🔄", title: "Repeat until found (or not)", explanation: "Keep halving until left > right. If that happens, the element doesn't exist in the array." },
      ],
    },
    {
      type: "code",
      title: "Linear vs Binary Search",
      explanation: "Linear search checks every element O(n). Binary search cuts the space in half each time O(log n) — but requires sorted data!",
      code: `// Linear Search — O(n) — works on unsorted data
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search — O(log n) — needs sorted data!
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;     // Found it!
    if (arr[mid] < target) left = mid + 1;   // Go right
    else right = mid - 1;                     // Go left
  }
  return -1; // Not found
}`,
      language: "javascript",
      highlightLines: [10, 15, 16, 17, 18],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "In binary search on 1,024 sorted items, what's the MAXIMUM number of comparisons needed?",
      options: ["10", "32", "512", "1024"],
      correctIndex: 0,
      explanation: "Binary search halves the data each step: log₂(1024) = 10. Just 10 steps to search through 1,024 items!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match search algorithms with their properties:",
      pairs: [
        { left: "Linear Search", right: "Works on unsorted data, O(n)" },
        { left: "Binary Search", right: "Requires sorted data, O(log n)" },
        { left: "Hash Table", right: "Average O(1) lookup" },
        { left: "Tree Search", right: "O(log n) with balanced tree" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "algo",
      dialogue: "You've mastered searching! 🔍 Binary Search is one of the most important algorithms in computer science — it's used everywhere from databases to spell-checkers. You're becoming a true algorithm champion!",
      mood: "celebrating",
    },
  ],
};
