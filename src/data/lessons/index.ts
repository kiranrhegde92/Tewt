import { Lesson } from "@/types";
import { jsVariables, jsFunctions, jsLoops } from "./javascript-basics";
import { pyBasics, pyLists, pyFunctions } from "./python-basics";
import {
  javaBasics,
  javaControlFlow,
  javaMethods,
  javaExceptions,
} from "./java-foundations";
import {
  javaDataLab,
  javaMemoryCore,
  javaGenerics,
  javaFileIO,
  javaModernJava,
} from "./java-advanced";
import { javaOOP, javaMultithreading, javaCollections } from "./java-kingdom";
import { algoBigO, algoSorting, algoSearching } from "./algorithms-intro";
import { reactComponents, reactProps, reactState } from "./react-basics";
import { dockerIntro, dockerContainers, dockerCompose } from "./docker-intro";
import { gitBasics, gitBranching, gitCollaboration } from "./git-galaxy";
import { cssFlexbox, cssGrid, cssAnimations } from "./css-magic";
import {
  aiFoundations,
  aiDataLab,
  aiSupervised,
  aiUnsupervised,
  aiNeuralNetworks,
  aiTrainingLoop,
  aiTransformers,
  aiPromptRAG,
  aiSafety,
} from "./ai-odyssey";
import { aiEvaluation, aiEmbeddingsSearch } from "./ai-metrics";
import { aiFineTuning, aiAgents } from "./ai-advanced-systems";
import { aiMultimodal, aiDeploymentMonitoring } from "./ai-modern-systems";
import { aiReinforcement, aiRecommenders } from "./ai-expansion";

export const allLessons: Record<string, Lesson> = {
  // JavaScript
  "js-variables": jsVariables,
  "js-functions": jsFunctions,
  "js-loops": jsLoops,

  // Python
  "py-basics": pyBasics,
  "py-lists": pyLists,
  "py-functions": pyFunctions,

  // Java
  "java-basics": javaBasics,
  "java-data-lab": javaDataLab,
  "java-control-flow": javaControlFlow,
  "java-methods": javaMethods,
  "java-oop": javaOOP,
  "java-memory-core": javaMemoryCore,
  "java-exceptions": javaExceptions,
  "java-collections": javaCollections,
  "java-generics": javaGenerics,
  "java-file-io": javaFileIO,
  "java-multithreading": javaMultithreading,
  "java-modern-java": javaModernJava,

  // AI
  "ai-foundations": aiFoundations,
  "ai-data-lab": aiDataLab,
  "ai-supervised": aiSupervised,
  "ai-unsupervised": aiUnsupervised,
  "ai-neural-networks": aiNeuralNetworks,
  "ai-training-loop": aiTrainingLoop,
  "ai-evaluation": aiEvaluation,
  "ai-reinforcement": aiReinforcement,
  "ai-transformers": aiTransformers,
  "ai-embeddings-search": aiEmbeddingsSearch,
  "ai-recommenders": aiRecommenders,
  "ai-prompt-rag": aiPromptRAG,
  "ai-fine-tuning": aiFineTuning,
  "ai-agents": aiAgents,
  "ai-multimodal": aiMultimodal,
  "ai-deployment-monitoring": aiDeploymentMonitoring,
  "ai-safety": aiSafety,

  // Algorithms
  "algo-bigO": algoBigO,
  "algo-sorting": algoSorting,
  "algo-searching": algoSearching,

  // React
  "react-components": reactComponents,
  "react-props": reactProps,
  "react-state": reactState,

  // Docker
  "docker-intro": dockerIntro,
  "docker-containers": dockerContainers,
  "docker-compose": dockerCompose,

  // Git
  "git-basics": gitBasics,
  "git-branching": gitBranching,
  "git-collaboration": gitCollaboration,

  // CSS
  "css-flexbox": cssFlexbox,
  "css-grid": cssGrid,
  "css-animations": cssAnimations,
};
