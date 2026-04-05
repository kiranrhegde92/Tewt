import { Lesson, Track } from "@/types";
import {
  RoadmapTrackSpec,
  buildRoadmapLessons,
  buildRoadmapTrack,
} from "./shared";

const systemsRoadmapSpecs: RoadmapTrackSpec[] = [
  {
    id: "computer-science-foundations",
    title: "Computer Science Fundamentals",
    description:
      "Learn the core ideas that show up in every strong engineering interview and every reliable system design conversation.",
    icon: "\u{1F9E0}",
    color: "#64748B",
    gradient: "from-slate-500 to-sky-600",
    category: "algorithms",
    guide: "algo",
    world: "Logic Lab",
    worldEmoji: "\u{1F9EA}",
    topics: [
      {
        id: "cs-data-structures",
        title: "Data Structures",
        subtopics: [
          "Arrays",
          "Linked lists",
          "Stacks & Queues",
          "Hash maps",
          "Trees",
          "Graphs",
          "Heaps",
          "Tries",
        ],
      },
      {
        id: "cs-algorithms",
        title: "Algorithms",
        subtopics: [
          "Sorting",
          "Searching",
          "Recursion",
          "Dynamic programming",
          "Greedy",
          "Backtracking",
          "Complexity (Big-O)",
        ],
      },
      {
        id: "cs-operating-systems",
        title: "OS Concepts",
        subtopics: [
          "Processes & Threads",
          "Memory management",
          "File systems",
          "Concurrency",
          "Deadlocks",
        ],
      },
      {
        id: "cs-networking-fundamentals",
        title: "Networking Fundamentals",
        subtopics: [
          "OSI model",
          "TCP vs UDP",
          "HTTP/2 & HTTP/3",
          "WebRTC",
          "TLS/SSL",
        ],
      },
      {
        id: "cs-design-patterns",
        title: "Design Patterns",
        subtopics: [
          "SOLID principles",
          "MVC/MVVM",
          "Singleton",
          "Factory",
          "Observer",
          "Dependency Injection",
        ],
      },
      {
        id: "cs-system-design",
        title: "System Design",
        subtopics: [
          "Scalability",
          "CAP theorem",
          "Microservices vs Monolith",
          "Message queues",
          "Rate limiting",
          "Caching strategies",
        ],
      },
    ],
  },
  {
    id: "testing-quality-lab",
    title: "Testing & Quality",
    description:
      "Build the habit of catching bugs early, proving behavior clearly, and measuring quality before users do it for you.",
    icon: "\u{1F9EA}",
    color: "#EF4444",
    gradient: "from-rose-500 to-orange-500",
    category: "tools",
    guide: "bug",
    world: "Quality Lab",
    worldEmoji: "\u{1F52C}",
    topics: [
      {
        id: "testing-types",
        title: "Testing Types",
        subtopics: [
          "Unit testing",
          "Integration testing",
          "E2E testing",
          "Load testing",
          "Smoke testing",
        ],
      },
      {
        id: "backend-testing",
        title: "Backend Testing",
        subtopics: ["Jest (Node)", "Pytest", "JUnit", "Go testing", "Supertest"],
      },
      {
        id: "code-quality",
        title: "Code Quality",
        subtopics: [
          "Static analysis",
          "Code coverage",
          "Linting",
          "Formatting",
          "Pre-commit hooks",
        ],
      },
      {
        id: "performance-testing",
        title: "Performance Testing",
        subtopics: ["k6", "Locust", "Apache JMeter", "Lighthouse"],
      },
    ],
  },
  {
    id: "architecture-patterns",
    title: "Architecture & Patterns",
    description:
      "Understand how teams structure larger systems so code, services, and deployment choices remain maintainable.",
    icon: "\u{1F3D7}\u{FE0F}",
    color: "#0F766E",
    gradient: "from-teal-500 to-cyan-600",
    category: "techstack",
    guide: "stackie",
    world: "Blueprint City",
    worldEmoji: "\u{1F3D9}\u{FE0F}",
    topics: [
      {
        id: "arch-architecture-styles",
        title: "Architecture Styles",
        subtopics: [
          "Monolith",
          "Microservices",
          "Serverless",
          "Event-driven",
          "Hexagonal (Ports & Adapters)",
        ],
      },
      {
        id: "arch-domain-driven-design",
        title: "Domain-Driven Design",
        subtopics: [
          "Bounded contexts",
          "Aggregates",
          "Repositories",
          "CQRS",
          "Event sourcing",
        ],
      },
      {
        id: "arch-api-patterns",
        title: "API Patterns",
        subtopics: [
          "BFF (Backend for Frontend)",
          "API Gateway",
          "Circuit breaker",
          "Saga pattern",
        ],
      },
      {
        id: "arch-cloud-patterns",
        title: "Cloud Patterns",
        subtopics: [
          "Stateless apps",
          "12-factor app",
          "Blue-green deployment",
          "Canary releases",
          "Feature flags",
        ],
      },
    ],
  },
  {
    id: "soft-skills-tooling",
    title: "Soft Skills & Tooling",
    description:
      "Combine communication, collaboration, and developer tooling so you can ship with fewer misunderstandings and less friction.",
    icon: "\u{1F9F0}",
    color: "#8B5CF6",
    gradient: "from-violet-500 to-fuchsia-600",
    category: "tools",
    guide: "pixel",
    world: "Guild Hall",
    worldEmoji: "\u{1F3F0}",
    topics: [
      {
        id: "soft-developer-tools",
        title: "Developer Tools",
        subtopics: [
          "VS Code / JetBrains",
          "Postman / Insomnia",
          "TablePlus / DBeaver",
          "Figma (basics)",
          "Terminal (zsh/fish)",
        ],
      },
      {
        id: "soft-collaboration",
        title: "Collaboration",
        subtopics: [
          "Agile / Scrum",
          "Jira / Linear / Notion",
          "Code reviews",
          "Pair programming",
          "Documentation (Markdown)",
        ],
      },
      {
        id: "soft-open-source",
        title: "Open Source",
        subtopics: [
          "Contributing to OSS",
          "Semantic versioning",
          "Changelogs",
          "GitHub Issues / PRs",
        ],
      },
      {
        id: "soft-career",
        title: "Career",
        subtopics: [
          "Portfolio projects",
          "Technical interviews",
          "System design interviews",
          "LeetCode / DSA practice",
          "Writing & blogging",
        ],
      },
    ],
  },
  {
    id: "web3-blockchain",
    title: "Web3 & Blockchain",
    description:
      "Learn the core building blocks behind decentralized apps, smart contracts, and the systems that connect them.",
    icon: "\u{26D3}\u{FE0F}",
    color: "#D97706",
    gradient: "from-amber-500 to-orange-600",
    category: "techstack",
    guide: "captain",
    world: "Chain Harbor",
    worldEmoji: "\u{1F3D6}\u{FE0F}",
    topics: [
      {
        id: "web3-blockchain-basics",
        title: "Blockchain Basics",
        subtopics: ["Consensus mechanisms", "Wallets", "Transactions", "Gas"],
      },
      {
        id: "web3-smart-contracts",
        title: "Smart Contracts",
        subtopics: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Wagmi"],
      },
      {
        id: "web3-protocols",
        title: "Protocols",
        subtopics: ["Ethereum", "Solana", "Polkadot", "IPFS"],
      },
      {
        id: "web3-defi-nfts",
        title: "DeFi & NFTs",
        subtopics: ["ERC-20", "ERC-721", "Uniswap", "Oracles (Chainlink)"],
      },
    ],
  },
];

const systemsLessonsByTrack = systemsRoadmapSpecs.map((spec) =>
  buildRoadmapLessons(spec)
);

export const systemsStackLessons: Lesson[] = systemsLessonsByTrack.flat();

export const systemsStackTracks: Track[] = systemsRoadmapSpecs.map((spec, index) =>
  buildRoadmapTrack(spec, systemsLessonsByTrack[index])
);
