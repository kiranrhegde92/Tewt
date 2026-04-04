"use client";

import { motion, type TargetAndTransition } from "motion/react";
import { characters } from "@/data/characters";
import { CharacterMood } from "@/types";

interface CharacterAvatarProps {
  characterId: string;
  mood?: CharacterMood;
  size?: "sm" | "md" | "lg";
}

const moodAnimations: Record<CharacterMood, TargetAndTransition> = {
  happy: { y: [0, -5, 0], rotate: [0, 3, -3, 0] },
  thinking: { rotate: [0, -5, 0], scale: [1, 0.95, 1] },
  excited: { y: [0, -10, 0], scale: [1, 1.15, 1] },
  confused: { rotate: [0, -10, 10, -5, 5, 0] },
  celebrating: { y: [0, -15, 0], rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] },
};

const sizeMap = {
  sm: "w-12 h-12 text-2xl",
  md: "w-16 h-16 text-3xl",
  lg: "w-20 h-20 text-4xl",
};

export default function CharacterAvatar({
  characterId,
  mood = "happy",
  size = "md",
}: CharacterAvatarProps) {
  const character = characters[characterId];
  if (!character) return null;

  return (
    <motion.div
      className={`flex items-center justify-center rounded-2xl border-2 ${sizeMap[size]}`}
      style={{
        borderColor: character.color,
        backgroundColor: `${character.color}15`,
      }}
      animate={moodAnimations[mood]}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {character.avatar}
    </motion.div>
  );
}
