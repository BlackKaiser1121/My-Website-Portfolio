export type ProjectStatus = "active" | "deployed";
export type ProjectPriority = "selected" | "archive";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "repository";
  isVerified: boolean;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  displayOrder: number;
  summary: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  missingContent: readonly string[];
}

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: "fahad",
    title: "Fahad: Deepfake Verification",
    status: "active",
    priority: "selected",
    displayOrder: 1,
    summary: "An offline AI-powered mobile app for detecting manipulated and AI-generated images.",
    technologies: ["Flutter", "Dart", "Tflite"],
    links: [
      {
        label: "View Project",
        href: "https://github.com/BlackKaiser1121/FAHAD",
        kind: "repository",
        isVerified: true
      }
    ],
    missingContent: ["project-screenshot", "case-study", "live-demo"]
  },
  {
    slug: "resumebridge",
    title: "ResumeBridge",
    status: "active",
    priority: "selected",
    displayOrder: 2,
    summary:
      "AI-powered career counseling platform. Analyzes resumes and generates compatibility scores with job recommendations.",
    technologies: ["PHP", "MYSQL"],
    links: [
      {
        label: "View Project",
        href: "https://github.com/BlackKaiser1121/ResumeBridge",
        kind: "repository",
        isVerified: true
      }
    ],
    missingContent: ["project-screenshot", "case-study", "live-demo"]
  },
  {
    slug: "nightbank-finance",
    title: "Nightbank Finance",
    status: "deployed",
    priority: "archive",
    displayOrder: 3,
    summary:
      "A banking simulator where users can manage their finances, invest in a dynamic stock market, take out loans, and play arcade games - all without ever needing an internet connection.",
    technologies: ["PHP", "AI/ML"],
    links: [
      {
        label: "View Project",
        href: "https://github.com/BlackKaiser1121/NightBank-Finance",
        kind: "repository",
        isVerified: true
      }
    ],
    missingContent: ["project-screenshot", "case-study", "live-demo"]
  }
];

export function getSelectedProjects(): readonly PortfolioProject[] {
  return portfolioProjects
    .filter((project) => project.priority === "selected" || project.slug === "nightbank-finance")
    .slice()
    .sort((left, right) => left.displayOrder - right.displayOrder);
}
