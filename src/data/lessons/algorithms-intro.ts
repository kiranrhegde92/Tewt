import { Lesson } from "@/types";

export const algoBigO: Lesson = {
  id: "algo-bigO",
  trackId: "algorithm-arena",
  title: "The Big O Colosseum",
  description: "Face the challenge of understanding algorithm efficiency!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Welcome to the Colosseum, champion! 🏟️ Today we learn about Big O notation — the language we use to describe how fast (or slow) an algorithm is. Think of it as a speed rating for your code!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Big O: Speed Ratings for Code",
      explanation: "Big O tells us how an algorithm's time grows as the input size grows. Smaller is faster!",
      code: `// O(1) - Constant: same speed regardless of size
function getFirst(arr) {
  return arr[0]; // Always 1 step!
}

// O(n) - Linear: grows with input size
function findItem(arr, target) {
  for (let item of arr) {   // Check each one
    if (item === target) return true;
  }
  return false;
}

// O(n²) - Quadratic: nested loops = slow!
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}`,
      language: "javascript",
      highlightLines: [3, 8, 16],
    },
    {
      type: "quiz",
      question: "If an array has 1000 items, how many operations does an O(n²) algorithm need in the worst case?",
      options: ["1,000", "10,000", "1,000,000", "1,000,000,000"],
      correctIndex: 2,
      explanation: "O(n²) means n × n operations. 1000 × 1000 = 1,000,000! That's why nested loops can be slow for large inputs.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each Big O with its name and example:",
      pairs: [
        { left: "O(1)", right: "Constant - array index access" },
        { left: "O(log n)", right: "Logarithmic - binary search" },
        { left: "O(n)", right: "Linear - simple loop" },
        { left: "O(n²)", right: "Quadratic - nested loops" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "algo",
      dialogue: "Outstanding! You can now think about code efficiency like a pro! 🏆 Remember: O(1) > O(log n) > O(n) > O(n²). Always aim for the fastest approach!",
      mood: "celebrating",
    },
  ],
};

export const algoSorting: Lesson = {
  id: "algo-sorting",
  trackId: "algorithm-arena",
  title: "The Sorting Showdown",
  description: "Watch algorithms battle to sort data the fastest!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 7,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Today's event: The Sorting Showdown! 🥊 We'll see how Bubble Sort works step by step. It's not the fastest, but it's a great way to understand sorting!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Bubble Sort Explained",
      explanation: "Bubble Sort compares adjacent pairs and swaps them if they're in the wrong order. The largest values 'bubble up' to the end!",
      code: `function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare neighbors
      if (arr[j] > arr[j + 1]) {
        // Swap them!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example: [5, 3, 8, 1] → [1, 3, 5, 8]`,
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
      dialogue: "You've witnessed your first sorting algorithm in action! 🎬 Bubble Sort may be simple, but understanding it is the foundation for learning faster sorts!",
      mood: "celebrating",
    },
  ],
};

export const algoSearching: Lesson = {
  id: "algo-searching",
  trackId: "algorithm-arena",
  title: "The Search Quest",
  description: "Find the needle in the haystack — efficiently!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "algo",
      dialogue: "Imagine you have a phone book with 1 million names. How do you find one? 📖 You don't read every page — you open to the middle and narrow it down! That's Binary Search!",
      mood: "thinking",
    },
    {
      type: "code",
      title: "Linear vs Binary Search",
      explanation: "Linear search checks every element (O(n)). Binary search cuts the search space in half each time (O(log n)) — but requires sorted data!",
      code: `// Linear Search - O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search - O(log n) ⚡
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
      language: "javascript",
      highlightLines: [10, 15, 16, 17, 18],
    },
    {
      type: "quiz",
      question: "In binary search on 1,024 sorted items, what's the maximum number of comparisons needed?",
      options: ["10", "32", "512", "1024"],
      correctIndex: 0,
      explanation: "Binary search halves the data each step: log₂(1024) = 10. Just 10 steps to search 1,024 items! That's the power of O(log n).",
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
      dialogue: "You've mastered the fundamentals of searching! 🔍 Binary Search is one of the most important algorithms in computer science. You're becoming a true algorithm champion!",
      mood: "celebrating",
    },
  ],
};
