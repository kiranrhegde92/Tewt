"use client";

import { use, useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StoryPanel from "@/components/lesson/StoryPanel";
import CodeBlock from "@/components/lesson/CodeBlock";
import ComicPanelComponent from "@/components/lesson/ComicPanel";
import VisualAnalogy from "@/components/lesson/VisualAnalogy";
import ConceptBreakdown from "@/components/lesson/ConceptBreakdown";
import InteractiveVisual from "@/components/lesson/InteractiveVisual";
import LessonStepper from "@/components/lesson/LessonStepper";
import CompletionCelebration from "@/components/lesson/CompletionCelebration";
import Quiz from "@/components/games/Quiz";
import CodePuzzle from "@/components/games/CodePuzzle";
import MatchingGame from "@/components/games/MatchingGame";
import SortingVisualizer from "@/components/games/SortingVisualizer";
import TypeRacer from "@/components/games/TypeRacer";
import Button from "@/components/ui/Button";
import { allLessons } from "@/data/lessons/index";
import { tracks } from "@/data/tracks";
import { useProgressStore } from "@/stores/useProgressStore";
import {
  CodeStep,
  ComicStep,
  ConceptBreakdownStep,
  InteractiveVisualStep,
  MatchStep,
  PuzzleStep,
  QuizStep,
  StoryStep,
  TypeRacerStep,
  VisualAnalogyStep,
  VisualizerStep,
} from "@/types";

const learningStepTypes = [
  "story",
  "code",
  "comic",
  "visual-analogy",
  "concept-breakdown",
  "interactive-visual",
];

export default function LessonPage({
  params,
}: {
  params: Promise<{ trackId: string; lessonId: string }>;
}) {
  const searchParams = useSearchParams();
  const { trackId, lessonId } = use(params);
  const lesson = allLessons[lessonId];
  const track = tracks.find((candidate) => candidate.id === trackId);
  const { addXP, completeLesson, updateStreak } = useProgressStore();

  const [currentStep, setCurrentStep] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [canProceed, setCanProceed] = useState(true);

  const requestedStep = Number(searchParams.get("step") ?? 0);
  const safeRequestedStep =
    Number.isInteger(requestedStep) && requestedStep >= 0
      ? Math.min(requestedStep, Math.max((lesson?.steps.length ?? 1) - 1, 0))
      : 0;

  useEffect(() => {
    setCurrentStep(safeRequestedStep);
    setCanProceed(true);
  }, [lessonId, safeRequestedStep]);

  if (!lesson || !track) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <span className="mb-4 text-6xl">{"\u{1F914}"}</span>
        <h1 className="text-2xl font-bold">Lesson Not Found</h1>
        <Link href="/tracks" className="mt-4 text-primary hover:underline">
          Back to Tracks
        </Link>
      </div>
    );
  }

  const step = lesson.steps[currentStep];

  const handleNext = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCanProceed(true);
      return;
    }

    const totalXP = lesson.xpReward + earnedXP;
    addXP(totalXP);
    completeLesson(lessonId);
    updateStreak();
    setIsComplete(true);
  };

  const handleCorrect = useCallback((xp: number) => {
    setEarnedXP((previousXP) => previousXP + xp);
    setCanProceed(true);
  }, []);

  const handleWrong = useCallback(() => {
    setCanProceed(true);
  }, []);

  const currentLessonIndex = track.lessonIds.indexOf(lessonId);
  const nextLessonId =
    currentLessonIndex < track.lessonIds.length - 1
      ? track.lessonIds[currentLessonIndex + 1]
      : undefined;

  if (isComplete) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <CompletionCelebration
          xpEarned={lesson.xpReward + earnedXP}
          lessonTitle={lesson.title}
          trackId={trackId}
          nextLessonId={nextLessonId}
        />
      </div>
    );
  }

  const renderStep = () => {
    switch (step.type) {
      case "story":
        return <StoryPanel step={step as StoryStep} />;
      case "code":
        return <CodeBlock step={step as CodeStep} />;
      case "comic":
        return <ComicPanelComponent key={currentStep} step={step as ComicStep} />;
      case "visual-analogy":
        return <VisualAnalogy key={currentStep} step={step as VisualAnalogyStep} />;
      case "concept-breakdown":
        return (
          <ConceptBreakdown
            key={currentStep}
            step={step as ConceptBreakdownStep}
          />
        );
      case "interactive-visual":
        return (
          <InteractiveVisual
            key={currentStep}
            step={step as InteractiveVisualStep}
          />
        );
      case "quiz":
        return (
          <Quiz
            key={currentStep}
            step={step as QuizStep}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        );
      case "puzzle":
        return (
          <CodePuzzle
            key={currentStep}
            step={step as PuzzleStep}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        );
      case "match":
        return (
          <MatchingGame
            key={currentStep}
            step={step as MatchStep}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        );
      case "visualizer":
        return (
          <SortingVisualizer key={currentStep} step={step as VisualizerStep} />
        );
      case "typeracer":
        return (
          <TypeRacer
            key={currentStep}
            step={step as TypeRacerStep}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        );
      default:
        return <p>Unknown step type</p>;
    }
  };

  const stepCategory = learningStepTypes.includes(step.type)
    ? "\u{1F4D6} Learning"
    : "\u{1F3AE} Practice";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/tracks/${trackId}`}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} /> {track.title}
        </Link>
        <LessonStepper
          totalSteps={lesson.steps.length}
          currentStep={currentStep}
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <motion.h1
          key={lesson.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          {lesson.title}
        </motion.h1>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {stepCategory}
        </span>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        {renderStep()}
      </motion.div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button
          variant="ghost"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          <ArrowLeft size={16} className="mr-1" /> Back
        </Button>

        <div className="text-sm text-muted-foreground">
          +{earnedXP} bonus XP earned
        </div>

        <Button onClick={handleNext} disabled={!canProceed}>
          {currentStep === lesson.steps.length - 1 ? (
            `Complete Lesson \u{1F389}`
          ) : (
            <>
              Continue <ArrowRight size={16} className="ml-1" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
