import { Lesson } from "@/types";
import { buildRoadmapLessons, type RoadmapTrackSpec } from "./shared";

const aiDeveloperRoadmap: RoadmapTrackSpec = {
  id: "ai-odyssey",
  title: "AI / ML for Developers",
  description:
    "Learn how to integrate AI services, understand ML fundamentals, choose frameworks, ship MLOps workflows, and use AI tools as part of everyday development.",
  icon: "\u{1F916}",
  color: "#14B8A6",
  gradient: "from-emerald-400 to-cyan-500",
  category: "techstack",
  guide: "stackie",
  world: "AI Lab",
  worldEmoji: "\u{1F9EA}",
  topics: [
    {
      id: "ai-dev-integration",
      title: "AI Integration",
      description:
        "Wire AI APIs and orchestration libraries into product code without treating the model as a magical black box.",
      difficulty: "beginner",
      estimatedMinutes: 13,
      xpReward: 150,
      codeLanguage: "typescript",
      visualType: "call-stack",
      code: `type Provider = "openai" | "anthropic" | "huggingface";

async function answerWithAI(provider: Provider, prompt: string) {
  const assistant = createAssistant({
    provider,
    model: "fast-tutor",
    tools: ["searchDocs", "runTests"],
  });

  return assistant.generate(prompt);
}`,
      subtopics: [
        "OpenAI API",
        "Anthropic API",
        "Hugging Face",
        "LangChain",
        "LlamaIndex",
      ],
    },
    {
      id: "ai-dev-ml-basics",
      title: "ML Basics",
      description:
        "Build intuition for classic ML ideas that underpin modern AI products, from supervised learning to embeddings and RAG.",
      difficulty: "beginner",
      estimatedMinutes: 14,
      xpReward: 155,
      codeLanguage: "python",
      visualType: "memory-boxes",
      code: `from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42
)

model.fit(X_train, y_train)
preds = model.predict(X_test)
print(classification_report(y_test, preds))`,
      subtopics: [
        "Supervised / Unsupervised learning",
        "Neural networks",
        "Transformers",
        "Embeddings",
        "RAG",
      ],
    },
    {
      id: "ai-dev-ml-frameworks",
      title: "ML Frameworks",
      description:
        "Choose the right ML framework for the job and understand the different mental models behind each one.",
      difficulty: "beginner",
      estimatedMinutes: 14,
      xpReward: 150,
      codeLanguage: "python",
      visualType: "call-stack",
      code: `frameworks = {
    "TensorFlow": "production-friendly deep learning",
    "PyTorch": "flexible eager execution",
    "scikit-learn": "classical ML pipelines",
    "Keras": "high-level neural network API",
}

for name, strength in frameworks.items():
    print(f"{name}: {strength}")`,
      subtopics: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"],
    },
    {
      id: "ai-dev-mlops",
      title: "MLOps",
      description:
        "Ship models with repeatable deployment, feature management, experiment tracking, and vector storage practices.",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      xpReward: 175,
      codeLanguage: "python",
      visualType: "call-stack",
      code: `with mlflow.start_run():
    model = train_model(data)
    mlflow.log_metric("accuracy", accuracy)
    mlflow.log_param("feature_store", "enabled")
    registry.register(model)
    deploy(model, canary=0.1)`,
      subtopics: [
        "Model deployment",
        "Feature stores",
        "Experiment tracking (MLflow)",
        "Vector databases (Pinecone, Weaviate)",
      ],
    },
    {
      id: "ai-dev-tools",
      title: "AI-assisted Dev Tools",
      description:
        "Use copilots and AI editors to move faster, while still reviewing the output like an engineer rather than a passenger.",
      difficulty: "beginner",
      estimatedMinutes: 12,
      xpReward: 140,
      codeLanguage: "text",
      visualType: "memory-boxes",
      code: `Prompt: Refactor this component, keep the API stable, and add a regression test.
Review: inspect the diff, run the test suite, and verify the behavior yourself.
Rule: never merge code you have not read.`,
      subtopics: [
        "GitHub Copilot",
        "Cursor",
        "Claude Code",
        "Codeium",
        "v0",
        "Bolt",
      ],
    },
  ],
};

export const aiDeveloperLessons: Lesson[] = buildRoadmapLessons(aiDeveloperRoadmap);

export const aiDeveloperLessonIds = aiDeveloperLessons.map((lesson) => lesson.id);
