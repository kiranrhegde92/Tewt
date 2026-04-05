import { Lesson, Track } from "@/types";
import { buildRoadmapLessons, buildRoadmapTrack, RoadmapTrackSpec } from "./shared";

const webFundamentals: RoadmapTrackSpec = {
  id: "web-foundations",
  title: "Internet & Web Fundamentals",
  description:
    "Understand how the internet, browsers, HTML, CSS, and devtools fit together before you build anything else.",
  icon: "\u{1F310}",
  color: "#0EA5E9",
  gradient: "from-sky-400 to-cyan-500",
  category: "techstack",
  guide: "pixel",
  world: "Network Harbor",
  worldEmoji: "\u{1F6A2}",
  topics: [
    {
      id: "web-internet-works",
      title: "How the internet works",
      subtopics: ["DNS", "HTTP/HTTPS", "TCP/IP", "Browsers", "Domain & Hosting"],
      codeLanguage: "text",
      code: `DNS lookup -> IP address
HTTP request -> server response
Browser -> render the page
Domain + hosting -> make the site reachable`,
      visualType: "call-stack",
    },
    {
      id: "web-html",
      title: "HTML",
      subtopics: [
        "Semantic HTML",
        "Forms & Validation",
        "Accessibility (a11y)",
        "SEO basics",
        "Meta tags",
      ],
      codeLanguage: "html",
      code: `<main>
  <header>
    <h1>DevPlay Roadmap</h1>
    <p>Learn the web from the ground up.</p>
  </header>
  <form>
    <label for="email">Email</label>
    <input id="email" type="email" required />
  </form>
</main>`,
      visualType: "memory-boxes",
    },
    {
      id: "web-css",
      title: "CSS",
      subtopics: [
        "Box model",
        "Flexbox",
        "Grid",
        "Animations & Transitions",
        "Variables",
        "Responsive Design",
        "Media Queries",
      ],
      codeLanguage: "css",
      code: `.lesson-card {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}

@media (max-width: 768px) {
  .lesson-card {
    grid-template-columns: 1fr;
  }
}`,
      visualType: "oop-kingdom",
    },
    {
      id: "web-devtools",
      title: "Browser DevTools",
      subtopics: ["Debugging", "Network tab", "Performance profiling"],
      codeLanguage: "javascript",
      code: `console.log("Inspect the DOM and console first");
performance.mark("render-start");
fetch("/api/status").then((res) => res.json());`,
      visualType: "call-stack",
    },
  ],
};

const javascriptTrack: RoadmapTrackSpec = {
  id: "javascript",
  title: "JavaScript",
  description:
    "Master the language that powers the web, from core syntax and the DOM to async flows, TypeScript, and tooling.",
  icon: "\u{26A1}",
  color: "#F7DF1E",
  gradient: "from-yellow-400 to-amber-500",
  category: "language",
  guide: "pixel",
  world: "Script Bazaar",
  worldEmoji: "\u{1F4D1}",
  topics: [
    {
      id: "js-core",
      title: "Core JS",
      subtopics: ["Data types", "Functions", "Closures", "Scope & Hoisting", "Prototypes", "ES6+ features"],
      codeLanguage: "javascript",
      code: `const makeCounter = () => {
  let count = 0;
  return () => ++count;
};

const next = makeCounter();
console.log(next(), next());`,
    },
    {
      id: "js-dom",
      title: "DOM Manipulation",
      subtopics: ["Events", "Event delegation", "querySelector", "Virtual DOM concept"],
      codeLanguage: "javascript",
      code: `const list = document.querySelector("#todo-list");

list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  button.closest("li")?.remove();
});`,
      visualType: "call-stack",
    },
    {
      id: "js-async",
      title: "Async JS",
      subtopics: ["Callbacks", "Promises", "async/await", "Event loop", "Fetch API"],
      codeLanguage: "javascript",
      code: `async function loadProfile() {
  const response = await fetch("/api/profile");
  const data = await response.json();
  return data;
}`,
      visualType: "thread-race",
    },
    {
      id: "js-typescript",
      title: "TypeScript",
      subtopics: ["Types & Interfaces", "Generics", "Enums", "Type narrowing", "Decorators", "tsconfig"],
      codeLanguage: "ts",
      code: `interface Lesson {
  id: string;
  title: string;
}

function trackLesson<T extends Lesson>(lesson: T): T {
  return lesson;
}`,
      visualType: "memory-boxes",
    },
    {
      id: "js-tooling",
      title: "JS Tooling",
      subtopics: ["npm/yarn/pnpm", "Webpack", "Vite", "Babel", "ESLint", "Prettier"],
      codeLanguage: "json",
      code: `{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext .js,.ts,.tsx"
  }
}`,
      visualType: "thread-race",
    },
  ],
};

