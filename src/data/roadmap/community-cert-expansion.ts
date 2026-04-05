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

const dataAnalysisMlStudio: RoadmapTrackSpec = {
  id: "data-analysis-ml-studio",
  title: "Data Analysis & ML Studio",
  description:
    "Learn how to move from raw data to cleaned datasets, visual insight, statistical thinking, and deployable machine learning workflows.",
  icon: "\u{1F4CA}",
  color: "#0EA5A4",
  gradient: "from-teal-500 to-cyan-600",
  category: "techstack",
  guide: "sally",
  world: "Insight Observatory",
  worldEmoji: "\u{1F52D}",
  topics: [
    topic(
      "data-ml-python-toolkit",
      "Python Data Toolkit and Notebook Workflow",
      [
        "Jupyter notebooks",
        "Virtual environments",
        "NumPy arrays",
        "pandas DataFrames",
        "Matplotlib basics",
        "Reproducible analysis",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `import numpy as np
import pandas as pd

sales = pd.DataFrame({
    "day": ["Mon", "Tue", "Wed"],
    "revenue": [120, 150, 99],
})

print(sales["revenue"].mean())
print(np.array(sales["revenue"]))`,
      }
    ),
    topic(
      "data-ml-cleaning-wrangling",
      "Data Cleaning and Wrangling",
      [
        "Missing values",
        "Type conversion",
        "Filtering rows",
        "Joining tables",
        "GroupBy",
        "Reshaping data",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `cleaned = sales.assign(
    revenue=lambda frame: frame["revenue"].fillna(0).astype(float)
)

summary = cleaned.groupby("day", as_index=False)["revenue"].sum()
print(summary)`,
      }
    ),
    topic(
      "data-ml-eda-visualization",
      "Exploratory Data Analysis and Visualization",
      [
        "Summary statistics",
        "Distributions",
        "Correlations",
        "Outlier detection",
        "Matplotlib and Seaborn",
        "Dashboard thinking",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `import seaborn as sns
import matplotlib.pyplot as plt

sns.histplot(data=sales, x="revenue", bins=5)
plt.title("Revenue distribution")
plt.show()`,
      }
    ),
    topic(
      "data-ml-statistics-experiments",
      "Statistics, Probability, and Experiment Design",
      [
        "Mean, median, and variance",
        "Probability basics",
        "Sampling",
        "Confidence intervals",
        "Hypothesis testing",
        "A/B testing",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        difficulty: "intermediate",
        estimatedMinutes: 19,
        code: `conversion_a = [1, 0, 1, 1, 0]
conversion_b = [0, 1, 0, 1, 0]

rate_a = sum(conversion_a) / len(conversion_a)
rate_b = sum(conversion_b) / len(conversion_b)

print(rate_a, rate_b)`,
      }
    ),
    topic(
      "data-ml-sql-pipelines",
      "SQL, Data Pipelines, and Feature Tables",
      [
        "Query extraction",
        "CSV and JSON ingestion",
        "ETL steps",
        "Validation checks",
        "Feature tables",
        "Scheduled jobs",
      ],
      {
        codeLanguage: "sql",
        visualType: "call-stack",
        code: `SELECT user_id, COUNT(*) AS purchase_count
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY user_id;`,
      }
    ),
    topic(
      "data-ml-supervised-workflow",
      "Supervised Learning Workflow",
      [
        "Features and labels",
        "Train and test split",
        "Regression",
        "Classification",
        "Overfitting",
        "Cross-validation",
      ],
      {
        codeLanguage: "python",
        visualType: "thread-race",
        difficulty: "advanced",
        estimatedMinutes: 21,
        code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)`,
      }
    ),
    topic(
      "data-ml-evaluation-features",
      "Model Evaluation and Feature Engineering",
      [
        "Accuracy and baseline models",
        "Precision and recall",
        "RMSE and MAE",
        "Encoding categorical data",
        "Scaling features",
        "Error analysis",
      ],
      {
        codeLanguage: "python",
        visualType: "thread-race",
        difficulty: "advanced",
        estimatedMinutes: 21,
        code: `from sklearn.metrics import classification_report

predictions = model.predict(X_test)
print(classification_report(y_test, predictions))`,
      }
    ),
    topic(
      "data-ml-packaging-monitoring",
      "Model Packaging, Monitoring, and Responsible Use",
      [
        "Model persistence",
        "Batch scoring",
        "API inference",
        "Monitoring drift",
        "Bias checks",
        "Reproducibility",
      ],
      {
        codeLanguage: "python",
        visualType: "thread-race",
        difficulty: "advanced",
        estimatedMinutes: 20,
        code: `import joblib

joblib.dump(model, "classifier.joblib")
loaded_model = joblib.load("classifier.joblib")
print(loaded_model.predict(X_test[:2]))`,
      }
    ),
  ],
};

const testingQualityEngineering: RoadmapTrackSpec = {
  id: "testing-quality-engineering",
  title: "Testing & Quality Engineering",
  description:
    "Build a practical testing mindset across unit, integration, API, UI, performance, and CI workflows so quality stops being an afterthought.",
  icon: "\u{1F9EA}",
  color: "#F97316",
  gradient: "from-orange-500 to-amber-500",
  category: "tools",
  guide: "captain",
  world: "Quality Control Tower",
  worldEmoji: "\u{1F6F0}\u{FE0F}",
  topics: [
    topic(
      "testing-quality-strategy",
      "Quality Mindset and Testing Strategy",
      [
        "Testing pyramid",
        "Risk-based testing",
        "Acceptance criteria",
        "Regression suites",
        "Shift-left thinking",
        "Bug reporting",
      ],
      {
        codeLanguage: "text",
        visualType: "memory-boxes",
        code: `Critical flows -> unit tests + API tests + targeted end-to-end coverage
High-risk releases -> add smoke checks + rollback plan
Recurring bugs -> turn the bug into a regression test`,
      }
    ),
    topic(
      "testing-quality-unit-tdd",
      "Unit Testing and Test-Driven Development",
      [
        "Assertions",
        "Arrange-Act-Assert",
        "Red-Green-Refactor",
        "Mocks and stubs",
        "Fixtures",
        "Code coverage",
      ],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `import { describe, expect, it } from "vitest";
import { sum } from "./math";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
});`,
      }
    ),
    topic(
      "testing-quality-api-server",
      "API and Server Testing",
      [
        "HTTP assertions",
        "SuperTest",
        "Contract testing",
        "Auth flows",
        "Test data setup",
        "Edge cases",
      ],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `import request from "supertest";
import { app } from "./app";

test("GET /health returns 200", async () => {
  const response = await request(app).get("/health");
  expect(response.status).toBe(200);
});`,
      }
    ),
    topic(
      "testing-quality-frontend-e2e",
      "Frontend Testing and End-to-End Flows",
      [
        "DOM assertions",
        "Accessibility checks",
        "Playwright or Cypress",
        "Selectors",
        "Visual regression",
        "Flaky test reduction",
      ],
      {
        codeLanguage: "javascript",
        visualType: "thread-race",
        code: `test("user can sign in", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#email", "player@example.com");
  await page.fill("#password", "hunter2");
  await page.click("button[type='submit']");
  await expect(page.getByText("Welcome back")).toBeVisible();
});`,
      }
    ),
    topic(
      "testing-quality-performance",
      "Performance, Load, and Reliability Testing",
      [
        "Latency budgets",
        "Load generation",
        "Concurrency testing",
        "Profiling hot paths",
        "Bottleneck analysis",
        "Chaos experiments",
      ],
      {
        codeLanguage: "javascript",
        visualType: "thread-race",
        difficulty: "advanced",
        estimatedMinutes: 20,
        code: `import http from "k6/http";
