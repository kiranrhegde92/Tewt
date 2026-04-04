import { Lesson } from "@/types";

export const gitBasics: Lesson = {
  id: "git-basics",
  trackId: "git-galaxy",
  title: "First Contact with Git",
  description: "Learn the fundamentals of version control — your code's time machine!",
  xpReward: 140,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Greetings, space cadet! 🚀 Welcome to the Git Galaxy — a universe where you can TRAVEL THROUGH TIME with your code! Git is a version control system that saves snapshots of your project. Made a mistake? Travel back in time! Want to experiment? Create a parallel universe (branch)!",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Git = A Save System for Your Code",
      analogy: "Git is like the save system in a video game — checkpoint your progress and reload if things go wrong",
      realWorld: "Video Game Saves",
      realWorldEmoji: "🎮",
      codeConcept: "Git Version Control",
      codeConceptEmoji: "🌌",
      mappings: [
        { real: "Save game (checkpoint)", code: "git commit (snapshot)" },
        { real: "Load a previous save", code: "git checkout (go back in time)" },
        { real: "Start a new game path", code: "git branch (parallel timeline)" },
        { real: "Upload saves to the cloud", code: "git push (send to GitHub)" },
        { real: "Download cloud saves", code: "git pull (get latest changes)" },
      ],
      conclusion: "Every professional developer uses Git. It's not optional — it's the foundation of all modern software development. With Git, you'll NEVER lose your code again!",
    },
    {
      type: "comic",
      title: "The Three Zones of Git",
      panels: [
        {
          illustration: "📝",
          narration: "WORKING DIRECTORY — your actual files",
          character: "pixel",
          dialogue: "This is where you write code. Files here are 'untracked' or 'modified' — Git sees them but hasn't saved them yet.",
          mood: "thinking",
        },
        {
          illustration: "📦",
          narration: "STAGING AREA — the 'ready to save' zone",
          character: "pixel",
          dialogue: "Use 'git add' to move files here. It's like putting items in a shipping box — they're ready to be committed but not yet saved.",
          mood: "happy",
        },
        {
          illustration: "💾",
          narration: "REPOSITORY — the permanent save",
          character: "pixel",
          dialogue: "Use 'git commit' to save staged changes permanently. Each commit is a snapshot with a message describing WHAT changed and WHY.",
          mood: "excited",
        },
        {
          illustration: "☁️",
          narration: "REMOTE — GitHub (the cloud)",
          character: "pixel",
          dialogue: "'git push' sends your commits to GitHub. 'git pull' downloads others' commits. This is how teams collaborate!",
          mood: "celebrating",
        },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Essential Git Commands",
      description: "These 6 commands will cover 90% of your daily Git usage:",
      steps: [
        {
          icon: "🏁",
          title: "git init — start a new repository",
          explanation: "Creates a new Git repository in the current folder. Run this once at the beginning of a project.",
          codeSnippet: "cd my-project\ngit init\n# Initialized empty Git repository!",
        },
        {
          icon: "👁️",
          title: "git status — check what's changed",
          explanation: "Shows which files are modified, staged, or untracked. Run this OFTEN — it's your dashboard!",
          codeSnippet: "git status\n# On branch main\n# Changes not staged:\n#   modified: index.html",
        },
        {
          icon: "📦",
          title: "git add — stage changes for commit",
          explanation: "Moves changes to the staging area. Like putting items in a box before shipping.",
          codeSnippet: "git add index.html       # Stage one file\ngit add .                # Stage ALL changes",
        },
        {
          icon: "💾",
          title: "git commit — save a snapshot",
          explanation: "Creates a permanent snapshot with a message. Good messages explain WHY, not just WHAT.",
          codeSnippet: "git commit -m \"Fix login button not responding on mobile\"\n# Good: explains the WHY\n# Bad: \"updated stuff\"",
        },
        {
          icon: "⬆️",
          title: "git push — upload to GitHub",
          explanation: "Sends your commits to the remote repository (GitHub). Others can then see and pull your changes.",
          codeSnippet: "git push origin main\n# Uploads your commits to GitHub!",
        },
        {
          icon: "⬇️",
          title: "git pull — download latest changes",
          explanation: "Gets the latest commits from the remote. Always pull before starting new work to avoid conflicts!",
          codeSnippet: "git pull origin main\n# Downloads teammates' changes",
        },
      ],
    },
    {
      type: "code",
      title: "A Typical Git Workflow",
      explanation: "Here's the daily flow most developers follow, from writing code to pushing it:",
      code: `# 1. Check current state
git status

# 2. Make some changes to your files...
#    (edit code, add features, fix bugs)

# 3. Stage your changes
git add src/login.js src/styles.css

# 4. Commit with a meaningful message
git commit -m "Add forgot-password link to login page"

# 5. Push to GitHub
git push origin main

# 6. Next day, start by pulling latest
git pull origin main
# Now start coding again!`,
      language: "bash",
      highlightLines: [8, 11, 14],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "What does 'git add .' do?",
      options: [
        "Creates a new commit",
        "Stages ALL changed files for the next commit",
        "Pushes code to GitHub",
        "Initializes a new repository",
      ],
      correctIndex: 1,
      explanation: "'git add .' stages all modified and new files in the current directory. The dot (.) means 'everything here'. After staging, use 'git commit' to save them!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match Git commands to what they do:",
      pairs: [
        { left: "git init", right: "Create a new repository" },
        { left: "git commit", right: "Save a snapshot of staged changes" },
        { left: "git push", right: "Upload commits to remote (GitHub)" },
        { left: "git pull", right: "Download latest changes from remote" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've mastered Git basics! 🌟 You can now track changes, save snapshots, and sync with GitHub. Next: BRANCHING — creating parallel timelines to work on features without breaking main!",
      mood: "celebrating",
    },
  ],
};

export const gitBranching: Lesson = {
  id: "git-branching",
  trackId: "git-galaxy",
  title: "Parallel Universes: Branching",
  description: "Create branches to work on features without breaking the main timeline!",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 10,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Commander! 🌌 What if you could create a PARALLEL UNIVERSE, experiment freely, and only merge the good results back? That's exactly what Git branches do! You work on features in isolation, then merge them when ready.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Branches = Parallel Timelines",
      analogy: "Git branches are like parallel timelines in a sci-fi movie — separate realities that can be merged together",
      realWorld: "Movie Timelines",
      realWorldEmoji: "🎬",
      codeConcept: "Git Branches",
      codeConceptEmoji: "🌿",
      mappings: [
        { real: "Main timeline (original story)", code: "main branch (production code)" },
        { real: "Alternate timeline (what-if scenario)", code: "Feature branch (new feature)" },
        { real: "Timelines converge (alternate merges back)", code: "git merge (combine branches)" },
        { real: "Timeline conflicts (contradictory events)", code: "Merge conflicts (same line changed)" },
      ],
      conclusion: "The main branch is your stable, production-ready code. Feature branches let you experiment safely. When the feature works, merge it back into main!",
    },
    {
      type: "comic",
      title: "The Branching Workflow",
      panels: [
        { illustration: "🌿", narration: "Step 1: Create a branch from main", character: "pixel", dialogue: "git checkout -b add-login-page — you're now in a parallel universe! Changes here don't affect main.", mood: "excited" },
        { illustration: "💻", narration: "Step 2: Work on your feature", character: "pixel", dialogue: "Write code, make commits, break things — it's all safe! Main is untouched.", mood: "happy" },
        { illustration: "🔄", narration: "Step 3: Merge back when ready", character: "pixel", dialogue: "git merge add-login-page — your feature flows back into the main timeline. Clean and safe!", mood: "celebrating" },
        { illustration: "💥", narration: "Oops! Merge conflicts!", character: "bug", dialogue: "If two people changed the SAME line, Git doesn't know which version to keep. YOU decide! 😈", mood: "confused" },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Branch Commands",
      description: "Everything you need to manage branches:",
      steps: [
        {
          icon: "🌿",
          title: "Create & switch to a new branch",
          explanation: "Creates a new timeline from the current point and switches to it immediately.",
          codeSnippet: "git checkout -b feature/login\n# OR (newer syntax):\ngit switch -c feature/login",
        },
        {
          icon: "🔀",
          title: "Switch between branches",
          explanation: "Jump between parallel timelines. Your working directory changes to match that branch's state!",
          codeSnippet: "git checkout main       # Go back to main\ngit checkout feature/login  # Go to feature",
        },
        {
          icon: "🤝",
          title: "Merge a branch into main",
          explanation: "Brings the feature branch's changes into main. First switch to main, then merge.",
          codeSnippet: "git checkout main           # Go to main first\ngit merge feature/login     # Bring feature changes in\ngit branch -d feature/login # Delete the branch (cleanup)",
        },
        {
          icon: "📋",
          title: "List and manage branches",
          explanation: "See all your branches. The * marks which one you're currently on.",
          codeSnippet: "git branch           # List local branches\ngit branch -a        # List all (including remote)\ngit branch -d old-branch  # Delete a merged branch",
        },
      ],
    },
    {
      type: "code",
      title: "Complete Branching Workflow",
      explanation: "Here's a real-world feature development workflow from start to finish:",
      code: `# Start from main with latest code
git checkout main
git pull origin main

# Create a feature branch
git checkout -b feature/dark-mode

# Work on the feature (edit files...)
git add src/theme.css src/toggle.js
git commit -m "Add dark mode toggle component"

git add src/colors.css
git commit -m "Define dark color palette"

# Push feature branch to GitHub
git push -u origin feature/dark-mode

# When feature is done, merge into main
git checkout main
git merge feature/dark-mode
git push origin main

# Cleanup
git branch -d feature/dark-mode`,
      language: "bash",
      highlightLines: [6, 10, 18, 19],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "Why should you create a feature branch instead of working directly on main?",
      options: [
        "It's faster to write code on a branch",
        "To keep main stable while you experiment — merge only when the feature works",
        "GitHub requires it",
        "Branches use less memory",
      ],
      correctIndex: 1,
      explanation: "Feature branches isolate your work-in-progress from the stable main branch. If your experiment breaks things, main is unaffected. Only merge when the feature is tested and working!",
      xpBonus: 15,
    },
    {
      type: "puzzle",
      instruction: "Put this branching workflow in the correct order:",
      codeLines: [
        "git checkout -b feature/signup",
        "git add . && git commit -m \"Add signup form\"",
        "git checkout main",
        "git merge feature/signup",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "bash",
      xpBonus: 20,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You're a branching master! 🌟 Parallel timelines, merging, and feature isolation — these skills are essential for working on ANY team. Next: collaboration with Pull Requests and teamwork!",
      mood: "celebrating",
    },
  ],
};

export const gitCollaboration: Lesson = {
  id: "git-collaboration",
  trackId: "git-galaxy",
  title: "Team Play: Pull Requests",
  description: "Collaborate with others using Pull Requests and code reviews!",
  xpReward: 150,
  difficulty: "beginner",
  estimatedMinutes: 9,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue: "Cadet, you're ready for TEAMWORK! 🤝 In professional development, you don't just merge branches directly. You create a PULL REQUEST (PR) — a formal proposal to merge your code. Your teammates review it, suggest changes, and approve it. It's the heart of collaboration!",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Pull Request Lifecycle",
      panels: [
        { illustration: "🌿", narration: "1. Push your feature branch to GitHub", character: "pixel", dialogue: "git push -u origin feature/my-awesome-feature — your code is now on GitHub!", mood: "happy" },
        { illustration: "📋", narration: "2. Open a Pull Request on GitHub", character: "pixel", dialogue: "Describe WHAT you changed and WHY. Add screenshots if it's visual. Make it easy for reviewers!", mood: "thinking" },
        { illustration: "🔍", narration: "3. Code Review by teammates", character: "pixel", dialogue: "Reviewers read your code, leave comments, suggest improvements. This makes everyone's code better!", mood: "excited" },
        { illustration: "✅", narration: "4. Approve & Merge!", character: "pixel", dialogue: "Once approved, click merge! Your feature is now part of main. Celebrate! 🎉", mood: "celebrating" },
      ],
    },
    {
      type: "concept-breakdown",
      title: "Pull Request Best Practices",
      description: "Writing great PRs is a skill that will make your teammates love working with you:",
      steps: [
        {
          icon: "📏",
          title: "Keep PRs small and focused",
          explanation: "One feature or fix per PR. A 50-line PR gets reviewed in 5 minutes. A 500-line PR gets 'I'll review it later' (never).",
        },
        {
          icon: "📝",
          title: "Write a clear description",
          explanation: "Explain the context: What problem does this solve? How does it work? Any trade-offs? Link the issue it fixes.",
        },
        {
          icon: "🖼️",
          title: "Add screenshots for UI changes",
          explanation: "Before/after screenshots or a GIF make visual changes instantly understandable. Reviewers love this!",
        },
        {
          icon: "💬",
          title: "Respond to review comments respectfully",
          explanation: "Code review isn't personal criticism — it's collaborative improvement. Discuss, learn, and make the code better together.",
        },
      ],
    },
    {
      type: "code",
      title: "The Complete Collaboration Workflow",
      explanation: "From starting a feature to getting it merged via Pull Request:",
      code: `# 1. Start from latest main
git checkout main && git pull

# 2. Create feature branch
git checkout -b feature/user-search

# 3. Write code, commit often
git add src/search.js
git commit -m "Add user search API integration"
git add src/SearchBar.tsx
git commit -m "Build SearchBar component with autocomplete"

# 4. Push to GitHub
git push -u origin feature/user-search

# 5. On GitHub: Open Pull Request
#    - Title: "Add user search with autocomplete"
#    - Description: what, why, screenshots
#    - Request reviews from teammates

# 6. After approval: Merge on GitHub
# 7. Locally, clean up:
git checkout main
git pull origin main
git branch -d feature/user-search`,
      language: "bash",
      highlightLines: [5, 14, 16],
    },
    // ===== TEST =====
    {
      type: "quiz",
      question: "Why do teams use Pull Requests instead of merging directly to main?",
      options: [
        "It's required by Git",
        "For code review — teammates catch bugs and suggest improvements before merging",
        "Pull requests are faster than direct merging",
        "It saves storage space on GitHub",
      ],
      correctIndex: 1,
      explanation: "Pull Requests enable code review, which catches bugs early, ensures code quality, and spreads knowledge across the team. It's the cornerstone of professional software development!",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match collaboration concepts:",
      pairs: [
        { left: "Pull Request", right: "Formal proposal to merge code with review" },
        { left: "Code Review", right: "Teammates read and comment on your changes" },
        { left: "Merge Conflict", right: "Same code changed differently on two branches" },
        { left: "git pull", right: "Download and integrate remote changes" },
      ],
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue: "You've mastered Git collaboration! 🌌 Init, commit, branch, merge, push, pull, and Pull Requests — you now have the complete Git toolkit used by every professional developer worldwide. The Git Galaxy salutes you, Commander! 🚀⭐",
      mood: "celebrating",
    },
  ],
};
