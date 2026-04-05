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

const pythonAutomationStudio: RoadmapTrackSpec = {
  id: "python-automation-studio",
  title: "Python & Automation Studio",
  description:
    "Learn Python for real-world scripting, tooling, APIs, and repeatable automation workflows.",
  icon: "\u{1F40D}",
  color: "#3776AB",
  gradient: "from-blue-500 to-emerald-500",
  category: "language",
  guide: "pixel",
  world: "Automation Studio",
  worldEmoji: "\u{1F6E0}\u{FE0F}",
  topics: [
    topic(
      "python-automation-foundations",
      "Python Foundations",
      [
        "Syntax and indentation",
        "Variables and data types",
        "Input and output",
        "Conditionals",
        "Loops",
        "Basic functions",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `app_name = "DevPlay"
task_count = 3
ready = task_count > 0

if ready:
    print(f"{app_name} has {task_count} automation tasks ready")`,
      }
    ),
    topic(
      "python-automation-collections",
      "Collections and Comprehensions",
      [
        "Lists and tuples",
        "Dictionaries and sets",
        "Slicing",
        "Iteration patterns",
        "List comprehensions",
        "Dictionary comprehensions",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `files = ["report.csv", "notes.txt", "data.json"]
json_files = [name for name in files if name.endswith(".json")]
file_lengths = {name: len(name) for name in files}

print(json_files)
print(file_lengths)`,
      }
    ),
    topic(
      "python-automation-functions-scope",
      "Functions, Scope, and Reuse",
      [
        "Parameters and return values",
        "Default arguments",
        "Scope and namespaces",
        "Lambda functions",
        "Higher-order functions",
        "Docstrings",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `def normalize_name(name, prefix="task"):
    cleaned = name.strip().lower().replace(" ", "-")
    return f"{prefix}:{cleaned}"

labels = list(map(normalize_name, ["Daily Report", "Sync Users"]))
print(labels)`,
      }
    ),
    topic(
      "python-automation-files-errors-regex",
      "Files, Exceptions, and Regular Expressions",
      [
        "Path handling with pathlib",
        "Reading and writing files",
        "CSV and JSON basics",
        "try/except/finally",
        "Custom exceptions",
        "Regex matching",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `import re
from pathlib import Path

log_path = Path("logs/app.log")

try:
    lines = log_path.read_text().splitlines()
    alerts = [line for line in lines if re.search(r"ERROR|WARN", line)]
except FileNotFoundError:
    alerts = []

print(alerts)`,
      }
    ),
    topic(
      "python-automation-oop-packages",
      "Object-Oriented Python, Modules, and Packages",
      [
        "Classes and objects",
        "Instance and class attributes",
        "Inheritance",
        "Special methods",
        "Imports and modules",
        "Package structure",
      ],
      {
        codeLanguage: "python",
        visualType: "oop-kingdom",
        code: `class Job:
    queue_name = "default"

    def __init__(self, name):
        self.name = name

    def run(self):
        return f"Running {self.name} on {self.queue_name}"

print(Job("cleanup").run())`,
      }
    ),
    topic(
      "python-automation-tooling-testing",
      "Environment, Tooling, and Testing",
      [
        "Virtual environments",
        "pip and requirements files",
        "Project layout",
        "pytest and unittest",
        "Logging",
        "Formatting and linting",
      ],
      {
        codeLanguage: "bash",
        visualType: "thread-race",
        code: `python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest
python -m pip freeze > requirements.txt`,
      }
    ),
    topic(
      "python-automation-cli-scripting",
      "Automation Scripts and CLI Tools",
      [
        "argparse",
        "Environment variables",
        "subprocess",
        "os and shutil",
        "Task scheduling",
        "Idempotent scripting",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `import argparse
import subprocess

parser = argparse.ArgumentParser()
parser.add_argument("--path", required=True)
args = parser.parse_args()

subprocess.run(["python", "cleanup.py", args.path], check=True)`,
      }
    ),
    topic(
      "python-automation-apis-scraping",
      "APIs, Web Scraping, and Data Workflows",
      [
        "HTTP requests",
        "REST APIs",
        "JSON parsing",
        "BeautifulSoup basics",
        "Rate limiting",
        "Data cleanup with pandas",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `import requests
from bs4 import BeautifulSoup

response = requests.get("https://example.com", timeout=10)
soup = BeautifulSoup(response.text, "html.parser")

print(response.status_code)
print(soup.title.string if soup.title else "No title")`,
      }
    ),
  ],
};

