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

const htmlCssMastery: RoadmapTrackSpec = {
  id: "html-css-mastery",
  title: "HTML & CSS Mastery",
  description:
    "Go beyond the basics and build deeper intuition for page structure, layouts, responsive behavior, motion, and quality.",
  icon: "\u{1F3A8}",
  color: "#0EA5E9",
  gradient: "from-sky-500 to-indigo-500",
  category: "ui",
  guide: "sally",
  world: "Style Observatory",
  worldEmoji: "\u{1F52D}",
  topics: [
    topic("htmlcss-doc-structure", "HTML Essentials and Document Structure", [
      "HTML Essentials",
      "Document Structure",
      "Text Content",
      "Lists & Tables",
    ]),
    topic("htmlcss-links-media", "Links, Navigation, and Media", [
      "Links & Navigation",
      "Images & Media",
      "Audio & Video",
      "Metadata",
      "Reusable Components",
    ]),
    topic("htmlcss-forms-semantic", "Forms, Validation, and Semantic Elements", [
      "Forms & Validation",
      "Semantic Elements",
      "Labels",
      "Errors",
      "Autocomplete",
    ]),
    topic("htmlcss-selectors-cascade", "Selectors, Specificity, and Cascade", [
      "Styling Essentials",
      "Selectors & Specificity",
      "Grouping Selectors",
      "Cascade & Inheritance",
      "At-rules",
    ]),
    topic("htmlcss-type-color-bg", "Typography, Colors, and Backgrounds", [
      "Typography",
      "Colors & Backgrounds",
      "Web Safe Fonts",
      "Units",
      "Functions",
    ]),
    topic("htmlcss-layout-positioning", "Positioning, Flexbox, and Grid", [
      "Positioning & Z-Index",
      "Flexbox Container",
      "Flexbox Align Items",
      "Grid Tracks",
      "Grid Item Align",
      "12-column Layout",
    ]),
    topic("htmlcss-responsive-patterns", "Responsive Layout Patterns", [
      "Layout Fundamentals",
      "Layout Patterns",
      "Responsive Design",
      "Responsive Components",
      "Media Queries",
      "@supports",
    ]),
    topic("htmlcss-custom-motion", "Custom Properties and Motion", [
      "Custom Properties",
      "Calc & Functions",
      "Transitions",
      "Transforms",
      "Animations",
      "Effects & Filters",
    ]),
    topic("htmlcss-quality", "Design Systems and Frontend Quality", [
      "Accessibility",
      "Design Systems",
      "Performance",
      "Debugging & Testing",
      "Tooling & Automation",
    ]),
  ],
};

const javaScriptDeepDive: RoadmapTrackSpec = {
  id: "javascript-deep-dive",
  title: "JavaScript Deep Dive",
  description:
    "Push past introductory syntax and build a real mental model for JavaScript behavior in apps and browsers.",
  icon: "\u{1F4D9}",
  color: "#F59E0B",
  gradient: "from-amber-400 to-orange-500",
  category: "language",
  guide: "pixel",
  world: "Runtime Library",
  worldEmoji: "\u{1F3DB}\u{FE0F}",
  topics: [
    topic("jsdeep-functions-scope", "Functions, Closures, and Scope", [
      "Function Declarations",
      "Parameters & Return Values",
      "Arrow Functions",
      "Closures",
      "Scope & Hoisting",
      "Strict Mode",
    ]),
    topic("jsdeep-arrays-collections", "Arrays, Sets, and Maps", [
      "Array Methods",
      "Searching",
      "Sorting",
      "Iteration",
      "Sets",
      "Maps",
    ]),
    topic("jsdeep-objects-classes", "Objects, Prototypes, and Classes", [
      "Object Properties",
      "Methods",
      "Constructors",
      "Prototypes",
      "Classes",
      "Inheritance",
    ]),
    topic("jsdeep-errors-debugging", "Errors and Debugging", [
      "try/catch",
      "Error Objects",
      "Console Debugging",
      "Breakpoints",
      "Assertions",
      "Async Debugging",
    ]),
    topic("jsdeep-dom-events", "DOM, Events, and Navigation", [
      "querySelector",
      "DOM Navigation",
      "Event Listeners",
      "Event Delegation",
      "Forms",
      "Animations",
    ]),
    topic("jsdeep-web-apis", "Web APIs, Storage, and Workers", [
      "Fetch API",
      "History API",
      "Storage API",
      "Geolocation API",
      "Validation API",
      "Web Workers",
    ]),
    topic("jsdeep-async-patterns", "Asynchronous JavaScript Patterns", [
      "Callbacks",
      "Promises",
      "async/await",
      "Event Loop",
      "Timers",
      "Concurrency Patterns",
    ]),
    topic("jsdeep-json-ajax", "JSON, AJAX, and Data Exchange", [
      "JSON.parse",
      "JSON.stringify",
      "AJAX Requests",
      "AJAX Responses",
      "API Clients",
      "Data Transformation",
    ]),
    topic("jsdeep-modules-meta", "Modules and Meta Programming", [
      "Modules Export",
      "Modules Import",
      "Dynamic Import",
      "Proxy",
      "Reflect",
      "Typed Arrays",
      "Array Buffers",
      "DataViews",
    ]),
  ],
};

