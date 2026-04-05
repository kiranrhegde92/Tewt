import { Difficulty, Lesson, Track, TrackCategory } from "@/types";

type SupportedVisual = "call-stack" | "memory-boxes" | "oop-kingdom" | "thread-race";

export type RoadmapTopicSpec = {
  id: string;
  title: string;
  subtopics: string[];
  description?: string;
  difficulty?: Difficulty;
  estimatedMinutes?: number;
  xpReward?: number;
  code?: string;
  codeLanguage?: string;
  visualType?: SupportedVisual;
};

export type RoadmapTrackSpec = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  category: TrackCategory;
  guide: "pixel" | "bug" | "algo" | "stackie" | "captain" | "sally";
  world: string;
  worldEmoji: string;
  topics: RoadmapTopicSpec[];
};

function compactText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function titleToHandle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part, index) =>
      index === 0 ? part : `${part[0].toUpperCase()}${part.slice(1)}`
    )
    .join("");
}

function listWithAnd(items: string[]) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function buildDescription(title: string, subtopics: string[]) {
  const preview = subtopics.slice(0, 4);
  return `Build confidence with ${title} by understanding ${listWithAnd(preview)}${subtopics.length > 4 ? ", and more" : ""}.`;
}

function buildTopicSummary(topic: RoadmapTopicSpec) {
  return topic.description ?? buildDescription(topic.title, topic.subtopics);
}

function pickDifficulty(topic: RoadmapTopicSpec): Difficulty {
  return topic.difficulty ?? (topic.subtopics.length >= 6 ? "intermediate" : "beginner");
}

function pickEstimatedMinutes(topic: RoadmapTopicSpec) {
  return topic.estimatedMinutes ?? Math.min(18, Math.max(11, 10 + Math.ceil(topic.subtopics.length / 2)));
}

function pickXp(topic: RoadmapTopicSpec) {
  return topic.xpReward ?? 120 + topic.subtopics.length * 8;
}

function explainSubtopic(topicTitle: string, subtopic: string, trackTitle: string) {
  const lower = subtopic.toLowerCase();

  if (lower.includes("api")) {
    return `${subtopic} matters in ${topicTitle} because it defines how systems exchange requests, data, or capabilities predictably.`;
  }
  if (lower.includes("routing") || lower.includes("router")) {
    return `${subtopic} controls how users or requests reach the right screen, handler, or service without confusion.`;
  }
  if (lower.includes("state")) {
    return `${subtopic} keeps changing data organized so ${trackTitle.toLowerCase()} projects stay predictable instead of turning chaotic.`;
  }
  if (lower.includes("testing")) {
    return `${subtopic} gives you a repeatable way to verify behavior before bugs escape into production.`;
  }
  if (lower.includes("security") || lower.includes("auth") || lower.includes("oauth") || lower.includes("jwt")) {
    return `${subtopic} protects identity, permissions, or data flow so the system does not trust the wrong actor.`;
  }
  if (lower.includes("deployment") || lower.includes("ci") || lower.includes("cd")) {
    return `${subtopic} turns working code into a repeatable release process instead of a manual fire drill.`;
  }
  if (lower.includes("database") || lower.includes("sql") || lower.includes("orm")) {
    return `${subtopic} shapes how information is stored, queried, and kept reliable as the application grows.`;
  }
  if (lower.includes("performance") || lower.includes("profiling") || lower.includes("optimization")) {
    return `${subtopic} helps you spot slow paths and remove wasted work before users feel the drag.`;
  }
  if (lower.includes("concurrency") || lower.includes("threads") || lower.includes("goroutines")) {
    return `${subtopic} teaches how multiple tasks move together without corrupting shared work or blocking progress.`;
  }
  if (lower.includes("responsive") || lower.includes("layout") || lower.includes("flexbox") || lower.includes("grid")) {
    return `${subtopic} decides how the interface adapts across screens while keeping structure readable and intentional.`;
  }
  if (lower.includes("monitoring") || lower.includes("logging") || lower.includes("observability")) {
    return `${subtopic} makes live systems easier to watch, debug, and improve when something drifts or breaks.`;
  }
  if (lower.includes("component") || lower.includes("hooks") || lower.includes("jsx") || lower.includes("react")) {
    return `${subtopic} is part of the component model that keeps modern frontend code reusable and easier to reason about.`;
  }
  if (lower.includes("html") || lower.includes("css") || lower.includes("dom")) {
    return `${subtopic} is part of the browser layer that controls structure, presentation, or behavior on the page.`;
  }
  if (lower.includes("patterns") || lower.includes("architecture") || lower.includes("ddd")) {
    return `${subtopic} gives teams a shared structural approach so large systems stay understandable as they evolve.`;
  }
  if (lower.includes("cloud") || lower.includes("aws") || lower.includes("azure") || lower.includes("gcp")) {
    return `${subtopic} connects application design to real infrastructure choices around scale, cost, and operations.`;
  }
  if (lower.includes("ai") || lower.includes("ml") || lower.includes("model") || lower.includes("rag")) {
    return `${subtopic} shows how AI-enabled products move from prompts and data into reliable developer workflows.`;
  }

  return `${subtopic} is a practical building block inside ${topicTitle} that helps developers move from theory into repeatable production work.`;
}

