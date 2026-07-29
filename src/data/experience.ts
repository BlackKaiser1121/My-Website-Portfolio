import type { ExperienceEntry } from "../types/portfolio";
import { educationEntries } from "./education";

export interface AvailabilityEntry {
  label: string;
  summary: string;
  isVerified: boolean;
}

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "startuplab-qa-uiux-internship",
    kind: "internship",
    title: "Quality Assurance and UI/UX Intern",
    organization: "StartupLab Business Center",
    dateRange: "2026",
    summary:
      "Verified internship experience focused on QA coverage, usability review, and interface consistency.",
    responsibilities: [
      "Created test cases for authentication, permissions, password recovery, sharing, and role-based functionality",
      "Evaluated application workflows and interface layouts, documented functional and usability issues, and verified fixes with team members",
      "Reviewed interface consistency and responsive behavior and recommended practical UI/UX improvements"
    ],
    tools: ["Quality assurance", "UI/UX review", "Responsive interface testing"]
  },
  {
    id: "academic-project-work",
    kind: "academic-project",
    title: "Academic project work",
    dateRange: "Current",
    summary:
      "Computer Science project work across web development, software development, game development, and artificial intelligence.",
    responsibilities: [
      "Built practical project features from verified portfolio work",
      "Applied QA, UI/UX, and implementation thinking to project workflows",
      "Connected technical decisions to usable project outcomes"
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "PHP", "Dart", "Python", "C#"]
  },
  {
    id: "personal-project-work",
    kind: "personal-project",
    title: "Personal portfolio and product projects",
    dateRange: "Current",
    summary:
      "Hands-on portfolio projects including FAHAD, ResumeBridge, Nightbank Finance, and the Portfolio V2 migration.",
    responsibilities: [
      "Developed static, mobile, and web project interfaces",
      "Integrated AI and API workflows where verified by project facts",
      "Maintained a static-first portfolio architecture with automated checks"
    ],
    tools: ["Astro", "TypeScript", "Flutter", "TensorFlow Lite", "PHP", "MySQL"]
  }
];

export const education = {
  label: educationEntries[0]?.program ?? "Computer Science undergraduate",
  summary:
    educationEntries[0]?.summary ??
    "Computer Science undergraduate focused on software, web, game, and AI project work.",
  isVerified: true
};

export const availability: AvailabilityEntry = {
  label: "Employment & Internship Inquiries",
  summary: "Currently looking for software, game, and web development opportunities.",
  isVerified: true
};
