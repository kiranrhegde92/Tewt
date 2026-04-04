import { Lesson } from "@/types";

export const javaBasics: Lesson = {
  id: "java-basics",
  trackId: "java-kingdom",
  title: "Java Fundamentals & Environment",
  description:
    "Meet the JDK, JRE, JVM, bytecode, WORA, and the basic structure of a Java program.",
  xpReward: 150,
  difficulty: "beginner",
  estimatedMinutes: 13,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Welcome to the front gate of Java Kingdom. Before you build giant apps, you need to understand the machine room: the JDK helps you build, the JRE helps you run, and the JVM is the engine that executes Java bytecode.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Three Java Gates",
      panels: [
        {
          illustration: "\u{1F9F0}",
          narration: "JDK",
          character: "pixel",
          dialogue:
            "The JDK is the developer toolkit. It includes the compiler and other tools needed to create Java programs.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4E6}",
          narration: "JRE",
          character: "pixel",
          dialogue:
            "The JRE is the runtime bundle. It provides the libraries needed to run Java programs after they are built.",
          mood: "happy",
        },
        {
          illustration: "\u{2699}\u{FE0F}",
          narration: "JVM",
          character: "pixel",
          dialogue:
            "The JVM executes Java bytecode. It is the engine that makes Java portable across different machines.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "WORA = One Script, Many Stages",
      analogy:
        "Java is like a theater script written once, then performed by different local casts on different stages.",
      realWorld: "Traveling Theater",
      realWorldEmoji: "\u{1F3AD}",
      codeConcept: "Write Once, Run Anywhere",
      codeConceptEmoji: "\u{2615}",
      mappings: [
        { real: "One script", code: "Java source code" },
        { real: "Director converts it to cues", code: "Compiler creates bytecode" },
        { real: "Different local casts", code: "Platform-specific JVMs" },
        { real: "Same story everywhere", code: "Same bytecode on many operating systems" },
      ],
      conclusion:
        "Java's portability comes from compiling source into platform-neutral bytecode that any compatible JVM can execute.",
    },
    {
      type: "code",
      title: "The Shape of a Java Program",
      explanation:
        "A Java program usually lives in a class. Execution begins in `main`, curly braces define blocks, and semicolons end statements.",
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java is awake!");
        int level = 1;
        System.out.println("Level: " + level);
    }
}`,
      language: "java",
      highlightLines: [1, 2, 3, 4],
    },
    {
      type: "concept-breakdown",
      title: "The Launch Checklist",
      description:
        "These are the fundamentals every Java learner should understand before moving into logic and objects:",
      steps: [
        {
          icon: "1",
          title: "The JDK is for developers",
          explanation:
            "The JDK includes tools like `javac` for compiling source code and everything needed to build Java applications.",
          codeSnippet: `javac Main.java
java Main`,
          language: "java",
        },
        {
          icon: "2",
          title: "The JRE is for running programs",
          explanation:
            "The JRE provides the runtime libraries and environment required to run compiled Java programs.",
        },
        {
          icon: "3",
          title: "The JVM executes bytecode",
          explanation:
            "The JVM is the engine that runs `.class` files. Different platforms have different JVM implementations, but they all understand Java bytecode.",
          codeSnippet: `Main.java -> Main.class -> JVM executes bytecode`,
          language: "java",
        },
        {
          icon: "4",
          title: "Basic syntax is strict on purpose",
          explanation:
            "Java asks for clear structure: classes, methods, braces, and semicolons. That strictness helps the compiler catch mistakes early.",
          codeSnippet: `if (ready) {
    System.out.println("Go!");
}`,
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "From Source File to Running Program",
      explanation:
        "This is the real Java journey: you write source code, compile it into bytecode, then launch it on a JVM that calls `main`.",
      code: `Main.java
   |
   | javac Main.java
   v
Main.class
   |
   | java Main
   v
JVM loads the class and runs main(String[] args)`,
      language: "java",
    },
    {
      type: "quiz",
      question: "Which part of Java actually executes bytecode?",
      options: ["JDK", "JRE", "JVM", "JAR"],
      correctIndex: 2,
      explanation:
        "The JVM is the execution engine. The JDK is for development, the JRE provides the runtime environment, and the JVM runs the bytecode.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each Java foundation to the job it handles:",
      pairs: [
        {
          left: "JDK",
          right: "Developer toolkit with compiler and build tools",
        },
        {
          left: "JRE",
          right: "Runtime libraries needed to run Java programs",
        },
        {
          left: "JVM",
          right: "Engine that executes Java bytecode",
        },
        {
          left: "Bytecode",
          right: "Platform-neutral output produced after compilation",
        },
        {
          left: "WORA",
          right: "Run the same compiled program on many systems",
        },
      ],
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Put the Java program skeleton in the correct order:",
      codeLines: [
        "public class Main {",
        "    public static void main(String[] args) {",
        '        System.out.println("Hello, Java!");',
        "    }",
        "}",
      ],
      correctOrder: [0, 1, 2, 3, 4],
      language: "java",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You now know how Java is built, how it runs, and why it travels so well. Next you will step into the data lab and start working with types, scope, and operators.",
      mood: "celebrating",
    },
  ],
};

export const javaControlFlow: Lesson = {
  id: "java-control-flow",
  trackId: "java-kingdom",
  title: "The Fork in the Road",
  description:
    "Use if, else, switch, and loops to steer your program through decisions.",
  xpReward: 155,
  difficulty: "beginner",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Programs become interesting when they can react. Control flow is how Java decides what to do next: choose a path, repeat a task, or stop when the job is done.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "Decision Dungeon",
      panels: [
        {
          illustration: "\u{1F6AA}",
          narration: "if",
          character: "pixel",
          dialogue:
            "If the door is locked, use the key. Otherwise walk right in. Java checks the condition and follows the first matching path.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F9ED}",
          narration: "else if",
          character: "pixel",
          dialogue:
            "If there are multiple outcomes, Java keeps checking options until one fits. It is like following signs at a crossroads.",
          mood: "happy",
        },
        {
          illustration: "\u{1F501}",
          narration: "loops",
          character: "pixel",
          dialogue:
            "When a task repeats, Java can loop it instead of making you write the same code ten times.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "If, Switch, and For",
      explanation:
        "These are the three control-flow tools you will use constantly: conditions, branches, and repetition.",
      code: `public class Main {
    public static void main(String[] args) {
        int score = 82;
        String grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else {
            grade = "C";
        }

        for (int i = 1; i <= 3; i++) {
            System.out.println("Round " + i + ": " + grade);
        }

        switch (grade) {
            case "A":
                System.out.println("Champion!");
                break;
            case "B":
                System.out.println("Solid run!");
                break;
            default:
                System.out.println("Keep training!");
        }
    }
}`,
      language: "java",
      highlightLines: [5, 6, 8, 12, 16, 17, 20],
    },
    {
      type: "interactive-visual",
      title: "Call Stack Replay",
      description:
        "Watch how repeated calls and branches build up on the stack before returning.",
      visualType: "call-stack",
      config: {
        frames: ["main()", "gradeScore()", "printResult()", "return"],
      },
    },
    {
      type: "concept-breakdown",
      title: "Control Flow Rules",
      description:
        "Keep these patterns in mind when writing decisions and loops:",
      steps: [
        {
          icon: "1",
          title: "if chooses one path",
          explanation:
            "Use if when you need a condition to decide whether code should run.",
          codeSnippet: `if (health > 0) {
    System.out.println("Keep going!");
}`,
          language: "java",
        },
        {
          icon: "2",
          title: "for repeats a known number of times",
          explanation:
            "Use for when you know exactly how many times you want the loop to run.",
          codeSnippet: `for (int i = 0; i < 3; i++) {
    System.out.println("Wave " + i);
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "while repeats until a condition changes",
          explanation:
            "Use while when you want to keep going until something becomes false.",
          codeSnippet: `while (energy > 0) {
    energy--;
}`,
          language: "java",
        },
        {
          icon: "4",
          title: "for-each is great for collections",
          explanation:
            "Use the enhanced for loop when you want to visit every item without managing indexes yourself.",
          codeSnippet: `for (String hero : heroes) {
    System.out.println(hero);
}`,
          language: "java",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the control-flow tool to the job:",
      pairs: [
        { left: "if / else", right: "Choose one path based on a condition" },
        { left: "for", right: "Repeat a fixed number of times" },
        { left: "while", right: "Keep looping until a condition changes" },
        { left: "switch", right: "Pick from several named cases" },
      ],
      xpBonus: 15,
    },
    {
      type: "code",
      title: "While, Do-While, Break, and Continue",
      explanation:
        "Java has more than one loop style. `while` checks first, `do-while` runs at least once, `break` exits early, and `continue` skips to the next round.",
      code: `int energy = 3;
while (energy > 0) {
    energy--;
}

int tries = 0;
do {
    tries++;
} while (tries < 1);

for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    if (i == 5) break;
    System.out.println(i);
}`,
      language: "java",
      highlightLines: [2, 7, 9, 10, 11],
    },
    {
      type: "quiz",
      question:
        "Which loop is best when you already know the number of repetitions?",
      options: ["if", "for", "switch", "try"],
      correctIndex: 1,
      explanation:
        "The for loop is ideal when the number of repeats is known ahead of time, like 10 turns or 3 attempts.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Great. Your Java knight can now choose paths and repeat work. That means you can build logic that reacts to the world instead of only printing static messages.",
      mood: "celebrating",
    },
  ],
};