const sqlMastery: RoadmapTrackSpec = {
  id: "sql-mastery",
  title: "SQL Mastery",
  description:
    "Build stronger query instincts by practicing filtering, joins, grouping, schema design, and defensive database work.",
  icon: "\u{1F4BE}",
  color: "#6366F1",
  gradient: "from-indigo-500 to-purple-600",
  category: "techstack",
  guide: "algo",
  world: "Query Hall",
  worldEmoji: "\u{1F3DB}\u{FE0F}",
  topics: [
    topic("sql-query-basics", "Query Basics and Filtering", [
      "SELECT",
      "DISTINCT",
      "WHERE",
      "ORDER BY",
      "Aliases",
      "AND/OR/NOT",
    ]),
    topic("sql-data-changes-nulls", "Inserts, Updates, Deletes, and Nulls", [
      "INSERT",
      "UPDATE",
      "DELETE",
      "NULL Handling",
      "LIMIT/TOP",
      "CASE",
    ]),
    topic("sql-joins-relations", "Joins, Unions, and Relational Thinking", [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN",
      "Self Join",
      "UNION",
    ]),
    topic("sql-aggregation-grouping", "Aggregation and Grouping", [
      "COUNT/SUM/AVG",
      "GROUP BY",
      "HAVING",
      "Subqueries",
      "EXISTS",
      "ANY/ALL",
    ]),
    topic("sql-schema-constraints", "Schema Design and Constraints", [
      "CREATE DATABASE",
      "CREATE TABLE",
      "ALTER TABLE",
      "Primary Keys",
      "Foreign Keys",
      "CHECK/DEFAULT",
    ]),
    topic("sql-views-procedures", "Views, Procedures, and Reusable Queries", [
      "Views",
      "Stored Procedures",
      "Parameters",
      "Reusable Queries",
      "Triggers",
      "Scheduling",
    ]),
    topic("sql-indexes-security", "Indexes, Data Types, and Query Security", [
      "Indexes",
      "Data Types",
      "Prepared Statements",
      "SQL Injection Defense",
      "Transactions",
      "Query Plans",
    ]),
  ],
};

