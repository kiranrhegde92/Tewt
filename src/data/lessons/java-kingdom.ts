import { Lesson } from "@/types";

export const javaOOP: Lesson = {
  id: "java-oop",
  trackId: "java-kingdom",
  title: "The OOP Kingdom",
  description: "Rule with Classes, Objects, and Inheritance — the pillars of Java!",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 12,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Java Kingdom! ☕ Java is the language of OBJECT-ORIENTED PROGRAMMING (OOP). Think of OOP as building a kingdom — you define BLUEPRINTS (classes) and then create actual THINGS (objects) from those blueprints. Let's learn how this kingdom works!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Classes & Objects = Blueprints & Houses",
      analogy: "A Class is a blueprint, and an Object is the actual house built from that blueprint",
      realWorld: "House Blueprint",
      realWorldEmoji: "📐",
      codeConcept: "Java Class & Object",
      codeConceptEmoji: "☕",
      mappings: [
        { real: "Blueprint (design on paper)", code: "Class (code definition)" },
        { real: "Actual house (built from blueprint)", code: "Object (instance of class)" },
        { real: "Features: 3 bedrooms, 2 baths", code: "Fields: name, age, score" },
        { real: "Actions: open door, turn on lights", code: "Methods: getName(), calculate()" },
      ],
      conclusion: "You write a class ONCE, then create as many objects as you want from it. Each object has its own data but shares the same structure and behavior!",
    },
    {
      type: "comic",
      title: "The Four Pillars of OOP",
      panels: [
        {
          illustration: "📦",
          narration: "1. ENCAPSULATION — Hide the messy details",
          character: "pixel",
          dialogue: "Like a TV remote: you press buttons (public methods) without knowing the electronics inside (private fields). Keep data safe!",
          mood: "thinking",
        },
        {
          illustration: "👨‍👦",
          narration: "2. INHERITANCE — Children inherit from parents",
          character: "pixel",
          dialogue: "A Dog class inherits from Animal class. Dogs get all Animal abilities PLUS their own special ones like fetch()!",
          mood: "excited",
        },
        {
          illustration: "🎭",
          narration: "3. POLYMORPHISM — Same action, different behaviors",
          character: "pixel",
          dialogue: "Every animal can speak(), but Dog says 'Woof!' and Cat says 'Meow!'. Same method name, different behavior!",
          mood: "happy",
        },
        {
          illustration: "🧩",
          narration: "4. ABSTRACTION — Focus on WHAT, not HOW",
          character: "pixel",
          dialogue: "You call car.start() without knowing if it's electric or gas. The abstract interface hides implementation details!",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "code",
      title: "Java Class — Your First Blueprint",
      explanation: "Here's a complete Java class with fields (data), a constructor (initializer), and methods (behavior):",
      code: `public class Player {
    // Fields (private = encapsulated!)
    private String name;
    private int score;
    private int level;

    // Constructor — creates a new Player
    public Player(String name) {
        this.name = name;
        this.score = 0;
        this.level = 1;
    }

    // Methods — what a Player can DO
    public void addScore(int points) {
        this.score += points;
        if (this.score >= this.level * 100) {
            this.level++;
            System.out.println(name + " leveled up to " + level + "!");
        }
    }

    public String getName() { return this.name; }
    public int getScore() { return this.score; }
}

// Creating OBJECTS from the class:
Player alice = new Player("Alice");
Player bob = new Player("Bob");
alice.addScore(150); // "Alice leveled up to 2!"`,
      language: "java",
      highlightLines: [1, 8, 15, 28, 29],
    },
    {
      type: "interactive-visual",
      title: "OOP Inheritance Tree",
      description: "Tap each class to see its properties and methods. Children inherit everything from their parents!",
      visualType: "oop-kingdom",
      config: {
        classes: [
          { name: "Animal", emoji: "🐾", properties: ["name", "sound"], methods: ["speak()", "eat()"] },
          { name: "Dog", emoji: "🐕", parent: "Animal", properties: ["breed"], methods: ["fetch()", "wagTail()"] },
          { name: "Cat", emoji: "🐈", parent: "Animal", properties: ["indoor"], methods: ["purr()", "scratch()"] },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Inheritance in Java",
      description: "Inheritance lets you create new classes based on existing ones — reusing code and building hierarchies:",
      steps: [
        {
          icon: "👨‍👧",
          title: "extends — inherit from a parent",
          explanation: "The child class gets ALL the public/protected fields and methods of the parent automatically.",
          codeSnippet: "class Dog extends Animal {\n    private String breed;\n    \n    public void fetch() {\n        System.out.println(name + \" fetches the ball!\");\n    }\n}",
          language: "java",
        },
        {
          icon: "🔄",
          title: "@Override — change inherited behavior",
          explanation: "Override a parent's method to give the child its own version. This is POLYMORPHISM in action!",
          codeSnippet: "class Cat extends Animal {\n    @Override\n    public void speak() {\n        System.out.println(name + \" says Meow!\");\n    }\n}",
          language: "java",
        },
        {
          icon: "🎯",
          title: "super — call the parent's version",
          explanation: "Use super to call the parent's constructor or methods from the child class.",
          codeSnippet: "class Dog extends Animal {\n    public Dog(String name, String breed) {\n        super(name);  // Call Animal's constructor\n        this.breed = breed;\n    }\n}",
          language: "java",
        },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What is the difference between a Class and an Object?",
      options: [
        "They are the same thing",
        "A class is a blueprint; an object is an instance created from it",
        "An object is a blueprint; a class is an instance",
        "Classes are for functions, objects are for variables",
      ],
      correctIndex: 1,
      explanation: "A class defines the structure (fields + methods). An object is a real instance created from that class using 'new'. You can have many objects from one class!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match OOP concepts with their descriptions:",
      pairs: [
        { left: "Encapsulation", right: "Hiding internal data, exposing methods" },
        { left: "Inheritance", right: "Child class extends parent class" },
        { left: "Polymorphism", right: "Same method name, different behavior" },
        { left: "Abstraction", right: "Focus on what, not how" },
      ],
      xpBonus: 20,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've learned the pillars of OOP! 🏛️ Classes, objects, inheritance, and polymorphism — these concepts aren't just Java; they appear in C#, Python, TypeScript, and more. Now let's conquer MULTITHREADING!",
      mood: "celebrating",
    },
  ],
};

export const javaMultithreading: Lesson = {
  id: "java-multithreading",
  trackId: "java-kingdom",
  title: "The Thread Army",
  description: "Command multiple threads to do work simultaneously!",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Commander! 🎖️ Imagine you have ONE worker building a house. Slow, right? Now imagine you have FIVE workers, each doing a different task AT THE SAME TIME — one lays bricks, one does wiring, one paints. THAT'S multithreading! Let's learn how Java makes this possible.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Threads = Kitchen Workers",
      analogy: "Multithreading is like having multiple chefs in a kitchen — each working on a different dish simultaneously",
      realWorld: "Restaurant Kitchen",
      realWorldEmoji: "👨‍🍳",
      codeConcept: "Java Threads",
      codeConceptEmoji: "🧵",
      mappings: [
        { real: "The kitchen (shared space)", code: "Process (shared memory)" },
        { real: "Each chef (works independently)", code: "Thread (unit of execution)" },
        { real: "Chefs share the stove/oven", code: "Threads share heap memory" },
        { real: "Only one chef can use the knife at a time", code: "synchronized — mutual exclusion" },
        { real: "Head chef coordinates orders", code: "Main thread manages others" },
      ],
      conclusion: "Threads let your program do multiple things at once. But just like chefs bumping into each other, threads can cause problems if they access shared data without coordination!",
    },
    {
      type: "comic",
      title: "The Life of a Thread",
      panels: [
        {
          illustration: "🐣",
          narration: "NEW — Thread is created but not started",
          character: "pixel",
          dialogue: "Like hiring a new worker. They exist but haven't started working yet. Call .start() to begin!",
          mood: "happy",
        },
        {
          illustration: "🏃",
          narration: "RUNNABLE — Thread is running (or ready to run)",
          character: "pixel",
          dialogue: "The worker is active! The CPU scheduler decides which thread actually runs at any moment.",
          mood: "excited",
        },
        {
          illustration: "😴",
          narration: "BLOCKED / WAITING — Thread is paused",
          character: "pixel",
          dialogue: "Waiting for a lock, or sleeping, or waiting for another thread. Like a worker waiting for the shared tool to be free.",
          mood: "thinking",
        },
        {
          illustration: "💀",
          narration: "TERMINATED — Thread is done",
          character: "pixel",
          dialogue: "The run() method finished. The worker completed their task and went home. Can't restart a terminated thread!",
          mood: "happy",
        },
      ],
    },
    {
      type: "code",
      title: "Creating Threads in Java",
      explanation: "Java provides two main ways to create threads. Both override a run() method that contains the work to be done:",
      code: `// Way 1: Extend Thread class
class DownloadThread extends Thread {
    private String url;

    public DownloadThread(String url) {
        this.url = url;
    }

    @Override
    public void run() {
        System.out.println("Downloading: " + url);
        // ... download logic ...
        System.out.println("Done: " + url);
    }
}

// Way 2: Implement Runnable (preferred!)
class DataProcessor implements Runnable {
    @Override
    public void run() {
        System.out.println("Processing data...");
    }
}

// Starting threads:
Thread t1 = new DownloadThread("file1.zip");
Thread t2 = new DownloadThread("file2.zip");
Thread t3 = new Thread(new DataProcessor());

t1.start(); // All three run SIMULTANEOUSLY!
t2.start();
t3.start();`,
      language: "java",
      highlightLines: [2, 10, 18, 20, 29, 30],
    },
    {
      type: "interactive-visual",
      title: "Thread Race Simulation",
      description: "Watch multiple threads execute tasks in parallel. See how they overlap — this is the power of concurrency!",
      visualType: "thread-race",
      config: {
        threads: [
          { name: "Download Thread", color: "#8B5CF6", tasks: ["Connect", "Download", "Save"] },
          { name: "UI Thread", color: "#3B82F6", tasks: ["Render", "Update", "Animate", "Display"] },
          { name: "Data Thread", color: "#10B981", tasks: ["Fetch DB", "Process", "Cache"] },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "The Dangers: Race Conditions & Synchronization",
      description: "When multiple threads access shared data, things can go horribly wrong. Here's how to prevent it:",
      steps: [
        {
          icon: "⚠️",
          title: "Race Condition — the bug you can't see",
          explanation: "Two threads modify the same variable at the same time. Result? Unpredictable, inconsistent data. Like two people editing the same document simultaneously without knowing.",
          codeSnippet: "// DANGER! Two threads incrementing the same counter:\n// Thread A reads count = 5\n// Thread B reads count = 5\n// Thread A writes count = 6\n// Thread B writes count = 6  <-- Lost update!\n// Expected 7, got 6!",
          language: "java",
        },
        {
          icon: "🔒",
          title: "synchronized — the safety lock",
          explanation: "The 'synchronized' keyword ensures only ONE thread can enter a code block at a time. Like a bathroom door lock — when it's occupied, others wait!",
          codeSnippet: "public synchronized void addScore(int points) {\n    // Only ONE thread at a time can execute this\n    this.score += points;\n}",
          language: "java",
        },
        {
          icon: "🤝",
          title: "Thread.join() — wait for completion",
          explanation: "Sometimes the main thread needs to wait until worker threads finish before proceeding. join() blocks until the thread completes.",
          codeSnippet: "Thread worker = new Thread(task);\nworker.start();     // Start the work\nworker.join();      // Wait until it finishes\nSystem.out.println(\"Worker is done!\");",
          language: "java",
        },
        {
          icon: "😴",
          title: "Thread.sleep() — intentional pause",
          explanation: "Makes the current thread pause for a specified time. Useful for polling, rate limiting, or simulating delays.",
          codeSnippet: "try {\n    Thread.sleep(1000); // Pause for 1 second\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n}",
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "Thread-Safe Counter Example",
      explanation: "Here's a complete example showing the problem and solution for shared data access:",
      code: `class SafeCounter {
    private int count = 0;

    // synchronized = only one thread at a time!
    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}

// Usage with multiple threads:
SafeCounter counter = new SafeCounter();

// Create 100 threads, each incrementing 1000 times
Thread[] threads = new Thread[100];
for (int i = 0; i < 100; i++) {
    threads[i] = new Thread(() -> {
        for (int j = 0; j < 1000; j++) {
            counter.increment();
        }
    });
    threads[i].start();
}

// Wait for all to finish, then check:
// counter.getCount() == 100,000 ✅ (always correct!)`,
      language: "java",
      highlightLines: [5, 9, 20],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What is a 'race condition' in multithreading?",
      options: [
        "Threads competing to finish first (which is good)",
        "Two threads modifying shared data without synchronization, causing unpredictable results",
        "A thread running too fast for the CPU",
        "When threads are created in the wrong order",
      ],
      correctIndex: 1,
      explanation: "A race condition occurs when multiple threads access shared data simultaneously without proper synchronization, leading to inconsistent or corrupted data!",
      xpBonus: 20,
    },
    {
      type: "match",
      instruction: "Match multithreading concepts:",
      pairs: [
        { left: "Thread.start()", right: "Begin executing the thread" },
        { left: "synchronized", right: "Only one thread can enter at a time" },
        { left: "Thread.join()", right: "Wait for a thread to finish" },
        { left: "Race condition", right: "Bug from unsynchronized shared access" },
      ],
      xpBonus: 20,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've mastered the Thread Army! 🎖️ Understanding concurrency is what separates intermediate developers from advanced ones. You now know thread creation, lifecycle, synchronization, and race conditions. The Java Kingdom salutes you! ☕👑",
      mood: "celebrating",
    },
  ],
};

export const javaCollections: Lesson = {
  id: "java-collections",
  trackId: "java-kingdom",
  title: "The Collections Treasury",
  description: "Master ArrayList, HashMap, and the Collections framework!",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Welcome to the Collections Treasury! 🏦 Java's Collections Framework is like a warehouse of different container types. Need a list? An ordered set? A key-value map? Java has a specialized container for EVERY need!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Collections = Storage Types",
      analogy: "Java Collections are like different types of storage in your home",
      realWorld: "Home Storage",
      realWorldEmoji: "🏠",
      codeConcept: "Java Collections",
      codeConceptEmoji: "📚",
      mappings: [
        { real: "Filing cabinet (ordered, numbered)", code: "ArrayList — indexed list" },
        { real: "Dictionary (look up by word)", code: "HashMap — key-value pairs" },
        { real: "Bag of unique marbles (no duplicates)", code: "HashSet — unique elements" },
        { real: "Queue at the bank (first in, first out)", code: "Queue — FIFO order" },
      ],
      conclusion: "Each collection type is optimized for specific operations. Choosing the right one can make your code 100x faster!",
    },
    {
      type: "comic",
      title: "The Big Three Collections",
      panels: [
        {
          illustration: "📋",
          narration: "ArrayList — your go-to ordered list",
          character: "pixel",
          dialogue: "Like a numbered todo list. Fast to read by index O(1), but slow to insert in the middle O(n).",
          mood: "happy",
        },
        {
          illustration: "🗺️",
          narration: "HashMap — instant lookups by key",
          character: "pixel",
          dialogue: "Like a contacts app: search by NAME, instantly get the phone number. Lookup is O(1) on average!",
          mood: "excited",
        },
        {
          illustration: "🎯",
          narration: "HashSet — guaranteed uniqueness",
          character: "pixel",
          dialogue: "Like a guest list: each name appears only ONCE. Perfect for removing duplicates!",
          mood: "thinking",
        },
      ],
    },
    {
      type: "code",
      title: "The Big Three in Action",
      explanation: "Here's how to create and use the three most important Java collections:",
      code: `import java.util.*;

// ArrayList — ordered, allows duplicates
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Alice"); // Allowed! ["Alice", "Bob", "Alice"]
System.out.println(names.get(0)); // "Alice" — O(1)

// HashMap — key-value pairs
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
System.out.println(scores.get("Alice")); // 95 — O(1)

// HashSet — unique elements only
Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Alice");
uniqueNames.add("Bob");
uniqueNames.add("Alice"); // Ignored! {"Alice", "Bob"}
System.out.println(uniqueNames.size()); // 2`,
      language: "java",
      highlightLines: [4, 11, 17],
    },
    {
      type: "concept-breakdown",
      title: "When to Use Which Collection?",
      description: "Choosing the right collection type is a critical skill:",
      steps: [
        {
          icon: "📋",
          title: "ArrayList — when order matters",
          explanation: "Use when you need ordered data with fast index access. Great for: todo lists, search results, history.",
          codeSnippet: "List<Task> todoList = new ArrayList<>();\ntodoList.add(new Task(\"Buy milk\"));\nTask first = todoList.get(0); // O(1) fast!",
          language: "java",
        },
        {
          icon: "🗺️",
          title: "HashMap — when you need fast lookups",
          explanation: "Use when you have key-value data and need instant access by key. Great for: configs, caches, counting.",
          codeSnippet: "Map<String, User> userCache = new HashMap<>();\nuserCache.put(\"alice123\", aliceObj);\nUser u = userCache.get(\"alice123\"); // O(1)!",
          language: "java",
        },
        {
          icon: "🎯",
          title: "HashSet — when uniqueness matters",
          explanation: "Use when you need to track unique values or check membership quickly. Great for: deduplication, visited nodes.",
          codeSnippet: "Set<String> visited = new HashSet<>();\nvisited.add(\"page1\");\nif (visited.contains(\"page1\")) // O(1) check!",
          language: "java",
        },
      ],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "You need to count how many times each word appears in a text. Which collection should you use?",
      options: ["ArrayList", "HashSet", "HashMap", "LinkedList"],
      correctIndex: 2,
      explanation: "HashMap<String, Integer> is perfect! The word is the key, and the count is the value. Lookup and update are both O(1)!",
      xpBonus: 20,
    },
    {
      type: "match",
      instruction: "Match the use case with the best collection:",
      pairs: [
        { left: "Remove duplicates from data", right: "HashSet" },
        { left: "Store user profiles by username", right: "HashMap" },
        { left: "Maintain ordered shopping list", right: "ArrayList" },
        { left: "Check if item was already processed", right: "HashSet" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've raided the Collections Treasury! 🏆 ArrayList, HashMap, HashSet — these are the tools you'll use in literally EVERY Java project. The Java Kingdom crowns you a true Java Knight! ☕⚔️",
      mood: "celebrating",
    },
  ],
};
