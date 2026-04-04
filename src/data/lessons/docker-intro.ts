import { Lesson } from "@/types";

export const dockerIntro: Lesson = {
  id: "docker-intro",
  trackId: "docker-dock",
  title: "Setting Sail with Docker",
  description: "Board Captain Deploy's ship and learn what containers are!",
  xpReward: 100,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "ATTENTION ON DECK! I'm Captain Deploy, and today you'll learn about Docker — the ship that carries your apps safely across any ocean (server)! Ever heard 'it works on my machine'? Docker fixes that forever!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Shipping Containers are like Docker Containers",
      analogy: "Shipping containers are like Docker containers",
      realWorld:
        "Before shipping containers, loading cargo was chaos — different shapes, sizes, fragile items mixed with heavy ones. Ships took weeks to load. Then someone invented the STANDARD SHIPPING CONTAINER: same size, stackable, works on any ship, truck, or train.",
      realWorldEmoji: "📦",
      codeConcept:
        "Before Docker, deploying apps was chaos — different OS versions, missing libraries, conflicting dependencies. Docker packages your app + ALL its dependencies into a STANDARD CONTAINER that runs identically on any machine.",
      codeConceptEmoji: "🐳",
      mappings: [
        {
          real: "Shipping container (standard box)",
          code: "Docker container (standard runtime)",
        },
        {
          real: "Packing list (what's inside)",
          code: "Dockerfile (build instructions)",
        },
        {
          real: "Blueprint for building containers",
          code: "Docker image (template)",
        },
        {
          real: "Port where ships dock",
          code: "Docker Hub (image registry)",
        },
      ],
      conclusion:
        "Just like shipping containers revolutionized global trade, Docker containers revolutionized software deployment!",
    },
    {
      type: "comic",
      title: "The Docker Story",
      panels: [
        {
          illustration: "1",
          narration: "The 'Works on My Machine' Nightmare",
          character: "captain",
          dialogue: "Developer says: 'It works on MY laptop!' Server says: 'Well, I've never seen this library in my life.'",
          mood: "thinking",
          background: "from-red-500/20 to-orange-500/20",
        },
        {
          illustration: "2",
          narration: "Enter Docker: The Great Equalizer",
          character: "captain",
          dialogue: "Docker wraps your app in a container with EVERYTHING it needs — OS, libraries, config. The container IS the environment!",
          mood: "excited",
          background: "from-blue-500/20 to-cyan-500/20",
        },
        {
          illustration: "3",
          narration: "Image vs Container",
          character: "captain",
          dialogue: "An IMAGE is like a blueprint — read-only, shareable. A CONTAINER is a running copy of that image. One image, many containers!",
          mood: "thinking",
          background: "from-purple-500/20 to-pink-500/20",
        },
        {
          illustration: "4",
          narration: "Deploy Anywhere!",
          character: "captain",
          dialogue: "Your laptop, staging server, production cloud — the container runs EXACTLY the same everywhere. That's the Docker promise!",
          mood: "celebrating",
          background: "from-green-500/20 to-emerald-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Docker Core Concepts",
      description:
        "The fundamental building blocks of Docker that every developer needs to understand.",
      steps: [
        {
          title: "Dockerfile",
          icon: "📄",
          explanation:
            "A text file with instructions to build an image. Think of it as a recipe: start with a base (FROM), add ingredients (COPY, RUN), and set how to serve (CMD).",
          codeSnippet: "FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]",
        },
        {
          title: "Image",
          icon: "🧅",
          explanation:
            "A read-only template built from a Dockerfile. Images are layered — each instruction creates a new layer. Layers are cached for speed!",
        },
        {
          title: "Container",
          icon: "📦",
          explanation:
            "A running instance of an image. It's isolated — has its own filesystem, network, and processes. You can run many containers from the same image.",
        },
        {
          title: "Docker Hub",
          icon: "🌐",
          explanation:
            "A public registry where people share images. Need PostgreSQL? Just pull 'postgres:15' instead of installing it manually. Thousands of ready-to-use images!",
        },
      ],
    },
    {
      type: "code",
      title: "Your First Dockerfile",
      explanation:
        "This Dockerfile builds a Node.js app. Each line is an instruction that creates a layer in the image.",
      code: `# Start from a lightweight Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Tell Docker which port the app uses
EXPOSE 3000

# The command to run when the container starts
CMD ["npm", "start"]`,
      language: "dockerfile",
    },
    {
      type: "quiz",
      question: "What problem does Docker solve?",
      options: [
        "Making websites look prettier",
        "It works on my machine but not on yours",
        "Writing code faster",
        "Designing databases",
      ],
      correctIndex: 1,
      explanation:
        "Docker solves the famous 'works on my machine' problem! By packaging your app with all its dependencies in a container, it runs the same everywhere.",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match Docker terms with their meanings:",
      pairs: [
        { left: "Image", right: "Blueprint/template for a container" },
        { left: "Container", right: "Running instance of an image" },
        { left: "Dockerfile", right: "Instructions to build an image" },
        { left: "Volume", right: "Persistent storage for containers" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "Welcome aboard, sailor! You now understand the basics of Docker — what containers are, how images work, and why Docker changed the world of deployment. Next, we'll learn to actually build and run containers!",
      mood: "celebrating",
    },
  ],
};

export const dockerContainers: Lesson = {
  id: "docker-containers",
  trackId: "docker-dock",
  title: "Building Containers",
  description: "Build and run your first Docker container!",
  xpReward: 120,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "Time to get your hands dirty! We're going to learn the essential Docker commands — building images, running containers, and managing your fleet. These commands are your daily bread!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "A Bakery is like Docker Build & Run",
      analogy: "A bakery is like Docker build and run",
      realWorld:
        "A baker follows a RECIPE to make a cake. The recipe is instructions. The baked cake is the result. You can bake many cakes from one recipe, and each cake exists independently.",
      realWorldEmoji: "👨‍🍳",
      codeConcept:
        "'docker build' follows the Dockerfile (recipe) to create an Image (cake). 'docker run' creates a Container (serves a slice). Many containers from one image, each running independently!",
      codeConceptEmoji: "💻",
      mappings: [
        { real: "Recipe", code: "Dockerfile" },
        { real: "Baking the cake", code: "docker build" },
        { real: "The finished cake", code: "Docker Image" },
        { real: "Serving a slice", code: "docker run (Container)" },
      ],
      conclusion:
        "Build once (image), run many times (containers) — just like baking one cake recipe and serving many slices!",
    },
    {
      type: "comic",
      title: "Build, Run, Manage",
      panels: [
        {
          illustration: "1",
          narration: "Step 1: Build the Image",
          character: "captain",
          dialogue: "'docker build -t my-app .' reads your Dockerfile, executes each instruction layer by layer, and creates a ready-to-run image!",
          mood: "thinking",
          background: "from-blue-500/20 to-indigo-500/20",
        },
        {
          illustration: "2",
          narration: "Step 2: Run a Container",
          character: "captain",
          dialogue: "'docker run -p 3000:3000 my-app' launches a container! The -p flag maps your machine's port to the container's port — like a tunnel!",
          mood: "excited",
          background: "from-green-500/20 to-teal-500/20",
        },
        {
          illustration: "3",
          narration: "Step 3: Manage Your Fleet",
          character: "captain",
          dialogue: "'docker ps' shows running containers. 'docker stop' parks them. 'docker logs' lets you peek inside. You're the admiral of this fleet!",
          mood: "celebrating",
          background: "from-purple-500/20 to-pink-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Essential Docker Commands",
      description:
        "The core Docker CLI commands you will use every day to build, run, and manage containers.",
      steps: [
        {
          title: "docker build",
          icon: "🔨",
          explanation:
            "Reads the Dockerfile and creates an image. The '-t' flag tags it with a name. The '.' tells Docker where to find the Dockerfile (current directory).",
          codeSnippet: "docker build -t my-app .",
        },
        {
          title: "docker run",
          icon: "▶️",
          explanation:
            "Creates and starts a container from an image. The '-p' flag maps ports (host:container). Add '-d' to run in the background (detached mode).",
          codeSnippet: "docker run -p 3000:3000 -d my-app",
        },
        {
          title: "docker ps & docker stop",
          icon: "📋",
          explanation:
            "'docker ps' lists all running containers with their IDs, names, and ports. 'docker stop <id>' gracefully shuts down a container.",
          codeSnippet: "docker ps\ndocker stop abc123",
        },
        {
          title: "docker logs",
          icon: "📜",
          explanation:
            "View the output (stdout/stderr) of a container. Add '-f' to follow logs in real time — like 'tail -f' for containers.",
          codeSnippet: "docker logs -f <container-id>",
        },
      ],
    },
    {
      type: "code",
      title: "Docker Commands Cheat Sheet",
      explanation:
        "Here are the most common Docker commands you'll use daily, from building to debugging.",
      code: `# Build an image from Dockerfile
docker build -t my-app .

# Run a container (foreground)
docker run -p 3000:3000 my-app

# Run in background (detached)
docker run -p 3000:3000 -d my-app

# List running containers
docker ps

# Stop a container
docker stop <container-id>

# View logs
docker logs <container-id>

# Remove a container
docker rm <container-id>

# List all images
docker images`,
      language: "bash",
      highlightLines: [2, 5, 8],
    },
    {
      type: "quiz",
      question: "What does the '-p 3000:3000' flag do in 'docker run'?",
      options: [
        "Sets the password to 3000",
        "Maps port 3000 on your machine to port 3000 in the container",
        "Creates 3000 containers",
        "Limits memory to 3000MB",
      ],
      correctIndex: 1,
      explanation:
        "The -p flag maps a host port to a container port. -p 3000:3000 means 'connect port 3000 on my machine to port 3000 inside the container'!",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction:
        "Put these Docker commands in the right order to build and run an app:",
      codeLines: [
        "docker build -t my-app .",
        "docker run -p 8080:3000 my-app",
        "docker ps",
        "docker logs <container-id>",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "bash",
      xpBonus: 20,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "You've launched your first container! You're becoming a true DevOps sailor. Next stop: Docker Compose for managing multiple containers together!",
      mood: "celebrating",
    },
  ],
};

export const dockerCompose: Lesson = {
  id: "docker-compose",
  trackId: "docker-dock",
  title: "The Docker Fleet",
  description: "Command multiple containers with Docker Compose!",
  xpReward: 130,
  difficulty: "beginner",
  estimatedMinutes: 8,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "One ship is nice, but a FLEET is powerful! Real apps need multiple services: a web server, a database, maybe a cache. Docker Compose lets you define and run ALL of them with one command!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "An Orchestra is like Docker Compose",
      analogy: "An orchestra is like Docker Compose",
      realWorld:
        "An orchestra has many musicians — strings, brass, percussion — each playing their own instrument. The CONDUCTOR coordinates them all, ensuring they start together, play in harmony, and create beautiful music as a unified whole.",
      realWorldEmoji: "🎵",
      codeConcept:
        "Your app has many services — web server, database, cache — each running in its own container. Docker Compose is the CONDUCTOR: it defines all services in one file, starts them together, and manages how they communicate.",
      codeConceptEmoji: "🐳",
      mappings: [
        { real: "Musical score", code: "docker-compose.yml file" },
        { real: "Individual musicians", code: "Individual containers/services" },
        { real: "Conductor starts the performance", code: "docker compose up" },
        { real: "Musicians listen to each other", code: "Services on shared network" },
      ],
      conclusion:
        "Docker Compose orchestrates your multi-container app just like a conductor orchestrates an orchestra!",
    },
    {
      type: "comic",
      title: "Docker Compose to the Rescue",
      panels: [
        {
          illustration: "1",
          narration: "The Problem: Juggling Containers",
          character: "captain",
          dialogue: "Running 'docker run' for your web app... then again for the database... then again for Redis... then connecting them all manually? There must be a better way!",
          mood: "thinking",
          background: "from-red-500/20 to-orange-500/20",
        },
        {
          illustration: "2",
          narration: "The Solution: One File to Rule Them All",
          character: "captain",
          dialogue: "docker-compose.yml defines ALL your services, their connections, ports, and volumes in ONE file. It's your fleet's master plan!",
          mood: "excited",
          background: "from-blue-500/20 to-cyan-500/20",
        },
        {
          illustration: "3",
          narration: "One Command to Launch Them All",
          character: "captain",
          dialogue: "'docker compose up' — BOOM! All services start in the right order, connected to each other automatically. 'docker compose down' stops everything cleanly.",
          mood: "celebrating",
          background: "from-green-500/20 to-emerald-500/20",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Docker Compose Anatomy",
      description:
        "The key sections of a docker-compose.yml file and what each one controls.",
      steps: [
        {
          title: "services",
          icon: "🖥️",
          explanation:
            "Each service is a container. You define the image (or build instructions), ports, environment variables, and volumes for each one.",
          codeSnippet:
            "services:\n  web:\n    build: .\n    ports:\n      - '3000:3000'",
        },
        {
          title: "depends_on",
          icon: "🔀",
          explanation:
            "Controls startup order. If your web app needs the database running first, 'depends_on: db' ensures the database container starts before the web container.",
          codeSnippet: "  web:\n    depends_on:\n      - db",
        },
        {
          title: "volumes",
          icon: "💾",
          explanation:
            "Containers are ephemeral — data disappears when they stop. Volumes persist data to disk. Essential for databases!",
          codeSnippet:
            "  db:\n    volumes:\n      - db-data:/var/lib/postgresql/data\nvolumes:\n  db-data:",
        },
        {
          title: "environment",
          icon: "⚙️",
          explanation:
            "Pass configuration to containers via environment variables. Database passwords, API keys, feature flags — all configured without changing code.",
          codeSnippet:
            "  db:\n    environment:\n      - POSTGRES_PASSWORD=secret\n      - POSTGRES_DB=myapp",
        },
      ],
    },
    {
      type: "code",
      title: "A Complete Docker Compose File",
      explanation:
        "This docker-compose.yml defines a full-stack app: a Node.js web server connected to a PostgreSQL database with persistent storage.",
      code: `# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://db:5432/myapp

  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=myapp
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:`,
      language: "yaml",
      highlightLines: [3, 12, 20],
    },
    {
      type: "quiz",
      question: "What does 'depends_on' do in Docker Compose?",
      options: [
        "Installs dependencies from npm",
        "Ensures one service starts before another",
        "Links to an external API",
        "Downloads Docker images",
      ],
      correctIndex: 1,
      explanation:
        "'depends_on' tells Docker Compose that the 'web' service needs the 'db' service to start first. It manages startup order!",
      xpBonus: 15,
    },
    {
      type: "typeracer",
      instruction: "Type the command to start all services!",
      code: "docker compose up -d",
      language: "bash",
      targetWPM: 15,
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "You've commanded an entire fleet! You now know Docker basics, container management, and multi-container orchestration with Compose. Captain Deploy salutes you, Admiral!",
      mood: "celebrating",
    },
  ],
};
