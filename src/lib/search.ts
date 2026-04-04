import { allLessons } from "@/data/lessons/index";
import { tracks } from "@/data/tracks";
import { Lesson, LessonStep, Track } from "@/types";

export type SearchItem = {
  description: string;
  href: string;
  icon: string;
  id: string;
  kind: "lesson" | "topic" | "track";
  meta: string;
  searchValue: string;
  title: string;
};

const categoryLabels: Record<Track["category"], string> = {
  language: "Programming Languages",
  algorithms: "Algorithms & Data Structures",
  techstack: "Tech Stacks & Frameworks",
  devops: "DevOps & Deployment",
  ui: "UI/UX & Design",
  tools: "Developer Tools",
};

function addParts(parts: string[], ...values: Array<string | undefined>) {
  for (const value of values) {
    if (value) {
      parts.push(value);
    }
  }
}

function compactText(parts: string[]) {
  return parts.join(" ").replace(/\s+/g, " ").trim().toLowerCase();
}

function collectStepTerms(step: LessonStep) {
  const parts: string[] = [];

  switch (step.type) {
    case "story":
      addParts(parts, step.character, step.dialogue);
      break;
    case "comic":
      addParts(parts, step.title);
      for (const panel of step.panels) {
        addParts(
          parts,
          panel.character,
          panel.dialogue,
          panel.illustration,
          panel.narration
        );
      }
      break;
    case "visual-analogy":
      addParts(
        parts,
        step.title,
        step.analogy,
        step.realWorld,
        step.codeConcept,
        step.conclusion
      );
      for (const mapping of step.mappings) {
        addParts(parts, mapping.real, mapping.code);
      }
      break;
    case "concept-breakdown":
      addParts(parts, step.title, step.description);
      for (const concept of step.steps) {
        addParts(parts, concept.title, concept.explanation);
      }
      break;
    case "interactive-visual":
      addParts(parts, step.title, step.description, step.visualType);
      break;
    case "code":
      addParts(parts, step.title, step.explanation, step.language);
      break;
    case "quiz":
      addParts(parts, step.question, step.explanation, ...step.options);
      break;
    case "puzzle":
      addParts(parts, step.instruction, step.language);
      break;
    case "match":
      addParts(parts, step.instruction);
      for (const pair of step.pairs) {
        addParts(parts, pair.left, pair.right);
      }
      break;
    case "typeracer":
      addParts(parts, step.instruction, step.language);
      break;
    case "visualizer":
      addParts(parts, step.title, step.description, step.visualizerType);
      break;
  }

  return parts;
}

function collectLessonTerms(lesson: Lesson) {
  const parts = [lesson.title, lesson.description];

  for (const step of lesson.steps) {
    parts.push(...collectStepTerms(step));
  }

  return compactText(parts);
}

function createTopicItem({
  track,
  lesson,
  stepIndex,
  title,
  description,
  extraTerms = [],
  id,
}: {
  track: Track;
  lesson: Lesson;
  stepIndex: number;
  title: string;
  description: string;
  extraTerms?: string[];
  id: string;
}) {
  return {
    description,
    href: `/tracks/${track.id}/lessons/${lesson.id}?step=${stepIndex}`,
    icon: track.icon,
    id,
    kind: "topic",
    meta: `${lesson.title} · ${track.title}`,
    searchValue: compactText([
      track.title,
      categoryLabels[track.category] ?? track.category,
      lesson.title,
      lesson.description,
      title,
      description,
      ...extraTerms,
    ]),
    title,
  } satisfies SearchItem;
}

function buildTopicItems(track: Track, lesson: Lesson) {
  return lesson.steps.flatMap((step, stepIndex) => {
    switch (step.type) {
      case "story":
        return [];

      case "comic":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description:
              step.panels
                .map((panel) => panel.narration ?? panel.dialogue)
                .filter(Boolean)
                .join(" ") || lesson.description,
            extraTerms: step.panels.flatMap((panel) => [
              panel.narration ?? "",
              panel.dialogue ?? "",
            ]),
            id: `${lesson.id}-comic-${stepIndex}`,
          }),
        ];

      case "visual-analogy":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description: step.conclusion,
            extraTerms: [
              step.analogy,
              step.realWorld,
              step.codeConcept,
              ...step.mappings.flatMap((mapping) => [mapping.real, mapping.code]),
            ],
            id: `${lesson.id}-analogy-${stepIndex}`,
          }),
        ];

      case "concept-breakdown":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description: step.description,
            extraTerms: step.steps.flatMap((concept) => [
              concept.title,
              concept.explanation,
            ]),
            id: `${lesson.id}-breakdown-${stepIndex}`,
          }),
          ...step.steps.map((concept, conceptIndex) =>
            createTopicItem({
              track,
              lesson,
              stepIndex,
              title: concept.title,
              description: concept.explanation,
              extraTerms: [step.title],
              id: `${lesson.id}-concept-${stepIndex}-${conceptIndex}`,
            })
          ),
        ];

      case "interactive-visual":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description: step.description,
            extraTerms: [step.visualType],
            id: `${lesson.id}-visual-${stepIndex}`,
          }),
        ];

      case "code":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description: step.explanation,
            extraTerms: [step.language],
            id: `${lesson.id}-code-${stepIndex}`,
          }),
        ];

      case "quiz":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.question,
            description: step.explanation,
            extraTerms: step.options,
            id: `${lesson.id}-quiz-${stepIndex}`,
          }),
        ];

      case "puzzle":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.instruction,
            description: `Code puzzle inside ${lesson.title}`,
            extraTerms: [step.language],
            id: `${lesson.id}-puzzle-${stepIndex}`,
          }),
        ];

      case "match":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.instruction,
            description: `Matching challenge inside ${lesson.title}`,
            extraTerms: step.pairs.flatMap((pair) => [pair.left, pair.right]),
            id: `${lesson.id}-match-${stepIndex}`,
          }),
        ];

      case "typeracer":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.instruction,
            description: `Typing practice inside ${lesson.title}`,
            extraTerms: [step.language],
            id: `${lesson.id}-typeracer-${stepIndex}`,
          }),
        ];

      case "visualizer":
        return [
          createTopicItem({
            track,
            lesson,
            stepIndex,
            title: step.title,
            description: step.description,
            extraTerms: [step.visualizerType],
            id: `${lesson.id}-visualizer-${stepIndex}`,
          }),
        ];

      default:
        return [];
    }
  });
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const track of tracks) {
    const trackLessons = track.lessonIds
      .map((lessonId) => allLessons[lessonId])
      .filter((lesson): lesson is Lesson => Boolean(lesson));
    const lessonTerms = trackLessons.map((lesson) =>
      [lesson.title, lesson.description].join(" ")
    );

    items.push({
      description: track.description,
      href: `/tracks/${track.id}`,
      icon: track.icon,
      id: track.id,
      kind: "track",
      meta: categoryLabels[track.category] ?? track.category,
      searchValue: compactText([
        track.title,
        track.description,
        categoryLabels[track.category] ?? track.category,
        ...lessonTerms,
      ]),
      title: track.title,
    });

    for (const lesson of trackLessons) {
      items.push({
        description: lesson.description,
        href: `/tracks/${track.id}/lessons/${lesson.id}`,
        icon: track.icon,
        id: lesson.id,
        kind: "lesson",
        meta: track.title,
        searchValue: compactText([
          track.title,
          categoryLabels[track.category] ?? track.category,
          collectLessonTerms(lesson),
        ]),
        title: lesson.title,
      });

      items.push(...buildTopicItems(track, lesson));
    }
  }

  return items;
}
