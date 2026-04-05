/**
 * Expansion lessons added to existing hardcoded tracks.
 * These extend JavaScript Adventures, Python Quest, React Realm,
 * CSS Sorcery, and Algorithm Arena beyond their starter content.
 */
import { buildRoadmapLessons, type RoadmapTrackSpec } from "./shared";
import { Lesson } from "@/types";

// ─────────────────────────────────────────────
// JAVASCRIPT ADVENTURES — extra lessons
// ─────────────────────────────────────────────

const jsExpansionSpec: RoadmapTrackSpec = {
  id: "javascript-adventures",
  title: "JavaScript Adventures",
  description: "",
  icon: "⚡",
  color: "#F7DF1E",
  gradient: "from-yellow-400 to-amber-500",
  category: "language",
  guide: "pixel",
  world: "JavaScript Jungle",
  worldEmoji: "⚡",
  topics: [
    {
      id: "js-async",
      title: "Async JavaScript",
      subtopics: ["Callbacks", "Promises & .then()", "async/await", "Promise.all & allSettled", "Error Handling in async", "AbortController"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `// Parallel fetches with error handling\nasync function loadDashboard(userId) {\n  const [profile, posts, notifications] = await Promise.all([\n    fetch(\`/users/\${userId}\`).then(r => r.json()),\n    fetch(\`/posts?author=\${userId}\`).then(r => r.json()),\n    fetch(\`/notifications?userId=\${userId}\`).then(r => r.json()),\n  ]);\n  return { profile, posts, notifications };\n}`,
      codeLanguage: "javascript",
    },
    {
      id: "js-dom",
      title: "DOM Manipulation",
      subtopics: ["querySelector & querySelectorAll", "createElement & appendChild", "Event Listeners", "classList & dataset", "IntersectionObserver", "MutationObserver"],
      difficulty: "beginner",
      estimatedMinutes: 13,
      xpReward: 140,
      code: `// Lazy-load images as they enter viewport\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      img.classList.add("loaded");\n      observer.unobserve(img);\n    }\n  });\n});\n\ndocument.querySelectorAll("img[data-src]").forEach((img) => observer.observe(img));`,
      codeLanguage: "javascript",
    },
    {
      id: "js-classes",
      title: "JavaScript Classes & OOP",
      subtopics: ["class & constructor", "Inheritance (extends)", "Private Fields (#)", "Static Methods", "Getters & Setters", "Mixins"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `class EventEmitter {\n  #listeners = new Map();\n\n  on(event, fn) {\n    if (!this.#listeners.has(event)) this.#listeners.set(event, []);\n    this.#listeners.get(event).push(fn);\n    return this;\n  }\n\n  emit(event, ...args) {\n    this.#listeners.get(event)?.forEach((fn) => fn(...args));\n    return this;\n  }\n\n  off(event, fn) {\n    const fns = this.#listeners.get(event) ?? [];\n    this.#listeners.set(event, fns.filter((f) => f !== fn));\n    return this;\n  }\n}`,
      codeLanguage: "javascript",
    },
    {
      id: "js-es6-features",
      title: "ES6+ Power Features",
      subtopics: ["Destructuring", "Spread & Rest", "Optional Chaining (?.)", "Nullish Coalescing (??)", "Array Methods (flatMap, at)", "Object.entries & fromEntries"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `const user = await getUser(id);\n\n// Optional chaining + nullish coalescing\nconst city = user?.address?.city ?? "Unknown";\n\n// Destructuring with defaults\nconst { name = "Guest", role = "viewer", ...rest } = user;\n\n// Array methods\nconst tags = responses\n  .flatMap((r) => r.tags)\n  .filter((t, i, arr) => arr.indexOf(t) === i);\n\n// Object transformation\nconst normalized = Object.fromEntries(\n  Object.entries(config).map(([k, v]) => [k.toLowerCase(), v])\n);`,
      codeLanguage: "javascript",
    },
    {
      id: "js-error-handling",
      title: "Error Handling Mastery",
      subtopics: ["try/catch/finally", "Custom Error Classes", "Error Chaining (cause)", "Promise Rejection Handling", "Global Error Handlers", "Retry Logic"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `class NetworkError extends Error {\n  constructor(message, { status, url, cause } = {}) {\n    super(message, { cause });\n    this.name = "NetworkError";\n    this.status = status;\n    this.url = url;\n  }\n}\n\nasync function fetchWithRetry(url, retries = 3) {\n  for (let attempt = 1; attempt <= retries; attempt++) {\n    try {\n      const res = await fetch(url);\n      if (!res.ok) throw new NetworkError(\`HTTP \${res.status}\`, { status: res.status, url });\n      return await res.json();\n    } catch (err) {\n      if (attempt === retries) throw err;\n      await new Promise((r) => setTimeout(r, 2 ** attempt * 200));\n    }\n  }\n}`,
      codeLanguage: "javascript",
    },
    {
      id: "js-modules",
      title: "Modules & Tooling",
      subtopics: ["ES Modules (import/export)", "Dynamic import()", "Module Resolution", "Vite & Bundlers", "Tree Shaking", "TypeScript Interop"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
    },
    {
      id: "js-closures",
      title: "Closures & Scope",
      subtopics: ["Lexical Scope", "Closure Definition", "IIFE Pattern", "Module Pattern", "Memory & Closures", "Partial Application"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `// Closure creates a private counter\nfunction makeCounter(start = 0, step = 1) {\n  let count = start;\n  return {\n    increment: () => (count += step),\n    decrement: () => (count -= step),\n    reset:     () => (count = start),\n    get value() { return count; },\n  };\n}\n\nconst score = makeCounter(0, 10);\nscore.increment(); // 10\nscore.increment(); // 20\nscore.reset();     // 0`,
      codeLanguage: "javascript",
    },
    {
      id: "js-iterators",
      title: "Iterators & Generators",
      subtopics: ["Symbol.iterator", "for...of", "Generator Functions", "yield & yield*", "Async Generators", "Infinite Sequences"],
      difficulty: "advanced",
      estimatedMinutes: 15,
      xpReward: 165,
      code: `function* range(start, end, step = 1) {\n  for (let i = start; i < end; i += step) yield i;\n}\n\nasync function* streamLines(url) {\n  const res = await fetch(url);\n  const reader = res.body.getReader();\n  const decoder = new TextDecoder();\n  let buffer = "";\n  while (true) {\n    const { done, value } = await reader.read();\n    if (done) break;\n    buffer += decoder.decode(value);\n    const lines = buffer.split("\\n");\n    buffer = lines.pop() ?? "";\n    for (const line of lines) yield line;\n  }\n}`,
      codeLanguage: "javascript",
    },
  ],
};

// ─────────────────────────────────────────────
// PYTHON QUEST — extra lessons
// ─────────────────────────────────────────────

const pyExpansionSpec: RoadmapTrackSpec = {
  id: "python-quest",
  title: "Python Quest",
  description: "",
  icon: "🐍",
  color: "#3776AB",
  gradient: "from-blue-500 to-green-500",
  category: "language",
  guide: "pixel",
  world: "Python Highlands",
  worldEmoji: "🐍",
  topics: [
    {
      id: "py-dicts",
      title: "Dictionaries & Sets",
      subtopics: ["dict Methods", "Dictionary Comprehensions", "defaultdict & Counter", "Sets & Frozensets", "Set Operations", "OrderedDict"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `from collections import Counter, defaultdict\n\nwords = "the quick brown fox jumps over the lazy dog".split()\nfreq = Counter(words)\nprint(freq.most_common(3))  # [('the', 2), ...]\n\n# Group words by length\nby_len = defaultdict(list)\nfor word in words:\n    by_len[len(word)].append(word)\n\n# Dict comprehension\nsquares = {n: n**2 for n in range(1, 11) if n % 2 == 0}`,
      codeLanguage: "python",
    },
    {
      id: "py-oop",
      title: "Object-Oriented Python",
      subtopics: ["Classes & __init__", "Inheritance & super()", "Dunder Methods", "Class & Static Methods", "Properties", "Abstract Classes"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `from abc import ABC, abstractmethod\nfrom functools import total_ordering\n\n@total_ordering\nclass Card(ABC):\n    def __init__(self, suit: str, rank: int):\n        self.suit = suit\n        self.rank = rank\n\n    def __repr__(self) -> str:\n        return f"{self.rank}{self.suit}"\n\n    def __eq__(self, other) -> bool:\n        return self.rank == other.rank\n\n    def __lt__(self, other) -> bool:\n        return self.rank < other.rank\n\n    @abstractmethod\n    def value(self) -> int: ...`,
      codeLanguage: "python",
    },
    {
      id: "py-decorators",
      title: "Decorators & Metaprogramming",
      subtopics: ["Function Decorators", "Class Decorators", "functools.wraps", "@property & @cached_property", "Decorator Factories", "__getattr__ & __setattr__"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `import functools, time\n\ndef retry(max_attempts=3, delay=1.0):\n    def decorator(fn):\n        @functools.wraps(fn)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return fn(*args, **kwargs)\n                except Exception as exc:\n                    if attempt == max_attempts:\n                        raise\n                    time.sleep(delay * 2 ** (attempt - 1))\n        return wrapper\n    return decorator\n\n@retry(max_attempts=5, delay=0.5)\ndef fetch_data(url): ...\n`,
      codeLanguage: "python",
    },
    {
      id: "py-async",
      title: "Async Python",
      subtopics: ["asyncio Basics", "async def & await", "asyncio.gather", "aiohttp", "Async Context Managers", "Task Groups"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `import asyncio\nimport aiohttp\n\nasync def fetch(session, url):\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def fetch_all(urls):\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch(session, url) for url in urls]\n        return await asyncio.gather(*tasks, return_exceptions=True)\n\nresults = asyncio.run(fetch_all([\n    "https://api.github.com/users/alice",\n    "https://api.github.com/users/bob",\n]))`,
      codeLanguage: "python",
    },
    {
      id: "py-dataclasses",
      title: "Dataclasses & Pydantic",
      subtopics: ["@dataclass", "field() & defaults", "__post_init__", "Pydantic BaseModel", "Field Validators", "Model Serialization"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 150,
      code: `from dataclasses import dataclass, field\nfrom pydantic import BaseModel, EmailStr, field_validator\n\n@dataclass\nclass Vector:\n    x: float\n    y: float\n    z: float = 0.0\n    tags: list[str] = field(default_factory=list)\n\n    def magnitude(self) -> float:\n        return (self.x**2 + self.y**2 + self.z**2) ** 0.5\n\nclass UserCreate(BaseModel):\n    name: str\n    email: EmailStr\n    age: int\n\n    @field_validator("age")\n    @classmethod\n    def age_must_be_positive(cls, v):\n        if v < 0: raise ValueError("age must be positive")\n        return v`,
      codeLanguage: "python",
    },
    {
      id: "py-comprehensions",
      title: "Comprehensions & Functional",
      subtopics: ["List Comprehensions", "Generator Expressions", "Dict & Set Comprehensions", "map & filter", "functools (reduce, partial)", "itertools"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
    },
    {
      id: "py-file-io",
      title: "File I/O & Data Formats",
      subtopics: ["open() & with statement", "Reading & Writing Text", "CSV with csv module", "JSON parsing", "pathlib.Path", "shutil & os"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `import json\nfrom pathlib import Path\nimport csv\n\n# Pathlib\ndata_dir = Path("data")\ndata_dir.mkdir(exist_ok=True)\n\n# JSON round-trip\nconfig = {"debug": True, "port": 8080}\n(data_dir / "config.json").write_text(json.dumps(config, indent=2))\nloaded = json.loads((data_dir / "config.json").read_text())\n\n# CSV reading\nwith open("users.csv", newline="") as f:\n    for row in csv.DictReader(f):\n        print(row["name"], row["email"])`,
      codeLanguage: "python",
    },
    {
      id: "py-testing",
      title: "Testing with pytest",
      subtopics: ["pytest Basics", "Fixtures", "Parametrize", "Mocking (unittest.mock)", "Coverage", "conftest.py"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 150,
      code: `import pytest\nfrom unittest.mock import patch, MagicMock\n\n@pytest.fixture\ndef sample_user():\n    return {"id": 1, "name": "Alice", "email": "alice@example.com"}\n\n@pytest.mark.parametrize("price,qty,expected", [\n    (10, 3, 30),\n    (5.5, 2, 11.0),\n    (0, 100, 0),\n])\ndef test_calculate_total(price, qty, expected):\n    assert calculate_total(price, qty) == expected\n\ndef test_send_email_calls_smtp(sample_user):\n    with patch("myapp.mailer.smtplib.SMTP") as mock_smtp:\n        send_welcome_email(sample_user)\n        mock_smtp.return_value.__enter__.return_value.sendmail.assert_called_once()`,
      codeLanguage: "python",
    },
  ],
};

// ─────────────────────────────────────────────
// REACT REALM — extra lessons
// ─────────────────────────────────────────────

const reactExpansionSpec: RoadmapTrackSpec = {
  id: "react-realm",
  title: "React Realm",
  description: "",
  icon: "⚛️",
  color: "#61DAFB",
  gradient: "from-cyan-400 to-blue-500",
  category: "techstack",
  guide: "stackie",
  world: "Component Kingdom",
  worldEmoji: "⚛️",
  topics: [
    {
      id: "react-hooks",
      title: "React Hooks Deep Dive",
      subtopics: ["useState patterns", "useEffect cleanup", "useRef & forwardRef", "useReducer", "useId", "useDeferredValue"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `function useLocalStorage<T>(key: string, initial: T) {\n  const [value, setValue] = useState<T>(() => {\n    try {\n      const stored = localStorage.getItem(key);\n      return stored ? JSON.parse(stored) : initial;\n    } catch {\n      return initial;\n    }\n  });\n\n  const set = useCallback((next: T | ((prev: T) => T)) => {\n    setValue((prev) => {\n      const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;\n      localStorage.setItem(key, JSON.stringify(resolved));\n      return resolved;\n    });\n  }, [key]);\n\n  return [value, set] as const;\n}`,
      codeLanguage: "tsx",
    },
    {
      id: "react-context",
      title: "Context & State Patterns",
      subtopics: ["createContext", "useContext", "Context + useReducer", "Zustand", "Jotai Atoms", "Avoiding Re-renders"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `const ThemeCtx = createContext<{ theme: string; toggle: () => void } | null>(null);\n\nexport function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const [theme, setTheme] = useState<"light" | "dark">("light");\n  const toggle = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);\n\n  return (\n    <ThemeCtx.Provider value={{ theme, toggle }}>\n      {children}\n    </ThemeCtx.Provider>\n  );\n}\n\nexport function useTheme() {\n  const ctx = useContext(ThemeCtx);\n  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");\n  return ctx;\n}`,
      codeLanguage: "tsx",
    },
    {
      id: "react-performance",
      title: "React Performance",
      subtopics: ["React.memo", "useMemo & useCallback", "Virtualization (react-window)", "Code Splitting (lazy)", "Profiler", "Concurrent Features (useTransition)"],
      difficulty: "advanced",
      estimatedMinutes: 15,
      xpReward: 165,
      code: `import { memo, useMemo, useTransition, lazy, Suspense } from "react";\n\nconst HeavyList = lazy(() => import("./HeavyList"));\n\nconst MemoRow = memo(function Row({ item }: { item: Item }) {\n  return <li>{item.name}</li>;\n});\n\nfunction SearchPage({ items }: { items: Item[] }) {\n  const [query, setQuery] = useState("");\n  const [isPending, startTransition] = useTransition();\n\n  const filtered = useMemo(\n    () => items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())),\n    [items, query]\n  );\n\n  return (\n    <>\n      <input onChange={(e) => startTransition(() => setQuery(e.target.value))} />\n      {isPending && <span>Filtering...</span>}\n      <Suspense fallback={<Spinner />}>\n        <HeavyList items={filtered} Row={MemoRow} />\n      </Suspense>\n    </>\n  );\n}`,
      codeLanguage: "tsx",
    },
    {
      id: "react-forms",
      title: "Forms & Validation",
      subtopics: ["Controlled Components", "React Hook Form", "Zod Schema Validation", "Field Arrays", "Server Actions", "Optimistic UI"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `import { useForm } from "react-hook-form";\nimport { zodResolver } from "@hookform/resolvers/zod";\nimport { z } from "zod";\n\nconst schema = z.object({\n  email: z.string().email(),\n  age: z.number().min(18, "Must be 18+"),\n});\n\ntype Form = z.infer<typeof schema>;\n\nexport function SignupForm() {\n  const { register, handleSubmit, formState: { errors } } = useForm<Form>({\n    resolver: zodResolver(schema),\n  });\n\n  return (\n    <form onSubmit={handleSubmit(console.log)}>\n      <input {...register("email")} />\n      {errors.email && <p>{errors.email.message}</p>}\n    </form>\n  );\n}`,
      codeLanguage: "tsx",
    },
    {
      id: "react-testing",
      title: "Testing React Apps",
      subtopics: ["React Testing Library", "userEvent", "Mocking API calls (MSW)", "Custom Hook Testing (renderHook)", "Accessibility Testing", "Storybook"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
    },
    {
      id: "react-patterns",
      title: "Advanced Component Patterns",
      subtopics: ["Compound Components", "Render Props", "Higher-Order Components", "Headless Components", "Slots Pattern", "Polymorphic Components"],
      difficulty: "advanced",
      estimatedMinutes: 15,
      xpReward: 165,
      code: `// Compound component pattern\nconst AccordionContext = createContext<{ open: string; toggle: (id: string) => void } | null>(null);\n\nfunction Accordion({ children }: { children: ReactNode }) {\n  const [open, setOpen] = useState("");\n  const toggle = (id: string) => setOpen((o) => (o === id ? "" : id));\n  return <AccordionContext.Provider value={{ open, toggle }}>{children}</AccordionContext.Provider>;\n}\n\nfunction Item({ id, title, children }: { id: string; title: string; children: ReactNode }) {\n  const { open, toggle } = useContext(AccordionContext)!;\n  return (\n    <div>\n      <button onClick={() => toggle(id)}>{title}</button>\n      {open === id && <div>{children}</div>}\n    </div>\n  );\n}\n\nAccordion.Item = Item;\n// Usage: <Accordion><Accordion.Item id="a" title="Q1">...</Accordion.Item></Accordion>`,
      codeLanguage: "tsx",
    },
    {
      id: "react-data-fetching",
      title: "Data Fetching & Caching",
      subtopics: ["TanStack Query", "useQuery & useMutation", "Stale-While-Revalidate", "Optimistic Updates", "Infinite Scroll", "SWR"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";\n\nfunction PostList() {\n  const qc = useQueryClient();\n\n  const { data: posts } = useQuery({\n    queryKey: ["posts"],\n    queryFn: () => fetch("/api/posts").then((r) => r.json()),\n    staleTime: 1000 * 60 * 5,\n  });\n\n  const create = useMutation({\n    mutationFn: (title: string) =>\n      fetch("/api/posts", { method: "POST", body: JSON.stringify({ title }) }).then((r) => r.json()),\n    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),\n  });\n\n  return <button onClick={() => create.mutate("New post")}>Add</button>;\n}`,
      codeLanguage: "tsx",
    },
  ],
};

// ─────────────────────────────────────────────
// CSS SORCERY — extra lessons
// ─────────────────────────────────────────────

const cssExpansionSpec: RoadmapTrackSpec = {
  id: "css-sorcery",
  title: "CSS Sorcery",
  description: "",
  icon: "🎨",
  color: "#EC4899",
  gradient: "from-pink-400 to-purple-600",
  category: "ui",
  guide: "sally",
  world: "Style Academy",
  worldEmoji: "🎨",
  topics: [
    {
      id: "css-variables",
      title: "CSS Custom Properties",
      subtopics: ["--variable Syntax", "var() with Fallbacks", "Theming with Variables", "JavaScript & CSS Variables", "Scoped Variables", "@property & Types"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `:root {\n  --color-primary: #8B5CF6;\n  --color-primary-dark: color-mix(in srgb, var(--color-primary) 80%, black);\n  --spacing-unit: 0.25rem;\n  --radius: 0.5rem;\n}\n\n.card {\n  background: var(--color-primary);\n  border-radius: var(--radius);\n  padding: calc(var(--spacing-unit) * 4);\n}\n\n/* Dark mode override */\n@media (prefers-color-scheme: dark) {\n  :root { --color-primary: #A78BFA; }\n}`,
      codeLanguage: "css",
    },
    {
      id: "css-responsive",
      title: "Responsive Design",
      subtopics: ["Mobile-First Approach", "Media Queries", "Container Queries", "clamp() & fluid sizing", "Viewport Units (dvh, svh)", "Breakpoint Strategy"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `/* Fluid typography */\nbody {\n  font-size: clamp(1rem, 2.5vw, 1.25rem);\n}\n\n/* Container queries */\n.card-grid {\n  container-type: inline-size;\n}\n\n@container (min-width: 600px) {\n  .card { display: grid; grid-template-columns: 1fr 2fr; }\n}\n\n/* Dynamic viewport */\n.hero {\n  min-height: 100dvh; /* accounts for mobile browser chrome */\n}`,
      codeLanguage: "css",
    },
    {
      id: "css-transforms",
      title: "Transforms & 3D",
      subtopics: ["translate & rotate", "scale & skew", "3D Transforms (perspective, rotateY)", "transform-origin", "matrix3d", "GPU Acceleration (will-change)"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `.card-flip {\n  perspective: 1000px;\n}\n\n.card-inner {\n  transform-style: preserve-3d;\n  transition: transform 0.6s ease;\n}\n\n.card-flip:hover .card-inner {\n  transform: rotateY(180deg);\n}\n\n.card-front, .card-back {\n  backface-visibility: hidden;\n  position: absolute;\n  inset: 0;\n}\n\n.card-back {\n  transform: rotateY(180deg);\n}`,
      codeLanguage: "css",
    },
    {
      id: "css-typography",
      title: "Typography & Web Fonts",
      subtopics: ["font-display & FOUT", "Variable Fonts", "line-height & letter-spacing", "text-wrap: balance", "Optical Sizing", "Font Stacks & System Fonts"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `@font-face {\n  font-family: "Geist";\n  src: url("/fonts/Geist.woff2") format("woff2");\n  font-display: swap;\n  font-weight: 100 900; /* variable font */\n}\n\nh1 {\n  font-variation-settings: "wght" 700, "ital" 0;\n  text-wrap: balance;\n  font-optical-sizing: auto;\n}\n\np {\n  max-width: 65ch; /* typographic line length */\n  line-height: 1.6;\n}`,
      codeLanguage: "css",
    },
    {
      id: "css-scroll-effects",
      title: "Scroll & View Transitions",
      subtopics: ["scroll-behavior", "Scroll Snap", "@scroll-timeline", "View Transitions API", "Sticky Positioning", "position: sticky pitfalls"],
      difficulty: "intermediate",
      estimatedMinutes: 13,
      xpReward: 145,
      code: `.gallery {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n}\n\n.gallery > * {\n  scroll-snap-align: start;\n  flex: 0 0 80%;\n}\n\n/* View Transitions */\n@view-transition { navigation: auto; }\n\n::view-transition-old(root) { animation: fade-out 0.2s; }\n::view-transition-new(root) { animation: fade-in 0.2s; }`,
      codeLanguage: "css",
    },
    {
      id: "css-advanced-layouts",
      title: "Advanced Layouts",
      subtopics: ["Subgrid", "Masonry Layout", "Aspect Ratio", "Logical Properties", "Multi-column Layout", "CSS Anchor Positioning"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 150,
      code: `/* Subgrid for aligned cells across rows */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.card {\n  display: grid;\n  grid-row: span 3;\n  grid-template-rows: subgrid;\n}\n\n/* Masonry (Chrome 135+) */\n.masonry {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-template-rows: masonry;\n}`,
      codeLanguage: "css",
    },
    {
      id: "css-tailwind",
      title: "Tailwind CSS Mastery",
      subtopics: ["Utility Classes", "Responsive Prefixes", "Arbitrary Values", "@apply & Plugins", "tailwind.config Customization", "Dark Mode Strategy"],
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 135,
      code: `{/* Tailwind responsive card */}\n<div className="rounded-2xl border border-primary/20 bg-gradient-to-br\n               from-primary/5 to-secondary/5 p-6\n               shadow-sm hover:shadow-md transition-shadow\n               sm:p-8 lg:grid lg:grid-cols-2 lg:gap-8">\n  <h2 className="text-2xl font-bold tracking-tight text-foreground\n                 sm:text-3xl md:text-balance">\n    Card Title\n  </h2>\n  <p className="mt-4 text-muted-foreground lg:mt-0">\n    Content here.\n  </p>\n</div>`,
      codeLanguage: "tsx",
    },
  ],
};

// ─────────────────────────────────────────────
// ALGORITHM ARENA — extra lessons
// ─────────────────────────────────────────────

const algoExpansionSpec: RoadmapTrackSpec = {
  id: "algorithm-arena",
  title: "Algorithm Arena",
  description: "",
  icon: "🧩",
  color: "#F59E0B",
  gradient: "from-orange-400 to-red-500",
  category: "algorithms",
  guide: "algo",
  world: "Algorithm Colosseum",
  worldEmoji: "🏟️",
  topics: [
    {
      id: "algo-data-structures",
      title: "Essential Data Structures",
      subtopics: ["Arrays & Dynamic Arrays", "Linked Lists", "Stacks & Queues", "Hash Tables", "Heaps (Min/Max)", "Deques"],
      difficulty: "beginner",
      estimatedMinutes: 14,
      xpReward: 155,
      code: `class MinHeap {\n  #data: number[] = [];\n\n  push(val: number) {\n    this.#data.push(val);\n    this.#bubbleUp(this.#data.length - 1);\n  }\n\n  pop(): number | undefined {\n    if (!this.#data.length) return undefined;\n    const top = this.#data[0];\n    const last = this.#data.pop()!;\n    if (this.#data.length) { this.#data[0] = last; this.#sinkDown(0); }\n    return top;\n  }\n\n  get size() { return this.#data.length; }\n\n  #bubbleUp(i: number) { /* ... */ }\n  #sinkDown(i: number) { /* ... */ }\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-trees",
      title: "Trees & Binary Search Trees",
      subtopics: ["Binary Trees", "BST Insert & Search", "Tree Traversals (DFS, BFS)", "Balanced Trees (AVL)", "Tries", "Segment Trees"],
      difficulty: "intermediate",
      estimatedMinutes: 15,
      xpReward: 165,
      code: `class BST<T> {\n  root: Node<T> | null = null;\n\n  insert(val: T) {\n    const node = { val, left: null, right: null };\n    if (!this.root) { this.root = node; return; }\n    let cur = this.root;\n    while (true) {\n      if (val < cur.val) {\n        if (!cur.left) { cur.left = node; return; }\n        cur = cur.left;\n      } else {\n        if (!cur.right) { cur.right = node; return; }\n        cur = cur.right;\n      }\n    }\n  }\n\n  inOrder(node = this.root, out: T[] = []): T[] {\n    if (!node) return out;\n    this.inOrder(node.left, out);\n    out.push(node.val);\n    this.inOrder(node.right, out);\n    return out;\n  }\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-graphs",
      title: "Graphs & Traversals",
      subtopics: ["Graph Representations", "BFS & DFS", "Topological Sort", "Dijkstra's Algorithm", "Union-Find (DSU)", "Cycle Detection"],
      difficulty: "intermediate",
      estimatedMinutes: 16,
      xpReward: 175,
      code: `function dijkstra(graph: Map<number, [number, number][]>, src: number): Map<number, number> {\n  const dist = new Map<number, number>();\n  const pq = new MinHeap<[number, number]>(); // [dist, node]\n  pq.push([0, src]);\n  dist.set(src, 0);\n\n  while (pq.size) {\n    const [d, u] = pq.pop()!;\n    if (d > (dist.get(u) ?? Infinity)) continue;\n    for (const [v, w] of graph.get(u) ?? []) {\n      const nd = d + w;\n      if (nd < (dist.get(v) ?? Infinity)) {\n        dist.set(v, nd);\n        pq.push([nd, v]);\n      }\n    }\n  }\n  return dist;\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-dynamic-programming",
      title: "Dynamic Programming",
      subtopics: ["Memoization (Top-Down)", "Tabulation (Bottom-Up)", "Knapsack Problem", "Longest Common Subsequence", "Coin Change", "DP on Grids"],
      difficulty: "advanced",
      estimatedMinutes: 17,
      xpReward: 185,
      code: `// Coin change — minimum coins\nfunction coinChange(coins: number[], amount: number): number {\n  const dp = Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (coin <= i) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-two-pointers",
      title: "Two Pointers & Sliding Window",
      subtopics: ["Two Pointer Technique", "Fast & Slow Pointers", "Sliding Window Fixed", "Sliding Window Variable", "Kadane's Algorithm", "Merge Intervals"],
      difficulty: "intermediate",
      estimatedMinutes: 14,
      xpReward: 160,
      code: `// Longest substring without repeating chars\nfunction lengthOfLongestSubstring(s: string): number {\n  const seen = new Map<string, number>();\n  let left = 0, max = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    const ch = s[right];\n    if (seen.has(ch) && seen.get(ch)! >= left) {\n      left = seen.get(ch)! + 1;\n    }\n    seen.set(ch, right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-backtracking",
      title: "Backtracking & Recursion",
      subtopics: ["Permutations & Combinations", "Subsets", "N-Queens", "Sudoku Solver", "Pruning Techniques", "Memoized Backtracking"],
      difficulty: "advanced",
      estimatedMinutes: 16,
      xpReward: 180,
      code: `// Generate all subsets\nfunction subsets(nums: number[]): number[][] {\n  const result: number[][] = [];\n\n  function backtrack(start: number, current: number[]) {\n    result.push([...current]);\n    for (let i = start; i < nums.length; i++) {\n      current.push(nums[i]);\n      backtrack(i + 1, current);\n      current.pop(); // undo choice\n    }\n  }\n\n  backtrack(0, []);\n  return result;\n}`,
      codeLanguage: "typescript",
    },
    {
      id: "algo-bit-manipulation",
      title: "Bit Manipulation",
      subtopics: ["AND, OR, XOR, NOT", "Left & Right Shifts", "Checking & Setting Bits", "Counting Set Bits", "Power of Two", "XOR tricks"],
      difficulty: "advanced",
      estimatedMinutes: 14,
      xpReward: 165,
      code: `// Count set bits (Hamming weight)\nfunction hammingWeight(n: number): number {\n  let count = 0;\n  while (n !== 0) {\n    count += n & 1;   // check LSB\n    n >>>= 1;         // unsigned right shift\n  }\n  return count;\n}\n\n// Power of two check\nconst isPowerOfTwo = (n: number) => n > 0 && (n & (n - 1)) === 0;\n\n// Swap without temp\nlet a = 5, b = 3;\na ^= b; b ^= a; a ^= b; // a=3, b=5`,
      codeLanguage: "typescript",
    },
  ],
};

// ─────────────────────────────────────────────
// BUILD & EXPORT EXPANSION LESSONS
// ─────────────────────────────────────────────

export const jsExpansionLessons: Lesson[] = buildRoadmapLessons(jsExpansionSpec);
export const pyExpansionLessons: Lesson[] = buildRoadmapLessons(pyExpansionSpec);
export const reactExpansionLessons: Lesson[] = buildRoadmapLessons(reactExpansionSpec);
export const cssExpansionLessons: Lesson[] = buildRoadmapLessons(cssExpansionSpec);
export const algoExpansionLessons: Lesson[] = buildRoadmapLessons(algoExpansionSpec);

export const allExpansionLessons: Lesson[] = [
  ...jsExpansionLessons,
  ...pyExpansionLessons,
  ...reactExpansionLessons,
  ...cssExpansionLessons,
  ...algoExpansionLessons,
];

// Lesson IDs by track — used to extend existing track lessonIds in tracks.ts
export const jsExpansionIds = jsExpansionLessons.map((l) => l.id);
export const pyExpansionIds = pyExpansionLessons.map((l) => l.id);
export const reactExpansionIds = reactExpansionLessons.map((l) => l.id);
export const cssExpansionIds = cssExpansionLessons.map((l) => l.id);
export const algoExpansionIds = algoExpansionLessons.map((l) => l.id);
