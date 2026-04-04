import { Lesson } from "@/types";
import { jsVariables, jsFunctions, jsLoops } from "./javascript-basics";
import { pyBasics, pyLists, pyFunctions } from "./python-basics";
import { algoBigO, algoSorting, algoSearching } from "./algorithms-intro";
import { reactComponents, reactProps, reactState } from "./react-basics";
import { dockerIntro, dockerContainers, dockerCompose } from "./docker-intro";
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

  // CSS
  "css-flexbox": cssFlexbox,
  "css-grid": cssGrid,
  "css-animations": cssAnimations,
};