import { check } from "k6";

export default function () {
  const response = http.get("https://example.com/api/health");
  check(response, { "status is 200": (res) => res.status === 200 });
}`,
      }
    ),
    topic(
      "testing-quality-security-accessibility",
      "Security, Accessibility, and Compliance Checks",
      [
        "OWASP basics",
        "Input validation",
        "Keyboard navigation",
        "Color contrast",
        "Privacy checks",
        "Security headers",
      ],
      {
        codeLanguage: "javascript",
        visualType: "memory-boxes",
        difficulty: "advanced",
        estimatedMinutes: 19,
        code: `const issues = [
  "Missing content-security-policy",
  "Input accepted script tag",
  "Submit button unreachable by keyboard",
];

console.table(issues);`,
      }
    ),
    topic(
      "testing-quality-ci-automation",
      "CI Pipelines and Test Automation",
      [
        "Parallel jobs",
        "Matrix builds",
        "Artifacts and reports",
        "Quality gates",
        "Preview environments",
        "Release confidence",
      ],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test`,
      }
    ),
    topic(
      "testing-quality-debugging-feedback",
      "Debugging, Monitoring, and Feedback Loops",
      [
        "Logs and traces",
        "Reproduction steps",
        "Bug triage",
        "Postmortems",
        "Quality metrics",
        "Continuous improvement",
      ],
      {
        codeLanguage: "text",
        visualType: "thread-race",
        code: `1. Reproduce the failure consistently
2. Narrow the failing layer
3. Add a regression test
4. Fix the root cause
5. Watch production telemetry after release`,
      }
    ),
  ],
};