const dataStructuresAlgorithmsLab: RoadmapTrackSpec = {
  id: "data-structures-algorithms-lab",
  title: "Data Structures & Algorithms Lab",
  description:
    "Build the problem-solving patterns, data models, and algorithm instincts used across interviews and production systems.",
  icon: "\u{1F9E9}",
  color: "#F59E0B",
  gradient: "from-amber-500 to-rose-500",
  category: "algorithms",
  guide: "algo",
  world: "Algorithm Laboratory",
  worldEmoji: "\u{1F52C}",
  topics: [
    topic(
      "dsa-lab-big-o",
      "Problem Solving and Big O",
      [
        "Logic building",
        "Input-output reasoning",
        "Asymptotic notation",
        "Time complexity",
        "Space complexity",
        "Tradeoff analysis",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `def contains_target(values, target):
    for value in values:
        if value == target:
            return True
    return False`,
      }
    ),
    topic(
      "dsa-lab-arrays-strings",
      "Arrays, Strings, and Matrices",
      [
        "Indexing and traversal",
        "Two pointers",
        "Sliding window",
        "Prefix sums",
        "String manipulation",
        "Matrix traversal",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `def max_window_sum(nums, k):
    window = sum(nums[:k])
    best = window
    for index in range(k, len(nums)):
        window += nums[index] - nums[index - k]
        best = max(best, window)
    return best`,
      }
    ),
    topic(
      "dsa-lab-linear-structures",
      "Linked Lists, Stacks, and Queues",
      [
        "Nodes and pointers",
        "Singly linked lists",
        "Doubly linked lists",
        "Stack operations",
        "Queue operations",
        "Deque use cases",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `from collections import deque

queue = deque(["parse", "validate"])
queue.append("render")
current = queue.popleft()

print(current)
print(queue)`,
      }
    ),
    topic(
      "dsa-lab-hash-lookup",
      "Hash Maps, Sets, and Frequency Counting",
      [
        "Hashing concepts",
        "Dictionary lookups",
        "Sets for membership",
        "Frequency counters",
        "Collision awareness",
        "Lookup optimization",
      ],
      {
        codeLanguage: "python",
        visualType: "memory-boxes",
        code: `def has_pair(values, target):
    seen = set()
    for value in values:
        if target - value in seen:
            return True
        seen.add(value)
    return False`,
      }
    ),
    topic(
      "dsa-lab-trees-heaps",
      "Trees, Binary Search Trees, and Heaps",
      [
        "Tree terminology",
        "Depth-first traversal",
        "Breadth-first traversal",
        "Binary search trees",
        "Heaps",
        "Priority queues",
      ],
      {
        codeLanguage: "python",
        visualType: "oop-kingdom",
        code: `import heapq

jobs = []
heapq.heappush(jobs, (2, "email"))
heapq.heappush(jobs, (1, "backup"))

print(heapq.heappop(jobs))`,
      }
    ),
    topic(
      "dsa-lab-graphs",
      "Graphs and Traversals",
      [
        "Adjacency lists",
        "Breadth-first search",
        "Depth-first search",
        "Connected components",
        "Topological sorting",
        "Shortest-path basics",
      ],
      {
        codeLanguage: "python",
        visualType: "thread-race",
        code: `from collections import deque

graph = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
queue = deque(["A"])
seen = {"A"}

while queue:
    node = queue.popleft()
    for neighbor in graph[node]:
        if neighbor not in seen:
            seen.add(neighbor)
            queue.append(neighbor)`,
      }
    ),
    topic(
      "dsa-lab-sorting-searching",
      "Sorting, Searching, and Divide and Conquer",
      [
        "Binary search",
        "Merge sort",
        "Quick sort",
        "Partitioning",
        "Recursion trees",
        "Stability and in-place tradeoffs",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `def binary_search(values, target):
    left, right = 0, len(values) - 1
    while left <= right:
        middle = (left + right) // 2
        if values[middle] == target:
            return middle
        if values[middle] < target:
            left = middle + 1
        else:
            right = middle - 1
    return -1`,
      }
    ),
    topic(
      "dsa-lab-recursion-greedy",
      "Recursion, Backtracking, and Greedy",
      [
        "Base cases",
        "Call stack reasoning",
        "Subsets and permutations",
        "Backtracking and pruning",
        "Greedy choice property",
        "Interval scheduling",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `def subsets(values, path=None):
    path = path or []
    if not values:
        return [path]
    return subsets(values[1:], path) + subsets(values[1:], path + [values[0]])`,
      }
    ),
    topic(
      "dsa-lab-dynamic-programming",
      "Dynamic Programming and Pattern Practice",
      [
        "Memoization",
        "Tabulation",
        "State transitions",
        "Knapsack pattern",
        "Longest subsequence pattern",
        "Deliberate practice routines",
      ],
      {
        codeLanguage: "python",
        visualType: "call-stack",
        code: `def climb_stairs(n):
    dp = [0, 1, 2]
    for step in range(3, n + 1):
        dp.append(dp[step - 1] + dp[step - 2])
    return dp[n]`,
      }
    ),
  ],
};

