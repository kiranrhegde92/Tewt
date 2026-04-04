import { Lesson } from "@/types";

export const dockerIntro: Lesson = {
  id: "docker-intro",
  trackId: "docker-dock",
  title: "Setting Sail with Docker",
  description: "Board Captain Deploy's ship and learn what containers are!",
  xpReward: 100,
  difficulty: "beginner",
  estimatedMinutes: 5,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue: "ATTENTION ON DECK! 🚢 I'm Captain Deploy, and today you'll learn about Docker — the ship that carries your apps safely across any ocean (server)! Containers ensure your app works the same everywhere!",
      mood: "excited",
    },
    {
      type: "code",
      title: "What is Docker?",
      explanation: "Docker packages your app and everything it needs into a 'container' — like a shipping container that works the same on any ship!",
      code: `# Dockerfile - your ship's blueprint
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app!
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
      explanation: "Docker solves the famous 'works on my machine' problem! By packaging your app with all its dependencies in a container, it runs the same everywhere.",
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
      dialogue: "Welcome aboard, sailor! ⚓ You now understand the basics of Docker. Next, we'll learn to actually build and run containers!",
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
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue: "Time to get your hands dirty! 🔧 We're going to build an image and run a container. These are the two most important Docker commands you'll ever learn!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Essential Docker Commands",
      explanation: "These commands are your bread and butter for working with Docker every day!",
      code: `# Build an image from Dockerfile
docker build -t my-app .

# Run a container from the image
docker run -p 3000:3000 my-app

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
      explanation: "The -p flag maps a host port to a container port. -p 3000:3000 means 'connect port 3000 on my machine to port 3000 inside the container'!",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Put these Docker commands in the right order to build and run an app:",
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
      dialogue: "You've launched your first container! 🚀 You're becoming a true DevOps sailor. Next stop: Docker Compose for managing multiple containers!",
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
  estimatedMinutes: 6,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue: "One ship is nice, but a FLEET is powerful! 🚢🚢🚢 Docker Compose lets you define and run multiple containers together. Your app + database + cache, all in one command!",
      mood: "excited",
    },
    {
      type: "code",
      title: "Docker Compose File",
      explanation: "docker-compose.yml defines your entire stack — which services to run, how they connect, and how they're configured!",
      code: `# docker-compose.yml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://db:5432

  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:`,
      language: "yaml",
      highlightLines: [4, 13],
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
      explanation: "'depends_on' tells Docker Compose that the 'web' service needs the 'db' service to start first. It manages startup order!",
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
      dialogue: "You've commanded an entire fleet! ⚓🏴‍☠️ You now know Docker basics, container management, and multi-container orchestration. Captain Deploy salutes you, Admiral!",
      mood: "celebrating",
    },
  ],
};