const frontendFrameworks: RoadmapTrackSpec = {
  id: "frontend-frameworks",
  title: "Frontend Frameworks",
  description:
    "Build interfaces with component systems, state, routing, styling stacks, and frontend testing discipline.",
  icon: "\u{1F9F1}",
  color: "#8B5CF6",
  gradient: "from-violet-400 to-fuchsia-500",
  category: "techstack",
  guide: "stackie",
  world: "Component Kingdom",
  worldEmoji: "\u{1F3F0}",
  topics: [
    {
      id: "frontend-react",
      title: "React",
      subtopics: [
        "JSX",
        "Hooks (useState, useEffect, etc.)",
        "Context API",
        "React Router",
        "React Query",
        "Server Components",
        "Next.js",
      ],
      codeLanguage: "tsx",
      code: `export function LessonCard({ title }: { title: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {title} {open ? "open" : "closed"}
    </button>
  );
}`,
      visualType: "oop-kingdom",
    },
    {
      id: "frontend-vue",
      title: "Vue.js",
      subtopics: ["Options API", "Composition API", "Vue Router", "Pinia/Vuex", "Nuxt.js"],
      codeLanguage: "vue",
      code: `<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>`,
      visualType: "oop-kingdom",
    },
    {
      id: "frontend-angular",
      title: "Angular",
      subtopics: ["Components & Modules", "Services & DI", "RxJS", "Angular Router", "NgRx"],
      codeLanguage: "ts",
      code: `@Component({
  selector: "app-counter",
  template: "<button (click)=\\\"count++\\\">{{ count }}</button>",
})
export class CounterComponent {
  count = 0;
}`,
      visualType: "oop-kingdom",
    },
    {
      id: "frontend-svelte",
      title: "Svelte / SvelteKit",
      subtopics: ["Reactive declarations", "Stores", "SvelteKit routing"],
      codeLanguage: "svelte",
      code: `<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  {count}
</button>`,
      visualType: "memory-boxes",
    },
    {
      id: "frontend-solid",
      title: "Solid.js",
      subtopics: ["Signals", "Fine-grained reactivity"],
      codeLanguage: "tsx",
      code: `const [count, setCount] = createSignal(0);

return <button onClick={() => setCount(count() + 1)}>{count()}</button>;`,
      visualType: "memory-boxes",
    },
    {
      id: "frontend-css-frameworks",
      title: "CSS Frameworks",
      subtopics: ["Tailwind CSS", "Bootstrap", "Shadcn/UI", "Material UI", "Chakra UI", "Radix UI"],
      codeLanguage: "html",
      code: `<button class="rounded-xl bg-slate-900 px-4 py-2 text-white">
  Utility-first button
</button>`,
      visualType: "memory-boxes",
    },
    {
      id: "frontend-state-management",
      title: "State Management",
      subtopics: ["Redux", "Zustand", "Jotai", "Recoil", "MobX"],
      codeLanguage: "ts",
      code: `import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));`,
      visualType: "memory-boxes",
    },
    {
      id: "frontend-testing",
      title: "Testing (Frontend)",
      subtopics: ["Jest", "Vitest", "React Testing Library", "Cypress", "Playwright"],
      codeLanguage: "ts",
      code: `test("renders the button", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});`,
      visualType: "thread-race",
    },
  ],
};

const mobileDevelopment: RoadmapTrackSpec = {
  id: "mobile-development",
  title: "Mobile Development",
  description:
    "Build apps for phones and tablets with native, cross-platform, and progressive web app stacks.",
  icon: "\u{1F4F1}",
  color: "#EC4899",
  gradient: "from-pink-400 to-rose-500",
  category: "techstack",
  guide: "captain",
  world: "Pocket City",
  worldEmoji: "\u{1F3E0}",
  topics: [
    {
      id: "mobile-react-native",
      title: "React Native",
      subtopics: ["Expo", "Navigation", "Native modules", "Reanimated"],
      codeLanguage: "tsx",
      code: `export function App() {
  return (
    <View>
      <Text>Mobile learning</Text>
    </View>
  );
}`,
      visualType: "call-stack",
    },
    {
      id: "mobile-flutter",
      title: "Flutter",
      subtopics: ["Dart", "Widgets", "Riverpod/Bloc", "Pub.dev"],
      codeLanguage: "dart",
      code: `class Counter extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Text("Flutter");
  }
}`,
      visualType: "oop-kingdom",
    },
    {
      id: "mobile-swift-ios",
      title: "Swift / iOS",
      subtopics: ["UIKit", "SwiftUI", "Xcode", "Core Data", "Combine"],
      codeLanguage: "swift",
      code: `struct ContentView: View {
  var body: some View {
    Text("iOS")
  }
}`,
      visualType: "call-stack",
    },
    {
      id: "mobile-kotlin-android",
      title: "Kotlin / Android",
      subtopics: ["Jetpack Compose", "Android SDK", "Coroutines", "Room DB", "Retrofit"],
      codeLanguage: "kotlin",
      code: `@Composable
fun Counter() {
  Text("Android")
}`,
      visualType: "call-stack",
    },
    {
      id: "mobile-pwa",
      title: "Progressive Web Apps (PWA)",
      subtopics: ["Service workers", "Manifest", "Offline first", "Push notifications"],
      codeLanguage: "javascript",
      code: `self.addEventListener("install", () => {
  console.log("Cache app shell for offline use");
});`,
      visualType: "call-stack",
    },
  ],
};

function buildTrack(spec: RoadmapTrackSpec) {
  const lessons = buildRoadmapLessons(spec);
  return {
    track: buildRoadmapTrack(spec, lessons),
    lessons,
  };
}

const webFundamentalsData = buildTrack(webFundamentals);
const javascriptData = buildTrack(javascriptTrack);
const frontendFrameworksData = buildTrack(frontendFrameworks);
const mobileDevelopmentData = buildTrack(mobileDevelopment);

export const webStackTracks: Track[] = [
  webFundamentalsData.track,
  javascriptData.track,
  frontendFrameworksData.track,
  mobileDevelopmentData.track,
];

export const webStackLessons: Lesson[] = [
  ...webFundamentalsData.lessons,
  ...javascriptData.lessons,
  ...frontendFrameworksData.lessons,
  ...mobileDevelopmentData.lessons,
];
