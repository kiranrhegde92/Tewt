import { Lesson, Track } from "@/types";
import { webStackLessons, webStackTracks } from "./web-stack";
import { backendStackLessons, backendStackTracks } from "./backend-stack";
import { systemsStackLessons, systemsStackTracks } from "./systems-stack";
import { aiDeveloperLessons, aiDeveloperLessonIds } from "./ai-developer";
import {
  communityCertExpansionLessons,
  communityCertExpansionTracks,
} from "./community-cert-expansion";
import {
  communityPlatformExpansionLessons,
  communityPlatformExpansionTracks,
} from "./community-platform-expansion";
import {
  communityWebExpansionLessons,
  communityWebExpansionTracks,
} from "./community-web-expansion";
import {
  w3SchoolsExpansionLessons,
  w3SchoolsExpansionTracks,
} from "./w3schools-expansion";

export const roadmapTracks: Track[] = [
  ...webStackTracks,
  ...backendStackTracks,
  ...systemsStackTracks,
  ...communityWebExpansionTracks,
  ...communityPlatformExpansionTracks,
  ...communityCertExpansionTracks,
  ...w3SchoolsExpansionTracks,
];

export const roadmapLessons: Lesson[] = [
  ...webStackLessons,
  ...backendStackLessons,
  ...systemsStackLessons,
  ...communityWebExpansionLessons,
  ...communityPlatformExpansionLessons,
  ...communityCertExpansionLessons,
  ...w3SchoolsExpansionLessons,
];

export { aiDeveloperLessons, aiDeveloperLessonIds };
