import { Lesson } from "@/types";

export const javaDataLab: Lesson = {
  id: "java-data-lab",
  trackId: "java-kingdom",
  title: "Types, Scope, and Operators Lab",
  description:
    "Master primitive vs reference types, variable scope, and the operator families Java uses to calculate and decide.",
  xpReward: 170,
  difficulty: "beginner",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Welcome to the Data Lab. This is where Java stops being a tourist brochure and becomes a real language. You will learn what kinds of values Java can store, where variables live, and how operators turn raw data into decisions.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Three Data Rooms",
      panels: [
        {
          illustration: "\u{1F522}",
          narration: "Primitive Types",
          character: "pixel",
          dialogue:
            "Primitive types like int, double, boolean, and char store direct values. Small, simple, and fast.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4E6}",
          narration: "Reference Types",
          character: "pixel",
          dialogue:
            "Reference types point to objects like String, arrays, and your own classes. They are how Java handles richer structures.",
          mood: "happy",
        },
        {
          illustration: "\u{1F9ED}",
          narration: "Scope",
          character: "pixel",
          dialogue:
            "Scope decides who can see a variable. Some values live inside methods, some belong to objects, and some belong to the whole class.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Variables = Labeled Storage Drawers",
      analogy:
        "Java variables are like labeled storage drawers: each drawer has a shape, a label, and a rule about who is allowed to open it.",
      realWorld: "Storage Cabinet",
      realWorldEmoji: "\u{1F5C3}\u{FE0F}",
      codeConcept: "Java Variables and Scope",
      codeConceptEmoji: "\u{2615}",
      mappings: [
        { real: "Small numbered drawer", code: "Primitive variable like int" },
        { real: "Drawer holding a map to an object", code: "Reference variable like String" },
        { real: "Drawer in one room only", code: "Local variable inside a method" },
        { real: "Drawer bolted to the whole building", code: "Static variable on the class" },
      ],
      conclusion:
        "Java asks you to be clear about what a value is and where it belongs. That clarity is why Java code stays readable at scale.",
    },
    {
      type: "code",
      title: "A Small Java Program",
      explanation:
        "This example shows primitive types, a reference type, operators, and how a static field differs from a local variable.",
      code: `public class Main {
    static int guildCount = 1;

    public static void main(String[] args) {
        int level = 3;
        double xp = 142.5;
        boolean unlocked = true;
        String hero = "Ada";

        int bonus = level * 10;
        String title = unlocked ? "Knight" : "Visitor";

        if (unlocked && level >= 3) {
            System.out.println(hero + " the " + title + " earned " + (bonus + 5));
        }
    }
}`,
      language: "java",
      highlightLines: [2, 5, 6, 8, 9, 11],
    },
    {
      type: "interactive-visual",
      title: "Memory Boxes",
      description:
        "See how primitive values and flags sit in labeled boxes while the program decides what to do next.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "level", value: "3", type: "number" },
          { name: "xp", value: "142.5", type: "number" },
          { name: "unlocked", value: "true", type: "boolean" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Language Basics Checklist",
      description: "These are the core building blocks Java uses for day-to-day coding:",
      steps: [
        {
          icon: "1",
          title: "Data types come first",
          explanation:
            "Primitive types such as int, boolean, char, and double store direct values. Reference types like String, arrays, and classes point to objects.",
          codeSnippet:
            "int score = 10;\nboolean ready = true;\nString name = \"Ada\";\nint[] values = {1, 2, 3};",
          language: "java",
        },
        {
          icon: "2",
          title: "Scope decides who can see a variable",
          explanation:
            "Local variables live inside a method, instance variables belong to an object, and static variables belong to the class itself.",
          codeSnippet:
            "class Mage {\n    static int guildCount = 1;\n    int mana = 50;\n\n    void cast() {\n        int cost = 10;\n    }\n}",
          language: "java",
        },
        {
          icon: "3",
          title: "Operators are tiny machines",
          explanation:
            "Arithmetic, relational, logical, bitwise, and ternary operators let Java calculate, compare, and branch cleanly.",
          codeSnippet:
            "int total = coins + bonus;\nboolean canPlay = level >= 5 && unlocked;\nString badge = canPlay ? \"Hero\" : \"Guest\";",
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "Local vs Instance vs Static in a Real Class",
      explanation:
        "This example puts all three scopes in one place so you can see what belongs to a method call, what belongs to each object, and what belongs to the whole class.",
      code: `class Mage {
    static int guildCount = 1;
    int mana = 50;

    void castSpell() {
        int cost = 10;
        mana -= cost;
        System.out.println("Guilds: " + guildCount);
    }
}`,
      language: "java",
      highlightLines: [2, 3, 5, 6, 7],
    },
    {
      type: "quiz",
      question: "Which variable belongs to the class itself instead of a specific object or method?",
      options: [
        "A local variable",
        "An instance variable",
        "A static variable",
        "A parameter",
      ],
      correctIndex: 2,
      explanation:
        "A static variable belongs to the class itself and is shared across all objects of that class.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each Java basic to the role it plays:",
      pairs: [
        { left: "int", right: "Primitive type for whole numbers" },
        { left: "String", right: "Reference type used for text" },
        { left: "local variable", right: "Lives only inside a method" },
        { left: "static variable", right: "Shared by the class itself" },
        { left: "?:", right: "Ternary operator for quick choices" },
      ],
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Build this tiny variable-and-operator demo in the correct order:",
      codeLines: [
        "int level = 3;",
        "boolean unlocked = true;",
        "int bonus = level * 10;",
        'String title = unlocked ? "Knight" : "Visitor";',
      ],
      correctOrder: [0, 1, 2, 3],
      language: "java",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Excellent. You can now tell primitives from references, local from static, and arithmetic from logical operators. That is enough power to write real code without guessing what Java is doing.",
      mood: "celebrating",
    },
  ],
};

export const javaMemoryCore: Lesson = {
  id: "java-memory-core",
  trackId: "java-kingdom",
  title: "Memory Core",
  description:
    "Explore stack vs heap, garbage collection, Strings, wrappers, and the autoboxing trick.",
  xpReward: 185,
  difficulty: "intermediate",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Welcome to the Memory Core. The stack is fast and temporary, the heap holds objects, and the garbage collector is the kingdom's cleanup crew.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Stack vs Heap = Desk vs Warehouse",
      analogy:
        "The stack is like a small desk with quick notes, while the heap is a giant warehouse where objects live longer.",
      realWorld: "Desk and Warehouse",
      realWorldEmoji: "\u{1F4CB}",
      codeConcept: "Stack and Heap Memory",
      codeConceptEmoji: "\u{1F9F0}",
      mappings: [
        { real: "Quick sticky notes", code: "Method calls and local variables on the stack" },
        { real: "Storage bins in a warehouse", code: "Objects and instance fields on the heap" },
        { real: "Desk gets cleared after work", code: "Stack frame disappears when a method returns" },
        { real: "Old boxes are recycled", code: "Garbage collector removes unreachable heap objects" },
      ],
      conclusion:
        "Stack memory is temporary and fast. Heap memory is where objects stay until nothing can reach them anymore.",
    },
    {
      type: "comic",
      title: "Strings and the Cleanup Crew",
      panels: [
        {
          illustration: "\u{1F4DC}",
          narration: "String",
          character: "pixel",
          dialogue:
            "String is immutable. Once created, it cannot be changed. Any 'modification' creates a new String object.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4A1}",
          narration: "StringBuilder",
          character: "pixel",
          dialogue:
            "StringBuilder is the speedy workshop tool. It changes in place and is great when you build text many times.",
          mood: "happy",
        },
        {
          illustration: "\u{1F512}",
          narration: "StringBuffer",
          character: "pixel",
          dialogue:
            "StringBuffer is like StringBuilder with a safety lock. It is synchronized, so it is safer in multi-threaded situations.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "Memory in Motion",
      explanation:
        "This example shows stack-local variables, heap objects, string concatenation, and wrapper conversion.",
      code: `public class MemoryDemo {
    static int totalCount = 0;

    public static void main(String[] args) {
        String name = "Ada";
        StringBuilder builder = new StringBuilder(name);
        builder.append(" Lovelace");

        Integer boxed = 42; // autoboxing
        int unboxed = boxed; // unboxing

        totalCount++;
        System.out.println(builder.toString() + " -> " + unboxed);
    }
}`,
      language: "java",
      highlightLines: [2, 5, 6, 8, 9, 11],
    },
    {
      type: "interactive-visual",
      title: "Heap Shelves",
      description:
        "Watch how values sit in small labels while objects are stored elsewhere in the heap.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "name", value: '"Ada"', type: "string" },
          { name: "boxed", value: "42", type: "number" },
          { name: "totalCount", value: "1", type: "number" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Core Memory Rules",
      description: "These rules keep Java memory predictable:",
      steps: [
        {
          icon: "1",
          title: "Stack = method frames and locals",
          explanation:
            "Each method call gets a stack frame. Local variables disappear when the method ends.",
          codeSnippet:
            "void greet() {\n    int count = 3; // local, stack-bound\n}",
          language: "java",
        },
        {
          icon: "2",
          title: "Heap = objects and instance data",
          explanation:
            "Objects created with new live on the heap. They remain there until garbage collection reclaims them.",
          codeSnippet:
            "Person p = new Person(); // object on heap\np.name = \"Ada\";",
          language: "java",
        },
        {
          icon: "3",
          title: "GC = the cleanup fairy",
          explanation:
            "Garbage collection automatically frees heap memory for unreachable objects. You do not manually destroy objects in normal Java code.",
        },
        {
          icon: "4",
          title: "Wrappers unlock autoboxing",
          explanation:
            "Integer, Double, and other wrapper classes turn primitives into objects when needed, and Java can box/unbox them automatically.",
          codeSnippet:
            "List<Integer> scores = new ArrayList<>();\nscores.add(10); // autoboxing\nint first = scores.get(0); // unboxing",
          language: "java",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match each core class to its job:",
      pairs: [
        { left: "String", right: "Immutable text" },
        { left: "StringBuilder", right: "Fast mutable text building" },
        { left: "StringBuffer", right: "Mutable text with synchronization" },
        { left: "Integer", right: "Wrapper for int" },
      ],
      xpBonus: 15,
    },
    {
      type: "concept-breakdown",
      title: "String Pool and Wrapper Pitfalls",
      description:
        "These are the sharp edges beginners run into after learning the basic stack-vs-heap story:",
      steps: [
        {
          icon: "1",
          title: "String literals may share pooled objects",
          explanation:
            "Java stores many string literals in a shared pool. That saves memory, but it also means reference identity can surprise you.",
          codeSnippet: `String a = "java";
String b = "java";`,
          language: "java",
        },
        {
          icon: "2",
          title: "Use equals for text content",
          explanation:
            "`==` compares whether two references point to the same object. `.equals()` compares whether the text itself matches.",
          codeSnippet: `"java".equals(userInput)`,
          language: "java",
        },
        {
          icon: "3",
          title: "Unboxing null can explode",
          explanation:
            "Wrapper classes can hold `null`. If Java tries to unbox `Integer score = null;` into an `int`, it throws a NullPointerException.",
          codeSnippet: `Integer score = null;
int value = score; // boom`,
          language: "java",
        },
      ],
    },
    {
      type: "quiz",
      question: "Which statement about String in Java is true?",
      options: [
        "It is mutable by default",
        "It can be changed in place",
        "It is immutable",
        "It only exists on the stack",
      ],
      correctIndex: 2,
      explanation:
        "String objects are immutable. Any change produces a new String rather than modifying the old one.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Great. You now know where Java keeps things, how it cleans up, and why StringBuilder exists. Next comes a powerful trick: teaching Java to keep types safe without losing flexibility.",
      mood: "celebrating",
    },
  ],
};

export const javaGenerics: Lesson = {
  id: "java-generics",
  trackId: "java-kingdom",
  title: "The Type-Safe Forge",
  description:
    "Forge reusable classes and collections with generics and compile-time safety.",
  xpReward: 170,
  difficulty: "intermediate",
  estimatedMinutes: 12,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Generics let Java stamp a type label onto a class or method. That means one piece of code can work for many types without giving up safety.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Generics = Custom Labels",
      analogy:
        "A generic class is like a box factory that can print the right label on every box before it leaves the shop.",
      realWorld: "Label Printer",
      realWorldEmoji: "\u{1F4CB}",
      codeConcept: "Java Generics",
      codeConceptEmoji: "\u{1F527}",
      mappings: [
        { real: "Blank box", code: "Box<T>" },
        { real: "Label says books", code: "Box<String>" },
        { real: "Label says numbers", code: "Box<Integer>" },
        { real: "Wrong item rejected at the counter", code: "Compile-time type safety" },
      ],
      conclusion:
        "Generics reduce casting, improve reuse, and catch type mistakes before the program ever runs.",
    },
    {
      type: "code",
      title: "A Generic Box",
      explanation:
        "A generic class or method uses a type parameter like T. The compiler replaces T with the actual type when you use it.",
      code: `class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

Box<String> nameBox = new Box<>();
nameBox.set("Ada");
String name = nameBox.get();`,
      language: "java",
      highlightLines: [1, 2, 4, 8, 12, 14],
    },
    {
      type: "interactive-visual",
      title: "Type Labels",
      description:
        "See how a labeled container keeps the right kind of value inside it.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "nameBox", value: '"Ada"', type: "string" },
          { name: "scoreBox", value: "99", type: "number" },
          { name: "typeLabel", value: "String", type: "string" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Generics Rules",
      description: "These are the patterns that make generics useful:",
      steps: [
        {
          icon: "1",
          title: "T is a type placeholder",
          explanation:
            "Type parameters like T, E, K, and V stand in for real types until the class or method is used.",
          codeSnippet:
            "class Pair<K, V> {\n    private K key;\n    private V value;\n}",
          language: "java",
        },
        {
          icon: "2",
          title: "Type safety happens at compile time",
          explanation:
            "The compiler checks whether you passed the right type before your code runs. That avoids many runtime surprises.",
          codeSnippet:
            "List<String> names = new ArrayList<>();\nnames.add(\"Ada\");\n// names.add(42); // compile error",
          language: "java",
        },
        {
          icon: "3",
          title: "Wildcards let you read flexibly",
          explanation:
            "Use ? when you want to accept multiple related types, especially for read-only operations.",
          codeSnippet:
            "void printAll(List<?> items) {\n    for (Object item : items) {\n        System.out.println(item);\n    }\n}",
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "Bounded Generics in Action",
      explanation:
        "Bounded wildcards let you accept a whole family of related types while keeping the compiler on guard.",
      code: `static double sum(List<? extends Number> values) {
    double total = 0;

    for (Number value : values) {
        total += value.doubleValue();
    }

    return total;
}`,
      language: "java",
      highlightLines: [1, 4, 5, 8],
    },
    {
      type: "typeracer",
      instruction: "Type the generic list declaration quickly.",
      code: "List<String> names = new ArrayList<>();",
      language: "java",
      targetWPM: 18,
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the generic symbol to its common meaning:",
      pairs: [
        { left: "T", right: "Type parameter" },
        { left: "E", right: "Element" },
        { left: "K", right: "Key" },
        { left: "V", right: "Value" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why use generics with collections?",
      options: [
        "To make code slower on purpose",
        "To get compile-time type safety and avoid casts",
        "To remove the need for classes",
        "To force everything to be a String",
      ],
      correctIndex: 1,
      explanation:
        "Generics make collections type-safe at compile time and reduce the need for casts when reading values.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Now your code can be flexible without becoming sloppy. Next, we store and reload real data, then finish with the modern Java toolkit that makes code concise and expressive.",
      mood: "celebrating",
    },
  ],
};

export const javaFileIO: Lesson = {
  id: "java-file-io",
  trackId: "java-kingdom",
  title: "The Archive Vault",
  description:
    "Read, write, and serialize data safely with Java I/O and object streams.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "A real program does not live in memory alone. Sometimes it must read a file, save progress, or archive an object for later. That is where Java I/O comes in.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The File Relay",
      panels: [
        {
          illustration: "\u{1F4C4}",
          narration: "Read",
          character: "captain",
          dialogue:
            "The program opens a file and reads bytes or text from it, line by line or chunk by chunk.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4BE}",
          narration: "Write",
          character: "captain",
          dialogue:
            "The program writes text, bytes, or objects back out to disk so the data survives after the app closes.",
          mood: "happy",
        },
        {
          illustration: "\u{1F4DA}",
          narration: "Serialize",
          character: "captain",
          dialogue:
            "Serialization turns an object into a byte stream so it can be stored or sent somewhere else.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "I/O = Library Checkout",
      analogy:
        "Reading and writing files is like checking books out of a library and returning them when you are done.",
      realWorld: "Library Desk",
      realWorldEmoji: "\u{1F4D6}",
      codeConcept: "Java File I/O",
      codeConceptEmoji: "\u{1F4C1}",
      mappings: [
        { real: "Borrow a book", code: "Read a file" },
        { real: "Return a book with notes inside", code: "Write data to disk" },
        { real: "Save a full profile card", code: "Serialize an object" },
        { real: "Close the desk when leaving", code: "Close streams with try-with-resources" },
      ],
      conclusion:
        "Use streams to move data, and always close them. try-with-resources makes cleanup automatic.",
    },
    {
      type: "code",
      title: "Text Files and Serialization",
      explanation:
        "This example reads text, writes text, and shows how an object can be serialized into a file.",
      code: `import java.io.*;
import java.nio.file.*;

class SaveData implements Serializable {
    private static final long serialVersionUID = 1L;
    String playerName;
    int level;

    SaveData(String playerName, int level) {
        this.playerName = playerName;
        this.level = level;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("score.txt");

        try (BufferedWriter writer = Files.newBufferedWriter(path)) {
            writer.write("Ada,42");
        }

        try (BufferedReader reader = Files.newBufferedReader(path)) {
            System.out.println(reader.readLine());
        }

        try (ObjectOutputStream out =
                 new ObjectOutputStream(new FileOutputStream("save.bin"))) {
            out.writeObject(new SaveData("Ada", 7));
        }
    }
}`,
      language: "java",
      highlightLines: [1, 2, 4, 14, 18, 22],
    },
    {
      type: "concept-breakdown",
      title: "I/O Survival Guide",
      description: "The patterns that keep file work safe and readable:",
      steps: [
        {
          icon: "1",
          title: "Use try-with-resources",
          explanation:
            "Streams should close even when something fails. try-with-resources handles that automatically.",
          codeSnippet:
            "try (BufferedReader reader = Files.newBufferedReader(path)) {\n    String line = reader.readLine();\n}",
          language: "java",
        },
        {
          icon: "2",
          title: "Choose the right stream type",
          explanation:
            "Byte streams move raw bytes. Character streams handle text. Buffered streams improve efficiency for many small reads.",
        },
        {
          icon: "3",
          title: "Serialization needs Serializable",
          explanation:
            "Objects must implement Serializable to be written using object streams. Java records and plain objects can be archived this way if their fields are serializable too.",
          codeSnippet:
            "class SaveData implements Serializable {\n    private static final long serialVersionUID = 1L;\n}",
          language: "java",
        },
      ],
    },
    {
      type: "code",
      title: "Load the Object Back In",
      explanation:
        "Serialization is only half the story. You also need to read the byte stream back and turn it into a real object again.",
      code: `try (ObjectInputStream in =
         new ObjectInputStream(new FileInputStream("save.bin"))) {
    SaveData data = (SaveData) in.readObject();
    System.out.println(data.playerName + " -> " + data.level);
}`,
      language: "java",
      highlightLines: [1, 3, 4],
    },
    {
      type: "quiz",
      question: "What does try-with-resources do?",
      options: [
        "It skips exceptions",
        "It automatically closes resources",
        "It makes files bigger",
        "It turns text into bytecode",
      ],
      correctIndex: 1,
      explanation:
        "try-with-resources closes streams automatically, even if an exception is thrown.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the I/O tool to the job it does best:",
      pairs: [
        { left: "BufferedReader", right: "Read text efficiently" },
        { left: "BufferedWriter", right: "Write text efficiently" },
        {
          left: "ObjectOutputStream",
          right: "Serialize objects into a byte stream",
        },
        {
          left: "try-with-resources",
          right: "Close files automatically after use",
        },
      ],
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Put the file workflow in the correct order:",
      codeLines: [
        "Path path = Paths.get(\"score.txt\");",
        "try (BufferedWriter writer = Files.newBufferedWriter(path)) {",
        "    writer.write(\"Ada,42\");",
        "}",
        "try (BufferedReader reader = Files.newBufferedReader(path)) {",
        "    System.out.println(reader.readLine());",
        "}",
      ],
      correctOrder: [0, 1, 2, 3, 4, 5],
      language: "java",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "Your archive is ready. You can now store text on disk, move objects into byte streams, and clean up resources without leaking them across the deck.",
      mood: "celebrating",
    },
  ],
};

export const javaModernJava: Lesson = {
  id: "java-modern-java",
  trackId: "java-kingdom",
  title: "The Modern Java Guild",
  description:
    "Use lambdas, streams, Optional, and interface defaults to write concise Java.",
  xpReward: 190,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Modern Java is all about shorter, clearer code. Lambdas shrink ceremony, streams express pipelines, Optional avoids null traps, and interfaces can now carry behavior.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Modern Java = A Kitchen Conveyor",
      analogy:
        "A stream pipeline is like a conveyor belt that sorts, slices, and plates food as it moves by.",
      realWorld: "Kitchen Conveyor",
      realWorldEmoji: "\u{1F37D}\u{FE0F}",
      codeConcept: "Lambdas, Streams, Optional",
      codeConceptEmoji: "\u{1F4BB}",
      mappings: [
        { real: "Chef helper giving quick instructions", code: "Lambda expression" },
        { real: "Conveyor belt stages", code: "filter / map / reduce" },
        { real: "Empty tray warning", code: "Optional" },
        { real: "Shared recipe card with defaults", code: "Default and static interface methods" },
      ],
      conclusion:
        "Modern Java favors small, expressive building blocks that read like a pipeline instead of a wall of loops.",
    },
    {
      type: "comic",
      title: "The Four Modern Spells",
      panels: [
        {
          illustration: "\u{1F52C}",
          narration: "Lambda",
          character: "stackie",
          dialogue:
            "A lambda is a tiny function you can pass around. It keeps code local and focused.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F9E9}",
          narration: "Stream",
          character: "stackie",
          dialogue:
            "A stream turns a collection into a clean pipeline: filter it, transform it, reduce it.",
          mood: "excited",
        },
        {
          illustration: "\u{1F4A1}",
          narration: "Optional",
          character: "stackie",
          dialogue:
            "Optional says 'this value might not exist' without forcing you to dive into a null pit.",
          mood: "happy",
        },
        {
          illustration: "\u{1F4DA}",
          narration: "Interface defaults",
          character: "stackie",
          dialogue:
            "Interfaces can now carry default and static methods, which helps evolve APIs without breaking old code.",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "code",
      title: "Modern Java in One Place",
      explanation:
        "This snippet shows lambdas, streams, Optional, and interface default/static methods working together.",
      code: `import java.util.*;

interface QuestLog {
    void log(String message);

    default void printGreeting() {
        System.out.println("Ready for the quest?");
    }

    static QuestLog empty() {
        return message -> {};
    }
}

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ada", "Bob", "Ava");

        long count = names.stream()
                .filter(name -> name.startsWith("A"))
                .map(String::toUpperCase)
                .count();

        Optional<String> first = names.stream().findFirst();
        String label = first.orElse("Unknown");

        System.out.println(label + " -> " + count);
    }
}`,
      language: "java",
      highlightLines: [4, 7, 8, 16, 17, 20],
    },
    {
      type: "concept-breakdown",
      title: "Modern Java Rules",
      description: "Use these patterns to write compact, expressive Java:",
      steps: [
        {
          icon: "1",
          title: "Lambdas are tiny functions",
          explanation:
            "A lambda gives you a short way to implement a functional interface.",
          codeSnippet:
            "Runnable task = () -> System.out.println(\"Run!\");\nComparator<String> byLength = (a, b) -> a.length() - b.length();",
          language: "java",
        },
        {
          icon: "2",
          title: "Streams are pipelines",
          explanation:
            "Use filter, map, and reduce to describe what you want instead of manually managing loops.",
          codeSnippet:
            "int total = numbers.stream()\n    .filter(n -> n > 0)\n    .mapToInt(Integer::intValue)\n    .sum();",
          language: "java",
        },
        {
          icon: "3",
          title: "Optional makes absence explicit",
          explanation:
            "Optional avoids hidden nulls and nudges you to handle missing data intentionally.",
          codeSnippet:
            "Optional<String> maybeName = findName();\nString name = maybeName.orElse(\"Guest\");",
          language: "java",
        },
        {
          icon: "4",
          title: "Interfaces can evolve",
          explanation:
            "default methods let interfaces add behavior without breaking every existing implementation. static methods provide utility helpers on the interface itself.",
        },
      ],
    },
    {
      type: "typeracer",
      instruction: "Type the lambda expression quickly.",
      code: "name -> name.startsWith(\"A\")",
      language: "java",
      targetWPM: 18,
      xpBonus: 15,
    },
    {
      type: "concept-breakdown",
      title: "How a Stream Pipeline Really Works",
      description:
        "Streams feel magical until you understand which parts are lazy, which parts trigger work, and how method references fit in:",
      steps: [
        {
          icon: "1",
          title: "Intermediate operations describe the pipeline",
          explanation:
            "Operations like `filter` and `map` set up what should happen, but they do not process the data yet.",
          codeSnippet: `names.stream().filter(name -> name.startsWith("A"))`,
          language: "java",
        },
        {
          icon: "2",
          title: "A terminal operation starts the work",
          explanation:
            "Nothing really runs until a terminal step like `count`, `collect`, or `forEach` asks for the result.",
          codeSnippet: `.count()`,
          language: "java",
        },
        {
          icon: "3",
          title: "Method references are shorthand lambdas",
          explanation:
            "`String::toUpperCase` is a compact way to pass an existing method where a lambda would also work.",
          codeSnippet: `.map(String::toUpperCase)`,
          language: "java",
        },
        {
          icon: "4",
          title: "Optional keeps the missing case visible",
          explanation:
            "Methods like `map`, `orElse`, and `orElseThrow` make absence explicit instead of letting null sneak through the pipeline.",
          codeSnippet: `first.map(String::trim).orElse("Guest")`,
          language: "java",
        },
      ],
    },
    {
      type: "puzzle",
      instruction:
        "Arrange this stream pipeline so it filters, transforms, and counts correctly:",
      codeLines: [
        "long count = names.stream()",
        "    .filter(name -> name.startsWith(\"A\"))",
        "    .map(String::toUpperCase)",
        "    .count();",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "java",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the modern Java feature to its job:",
      pairs: [
        { left: "Lambda", right: "Short function expression" },
        { left: "Stream", right: "Pipeline over data" },
        { left: "Optional", right: "Value that may be absent" },
        { left: "default method", right: "Interface method with an implementation" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Which Java feature is designed to help avoid NullPointerException?",
      options: ["Lambda", "Optional", "Wrapper class", "Enum"],
      correctIndex: 1,
      explanation:
        "Optional makes missing values explicit and encourages deliberate handling instead of unguarded null access.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "You have the modern toolkit now. With lambdas, streams, Optional, and interface defaults, your Java code can be concise without becoming cryptic.",
      mood: "celebrating",
    },
  ],
};
