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

const backendDevelopment: RoadmapTrackSpec = {
  id: "backend-development",
  title: "Backend Development",
  description:
    "Build server-side systems, APIs, and runtime services across the most common backend stacks.",
  icon: "\u{1F527}",
  color: "#EA580C",
  gradient: "from-orange-500 to-rose-500",
  category: "techstack",
  guide: "stackie",
  world: "Server Harbor",
  worldEmoji: "\u{1F3E2}",
  topics: [
    topic(
      "backend-nodejs",
      "Node.js",
      [
        "Event-driven architecture",
        "Streams",
        "Buffers",
        "Modules (CJS/ESM)",
        "Express.js",
        "Fastify",
        "NestJS",
        "Hono",
      ],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `import http from "node:http";
import { Buffer } from "node:buffer";

http.createServer(async (req, res) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString("utf8");
  res.end(\`Received \${body.length} bytes\`);
}).listen(3000);`,
      }
    ),
    topic(
      "backend-python",
      "Python",
      ["Django", "Flask", "FastAPI", "Asyncio", "Pydantic"],
      {
        codeLanguage: "python",
        code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}`,
      }
    ),
    topic(
      "backend-go",
      "Go (Golang)",
      ["Goroutines", "Channels", "net/http", "Gin", "Fiber", "Echo"],
      {
        codeLanguage: "go",
        visualType: "thread-race",
        code: `package main

import (
  "fmt"
  "net/http"
)

func main() {
  http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "ok")
  })
  http.ListenAndServe(":8080", nil)
}`,
      }
    ),
    topic(
      "backend-java",
      "Java",
      ["Spring Boot", "Maven/Gradle", "JPA/Hibernate", "Servlets"],
      {
        codeLanguage: "java",
        visualType: "oop-kingdom",
        code: `@RestController
class ApiController {
  @GetMapping("/health")
  Map<String, String> health() {
    return Map.of("status", "ok");
  }
}`,
      }
    ),
    topic(
      "backend-rust",
      "Rust",
      ["Ownership & Borrowing", "Actix-web", "Axum", "Tokio"],
      {
        codeLanguage: "rust",
        code: `#[get("/health")]
async fn health() -> impl Responder {
    HttpResponse::Ok().json(json!({"status": "ok"}))
}`,
      }
    ),
    topic(
      "backend-ruby",
      "Ruby",
      ["Ruby on Rails", "ActiveRecord", "Rack"],
      {
        codeLanguage: "ruby",
        visualType: "oop-kingdom",
        code: `class HealthController < ApplicationController
  def show
    render json: { status: "ok" }
  end
end`,
      }
    ),
    topic(
      "backend-php",
      "PHP",
      ["Laravel", "Composer", "Blade templating"],
      {
        codeLanguage: "php",
        code: `Route::get('/health', fn () => response()->json(['status' => 'ok']));`,
      }
    ),
    topic(
      "backend-dotnet",
      "C# / .NET",
      ["ASP.NET Core", "Entity Framework", "LINQ", "SignalR"],
      {
        codeLanguage: "csharp",
        visualType: "oop-kingdom",
        code: `var app = WebApplication.Create(args);
app.MapGet("/health", () => Results.Ok(new { status = "ok" }));
app.Run();`,
      }
    ),
    topic(
      "backend-api-design",
      "API Design",
      ["REST", "GraphQL", "gRPC", "WebSockets", "tRPC", "OpenAPI/Swagger"],
      {
        codeLanguage: "javascript",
        visualType: "call-stack",
        code: `app.get("/users/:id", (req, res) => {
  res.json({
    id: req.params.id,
    links: ["/users", "/orders"]
  });
});`,
      }
    ),
    topic(
      "backend-authentication",
      "Authentication",
      ["JWT", "OAuth 2.0", "OpenID Connect", "Sessions & Cookies", "Passkeys", "Auth0/Clerk"],
      {
        codeLanguage: "javascript",
        code: `if (!request.headers.authorization?.startsWith("Bearer ")) {
  return response.status(401).json({ error: "Unauthorized" });
}