function buildCodeSnippet(track: RoadmapTrackSpec, topic: RoadmapTopicSpec) {
  if (topic.code) {
    return {
      code: topic.code,
      language: topic.codeLanguage ?? "text",
    };
  }

  const title = topic.title.toLowerCase();
  const handle = titleToHandle(topic.title);

  if (title.includes("html")) {
    return {
      language: "html",
      code: `<main>
  <section aria-labelledby="${handle}">
    <h1 id="${handle}">${topic.title}</h1>
    <p>${topic.subtopics[0] ?? "Semantic structure"}</p>
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" required />
    </form>
  </section>
</main>`,
    };
  }

  if (title.includes("css")) {
    return {
      language: "css",
      code: `.${handle} {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .${handle} {
    grid-template-columns: 1fr;
  }
}`,
    };
  }

  if (title.includes("typescript")) {
    return {
      language: "ts",
      code: `type ${handle[0].toUpperCase()}${handle.slice(1)}Config = {
  primarySkill: string;
  subtopics: string[];
  advanced?: boolean;
};

const config: ${handle[0].toUpperCase()}${handle.slice(1)}Config = {
  primarySkill: "${topic.subtopics[0] ?? topic.title}",
  subtopics: ${JSON.stringify(topic.subtopics.slice(0, 3))},
};`,
    };
  }

  if (title.includes("javascript") || title.includes("async") || title.includes("dom")) {
    return {
      language: "javascript",
      code: `const ${handle}Checklist = ${JSON.stringify(topic.subtopics.slice(0, 4), null, 2)};

async function study${handle[0].toUpperCase()}${handle.slice(1)}() {
  for (const item of ${handle}Checklist) {
    console.log("Practice:", item);
  }
}`,
    };
  }

  if (title.includes("react") || title.includes("vue") || title.includes("angular") || title.includes("svelte") || title.includes("solid")) {
    return {
      language: "tsx",
      code: `export function ${handle[0].toUpperCase()}${handle.slice(1)}Lesson() {
  const focusAreas = ${JSON.stringify(topic.subtopics.slice(0, 3))};

  return (
    <section>
      <h2>${topic.title}</h2>
      <p>{focusAreas.join(" · ")}</p>
    </section>
  );
}`,
    };
  }

  if (title.includes("docker")) {
    return {
      language: "dockerfile",
      code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]`,
    };
  }

  if (title.includes("kubernetes") || title.includes("helm") || title.includes("terraform") || title.includes("ansible")) {
    return {
      language: "yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${handle}
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: ${handle}
          image: example/${handle}:latest`,
    };
  }

  if (title.includes("sql") || title.includes("postgresql") || title.includes("mysql") || title.includes("sqlite") || title.includes("joins")) {
    return {
      language: "sql",
      code: `SELECT topic_name, difficulty
FROM roadmap_topics
WHERE category = '${track.title}'
ORDER BY topic_name;`,
    };
  }

  if (title.includes("api") || title.includes("rest") || title.includes("graphql") || title.includes("grpc")) {
    return {
      language: "javascript",
      code: `app.get("/api/${handle}", async (_req, res) => {
  res.json({
    topic: "${topic.title}",
    focus: ${JSON.stringify(topic.subtopics.slice(0, 3))}
  });
});`,
    };
  }

  if (title.includes("auth") || title.includes("security")) {
    return {
      language: "javascript",
      code: `if (!request.user) {
  return response.status(401).json({ error: "Unauthorized" });
}

return response.json({
  topic: "${topic.title}",
  checks: ${JSON.stringify(topic.subtopics.slice(0, 3))}
});`,
    };
  }

  if (title.includes("git") || title.includes("linux") || title.includes("terminal") || title.includes("command")) {
    return {
      language: "bash",
      code: `# ${topic.title}
echo "Practice ${topic.subtopics[0] ?? topic.title}"
git status
git log --oneline -3`,
    };
  }

  return {
    language: topic.codeLanguage ?? "javascript",
    code: `const ${handle}Roadmap = {
  topic: "${topic.title}",
  subtopics: ${JSON.stringify(topic.subtopics, null, 2)}
};

console.log(${handle}Roadmap);`,
  };
}

