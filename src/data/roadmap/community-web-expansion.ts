import { Lesson, Track } from "@/types";
import {
  buildRoadmapLessons,
  buildRoadmapTrack,
  RoadmapTopicSpec,
  RoadmapTrackSpec,
} from "./shared";

function topic(
  id: string,
  title: string,
  subtopics: string[],
  extras: Partial<RoadmapTopicSpec> = {}
): RoadmapTopicSpec {
  return { id, title, subtopics, ...extras };
}

const reactNextArchitecture: RoadmapTrackSpec = {
  id: "react-next-architecture",
  title: "React & Next.js Architecture",
  description:
    "Build a real mental model for component design, hooks, routing, data flow, server boundaries, and performance in modern React and Next.js apps.",
  icon: "\u{1FA84}",
  color: "#61DAFB",
  gradient: "from-cyan-400 to-blue-600",
  category: "techstack",
  guide: "stackie",
  world: "Component Harbor",
  worldEmoji: "\u{1F6A2}",
  topics: [
    topic("rnx-components-jsx", "Components, JSX, and Composition", [
      "Elements vs Components",
      "JSX Syntax",
      "Fragments",
      "Composition",
      "Reusable UI",
    ]),
    topic("rnx-props-state-events", "Props, State, and Events", [
      "Props",
      "State",
      "Event Handlers",
      "Lifting State",
      "Controlled vs Uncontrolled",
    ]),
    topic("rnx-hooks-effects", "Hooks and Effects", [
      "useState",
      "useEffect",
      "useRef",
      "Custom Hooks",
      "Effect Cleanup",
      "Dependency Arrays",
    ]),
    topic("rnx-lists-forms", "Lists, Keys, and Forms", [
      "Lists",
      "Keys",
      "Controlled Forms",
      "Validation",
      "Derived UI State",
    ]),
    topic("rnx-context-reducers", "Context, Reducers, and Shared State", [
      "Context",
      "Provider Pattern",
      "useReducer",
      "State Colocation",
      "Prop Drilling",
    ], {
      visualType: "oop-kingdom",
      difficulty: "intermediate",
      estimatedMinutes: 18,
    }),
    topic("rnx-routing-layouts", "Next.js Routing and Layouts", [
      "App Router",
      "Nested Layouts",
      "Dynamic Routes",
      "Loading UI",
      "Error Boundaries",
    ]),
    topic("rnx-server-components-data", "Server Components and Data Fetching", [
      "Server Components",
      "Client Components",
      "fetch",
      "Caching",
      "Revalidation",
      "Server Actions",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 20,
      codeLanguage: "tsx",
      code: `import { Suspense } from "react";

async function getFeed() {
  const response = await fetch("https://api.example.com/feed", {
    next: { revalidate: 30 },
  });

  return response.json();
}

export default async function FeedPage() {
  const feed = await getFeed();

  return (
    <main>
      <Suspense fallback={<p>Loading feed...</p>}>
        <pre>{JSON.stringify(feed, null, 2)}</pre>
      </Suspense>
    </main>
  );
}`,
    }),
    topic("rnx-performance-deployment", "Performance, Metadata, and Deployment", [
      "Streaming",
      "Suspense",
      "Metadata",
      "Image Optimization",
      "Deployment",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 19,
    }),
  ],
};

const nodeApiEngineering: RoadmapTrackSpec = {
  id: "node-api-engineering",
  title: "Node.js & API Engineering",
  description:
    "Learn how Node.js runs applications, how HTTP flows through servers and middleware, and how to ship secure, testable APIs with real persistence.",
  icon: "\u{1F527}",
  color: "#22C55E",
  gradient: "from-emerald-500 to-teal-600",
  category: "techstack",
  guide: "captain",
  world: "Request Forge",
  worldEmoji: "\u{1F528}",
  topics: [
    topic("node-runtime-modules", "Runtime, Modules, and npm", [
      "Node Runtime",
      "CommonJS",
      "ES Modules",
      "npm",
      "Built-in Modules",
    ]),
    topic("node-event-loop-async", "Async JavaScript and the Event Loop", [
      "Call Stack",
      "Event Loop",
      "Timers",
      "Callbacks",
      "Promises",
      "async/await",
    ], {
      visualType: "thread-race",
      difficulty: "intermediate",
      estimatedMinutes: 18,
      codeLanguage: "javascript",
      code: `console.log("start");

setTimeout(() => console.log("timer"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("end");`,
    }),
    topic("node-http-routing", "Core HTTP Servers and Routing", [
      "http module",
      "Requests",
      "Responses",
      "Routing",
      "Status Codes",
    ]),
    topic("node-files-streams", "Files, Streams, and Buffers", [
      "fs module",
      "Reading Files",
      "Writing Files",
      "Streams",
      "Buffers",
      "Piping",
    ], {
      visualType: "thread-race",
      estimatedMinutes: 19,
      codeLanguage: "javascript",
      code: `const fs = require("fs");

const readStream = fs.createReadStream("./input.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream.pipe(writeStream);`,
    }),
    topic("node-express-middleware", "Express Apps, Middleware, and Error Handling", [
      "Express App Structure",
      "Middleware Chain",
      "Static Files",
      "Request Parsing",
      "Error Handlers",
    ], {
      codeLanguage: "javascript",
      code: `const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: err.message });
});`,
    }),
    topic("node-rest-validation", "REST APIs, Validation, and Pagination", [
      "CRUD",
      "JSON",
      "Path Params",
      "Query Params",
      "Validation",
      "Pagination",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 20,
    }),
    topic("node-auth-security", "Authentication, Cookies, and Security", [
      "Password Hashing",
      "Sessions",
      "JWT",
      "CORS",
      "Rate Limiting",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 20,
    }),
    topic("node-data-testing-deploy", "Databases, Testing, and Deployment", [
      "SQL vs NoSQL",
      "ORM Models",
      "Transactions",
      "Unit Tests",
      "Integration Tests",
      "Health Checks",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 21,
    }),
  ],
};

