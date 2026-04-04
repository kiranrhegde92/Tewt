import { Lesson } from "@/types";

export const javaOOP: Lesson = {
  id: "java-oop",
  trackId: "java-kingdom",
  title: "The OOP Kingdom",
  description:
    "Learn abstraction, encapsulation, inheritance, and polymorphism the Java way.",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Welcome to the OOP Kingdom. Java loves structure, and object-oriented programming is its favorite way to organize a growing codebase. Think of classes as blueprints, objects as citizens, and methods as the actions they can perform.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Classes and Objects = Blueprints and Houses",
      analogy:
        "A class is a blueprint, and an object is the actual house built from that blueprint.",
      realWorld: "House Blueprint",
      realWorldEmoji: "\u{1F4D0}",
      codeConcept: "Java Class and Object",
      codeConceptEmoji: "\u{2615}",
      mappings: [
        { real: "Blueprint on paper", code: "Class definition" },
        { real: "Finished house", code: "Object instance" },
        { real: "Rooms and doors", code: "Fields and methods" },
        { real: "Many houses from one plan", code: "Many objects from one class" },
      ],
      conclusion:
        "You define the class once, then create as many objects as you need. Each object carries its own data but follows the same design.",
    },
    {
      type: "comic",
      title: "The Four Pillars",
      panels: [
        {
          illustration: "\u{1F4E6}",
          narration: "Encapsulation",
          character: "pixel",
          dialogue:
            "Bundle data and behavior together, then hide delicate details behind public methods.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F5DD}\u{FE0F}",
          narration: "Abstraction",
          character: "pixel",
          dialogue:
            "Show what something can do without exposing every messy implementation detail.",
          mood: "happy",
        },
        {
          illustration: "\u{1F333}",
          narration: "Inheritance",
          character: "pixel",
          dialogue:
            "A child class can extend a parent and reuse behavior instead of rewriting it.",
          mood: "excited",
        },
        {
          illustration: "\u{1F3AD}",
          narration: "Polymorphism",
          character: "pixel",
          dialogue:
            "The same method name can lead to different behavior depending on the object behind it.",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "code",
      title: "One Example, Many OOP Ideas",
      explanation:
        "This example shows encapsulation with private fields, inheritance with extends, abstraction through an abstract class, and overriding for runtime polymorphism.",
      code: `abstract class Animal {
    protected String name;

    Animal(String name) {
        this.name = name;
    }

    public abstract void speak();
}

class Dog extends Animal {
    private String breed;

    Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }

    @Override
    public void speak() {
        System.out.println(name + " says Woof!");
    }

    public String getBreed() {
        return breed;
    }
}

Animal pet = new Dog("Bolt", "Corgi");
pet.speak();`,
      language: "java",
      highlightLines: [1, 7, 10, 13, 17, 26],
    },
    {
      type: "interactive-visual",
      title: "Inheritance Tree",
      description:
        "Tap each class to see how children inherit structure from parents and add their own powers.",
      visualType: "oop-kingdom",
      config: {
        classes: [
          {
            name: "Animal",
            emoji: "\u{1F43E}",
            properties: ["name", "energy"],
            methods: ["speak()", "eat()"],
          },
          {
            name: "Dog",
            emoji: "\u{1F415}",
            parent: "Animal",
            properties: ["breed"],
            methods: ["fetch()", "speak()"],
          },
          {
            name: "Cat",
            emoji: "\u{1F408}",
            parent: "Animal",
            properties: ["indoor"],
            methods: ["purr()", "speak()"],
          },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Java OOP Toolkit",
      description:
        "These are the Java-specific tools that make the four OOP pillars real in code:",
      steps: [
        {
          icon: "1",
          title: "Access modifiers control visibility",
          explanation:
            "`private`, `public`, `protected`, and package-private decide who can access data and methods. This is a key part of encapsulation.",
          codeSnippet: `class Player {
    private int score;

    public int getScore() {
        return score;
    }
}`,
          language: "java",
        },
        {
          icon: "2",
          title: "Abstract classes and interfaces model abstraction",
          explanation:
            "Use abstract classes when related classes share state or partial behavior. Use interfaces when you want to define a capability.",
          codeSnippet: `abstract class Animal {
    abstract void speak();
}

interface Flyable {
    void fly();
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "extends builds inheritance",
          explanation:
            "A subclass inherits useful behavior from a superclass and can add more of its own.",
          codeSnippet: `class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}`,
          language: "java",
        },
        {
          icon: "4",
          title: "Overriding and overloading are different",
          explanation:
            "Overriding changes inherited behavior at runtime. Overloading uses the same method name with different parameters at compile time.",
          codeSnippet: `void heal(int amount) { }
void heal(int amount, String source) { }`,
          language: "java",
        },
      ],
    },
    {
      type: "puzzle",
      instruction:
        "Arrange this abstraction-and-overriding example in the correct order:",
      codeLines: [
        "abstract class Hero {",
        "    public abstract void attack();",
        "}",
        "class Mage extends Hero {",
        "    @Override",
        "    public void attack() {",
        '        System.out.println("Cast spell");',
        "    }",
        "}",
      ],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      language: "java",
      xpBonus: 15,
    },
    {
      type: "code",
      title: "Constructors, super, and Reuse",
      explanation:
        "Inheritance becomes clearer when you see how child objects are constructed. `super(...)` hands setup work to the parent before the child adds its own details.",
      code: `class Hero {
    String name;

    Hero(String name) {
        this.name = name;
    }
}

class Mage extends Hero {
    Mage() {
        super("Astra");
    }
}`,
      language: "java",
      highlightLines: [2, 4, 9, 10, 11],
    },
    {
      type: "quiz",
      question:
        "Which Java feature is most directly used to hide internal state behind methods?",
      options: ["Inheritance", "Encapsulation", "Garbage collection", "Serialization"],
      correctIndex: 1,
      explanation:
        "Encapsulation keeps data and behavior together and often uses access modifiers plus getter/setter methods to protect internal state.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the OOP concept to the Java tool:",
      pairs: [
        { left: "Abstraction", right: "Abstract classes and interfaces" },
        { left: "Encapsulation", right: "Access modifiers" },
        { left: "Inheritance", right: "extends" },
        { left: "Runtime polymorphism", right: "@Override" },
      ],
      xpBonus: 20,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You now understand the OOP pillars the Java way: hide details, define shared contracts, reuse behavior, and let objects decide how to respond. That is the architectural heart of the kingdom.",
      mood: "celebrating",
    },
  ],
};

export const javaMultithreading: Lesson = {
  id: "java-multithreading",
  trackId: "java-kingdom",
  title: "The Thread Army",
  description:
    "Run multiple tasks at once with threads, synchronization, and concurrency basics.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Imagine building a castle with one worker versus a whole crew. Threads are Java's way of letting several jobs move forward at once, but if those workers grab the same tools carelessly, chaos follows.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Threads = Kitchen Workers",
      analogy:
        "Multithreading is like having multiple chefs in a kitchen, each working on a different dish at the same time.",
      realWorld: "Restaurant Kitchen",
      realWorldEmoji: "\u{1F468}\u{200D}\u{1F373}",
      codeConcept: "Java Threads",
      codeConceptEmoji: "\u{1F9F5}",
      mappings: [
        { real: "The kitchen", code: "Process with shared memory" },
        { real: "Each chef", code: "Thread" },
        { real: "Shared knife and stove", code: "Shared data and resources" },
        { real: "Kitchen rules", code: "Synchronization" },
      ],
      conclusion:
        "Threads let your program do more than one thing at a time, but shared resources require coordination or the kitchen turns into a disaster movie.",
    },
    {
      type: "comic",
      title: "A Thread's Life",
      panels: [
        {
          illustration: "\u{1F423}",
          narration: "NEW",
          character: "pixel",
          dialogue:
            "A thread exists but has not started working yet. It is ready to be launched.",
          mood: "happy",
        },
        {
          illustration: "\u{1F3C3}",
          narration: "RUNNABLE",
          character: "pixel",
          dialogue:
            "The scheduler can now let this thread run. It is in the race.",
          mood: "excited",
        },
        {
          illustration: "\u{1F634}",
          narration: "WAITING or BLOCKED",
          character: "pixel",
          dialogue:
            "Sometimes a thread must pause for a lock, a timer, or another thread to finish first.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F3C1}",
          narration: "TERMINATED",
          character: "pixel",
          dialogue:
            "The work is complete. This thread cannot be restarted once it is done.",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "code",
      title: "Creating Threads",
      explanation:
        "Java lets you create threads by extending `Thread` or by implementing `Runnable`, which is usually the cleaner choice.",
      code: `class DownloadTask implements Runnable {
    private final String fileName;

    DownloadTask(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void run() {
        System.out.println("Downloading " + fileName);
    }
}

Thread first = new Thread(new DownloadTask("map.zip"));
Thread second = new Thread(new DownloadTask("save.bin"));

first.start();
second.start();`,
      language: "java",
      highlightLines: [1, 4, 8, 13, 14, 16],
    },
    {
      type: "interactive-visual",
      title: "Thread Race Simulation",
      description:
        "Watch several threads make progress at the same time and notice how their work overlaps.",
      visualType: "thread-race",
      config: {
        threads: [
          {
            name: "Download Thread",
            color: "#8B5CF6",
            tasks: ["Connect", "Download", "Save"],
          },
          {
            name: "UI Thread",
            color: "#3B82F6",
            tasks: ["Render", "Update", "Animate"],
          },
          {
            name: "Data Thread",
            color: "#10B981",
            tasks: ["Fetch", "Process", "Cache"],
          },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Concurrency Survival Guide",
      description:
        "These are the biggest multithreading ideas every Java developer should understand:",
      steps: [
        {
          icon: "1",
          title: "Race conditions corrupt shared data",
          explanation:
            "If two threads change the same value without coordination, the final answer can be wrong even if both threads look correct in isolation.",
          codeSnippet: `// Thread A reads count = 5
// Thread B reads count = 5
// Thread A writes 6
// Thread B writes 6`,
          language: "java",
        },
        {
          icon: "2",
          title: "synchronized is the safety lock",
          explanation:
            "The `synchronized` keyword lets only one thread enter a protected block or method at a time.",
          codeSnippet: `public synchronized void addScore(int points) {
    this.score += points;
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "Deadlock means everyone waits forever",
          explanation:
            "A deadlock happens when two threads each hold one lock and wait for the other lock forever. Nothing moves until you redesign the locking strategy.",
          codeSnippet: `// Thread A locks map, waits for cache
// Thread B locks cache, waits for map`,
          language: "java",
        },
        {
          icon: "4",
          title: "join and sleep control timing",
          explanation:
            "`join()` waits for another thread to finish. `sleep()` pauses the current thread for a while.",
          codeSnippet: `worker.start();
worker.join();
Thread.sleep(500);`,
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "Protect a Shared Counter",
      explanation:
        "This is the classic concurrency bug and its fix. Multiple threads can safely share the same object only when the critical update is protected.",
      code: `class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}`,
      language: "java",
      highlightLines: [2, 4, 5, 8],
    },
    {
      type: "quiz",
      question:
        "What is the main danger when two threads modify shared data without synchronization?",
      options: [
        "Serialization",
        "Race conditions",
        "Autoboxing",
        "Inheritance loops",
      ],
      correctIndex: 1,
      explanation:
        "Race conditions happen when multiple threads access shared state without proper coordination, causing unpredictable results.",
      xpBonus: 20,
    },
    {
      type: "match",
      instruction: "Match the thread concept to the job:",
      pairs: [
        { left: "Runnable", right: "Defines the work a thread should do" },
        { left: "synchronized", right: "Protects a critical section" },
        { left: "join()", right: "Waits for another thread" },
        { left: "Deadlock", right: "Threads waiting forever on each other" },
      ],
      xpBonus: 20,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You now know how Java runs several jobs at once, why synchronization matters, and how deadlocks can freeze an entire system. That is real concurrency knowledge, not toy magic.",
      mood: "celebrating",
    },
  ],
};

export const javaCollections: Lesson = {
  id: "java-collections",
  trackId: "java-kingdom",
  title: "The Collections Treasury",
  description:
    "Choose the right List, Set, and Map tools for storing and searching data.",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 12,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Welcome to the Collections Treasury. Java gives you specialized containers for different jobs, and choosing the right one is the difference between elegant code and a chaotic junk drawer.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Collections = Storage Types",
      analogy:
        "Java collections are like different storage tools in a workshop. Each one is built for a different kind of access pattern.",
      realWorld: "Workshop Storage",
      realWorldEmoji: "\u{1F9F0}",
      codeConcept: "Java Collections",
      codeConceptEmoji: "\u{1F4DA}",
      mappings: [
        { real: "Numbered shelf", code: "List" },
        { real: "Unique stamp set", code: "Set" },
        { real: "Lookup index", code: "Map" },
        { real: "Labeled containers", code: "Generics like List<String>" },
      ],
      conclusion:
        "Collections are not interchangeable. Pick the one that matches how you add, search, and organize data.",
    },
    {
      type: "comic",
      title: "The Big Three",
      panels: [
        {
          illustration: "\u{1F4CB}",
          narration: "ArrayList",
          character: "pixel",
          dialogue:
            "Use a list when order matters and duplicates are fine. Great for playlists, tasks, and search results.",
          mood: "happy",
        },
        {
          illustration: "\u{1F3AF}",
          narration: "HashSet",
          character: "pixel",
          dialogue:
            "Use a set when uniqueness matters. Perfect for removing duplicates and fast membership checks.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F5FA}\u{FE0F}",
          narration: "HashMap",
          character: "pixel",
          dialogue:
            "Use a map when you want fast lookups by key, like usernames to profiles or words to counts.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "The Treasury in Action",
      explanation:
        "This example creates a list, a set, and a map, each with a job that fits its strengths.",
      code: `import java.util.*;

List<String> quests = new ArrayList<>();
quests.add("Intro");
quests.add("Boss");

Set<String> visited = new HashSet<>();
visited.add("cave");
visited.add("cave");

Map<String, Integer> scores = new HashMap<>();
scores.put("Ada", 95);
scores.put("Mina", 88);

System.out.println(quests.get(0));
System.out.println(visited.size());
System.out.println(scores.get("Ada"));`,
      language: "java",
      highlightLines: [3, 6, 10, 13, 14, 15],
    },
    {
      type: "concept-breakdown",
      title: "When to Use What",
      description:
        "These patterns help you choose the right collection quickly:",
      steps: [
        {
          icon: "1",
          title: "Use List when order matters",
          explanation:
            "Lists keep insertion order and allow indexed access. They are ideal for sequences of items.",
          codeSnippet: `List<String> names = new ArrayList<>();
names.add("Ada");`,
          language: "java",
        },
        {
          icon: "2",
          title: "Use Set when uniqueness matters",
          explanation:
            "Sets ignore duplicates and make membership checks convenient.",
          codeSnippet: `Set<String> tags = new HashSet<>();
tags.add("java");`,
          language: "java",
        },
        {
          icon: "3",
          title: "Use Map for key-value lookups",
          explanation:
            "Maps are built for finding a value by its key instead of by position.",
          codeSnippet: `Map<String, Integer> scores = new HashMap<>();
scores.put("Ada", 95);`,
          language: "java",
        },
        {
          icon: "4",
          title: "Use generics with collections",
          explanation:
            "Collections are safest when you give them a type like `List<String>` instead of leaving them raw.",
          codeSnippet: `List<String> heroes = new ArrayList<>();`,
          language: "java",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Collection Families Beyond the Big Three",
      description:
        "ArrayList, HashSet, and HashMap are only the starting point. These nearby variants matter when order or sorting enters the picture:",
      steps: [
        {
          icon: "1",
          title: "ArrayList is the usual default List",
          explanation:
            "Use ArrayList when you want fast indexed reads and append-heavy behavior. It is the list most beginners should reach for first.",
          codeSnippet: `List<String> quests = new ArrayList<>();`,
          language: "java",
        },
        {
          icon: "2",
          title: "LinkedHashSet remembers insertion order",
          explanation:
            "A normal HashSet keeps uniqueness but not display order. LinkedHashSet keeps both uniqueness and the order items were added.",
          codeSnippet: `Set<String> tags = new LinkedHashSet<>();`,
          language: "java",
        },
        {
          icon: "3",
          title: "TreeSet and TreeMap keep data sorted",
          explanation:
            "When you need automatic sorting, the tree-based collections keep items ordered as they are inserted.",
          codeSnippet: `Set<Integer> scores = new TreeSet<>();`,
          language: "java",
        },
        {
          icon: "4",
          title: "HashMap stores by key, not by position",
          explanation:
            "With maps, you ask for a value by key instead of by index. That is why they are great for counts, settings, and profile lookups.",
          codeSnippet: `Map<String, Integer> counts = new HashMap<>();`,
          language: "java",
        },
      ],
    },
    {
      type: "quiz",
      question:
        "Which collection is best when you need to count how many times each word appears?",
      options: ["ArrayList", "HashSet", "HashMap", "StringBuilder"],
      correctIndex: 2,
      explanation:
        "A HashMap is ideal because the word becomes the key and the count becomes the value.",
      xpBonus: 20,
    },
    {
      type: "match",
      instruction: "Match the use case to the best collection:",
      pairs: [
        { left: "Ordered shopping list", right: "ArrayList" },
        { left: "Remove duplicates", right: "HashSet" },
        { left: "Score by player name", right: "HashMap" },
        { left: "Track visited pages", right: "HashSet" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You have raided the treasury successfully. Lists, sets, and maps will appear in almost every real Java codebase you touch.",
      mood: "celebrating",
    },
  ],
};