return response.json({ user: "authenticated" });`,
      }
    ),
  ],
};

const databases: RoadmapTrackSpec = {
  id: "databases",
  title: "Databases",
  description:
    "Store, query, index, and evolve data safely across relational, document, search, graph, and time-series systems.",
  icon: "\u{1F4BE}",
  color: "#4F46E5",
  gradient: "from-indigo-500 to-violet-600",
  category: "techstack",
  guide: "algo",
  world: "Data Vault",
  worldEmoji: "\u{1F5C3}",
  topics: [
    topic(
      "db-relational-sql",
      "Relational (SQL)",
      ["PostgreSQL", "MySQL", "SQLite", "Joins", "Indexes", "Transactions", "ACID", "Normalization"],
      {
        codeLanguage: "sql",
        visualType: "memory-boxes",
        code: `BEGIN;
SELECT u.name, o.total
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.status = 'paid'
ORDER BY o.created_at DESC;
COMMIT;`,
      }
    ),
    topic(
      "db-nosql",
      "NoSQL",
      ["MongoDB", "Redis", "Cassandra", "DynamoDB", "CouchDB", "Firestore"],
      {
        codeLanguage: "javascript",
        code: `db.users.find({ active: true }).sort({ createdAt: -1 }).limit(20);`,
      }
    ),
    topic(
      "db-orms-query-builders",
      "ORMs / Query Builders",
      ["Prisma", "Drizzle", "TypeORM", "Sequelize", "SQLAlchemy", "GORM"],
      {
        codeLanguage: "typescript",
        visualType: "call-stack",
        code: `const users = await prisma.user.findMany({
  where: { active: true },
  include: { profile: true },
});`,
      }
    ),
    topic(
      "db-search-engines",
      "Search Engines",
      ["Elasticsearch", "Meilisearch", "Algolia", "Typesense"],
      {
        codeLanguage: "javascript",
        code: `const results = await client.search({
  index: "docs",
  q: "auth",
  filters: "lang:en"
});`,
      }
    ),
    topic(
      "db-timeseries",
      "Time-series DBs",
      ["InfluxDB", "TimescaleDB"],
      {
        codeLanguage: "sql",
        code: `INSERT INTO cpu_metrics(time, host, usage)
VALUES (NOW(), 'api-1', 72.4);`,
      }
    ),
    topic(
      "db-graph",
      "Graph Databases",
      ["Neo4j", "Amazon Neptune"],
      {
        codeLanguage: "cypher",
        code: `MATCH (u:User)-[:PURCHASED]->(p:Product)
RETURN u.name, p.name;`,
      }
    ),
    topic(
      "db-concepts",
      "Database Concepts",
      ["Sharding", "Replication", "Connection pooling", "Query optimization", "Migrations"],
      {
        codeLanguage: "yaml",
        visualType: "call-stack",
        code: `plan:
  - migrate schema
  - add read replicas
  - shard by tenant
  - monitor query latency`,
      }
    ),
  ],
};

const devopsInfrastructure: RoadmapTrackSpec = {
  id: "devops-infrastructure",
  title: "DevOps & Infrastructure",
  description:
    "Ship, scale, and observe software with automation, cloud infrastructure, containers, and network awareness.",
  icon: "\u{1F680}",
  color: "#059669",
  gradient: "from-emerald-500 to-teal-600",
  category: "devops",
  guide: "captain",
  world: "Launch Grid",
  worldEmoji: "\u{1F680}",
  topics: [
    topic(
      "devops-linux-cli",
      "Linux & Command Line",
      ["File system", "Process management", "Shell scripting (Bash)", "Cron jobs", "SSH", "vim/nano"],
      {
        codeLanguage: "bash",
        code: `ls -la
ps aux | grep api
chmod +x deploy.sh
ssh prod`,
      }
    ),
    topic(
      "devops-version-control",
      "Version Control",
      ["Git", "GitHub/GitLab/Bitbucket", "Branching strategies", "Git hooks", "Monorepos"],
      {
        codeLanguage: "bash",
        visualType: "call-stack",
        code: `git checkout -b feat/api
