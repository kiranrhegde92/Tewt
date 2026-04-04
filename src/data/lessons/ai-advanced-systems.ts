import { Lesson } from "@/types";

export const aiFineTuning: Lesson = {
  id: "ai-fine-tuning",
  trackId: "ai-odyssey",
  title: "Fine-Tuning and Model Adaptation",
  description:
    "Learn when fine-tuning is worth it, how it differs from prompting and RAG, and how teams adapt models safely.",
  xpReward: 185,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Not every AI problem should be solved by retraining a model. Great teams first ask whether better prompts or better retrieval solve the issue before paying the cost of fine-tuning.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "Three Ways to Customize a Model",
      panels: [
        {
          illustration: "\u{1F4DD}",
          narration: "Prompting",
          character: "stackie",
          dialogue:
            "Prompting changes the instructions for the current task without changing the model's weights.",
          mood: "happy",
        },
        {
          illustration: "\u{1F4DA}",
          narration: "RAG",
          character: "stackie",
          dialogue:
            "RAG gives the model new evidence at answer time without teaching it permanently.",
          mood: "excited",
        },
        {
          illustration: "\u{1F527}",
          narration: "Fine-tuning",
          character: "stackie",
          dialogue:
            "Fine-tuning actually changes learned behavior so the model becomes better at a repeated style or task.",
          mood: "thinking",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Fine-Tuning = Training a Cafe Team to Speak Your House Style",
      analogy:
        "Prompting is giving today's instructions. RAG is handing the team a reference binder. Fine-tuning is retraining the whole staff so the style becomes second nature.",
      realWorld: "Cafe Training Program",
      realWorldEmoji: "\u{2615}",
      codeConcept: "Model Adaptation",
      codeConceptEmoji: "\u{1F9E0}",
      mappings: [
        { real: "Daily note from the manager", code: "prompting" },
        { real: "Reference binder on the counter", code: "RAG" },
        { real: "Weeks of retraining", code: "fine-tuning" },
        { real: "New behavior becomes habitual", code: "updated model weights" },
      ],
      conclusion:
        "Fine-tuning is the heaviest lever. Use it when the pattern is stable, repeated, and worth teaching directly into the model.",
    },
    {
      type: "code",
      title: "Fine-Tuning Examples Need Clear Targets",
      explanation:
        "Training examples must show the input pattern and the desired output pattern consistently.",
      code: `{"messages":[
  {"role":"user","content":"Summarize this ticket"},
  {"role":"assistant","content":"Bug summary: login fails after token refresh."}
]}`,
      language: "json",
      highlightLines: [1, 2, 3, 4],
    },
    {
      type: "interactive-visual",
      title: "Adaptation Pipeline",
      description:
        "Push the stack to walk through preparation, training, evaluation, and rollout.",
      visualType: "call-stack",
      config: {
        frames: ["prepare_examples()", "train_adapter()", "evaluate()", "rollout()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "When Fine-Tuning Is the Right Tool",
      description:
        "Fine-tuning is powerful, but it is also more expensive and more permanent than prompting or retrieval.",
      steps: [
        {
          icon: "1",
          title: "Start with prompting and retrieval first",
          explanation:
            "If the issue is unclear instructions or missing context, fine-tuning is often unnecessary overkill.",
        },
        {
          icon: "2",
          title: "Fine-tune when the behavior must be consistent at scale",
          explanation:
            "Stable formatting, brand voice, specialized extraction patterns, and repeated workflows are common reasons to fine-tune.",
        },
        {
          icon: "3",
          title: "Example quality matters more than sheer volume",
          explanation:
            "Messy or contradictory examples teach messy or contradictory behavior. Small, clean datasets often beat large noisy ones.",
        },
        {
          icon: "4",
          title: "Parameter-efficient methods reduce cost",
          explanation:
            "Techniques like LoRA adapt a smaller slice of the model so teams can experiment faster and cheaper.",
        },
        {
          icon: "5",
          title: "Always evaluate before and after adaptation",
          explanation:
            "Fine-tuning can improve one behavior while breaking another. Evaluation catches regressions before they reach users.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the adaptation tool to when it fits best:",
      pairs: [
        { left: "Prompting", right: "Changing instructions for the current request" },
        { left: "RAG", right: "Adding fresh or private context at answer time" },
        { left: "Fine-tuning", right: "Teaching repeated behavior into the model" },
        { left: "LoRA", right: "Parameter-efficient adaptation method" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Which situation is the strongest candidate for fine-tuning?",
      options: [
        "A one-off question that needs a current document",
        "A repeated extraction task with stable output format across thousands of cases",
        "A request that only needs better wording in the prompt",
        "A task where no evaluation data exists",
      ],
      correctIndex: 1,
      explanation:
        "Fine-tuning is most useful when a repeated pattern is stable and important enough to encode into model behavior directly.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "You can now compare prompting, retrieval, and fine-tuning as separate levers instead of one blurry idea. Next you build AI systems that do more than answer once: agents that plan, call tools, and iterate.",
      mood: "celebrating",
    },
  ],
};

export const aiAgents: Lesson = {
  id: "ai-agents",
  trackId: "ai-odyssey",
  title: "Agents, Workflows, and Tool Loops",
  description:
    "Understand what makes an AI agent different from a single prompt, how tool loops work, and where agent systems fail.",
  xpReward: 190,
  difficulty: "intermediate",
  estimatedMinutes: 16,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "A single prompt gives one answer. An agent can inspect the problem, choose tools, act, observe results, and decide what to do next. That extra loop is powerful, but it also creates new failure modes.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Planner, Toolsmith, and Checker",
      panels: [
        {
          illustration: "\u{1F9ED}",
          narration: "Plan",
          character: "captain",
          dialogue:
            "The agent first decides what sub-steps are needed instead of answering blindly.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F527}",
          narration: "Act",
          character: "captain",
          dialogue:
            "Then it calls tools like search, code, calculators, or APIs to gather evidence or perform work.",
          mood: "happy",
        },
        {
          illustration: "\u{1F50D}",
          narration: "Review",
          character: "captain",
          dialogue:
            "A good agent checks whether the result is enough before it stops or loops again.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "A Minimal Agent Loop",
      explanation:
        "Agent behavior usually comes from a loop of think, act, observe, and decide whether to continue.",
      code: `state = "plan"

while state != "done":
    action = agent.next_action(context)
    observation = run_tool(action)
    context.append(observation)
    state = agent.next_state(context)`,
      language: "python",
      highlightLines: [1, 3, 4, 5, 6],
    },
    {
      type: "interactive-visual",
      title: "Observe -> Plan -> Act -> Check",
      description:
        "Push the stack to see an agent loop gather evidence before deciding whether it is finished.",
      visualType: "call-stack",
      config: {
        frames: ["observe()", "plan()", "call_tool()", "check_result()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "What Makes an Agent Useful",
      description:
        "Agents are not magic. They are loops plus tools plus rules about when to continue and when to stop.",
      steps: [
        {
          icon: "1",
          title: "Workflows are fixed; agents choose among options",
          explanation:
            "A workflow follows a mostly predetermined path. An agent has some freedom to decide which tool or step comes next.",
        },
        {
          icon: "2",
          title: "Tools expand what the model can actually do",
          explanation:
            "Search, calculators, databases, browsers, and code execution let the agent act on fresh information instead of improvising from memory.",
        },
        {
          icon: "3",
          title: "Memory keeps the loop coherent",
          explanation:
            "Agents often track prior observations, intermediate notes, or user constraints so they do not start over every turn.",
        },
        {
          icon: "4",
          title: "Validation stops sloppy tool use",
          explanation:
            "Strong agent systems verify tool outputs, guard against loops, and refuse actions that violate policy or confidence thresholds.",
        },
        {
          icon: "5",
          title: "The biggest failure mode is wandering",
          explanation:
            "Without clear goals and stop conditions, agents waste tokens, repeat actions, or chase irrelevant branches.",
        },
      ],
    },
    {
      type: "puzzle",
      instruction: "Put the agent loop in the right order:",
      codeLines: [
        "tool_result = run_tool(plan)",
        "answer = synthesize(context)",
        "plan = choose_next_action(context)",
        "context.append(tool_result)",
      ],
      correctOrder: [2, 0, 3, 1],
      language: "python",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the agent term to the right idea:",
      pairs: [
        { left: "Workflow", right: "Mostly fixed sequence of steps" },
        { left: "Agent", right: "System that chooses actions dynamically" },
        { left: "Tool call", right: "External action for exact work or fresh data" },
        { left: "Stop condition", right: "Rule for ending the loop" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What is the clearest difference between a simple prompt and an agent?",
      options: [
        "Agents always use bigger models",
        "Agents can loop through planning and tool use before answering",
        "Agents do not need prompts",
        "Agents never fail",
      ],
      correctIndex: 1,
      explanation:
        "The defining difference is the loop. Agents can observe, plan, act, and re-check instead of returning only one direct response.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "Now you can separate single-shot prompting from agentic systems. Next you widen the input channels, because modern AI does not only work with text. It also sees images, hears audio, and crosses modalities.",
      mood: "celebrating",
    },
  ],
};
