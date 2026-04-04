import { Lesson } from "@/types";
import { jsVariables, jsFunctions, jsLoops } from "./javascript-basics";
import { pyBasics, pyLists, pyFunctions } from "./python-basics";
import { javaOOP, javaMultithreading, javaCollections } from "./java-kingdom";
import { algoBigO, algoSorting, algoSearching } from "./algorithms-intro";
import { reactComponents, reactProps, reactState } from "./react-basics";
import { dockerIntro, dockerContainers, dockerCompose } from "./docker-intro";
import { gitBasics, gitBranching, gitCollaboration } from "./git-galaxy";
import { cssFlexbox, cssGrid, cssAnimations } from "./css-magic";

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
  "java-oop": javaOOP,
  "java-multithreading": javaMultithreading,
  "java-collections": javaCollections,

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