git commit -m "add health route"
git push origin feat/api`,
      }
    ),
    topic(
      "devops-containers",
      "Containers",
      ["Docker", "Dockerfile", "Docker Compose", "Container registries"],
      {
        codeLanguage: "dockerfile",
        code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]`,
      }
    ),
    topic(
      "devops-orchestration",
      "Orchestration",
      ["Kubernetes", "Helm", "kubectl", "Ingress", "Service mesh (Istio)"],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  replicas: 3`,
      }
    ),
    topic(
      "devops-cicd",
      "CI/CD",
      ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "ArgoCD", "Flux"],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `name: build
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test`,
      }
    ),
    topic(
      "devops-cloud-providers",
      "Cloud Providers",
      ["AWS", "Google Cloud (GCP)", "Azure", "DigitalOcean", "Cloudflare"],
      {
        codeLanguage: "bash",
        code: `aws s3 ls
gcloud run deploy api
az webapp up`,
      }
    ),
    topic(
      "devops-iac",
      "Infrastructure as Code",
      ["Terraform", "Pulumi", "AWS CDK", "Ansible"],
      {
        codeLanguage: "hcl",
        code: `resource "aws_instance" "api" {
  ami           = "ami-123"
  instance_type = "t3.micro"
}`,
      }
    ),
    topic(
      "devops-monitoring-logging",
      "Monitoring & Logging",
      ["Prometheus", "Grafana", "Datadog", "New Relic", "ELK Stack", "OpenTelemetry"],
      {
        codeLanguage: "promql",
        code: `rate(http_requests_total[5m])
sum by (status) (rate(http_requests_total[5m]))`,
      }
    ),
    topic(
      "devops-networking",
      "Networking",
      ["Load balancers", "Firewalls", "VPCs", "NAT", "CDN", "Reverse proxies (Nginx, Caddy)"],
      {
        codeLanguage: "nginx",
        visualType: "call-stack",
        code: `server {
  listen 80;
  location / {
    proxy_pass http://backend:3000;
  }
}`,
      }
    ),
  ],
};

const security: RoadmapTrackSpec = {
  id: "security",
  title: "Security",
  description:
    "Defend applications with secure-by-default patterns for auth, secrets, threat analysis, and penetration testing.",
  icon: "\u{1F6E1}\u{FE0F}",
  color: "#DC2626",
  gradient: "from-red-500 to-slate-700",
  category: "devops",
  guide: "captain",
  world: "Fortress Wall",
  worldEmoji: "\u{1F6E1}\u{FE0F}",
  topics: [
    topic(
      "security-web-basics",
      "Web Security Basics",
      ["OWASP Top 10", "XSS", "CSRF", "SQL Injection", "CORS"],
      {
        codeLanguage: "javascript",
        code: `const safe = escapeHtml(userInput);
if (!isAllowedOrigin(req.headers.origin)) {
  throw new Error("Blocked origin");
}`,
      }
    ),
    topic(
      "security-auth-security",
      "Auth Security",
      ["Password hashing (bcrypt)", "Rate limiting", "2FA/MFA", "Secure headers", "HTTPS enforcement"],
      {
        codeLanguage: "javascript",
        code: `const hash = await bcrypt.hash(password, 12);
if (tooManyAttempts(ip)) {
  return res.status(429).end();
}`,
      }
    ),
    topic(
      "security-secrets-management",
      "Secrets Management",
      ["Environment variables", ".env files", "Vault", "AWS Secrets Manager", "Doppler"],
      {
        codeLanguage: "bash",
        code: `export DB_PASSWORD="$DB_PASSWORD"
echo "Load secrets from a managed store, not source control."`,
      }
    ),
    topic(
      "security-penetration-testing",
      "Penetration Testing",
      ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit"],
      {
        codeLanguage: "bash",
        code: `nmap -sV api.example.com
zap-baseline.py -t https://example.com`,
      }
    ),
  ],
};

const roadmapSpecs: RoadmapTrackSpec[] = [
  backendDevelopment,
  databases,
  devopsInfrastructure,
  security,
];

const lessonGroups = roadmapSpecs.map((spec) => buildRoadmapLessons(spec));

export const backendStackLessons: Lesson[] = lessonGroups.flat();

export const backendStackTracks: Track[] = roadmapSpecs.map((spec, index) =>
  buildRoadmapTrack(spec, lessonGroups[index])
);
