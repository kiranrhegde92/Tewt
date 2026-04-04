import { Lesson } from "@/types";

export const aiMultimodal: Lesson = {
  id: "ai-multimodal",
  trackId: "ai-odyssey",
  title: "Multimodal AI: Text, Vision, and Audio",
  description:
    "Learn how AI systems combine text, images, and audio to caption, transcribe, search, and reason across modalities.",
  xpReward: 185,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Modern AI is no longer text-only. The same product might read a PDF, inspect a screenshot, transcribe a voice note, and answer in natural language within one flow.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Eyes, Ears, and Language in One Team",
      panels: [
        {
          illustration: "\u{1F5BC}\u{FE0F}",
          narration: "Vision",
          character: "pixel",
          dialogue:
            "Vision models can caption images, inspect interfaces, read charts, and describe what is visible.",
          mood: "happy",
        },
        {
          illustration: "\u{1F3A4}",
          narration: "Audio",
          character: "pixel",
          dialogue:
            "Audio models can transcribe speech, detect speakers, or generate spoken responses.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4AC}",
          narration: "Text",
          character: "pixel",
          dialogue:
            "Language models tie the whole workflow together by reasoning over what was seen and heard.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Multimodal AI = A Team Meeting With Different Specialists",
      analogy:
        "One teammate reads documents, another inspects images, another listens to recordings, and a lead analyst combines their findings into one response.",
      realWorld: "Specialist Team Meeting",
      realWorldEmoji: "\u{1F465}",
      codeConcept: "Multimodal System",
      codeConceptEmoji: "\u{1F9E0}",
      mappings: [
        { real: "Reader", code: "OCR or text understanding" },
        { real: "Observer", code: "vision model" },
        { real: "Listener", code: "speech model" },
        { real: "Lead analyst", code: "multimodal reasoning layer" },
      ],
      conclusion:
        "Multimodal systems feel powerful because they combine multiple evidence channels instead of forcing everything into text first.",
    },
    {
      type: "code",
      title: "One Request, Multiple Inputs",
      explanation:
        "A multimodal request often mixes image or audio inputs with text instructions about what to extract or explain.",
      code: `response = model.generate(
    image=receipt_photo,
    text="Read the total amount and list the items"
)`,
      language: "python",
      highlightLines: [1, 2, 3, 4],
    },
    {
      type: "interactive-visual",
      title: "Three Inputs, One Answer",
      description:
        "Tap the boxes to separate image, audio, and text inputs before they become one combined response.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "image", value: '"invoice.png"', type: "string" },
          { name: "audio", value: '"call.mp3"', type: "string" },
          { name: "text", value: '"summarize issue"', type: "string" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Where Multimodal AI Shows Up",
      description:
        "The big idea is not just consuming extra inputs. It is using the right modality for the right job.",
      steps: [
        {
          icon: "1",
          title: "Vision handles screenshots, photos, and charts",
          explanation:
            "Useful tasks include UI understanding, document extraction, defect detection, and scene description.",
        },
        {
          icon: "2",
          title: "OCR and document understanding bridge image and text",
          explanation:
            "Invoices, PDFs, forms, and scans often need both layout awareness and language understanding.",
        },
        {
          icon: "3",
          title: "Audio unlocks transcription and spoken interaction",
          explanation:
            "Speech-to-text powers note capture and call summaries, while text-to-speech powers voice agents and assistants.",
        },
        {
          icon: "4",
          title: "Cross-modal retrieval links different media",
          explanation:
            "Some systems can search images from text queries or link spoken content back to relevant documents.",
        },
        {
          icon: "5",
          title: "Grounding still matters",
          explanation:
            "A confident answer about an image can still be wrong. Multimodal systems need the same evaluation and safety discipline as text systems.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the modality to a common job:",
      pairs: [
        { left: "Vision", right: "Captioning and analyzing images" },
        { left: "OCR", right: "Extracting text from documents and scans" },
        { left: "Speech-to-text", right: "Turning audio into transcripts" },
        { left: "Text-to-speech", right: "Generating spoken output" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What is the clearest advantage of a multimodal AI system?",
      options: [
        "It never needs evaluation",
        "It can combine evidence from text, images, or audio instead of relying on one input type only",
        "It removes the need for prompts",
        "It guarantees perfect factual accuracy",
      ],
      correctIndex: 1,
      explanation:
        "Multimodal systems can reason across different input channels, which makes them useful for document, vision, and voice workflows.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You now understand how AI systems see, hear, and read together. The next lesson leaves the demo stage and shows what it takes to serve, monitor, and maintain AI systems in the real world.",
      mood: "celebrating",
    },
  ],
};

export const aiDeploymentMonitoring: Lesson = {
  id: "ai-deployment-monitoring",
  trackId: "ai-odyssey",
  title: "Deployment, Monitoring, and Model Drift",
  description:
    "Understand how AI systems move from demo to production, how teams monitor quality, and what drift looks like in the real world.",
  xpReward: 190,
  difficulty: "intermediate",
  estimatedMinutes: 16,
  steps: [
    {
      type: "story",
      character: "bug",
      dialogue:
        "A model that works in a notebook is not a product yet. Production AI has to survive real traffic, changing user behavior, latency limits, cost pressure, and the slow decay of model quality over time.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "From Demo Table to Production Floor",
      panels: [
        {
          illustration: "\u{1F9EA}",
          narration: "Prototype",
          character: "bug",
          dialogue:
            "A prototype proves the idea. It is usually small, manual, and forgiving about mistakes.",
          mood: "happy",
        },
        {
          illustration: "\u{1F680}",
          narration: "Launch",
          character: "bug",
          dialogue:
            "Production means real users, quotas, queues, retries, and systems around the model that keep it reliable.",
          mood: "excited",
        },
        {
          illustration: "\u{1F6A8}",
          narration: "Monitor",
          character: "bug",
          dialogue:
            "Once usage begins, the job changes. Teams watch quality, costs, abuse, drift, and incidents continuously.",
          mood: "thinking",
        },
      ],
    },
    {
      type: "code",
      title: "A Simple Inference Service",
      explanation:
        "Real AI products wrap the model with request handling, logging, and fallback behavior instead of calling it naked from the UI.",
      code: `def answer_question(user_input):
    response = model.generate(user_input)
    log_request(user_input, response)

    if low_confidence(response):
        return escalate_to_human(user_input)

    return response`,
      language: "python",
      highlightLines: [1, 2, 3, 5, 6, 8],
    },
    {
      type: "interactive-visual",
      title: "Serving Flow",
      description:
        "Push the stack to see a request move through generation, logging, safety checks, and fallback.",
      visualType: "call-stack",
      config: {
        frames: ["receive_request()", "generate()", "log_and_monitor()", "fallback_if_needed()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "What Production AI Teams Watch",
      description:
        "Once a model is live, the job shifts from building to operating and improving the system safely.",
      steps: [
        {
          icon: "1",
          title: "Latency and cost shape the user experience",
          explanation:
            "Slow or expensive models may need caching, batching, streaming, smaller models, or smarter routing.",
        },
        {
          icon: "2",
          title: "Monitoring needs both technical and product signals",
          explanation:
            "Teams watch uptime and error rates, but they also track answer quality, user satisfaction, escalations, and failure categories.",
        },
        {
          icon: "3",
          title: "Drift means the world changed around the model",
          explanation:
            "User language, documents, fraud patterns, or business rules may shift, which makes old training or prompts less reliable.",
        },
        {
          icon: "4",
          title: "Fallbacks turn model uncertainty into safer behavior",
          explanation:
            "Strong systems can retry, route to a different model, ask clarifying questions, or hand off to humans.",
        },
        {
          icon: "5",
          title: "Feedback loops drive the next improvement cycle",
          explanation:
            "Logs, user reports, and reviewed failures become the raw material for new prompts, new evaluations, and future fine-tuning.",
        },
      ],
    },
    {
      type: "code",
      title: "A Drift Alarm Sketch",
      explanation:
        "Production systems often compare live quality or input distributions against historical baselines to spot silent decay.",
      code: `if live_quality < baseline_quality - 0.08:
    alert_team("quality drift detected")

if average_tokens_per_request > budget_limit:
    route_to_smaller_model()`,
      language: "python",
      highlightLines: [1, 2, 4, 5],
    },
    {
      type: "match",
      instruction: "Match the production concept to what it means:",
      pairs: [
        { left: "Latency", right: "How long the system takes to respond" },
        { left: "Drift", right: "Live data or behavior changing away from old assumptions" },
        { left: "Fallback", right: "Safer alternate path when confidence is weak" },
        { left: "Monitoring", right: "Watching quality, reliability, and cost in production" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What does model drift usually mean in production?",
      options: [
        "The model physically moves between servers",
        "Live inputs or behavior change so past training assumptions become less reliable",
        "The prompt becomes shorter",
        "The model stops using embeddings",
      ],
      correctIndex: 1,
      explanation:
        "Drift happens when the real world changes, which can slowly reduce model quality even if the code never changed.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "bug",
      dialogue:
        "You now know what it takes to keep AI alive in production. One final lesson remains: the safety, bias, privacy, and guardrails that decide whether all this capability is actually safe to ship.",
      mood: "celebrating",
    },
  ],
};
