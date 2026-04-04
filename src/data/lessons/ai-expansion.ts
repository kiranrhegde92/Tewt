import { Lesson } from "@/types";

export const aiReinforcement: Lesson = {
  id: "ai-reinforcement",
  trackId: "ai-odyssey",
  title: "Reinforcement Learning and Rewards",
  description:
    "Understand agents, environments, rewards, exploration, and how systems learn from trial and feedback.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "Supervised learning studies answer keys. Reinforcement learning studies consequences. The agent tries actions, sees rewards, and slowly learns which choices lead to better long-term outcomes.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Inside the Reward Arena",
      panels: [
        {
          illustration: "\u{1F3AE}",
          narration: "Agent acts",
          character: "captain",
          dialogue:
            "The agent looks at the current state and chooses an action, like move left, accelerate, or recommend an item.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F30D}",
          narration: "Environment responds",
          character: "captain",
          dialogue:
            "The world reacts. A game changes, a robot moves, or a user clicks or ignores a recommendation.",
          mood: "happy",
        },
        {
          illustration: "\u{2B50}",
          narration: "Reward arrives",
          character: "captain",
          dialogue:
            "The reward says how good the outcome was. The agent uses that signal to update future choices.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Reinforcement Learning = Training a Game Player",
      analogy:
        "Reinforcement learning is like teaching a player to master a game by giving points for good moves instead of handing them the perfect move list in advance.",
      realWorld: "Arcade Training",
      realWorldEmoji: "\u{1F579}\u{FE0F}",
      codeConcept: "Reinforcement Learning",
      codeConceptEmoji: "\u{1F3C6}",
      mappings: [
        { real: "Game screen", code: "state" },
        { real: "Controller move", code: "action" },
        { real: "Score gained or lost", code: "reward" },
        { real: "Strategy that improves with practice", code: "policy" },
      ],
      conclusion:
        "Reinforcement learning is about maximizing total future reward, not simply guessing one correct answer on each isolated example.",
    },
    {
      type: "code",
      title: "The Agent Loop",
      explanation:
        "This core loop shows the structure of most reinforcement learning systems: observe, act, receive feedback, update.",
      code: `state = env.reset()

for step in range(max_steps):
    action = agent.choose_action(state)
    next_state, reward, done = env.step(action)
    agent.learn(state, action, reward, next_state)
    state = next_state
    if done:
        break`,
      language: "python",
      highlightLines: [1, 4, 5, 6, 7, 8],
    },
    {
      type: "interactive-visual",
      title: "Observe -> Act -> Reward",
      description:
        "Push through the loop and notice how the agent has to keep acting before it fully understands the environment.",
      visualType: "call-stack",
      config: {
        frames: ["observe_state()", "choose_action()", "env_step()", "learn_from_reward()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "The Big Reinforcement Learning Ideas",
      description:
        "The hard part of reinforcement learning is not the loop itself. It is learning how to act well when reward is delayed and uncertainty is everywhere.",
      steps: [
        {
          icon: "1",
          title: "State is the information available right now",
          explanation:
            "The agent never sees the future directly. It must choose from the current situation and whatever memory or context the system provides.",
        },
        {
          icon: "2",
          title: "A policy is the strategy for choosing actions",
          explanation:
            "You can think of a policy as the agent's behavior rule. Training keeps adjusting that rule to seek higher reward.",
        },
        {
          icon: "3",
          title: "Exploration and exploitation are in tension",
          explanation:
            "If the agent only repeats what already works, it may miss better strategies. If it explores too much, it wastes time on poor actions.",
        },
        {
          icon: "4",
          title: "Reward design shapes behavior",
          explanation:
            "Agents optimize the reward you define, not the intention you had in your head. A bad reward can train strange or unsafe shortcuts.",
        },
        {
          icon: "5",
          title: "Credit assignment is the hard puzzle",
          explanation:
            "When a reward comes late, the agent has to figure out which earlier actions actually helped cause it.",
        },
      ],
    },
    {
      type: "puzzle",
      instruction: "Put the reinforcement learning loop in the correct order:",
      codeLines: [
        "state = env.reset()",
        "action = agent.choose_action(state)",
        "next_state, reward, done = env.step(action)",
        "agent.learn(state, action, reward, next_state)",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "python",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match each reinforcement learning term to its role:",
      pairs: [
        { left: "State", right: "Current situation the agent can observe" },
        { left: "Action", right: "Choice the agent makes" },
        { left: "Reward", right: "Feedback signal about the outcome" },
        { left: "Policy", right: "Strategy for picking actions" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why does reinforcement learning need exploration?",
      options: [
        "To avoid using any rewards",
        "To search for better strategies than the current favorite one",
        "To remove the environment from training",
        "To turn regression into classification",
      ],
      correctIndex: 1,
      explanation:
        "Without exploration, an agent can get stuck repeating a mediocre strategy and never discover a better one.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "You now understand learning from consequences, not just labels. Next you return to language models and see how modern AI scaled sequence understanding with transformers.",
      mood: "celebrating",
    },
  ],
};

export const aiRecommenders: Lesson = {
  id: "ai-recommenders",
  trackId: "ai-odyssey",
  title: "Recommendation Systems and Ranking",
  description:
    "Learn how recommendation engines rank items, use feedback signals, handle cold starts, and avoid boring one-note suggestions.",
  xpReward: 185,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "A recommendation system is an AI matchmaker. It watches what users click, skip, save, buy, or binge, then tries to rank the next items most worth showing.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Inside the Recommendation Engine",
      panels: [
        {
          illustration: "\u{1F4E5}",
          narration: "Candidate pool",
          character: "stackie",
          dialogue:
            "The system first gathers a reasonable set of possible items instead of scoring the whole internet from scratch.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F3AF}",
          narration: "Ranking",
          character: "stackie",
          dialogue:
            "Next it scores those candidates using user history, item features, popularity, or embeddings.",
          mood: "happy",
        },
        {
          illustration: "\u{1F501}",
          narration: "Feedback loop",
          character: "stackie",
          dialogue:
            "What the user clicks or ignores becomes new training signal for the next round of recommendations.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Recommenders = A Smart Librarian",
      analogy:
        "A great librarian does not dump every book on the table. They first pull a likely shelf, then rank titles based on what you liked before, what is similar, and what might pleasantly surprise you.",
      realWorld: "Personal Librarian",
      realWorldEmoji: "\u{1F4DA}",
      codeConcept: "Recommendation System",
      codeConceptEmoji: "\u{1F4F1}",
      mappings: [
        { real: "Shelves worth checking first", code: "candidate generation" },
        { real: "Best books moved to the top", code: "ranking model" },
        { real: "Reader history and preferences", code: "user features or embeddings" },
        { real: "Unexpected but relevant pick", code: "exploration and diversity" },
      ],
      conclusion:
        "Recommendation is ranking under uncertainty. The system has to be relevant, fresh, and diverse at the same time.",
    },
    {
      type: "code",
      title: "Score and Rank Candidates",
      explanation:
        "Many recommendation systems work in two stages: gather candidates, then score and rank them for the current user.",
      code: `candidates = fetch_candidates(user_id)
scores = [rank_model(user_id, item_id) for item_id in candidates]
top_items = sort_by_score(candidates, scores)[:5]`,
      language: "python",
      highlightLines: [1, 2, 3],
    },
    {
      type: "interactive-visual",
      title: "Candidates -> Scores -> Top Picks",
      description:
        "Tap the boxes to separate the candidate pool, ranking score, and final shortlist in a recommendation pipeline.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "candidates", value: "120 items", type: "string" },
          { name: "score", value: "0.92", type: "number" },
          { name: "topPick", value: '"podcast-episode-17"', type: "string" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "What Makes Recommenders Good or Bad",
      description:
        "Ranking systems feel simple from the outside, but they balance user preference, business goals, feedback quality, and long-term experience.",
      steps: [
        {
          icon: "1",
          title: "Feedback can be explicit or implicit",
          explanation:
            "A star rating is explicit feedback. Clicks, watch time, purchases, and skips are implicit signals that still teach the model something.",
        },
        {
          icon: "2",
          title: "Candidate generation and ranking solve different problems",
          explanation:
            "Candidate generation narrows the universe fast. Ranking spends more compute on the shortlist to order it carefully.",
        },
        {
          icon: "3",
          title: "Cold start is a major pain point",
          explanation:
            "New users have little history and new items have little feedback, so the system needs metadata, popularity priors, or exploration to get started.",
        },
        {
          icon: "4",
          title: "Diversity prevents boring recommendation loops",
          explanation:
            "If the model only maximizes immediate click probability, it may keep showing the same style of content and trap the user in a narrow feed.",
        },
        {
          icon: "5",
          title: "Recommenders influence future data",
          explanation:
            "What you show today affects what users click tomorrow. That means the model is partly shaping the very feedback it later learns from.",
        },
      ],
    },
    {
      type: "puzzle",
      instruction: "Arrange the recommendation workflow in order:",
      codeLines: [
        "candidates = fetch_candidates(user_id)",
        "scores = score_candidates(user_id, candidates)",
        "ranked_items = order_by_score(candidates, scores)",
        "log_user_feedback(ranked_items)",
      ],
      correctOrder: [0, 1, 2, 3],
      language: "python",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the recommendation term to its role:",
      pairs: [
        { left: "Candidate generation", right: "Creates a manageable shortlist of possible items" },
        { left: "Ranking", right: "Orders the shortlist by likely relevance" },
        { left: "Cold start", right: "Lack of history for new users or items" },
        { left: "Diversity", right: "Prevents repetitive or overly narrow results" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why do recommendation systems often need diversity rules in addition to ranking scores?",
      options: [
        "Because ranking models cannot sort numbers",
        "Because the highest-score list can become repetitive and narrow",
        "Because embeddings stop working without it",
        "Because users never click similar items twice",
      ],
      correctIndex: 1,
      explanation:
        "Pure ranking can over-focus on one pattern. Diversity helps keep results useful, fresh, and less monotonous.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Now you can see how AI turns behavior into ranked choices. The next lesson applies similar retrieval ideas directly to language-model products with prompting, tools, and RAG.",
      mood: "celebrating",
    },
  ],
};