export const javaMethods: Lesson = {
  id: "java-methods",
  trackId: "java-kingdom",
  title: "Spellbook of Methods",
  description: "Write methods that do work, take inputs, and return results.",
  xpReward: 165,
  difficulty: "beginner",
  estimatedMinutes: 12,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Methods are Java's reusable spells. You write a method once, then call it whenever you need that behavior. Clean, tidy, and much less copy-paste chaos.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Methods = Kitchen Recipes",
      analogy:
        "A method is like a recipe: ingredients go in, a result comes out, and anyone can use it again later.",
      realWorld: "Recipe Card",
      realWorldEmoji: "\u{1F9FE}",
      codeConcept: "Java Method",
      codeConceptEmoji: "\u{2615}",
      mappings: [
        { real: "Recipe name", code: "method name" },
        { real: "Ingredients list", code: "parameters" },
        { real: "Cooking steps", code: "method body" },
        { real: "Finished dish", code: "return value" },
      ],
      conclusion:
        "Good methods are small, focused, and named after what they do. That makes code easier to test and reuse.",
    },
    {
      type: "code",
      title: "Define and Call Methods",
      explanation:
        "Methods can take parameters, return values, or simply perform an action with `void`.",
      code: `public class Main {
    static int addPoints(int current, int bonus) {
        return current + bonus;
    }

    static void cheer(String name) {
        System.out.println("Go, " + name + "!");
    }

    public static void main(String[] args) {
        int xp = addPoints(120, 30);
        cheer("Mina");
        System.out.println("XP: " + xp);
    }
}`,
      language: "java",
      highlightLines: [2, 3, 6, 10, 11],
    },
    {
      type: "interactive-visual",
      title: "Call Stack Relay",
      description:
        "See how a method call pushes onto the stack and returns when finished.",
      visualType: "call-stack",
      config: {
        frames: ["main()", "addPoints(120, 30)", "return 150", "cheer(\"Mina\")"],
      },
    },
    {
      type: "concept-breakdown",
      title: "Method Rules",
      description: "These patterns cover the most common beginner method mistakes:",
      steps: [
        {
          icon: "1",
          title: "A method has a name, inputs, and optional output",
          explanation:
            "Inputs are parameters. Outputs are return values. Void methods return nothing.",
          codeSnippet: `static int scoreBonus(int base, int bonus) {
    return base + bonus;
}`,
          language: "java",
        },
        {
          icon: "2",
          title: "return ends the method",
          explanation:
            "When Java hits return, the method immediately ends and sends the value back.",
          codeSnippet: `static String shout(String text) {
    return text.toUpperCase();
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "Overloading means same name, different inputs",
          explanation:
            "You can have multiple methods with the same name if their parameter lists differ. That is compile-time polymorphism.",
          codeSnippet: `static int score(int points) { return points; }
static int score(int points, int bonus) { return points + bonus; }`,
          language: "java",
        },
        {
          icon: "4",
          title: "Keep methods small",
          explanation:
            "If a method does too many things, split it into smaller methods with clear responsibilities.",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "How Arguments Really Travel",
      description:
        "A lot of Java confusion comes from how values move into methods. These rules keep it straight:",
      steps: [
        {
          icon: "1",
          title: "Parameters are local variables",
          explanation:
            "A method parameter is just a local variable created when the method starts. It lives only inside that call.",
          codeSnippet: `static void cheer(String name) {
    System.out.println(name);
}`,
          language: "java",
        },
        {
          icon: "2",
          title: "Java passes primitives by value",
          explanation:
            "If you pass an int, Java copies the number. Changing the parameter does not change the original variable outside the method.",
          codeSnippet: `static void boost(int xp) {
    xp++;
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "Java also copies object references",
          explanation:
            "When you pass an object, Java copies the reference. The method can mutate the same object, but it cannot swap the caller to a different object by reassigning the parameter.",
          codeSnippet: `static void rename(Player p) {
    p.name = "Ada";
}`,
          language: "java",
        },
      ],
    },
    {
      type: "typeracer",
      instruction: "Type this method signature quickly and accurately.",
      code: "static int addPoints(int current, int bonus) {",
      language: "java",
      targetWPM: 18,
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What does a void method do?",
      options: [
        "It returns an int",
        "It returns nothing",
        "It cannot have parameters",
        "It must always print text",
      ],
      correctIndex: 1,
      explanation:
        "void means the method performs an action but does not return a value.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "You now know how to pack behavior into methods. That is a huge upgrade: your code becomes reusable, readable, and much less repetitive.",
      mood: "celebrating",
    },
  ],
};