const appSecSecureCoding: RoadmapTrackSpec = {
  id: "appsec-secure-coding",
  title: "AppSec & Secure Coding",
  description:
    "Teach developers how to think about risk, protect data flows, harden applications, and respond well when systems are under pressure.",
  icon: "\u{1F512}",
  color: "#DC2626",
  gradient: "from-red-600 to-rose-500",
  category: "tools",
  guide: "bug",
  world: "Security Vault",
  worldEmoji: "\u{1F3E6}",
  topics: [
    topic(
      "appsec-threat-modeling",
      "Threat Modeling and Risk Thinking",
      [
        "Assets and attack surfaces",
        "Trust boundaries",
        "Abuse cases",
        "STRIDE-style thinking",
        "Risk prioritization",
        "Defense in depth",
      ],
      {
        codeLanguage: "text",
        visualType: "oop-kingdom",
        code: `User -> Browser -> API -> Database
Trust boundary: internet to API
High-risk asset: payment data
Abuse case: attacker replays a session token`,
      }
    ),
    topic(
      "appsec-auth-access-control",
      "Authentication, Sessions, and Access Control",
      [
        "Identity verification",
        "Password hashing",
        "Sessions and cookies",
        "JWT tradeoffs",
        "Authorization rules",
        "Least privilege",
      ],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `app.get("/admin", requireAuth, requireRole("admin"), (_req, res) => {
  res.json({ ok: true });
});`,
      }
    ),
    topic(
      "appsec-input-validation",
      "Input Validation and Injection Defense",
      [
        "Validation schemas",
        "Encoding and escaping",
        "SQL injection",
        "Command injection",
        "XSS prevention",
        "Safe query patterns",
      ],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `const schema = z.object({
  email: z.string().email(),
  age: z.number().int().min(13),
});

const payload = schema.parse(req.body);`,
      }
    ),
    topic(
      "appsec-secrets-config",
      "Secrets, Tokens, and Configuration Hygiene",
      [
        "Environment variables",
        "Secret rotation",
        "Vault services",
        "Config separation",
        "Token expiry",
        "Audit trails",
      ],
      {
        codeLanguage: "bash",
        visualType: "memory-boxes",
        code: `export DATABASE_URL="postgres://..."
export JWT_SECRET="replace-me"
printenv | grep DATABASE_URL`,
      }
    ),
    topic(
      "appsec-browser-api-hardening",
      "Browser and API Hardening",
      [
        "CORS",
        "CSRF defense",
        "Content Security Policy",
        "Security headers",
        "Rate limiting",
        "API abuse prevention",
      ],
      {
        codeLanguage: "javascript",
        visualType: "thread-race",
        code: `app.use(helmet());
app.use(rateLimit({ windowMs: 60_000, max: 100 }));
app.use(cors({ origin: ["https://devplay.app"] }));`,
      }
    ),
    topic(
      "appsec-crypto-passwords",
      "Cryptography Essentials and Password Storage",
      [
        "Hashing vs encryption",
        "Salting",
        "bcrypt or argon2",
        "Symmetric encryption",
        "Key management",
        "TLS basics",
      ],
      {
        codeLanguage: "javascript",
        visualType: "memory-boxes",
        difficulty: "advanced",
        estimatedMinutes: 20,
        code: `import bcrypt from "bcryptjs";

const passwordHash = await bcrypt.hash("swordfish", 12);
const isValid = await bcrypt.compare("swordfish", passwordHash);
console.log(isValid);`,
      }
    ),
    topic(
      "appsec-supply-chain-ci",
      "Dependency, Supply Chain, and CI Security",
      [
        "Dependency audits",
        "Lockfiles",
        "Trusted registries",
        "SBOM basics",
        "Secret scanning",
        "Signed builds",
      ],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        difficulty: "advanced",
        estimatedMinutes: 20,
        code: `steps:
  - run: npm ci
  - run: npm audit --production
  - run: gitleaks detect --source .
  - run: syft packages . -o table`,
      }
    ),
    topic(
      "appsec-monitoring-response",
      "Monitoring, Logging, and Incident Response",
      [
        "Audit logs",
        "Security alerts",
        "Incident timelines",
        "Containment steps",
        "Recovery plans",
        "Post-incident learning",
      ],
      {
        codeLanguage: "text",
        visualType: "thread-race",
        code: `Alert -> verify scope -> contain access -> rotate secrets
Patch vulnerable path -> restore service -> write incident review`,
      }
    ),
  ],
};

const communityCertExpansionSpecs: RoadmapTrackSpec[] = [
  dataAnalysisMlStudio,
  testingQualityEngineering,
  appSecSecureCoding,
];

const communityCertExpansionLessonGroups = communityCertExpansionSpecs.map((spec) =>
  buildRoadmapLessons(spec)
);

export const communityCertExpansionLessons: Lesson[] =
  communityCertExpansionLessonGroups.flat();

export const communityCertExpansionTracks: Track[] = communityCertExpansionSpecs.map(
  (spec, index) => buildRoadmapTrack(spec, communityCertExpansionLessonGroups[index])
);