const gitShellMastery: RoadmapTrackSpec = {
  id: "git-shell-mastery",
  title: "Git & Shell Mastery",
  description:
    "Strengthen your daily command line workflow with better Git habits, automation, and operational confidence.",
  icon: "\u{1F5A5}\u{FE0F}",
  color: "#F97316",
  gradient: "from-orange-500 to-amber-600",
  category: "tools",
  guide: "captain",
  world: "Command Deck",
  worldEmoji: "\u{1F6F0}\u{FE0F}",
  topics: [
    topic("gitshell-setup-snapshotting", "Git Setup and Snapshotting", [
      "Install & Config",
      "Init & Clone",
      "Status",
      "Add & Commit",
      "History",
      "Tags",
    ]),
    topic("gitshell-branch-merge", "Branches, Merge, and Workflow", [
      "Branches",
      "Merge",
      "Merge Conflicts",
      "Workflow Patterns",
      "Cherry-pick",
      "Best Practices",
    ]),
    topic("gitshell-remotes-collab", "Remotes, SSH, and Collaboration", [
      "Remotes",
      "Push & Pull",
      "SSH Keys",
      "Pull Requests",
      "GitHub Flow",
      "Pages",
    ]),
    topic("gitshell-undo-recovery", "Undo, Rebase, and Recovery", [
      "Restore",
      "Revert",
      "Reset",
      "Amend",
      "Rebase",
      "Recovery",
    ]),
    topic("gitshell-maintenance-advanced", "Advanced Git Maintenance", [
      ".gitignore",
      ".gitattributes",
      "Hooks",
      "Submodules",
      "Large Files",
      "Signing",
    ]),
    topic("gitshell-bash-fundamentals", "Bash Scripting Fundamentals", [
      "Shell Syntax",
      "Variables",
      "Operators",
      "If Statements",
      "Loops",
      "Functions",
      "Arrays",
    ]),
    topic("gitshell-bash-ops", "Permissions, Archives, and Scheduling", [
      "Pipes & Redirects",
      "Permissions",
      "Compression",
      "Processes",
      "Cron Jobs",
      "SSH",
    ]),
  ],
};

const accessibilityInclusiveWeb: RoadmapTrackSpec = {
  id: "accessibility-inclusive-web",
  title: "Accessibility & Inclusive Web",
  description:
    "Design interfaces that work for more people by treating semantics, focus, contrast, forms, and testing as first-class work.",
  icon: "\u{267F}\u{FE0F}",
  color: "#10B981",
  gradient: "from-emerald-500 to-lime-500",
  category: "ui",
  guide: "sally",
  world: "Access Studio",
  worldEmoji: "\u{1F3DB}\u{FE0F}",
  topics: [
    topic("a11y-foundations", "Accessibility Foundations", [
      "Accessibility Basics",
      "Diversity of Users",
      "Assistive Technology",
      "Keyboard Users",
      "Screen Readers",
    ]),
    topic("a11y-structure-landmarks", "Semantic Structure and Landmarks", [
      "Semantic Structure",
      "Landmarks",
      "Headings",
      "Reading Order",
      "Page Titles",
    ]),
    topic("a11y-buttons-links-focus", "Buttons, Links, and Focus", [
      "Buttons",
      "Links",
      "Link Text",
      "Visual Focus",
      "Skip Links",
    ]),
    topic("a11y-images-color-meaning", "Images, Contrast, and Meaning", [
      "Alternative Text",
      "Meaningful Images",
      "Decorative Images",
      "Color Meaning",
      "Color Contrast",
    ]),
    topic("a11y-forms-errors", "Accessible Forms and Error Recovery", [
      "Form Labels",
      "Field Instructions",
      "Autocomplete",
      "Errors",
      "Validation Feedback",
    ]),
    topic("a11y-zoom-text", "Zoom, Text Size, and Reflow", [
      "Text Size",
      "Page Zoom",
      "Responsive Reflow",
      "Spacing",
      "Readable Layouts",
    ]),
    topic("a11y-testing-audits", "Accessibility Testing and Audits", [
      "Keyboard Testing",
      "Screen Reader Checks",
      "Automated Audits",
      "Manual Review",
      "WCAG Thinking",
    ]),
  ],
};