const devOpsCloudOperations: RoadmapTrackSpec = {
  id: "devops-cloud-operations",
  title: "DevOps & Cloud Operations",
  description:
    "Cover the workflows, automation, containers, cloud services, and reliability practices behind modern software delivery.",
  icon: "\u{2601}\u{FE0F}",
  color: "#0EA5E9",
  gradient: "from-sky-500 to-cyan-500",
  category: "devops",
  guide: "captain",
  world: "Cloud Command Center",
  worldEmoji: "\u{2601}\u{FE0F}",
  topics: [
    topic(
      "devops-cloud-foundations",
      "DevOps Foundations and the SDLC",
      [
        "Development and operations collaboration",
        "Software delivery lifecycle",
        "Automation mindset",
        "Continuous feedback",
        "Release frequency",
        "Monitoring as part of delivery",
      ],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `stages:
  - build
  - test
  - deploy

pipeline:
  goal: faster feedback with safer releases`,
      }
    ),
    topic(
      "devops-cloud-linux-shell-networking",
      "Linux, Shell, and Networking Basics",
      [
        "Filesystem navigation",
        "Permissions",
        "Processes and services",
        "Bash scripting",
        "SSH",
        "DNS, ports, and protocols",
      ],
      {
        codeLanguage: "bash",
        visualType: "call-stack",
        code: `#!/usr/bin/env bash
set -e
ps aux | grep python
ss -tulpn | grep 3000
systemctl status nginx`,
      }
    ),
    topic(
      "devops-cloud-git-release",
      "Git Workflows and Release Management",
      [
        "Branching strategies",
        "Pull requests",
        "Semantic versioning",
        "Release tags",
        "Artifacts",
        "Rollback plans",
      ],
      {
        codeLanguage: "bash",
        visualType: "thread-race",
        code: `git checkout -b release/1.4.0
git tag v1.4.0
git push origin main --tags`,
      }
    ),
    topic(
      "devops-cloud-cicd",
      "Continuous Integration and Delivery",
      [
        "Pipeline stages",
        "Linting and tests",
        "Artifact publishing",
        "Deployment gates",
        "Canary and blue-green releases",
        "Pipeline debugging",
      ],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `name: ci
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test`,
      }
    ),
    topic(
      "devops-cloud-docker",
      "Containers and Docker",
      [
        "Images and layers",
        "Dockerfiles",
        "Volumes",
        "Container networking",
        "Docker Compose",
        "Registries",
      ],
      {
        codeLanguage: "dockerfile",
        visualType: "memory-boxes",
        code: `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]`,
      }
    ),
    topic(
      "devops-cloud-kubernetes",
      "Kubernetes and Orchestration",
      [
        "Pods and deployments",
        "Services and ingress",
        "ConfigMaps and Secrets",
        "Rolling updates",
        "Autoscaling",
        "Cluster troubleshooting",
      ],
      {
        codeLanguage: "yaml",
        visualType: "oop-kingdom",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: api
          image: example/api:latest`,
      }
    ),
    topic(
      "devops-cloud-iac-config",
      "Infrastructure as Code and Configuration Management",
      [
        "Terraform basics",
        "Provisioning workflows",
        "State files",
        "Ansible playbooks",
        "Immutable infrastructure",
        "Drift detection",
      ],
      {
        codeLanguage: "terraform",
        visualType: "thread-race",
        code: `resource "aws_s3_bucket" "artifacts" {
  bucket = "devplay-artifacts"
}

resource "aws_instance" "app" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}`,
      }
    ),
    topic(
      "devops-cloud-platforms",
      "Cloud Platforms and Core Services",
      [
        "AWS, Azure, and GCP basics",
        "Compute services",
        "Object storage",
        "IAM and identity",
        "VPC and networking",
        "Load balancers and serverless",
      ],
      {
        codeLanguage: "bash",
        visualType: "memory-boxes",
        code: `aws s3 ls
aws ec2 describe-instances
aws iam list-users`,
      }
    ),
    topic(
      "devops-cloud-observability-security",
      "Observability, Security, and Incident Response",
      [
        "Logs, metrics, and traces",
        "Alerting",
        "Secrets management",
        "Backups and disaster recovery",
        "SLIs and SLOs",
        "Incident reviews",
      ],
      {
        codeLanguage: "yaml",
        visualType: "thread-race",
        code: `groups:
  - name: api-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 10m`,
      }
    ),
  ],
};

const roadmapSpecs: RoadmapTrackSpec[] = [
  pythonAutomationStudio,
  dataStructuresAlgorithmsLab,
  devOpsCloudOperations,
];

const lessonGroups = roadmapSpecs.map((spec) => buildRoadmapLessons(spec));

export const communityPlatformExpansionTracks: Track[] = roadmapSpecs.map(
  (spec, index) => buildRoadmapTrack(spec, lessonGroups[index])
);

export const communityPlatformExpansionLessons: Lesson[] = lessonGroups.flat();