function pickVisualType(track: RoadmapTrackSpec, topic: RoadmapTopicSpec): SupportedVisual {
  if (topic.visualType) {
    return topic.visualType;
  }

  const title = `${track.title} ${topic.title}`.toLowerCase();

  if (title.includes("thread") || title.includes("concurrency") || title.includes("async") || title.includes("ci/cd")) {
    return "thread-race";
  }
  if (title.includes("class") || title.includes("pattern") || title.includes("architecture") || title.includes("domain")) {
    return "oop-kingdom";
  }
  if (title.includes("request") || title.includes("api") || title.includes("routing") || title.includes("pipeline")) {
    return "call-stack";
  }
  return "memory-boxes";
}

function buildVisualConfig(topic: RoadmapTopicSpec, visualType: SupportedVisual) {
  if (visualType === "thread-race") {
    return {
      threads: topic.subtopics.slice(0, 3).map((subtopic, index) => ({
        name: subtopic,
        color: ["#8B5CF6", "#3B82F6", "#10B981"][index] ?? "#F59E0B",
        tasks: [
          "Plan",
          "Practice",
          "Ship",
        ],
      })),
    };
  }

  if (visualType === "oop-kingdom") {
    return {
      classes: [
        {
          name: topic.title,
          emoji: "\u{1F3F0}",
          properties: topic.subtopics.slice(0, 2),
          methods: ["organize()", "evolve()"],
        },
        {
          name: topic.subtopics[0] ?? "Pattern",
          emoji: "\u{2728}",
          parent: topic.title,
          properties: topic.subtopics.slice(2, 3),
          methods: ["apply()"],
        },
        {
          name: topic.subtopics[1] ?? "Workflow",
          emoji: "\u{1F9F1}",
          parent: topic.title,
          properties: topic.subtopics.slice(3, 4),
          methods: ["scale()"],
        },
      ],
    };
  }

  if (visualType === "call-stack") {
    return {
      frames: [
        `${topic.title}()`,
        ...(topic.subtopics.slice(0, 3).map((subtopic) => `${titleToHandle(subtopic)}()`)),
      ],
    };
  }

  return {
    variables: topic.subtopics.slice(0, 4).map((subtopic, index) => ({
      name: titleToHandle(subtopic) || `skill${index + 1}`,
      value: `"${subtopic}"`,
      type: "string",
    })),
  };
}

function buildMatchPairs(topic: RoadmapTopicSpec, track: RoadmapTrackSpec) {
  return topic.subtopics.slice(0, 4).map((subtopic) => ({
    left: subtopic,
    right: explainSubtopic(topic.title, subtopic, track.title),
  }));
}

function buildQuiz(topic: RoadmapTopicSpec, distractorPool: string[]) {
  const correct = topic.subtopics[0] ?? topic.title;
  const distractors = distractorPool
    .filter((candidate) => !topic.subtopics.includes(candidate))
    .slice(0, 3);
  const fallback = ["Deployment", "Observability", "Data modeling", "Routing"];
  const options = [correct, ...distractors];

  for (const candidate of fallback) {
    if (options.length >= 4) {
      break;
    }
    if (!options.includes(candidate)) {
      options.push(candidate);
    }
  }

  return {
    type: "quiz" as const,
    question: `Which of these belongs under ${topic.title}?`,
    options,
    correctIndex: 0,
    explanation: `${correct} is one of the key subtopics inside ${topic.title}.`,
    xpBonus: 15,
  };
}