const cyberSecurityEssentials: RoadmapTrackSpec = {
  id: "cybersecurity-essentials",
  title: "Cyber Security Essentials",
  description:
    "Build a stronger security mindset by learning threat models, network defense, web attacks, and incident response fundamentals.",
  icon: "\u{1F512}",
  color: "#7C3AED",
  gradient: "from-violet-600 to-slate-700",
  category: "devops",
  guide: "captain",
  world: "Shield Citadel",
  worldEmoji: "\u{1F6E1}\u{FE0F}",
  topics: [
    topic("cyber-threat-landscape", "Threat Landscape and Cyber Crime", [
      "Cyber Crime",
      "Money Making Threats",
      "Dark Web",
      "Threat Actors",
      "Attack Motives",
    ]),
    topic("cyber-network-layers", "Networking Layers for Defenders", [
      "Networking Basics",
      "Network Layer",
      "Transport Layer",
      "Ports",
      "Packets",
    ]),
    topic("cyber-firewalls-scanning", "Firewalls, Port Scanning, and Network Attacks", [
      "Firewalls",
      "Mapping & Port Scanning",
      "Reconnaissance",
      "Exposure Surface",
      "Network Attacks",
    ]),
    topic("cyber-webapp-security", "Web Application Security", [
      "Web Applications",
      "XSS",
      "SQL Injection",
      "Session Risks",
      "Web Application Attacks",
    ]),
    topic("cyber-human-risk", "Passwords, Social Engineering, and Human Risk", [
      "Passwords",
      "Phishing",
      "Social Engineering",
      "MFA",
      "Security Habits",
    ]),
    topic("cyber-ops-response", "Security Operations and Incident Response", [
      "Penetration Testing",
      "Security Operations",
      "Monitoring",
      "Incident Response",
      "Postmortems",
    ]),
  ],
};

const awsCloudPractice: RoadmapTrackSpec = {
  id: "aws-cloud-practice",
  title: "AWS Cloud Practice",
  description:
    "Learn the practical AWS building blocks behind compute, identity, networking, storage, serverless apps, and operations.",
  icon: "\u{2601}\u{FE0F}",
  color: "#F59E0B",
  gradient: "from-amber-400 to-orange-500",
  category: "devops",
  guide: "captain",
  world: "Cloud Port",
  worldEmoji: "\u{2601}\u{FE0F}",
  topics: [
    topic("aws-cloud-foundations", "Cloud Concepts and Shared Responsibility", [
      "Shared Responsibility",
      "Global Infrastructure",
      "Pricing Basics",
      "Regions & Availability Zones",
      "Cloud Adoption",
    ]),
    topic("aws-iam-security", "IAM, Policies, and Access Control", [
      "IAM Users",
      "Roles",
      "Policies",
      "Least Privilege",
      "Multi-Factor Authentication",
    ]),
    topic("aws-ec2-compute", "EC2 and Compute Basics", [
      "EC2 Instances",
      "AMI",
      "Security Groups",
      "Elastic IP",
      "Auto Scaling",
    ]),
    topic("aws-s3-storage", "S3, Object Storage, and Static Hosting", [
      "Buckets",
      "Object Storage",
      "Versioning",
      "Lifecycle Rules",
      "Static Website Hosting",
    ]),
    topic("aws-vpc-networking", "VPC, Subnets, and Connectivity", [
      "VPC",
      "Subnets",
      "Route Tables",
      "Internet Gateway",
      "NAT Gateway",
    ]),
    topic("aws-lambda-serverless", "Lambda and Serverless Workflows", [
      "Lambda Functions",
      "Triggers",
      "API Gateway",
      "Event-Driven Apps",
      "Cold Starts",
    ]),
    topic("aws-managed-data", "RDS, DynamoDB, and Managed Data Services", [
      "RDS",
      "Aurora",
      "DynamoDB",
      "Backups",
      "Scaling Data Services",
    ]),
    topic("aws-cloudfront-observability", "CloudFront, Monitoring, and Alarms", [
      "CloudFront",
      "CDN Caching",
      "CloudWatch",
      "Logging",
      "Alarms",
    ]),
  ],
};

const w3SchoolsExpansionSpecs: RoadmapTrackSpec[] = [
  htmlCssMastery,
  javaScriptDeepDive,
  sqlMastery,
  gitShellMastery,
  accessibilityInclusiveWeb,
  cyberSecurityEssentials,
  awsCloudPractice,
];

const w3SchoolsExpansionLessonGroups = w3SchoolsExpansionSpecs.map((spec) =>
  buildRoadmapLessons(spec)
);

export const w3SchoolsExpansionLessons: Lesson[] =
  w3SchoolsExpansionLessonGroups.flat();

export const w3SchoolsExpansionTracks: Track[] = w3SchoolsExpansionSpecs.map(
  (spec, index) => buildRoadmapTrack(spec, w3SchoolsExpansionLessonGroups[index])
);