export const javaExceptions: Lesson = {
  id: "java-exceptions",
  trackId: "java-kingdom",
  title: "Bug Dragon Defense",
  description:
    "Catch, handle, throw, and declare exceptions before they crash the kingdom.",
  xpReward: 175,
  difficulty: "intermediate",
  estimatedMinutes: 13,
  steps: [
    {
      type: "story",
      character: "bug",
      dialogue:
        "I am the Bug Dragon, and I love crashing programs. But Java has shields called exceptions. If you learn them, your app can fail gracefully instead of exploding in public.",
      mood: "confused",
    },
    {
      type: "comic",
      title: "The Exception Shield",
      panels: [
        {
          illustration: "\u{1F4A5}",
          narration: "Problem",
          character: "bug",
          dialogue:
            "Something unexpected happens, like dividing by zero or opening a file that does not exist.",
          mood: "confused",
        },
        {
          illustration: "\u{1F6E1}\u{FE0F}",
          narration: "catch it",
          character: "pixel",
          dialogue:
            "Java can catch the problem and recover instead of crashing the whole program.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F501}",
          narration: "finally",
          character: "pixel",
          dialogue:
            "Cleanup still runs even if an error happens. That is perfect for closing files or releasing resources.",
          mood: "happy",
        },
      ],
    },
    {
      type: "code",
      title: "Try, Catch, Finally, and Throws",
      explanation:
        "Use try for risky code, catch for handling errors, finally for cleanup, and throws to declare exceptions a method might pass upward.",
      code: `import java.io.IOException;

public class Main {
    static void loadFile() throws IOException {
        throw new IOException("Missing file");
    }

    public static void main(String[] args) {
        try {
            loadFile();
        } catch (IOException e) {
            System.out.println("Recovered: " + e.getMessage());
        } finally {
            System.out.println("Cleanup complete.");
        }
    }
}`,
      language: "java",
      highlightLines: [3, 4, 8, 10, 12],
    },
    {
      type: "concept-breakdown",
      title: "Exception Survival Guide",
      description:
        "These are the core exception tools and categories every Java developer should know:",
      steps: [
        {
          icon: "1",
          title: "try wraps risky code",
          explanation:
            "Put code that might fail inside a try block so Java can jump to a handler if needed.",
          codeSnippet: `try {
    int value = Integer.parseInt(input);
}`,
          language: "java",
        },
        {
          icon: "2",
          title: "catch handles the problem",
          explanation:
            "catch gives you a place to recover, show a message, or use a fallback.",
          codeSnippet: `catch (NumberFormatException e) {
    System.out.println("Please enter a number.");
}`,
          language: "java",
        },
        {
          icon: "3",
          title: "throw and throws are different",
          explanation:
            "`throw` creates an exception right now. `throws` declares that a method may pass an exception to its caller.",
          codeSnippet: `if (age < 0) {
    throw new IllegalArgumentException("Age cannot be negative");
}

void load() throws IOException { }`,
          language: "java",
        },
        {
          icon: "4",
          title: "Checked vs unchecked exceptions",
          explanation:
            "Checked exceptions must be handled or declared, like IOException. Unchecked exceptions are runtime problems such as NullPointerException or IllegalArgumentException.",
        },
        {
          icon: "5",
          title: "finally is for cleanup",
          explanation:
            "Use finally when something must happen even if the try block fails.",
        },
      ],
    },
    {
      type: "interactive-visual",
      title: "Call Stack Rescue",
      description:
        "Watch the stack rise, fail, and recover when an exception is caught.",
      visualType: "call-stack",
      config: {
        frames: ["main()", "loadFile()", "throw IOException", "catch(IOException)"],
      },
    },
    {
      type: "match",
      instruction: "Match each exception tool to the situation:",
      pairs: [
        { left: "try", right: "Run code that might fail" },
        { left: "catch", right: "Handle the error" },
        { left: "finally", right: "Always run cleanup" },
        { left: "throws", right: "Declare an exception for callers" },
      ],
      xpBonus: 15,
    },
    {
      type: "code",
      title: "One Try Block, Multiple Outcomes",
      explanation:
        "Real programs often fail in different ways. Multiple catch blocks let Java handle each problem differently, while `throw` lets you create your own failures with intent.",
      code: `public class Main {
    static int parseLevel(String text) {
        if (text.isBlank()) {
            throw new IllegalArgumentException("Level is missing");
        }
        return Integer.parseInt(text);
    }

    public static void main(String[] args) {
        try {
            int level = parseLevel("7");
            System.out.println(level);
        } catch (NumberFormatException e) {
            System.out.println("Use digits only.");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
      language: "java",
      highlightLines: [3, 4, 11, 13, 15],
    },
    {
      type: "quiz",
      question: "Which exception category must be handled or declared?",
      options: [
        "Checked exceptions",
        "Unchecked exceptions",
        "Logical operators",
        "Wrapper classes",
      ],
      correctIndex: 0,
      explanation:
        "Checked exceptions like IOException must be caught or declared with throws.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Excellent. You can now survive bad input, declare risky operations, and keep the kingdom running even when the Bug Dragon strikes.",
      mood: "celebrating",
    },
  ],
};