export function buildRoadmapLessons(track: RoadmapTrackSpec): Lesson[] {
  const distractorPool = track.topics.flatMap((topic) => topic.subtopics);

  return track.topics.map((topic, index) => {
    const summary = buildTopicSummary(topic);
    const visualType = pickVisualType(track, topic);
    const snippet = buildCodeSnippet(track, topic);

    return {
      id: topic.id,
      trackId: track.id,
      title: topic.title,
      description: summary,
      xpReward: pickXp(topic),
      difficulty: pickDifficulty(topic),
      estimatedMinutes: pickEstimatedMinutes(topic),
      steps: [
        {
          type: "story",
          character: track.guide,
          dialogue: `Welcome to ${topic.title}. In this ${track.world.toLowerCase()}, you will turn ${listWithAnd(topic.subtopics.slice(0, 3))}${topic.subtopics.length > 3 ? ", and the rest of the toolkit" : ""} into practical full-stack instincts.`,
          mood: "excited",
        },
        {
          type: "comic",
          title: `Inside ${topic.title}`,
          panels: topic.subtopics.slice(0, 3).map((subtopic, panelIndex) => ({
            illustration: ["\u{1F680}", "\u{1F9F0}", "\u{1F4A1}"][panelIndex] ?? "\u{2728}",
            narration: subtopic,
            character: track.guide,
            dialogue: explainSubtopic(topic.title, subtopic, track.title),
            mood: ["thinking", "happy", "excited"][panelIndex] as "thinking" | "happy" | "excited",
          })),
        },
        {
          type: "visual-analogy",
          title: `${topic.title} = A Well-Run ${track.world}`,
          analogy: `${topic.title} works like a well-run ${track.world.toLowerCase()}: each subtopic handles one critical part of the flow, and the whole system feels smooth only when those parts cooperate.`,
          realWorld: track.world,
          realWorldEmoji: track.worldEmoji,
          codeConcept: topic.title,
          codeConceptEmoji: track.icon,
          mappings: topic.subtopics.slice(0, 4).map((subtopic, mappingIndex) => ({
            real: `Station ${mappingIndex + 1} in the ${track.world.toLowerCase()}`,
            code: subtopic,
          })),
          conclusion: `When you understand ${topic.title}, you stop seeing isolated buzzwords and start seeing the workflow that connects them.`,
        },
        {
          type: "code",
          title: `${topic.title} in Practice`,
          explanation: `This quick sketch shows the shape of ${topic.title.toLowerCase()} without hiding the important moving parts.`,
          code: snippet.code,
          language: snippet.language,
          highlightLines: [1, 2, 3].filter((line) => line <= snippet.code.split("\n").length),
        },
        {
          type: "concept-breakdown",
          title: `${topic.title} Checklist`,
          description: `These are the subtopics that make ${topic.title} useful in real full-stack work.`,
          steps: topic.subtopics.map((subtopic, subtopicIndex) => ({
            icon: `${subtopicIndex + 1}`,
            title: subtopic,
            explanation: explainSubtopic(topic.title, subtopic, track.title),
          })),
        },
        {
          type: "interactive-visual",
          title: `${topic.title} Visual Map`,
          description: `Tap through the core pieces of ${topic.title} and see how the lesson groups them.`,
          visualType,
          config: buildVisualConfig(topic, visualType),
        },
        {
          type: "match",
          instruction: `Match each ${topic.title} subtopic to why it matters:`,
          pairs: buildMatchPairs(topic, track),
          xpBonus: 15,
        },
        buildQuiz(topic, distractorPool),
        {
          type: "story",
          character: track.guide,
          dialogue: `Checkpoint cleared. You now have a working mental map for ${topic.title}, which makes the next lesson in ${track.title} much easier to connect instead of memorizing in isolation.`,
          mood: index === track.topics.length - 1 ? "celebrating" : "happy",
        },
      ],
    } satisfies Lesson;
  });
}

export function buildRoadmapTrack(track: RoadmapTrackSpec, lessons: Lesson[]): Track {
  return {
    id: track.id,
    title: track.title,
    description: compactText(track.description),
    icon: track.icon,
    color: track.color,
    gradient: track.gradient,
    category: track.category,
    lessonIds: lessons.map((lesson) => lesson.id),
    totalXP: lessons.reduce((sum, lesson) => sum + lesson.xpReward, 0),
  };
}