const typeScriptMastery: RoadmapTrackSpec = {
  id: "typescript-mastery",
  title: "TypeScript Mastery",
  description:
    "Move from basic annotations to advanced types, generics, configuration, and practical integration with React and Node codebases.",
  icon: "\u{1F4DD}",
  color: "#8B5CF6",
  gradient: "from-violet-500 to-indigo-600",
  category: "language",
  guide: "algo",
  world: "Type Forge",
  worldEmoji: "\u{2692}\u{FE0F}",
  topics: [
    topic("ts-setup-annotations", "TypeScript Setup and Type Annotations", [
      "Type Annotations",
      "Inference",
      "tsconfig",
      "Strict Mode",
      "Compilation",
    ]),
    topic("ts-functions-objects-arrays", "Functions, Objects, and Arrays", [
      "Parameter Types",
      "Return Types",
      "Object Shapes",
      "Arrays",
      "Tuples",
      "Readonly",
    ]),
    topic("ts-unions-narrowing", "Unions, Intersections, and Narrowing", [
      "Union Types",
      "Intersection Types",
      "Type Guards",
      "Literal Types",
      "Discriminated Unions",
    ], {
      difficulty: "intermediate",
      estimatedMinutes: 18,
    }),
    topic("ts-interfaces-classes", "Interfaces, Type Aliases, and Classes", [
      "Interfaces",
      "Type Aliases",
      "Classes",
      "Implements",
      "Access Modifiers",
    ]),
    topic("ts-generics-apis", "Generics and Reusable APIs", [
      "Generic Functions",
      "Generic Interfaces",
      "Constraints",
      "Default Types",
      "Reusable Contracts",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 20,
      codeLanguage: "ts",
      code: `function wrapValue<T>(value: T) {
  return { value };
}

const wrappedNumber = wrapValue(42);
const wrappedText = wrapValue("hello");

console.log(wrappedNumber.value, wrappedText.value);`,
    }),
    topic("ts-utility-mapped-types", "Utility Types and Mapped Types", [
      "Partial",
      "Pick",
      "Omit",
      "Record",
      "Mapped Types",
      "Conditional Types",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 21,
    }),
    topic("ts-modules-config", "Modules, Enums, and Configuration", [
      "Modules",
      "Imports and Exports",
      "Enums",
      "Path Aliases",
      "Compiler Options",
    ], {
      estimatedMinutes: 18,
    }),
    topic("ts-react-node-integration", "TypeScript in React and Node", [
      "Props Typing",
      "Hooks Typing",
      "Express Request Types",
      "Schema Validation",
      "API Contracts",
    ], {
      difficulty: "advanced",
      estimatedMinutes: 22,
    }),
  ],
};

const communityWebExpansionSpecs: RoadmapTrackSpec[] = [
  reactNextArchitecture,
  nodeApiEngineering,
  typeScriptMastery,
];

const communityWebExpansionLessonGroups = communityWebExpansionSpecs.map((spec) =>
  buildRoadmapLessons(spec)
);

export const communityWebExpansionLessons: Lesson[] =
  communityWebExpansionLessonGroups.flat();

export const communityWebExpansionTracks: Track[] = communityWebExpansionSpecs.map(
  (spec, index) => buildRoadmapTrack(spec, communityWebExpansionLessonGroups[index])
);
