import type { ContentValidationResult, PortfolioProject } from "../types/portfolio";

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "project-venora",
    slug: "venora",
    title: "Venora",
    shortTitle: "Venora",
    summary: "Event venue and supplier platform for discovery, profiles, and role-aware access.",
    description:
      "Venora is a Next.js, React, TypeScript, and Supabase platform focused on venue and supplier discovery, supplier and venue profiles, authentication, role-based access control, location or map functionality, QA, and UI/UX involvement.",
    year: "Not verified",
    status: "in-progress",
    role: "Full-stack development, QA, and UI/UX involvement",
    responsibilities: [
      "Developed a full-stack marketplace that connects customers with event venues and service suppliers",
      "Implemented Supabase server-side authentication, email verification, password recovery, session refresh, protected routes, and role-based access control",
      "Built type-safe server actions and validated user input using TypeScript, Zod, and React Hook Form",
      "Created responsive dashboards and profile components within a pnpm monorepo using shared UI and configuration packages"
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Radix UI",
      "Zod",
      "React Hook Form",
      "pnpm"
    ],
    category: "Full-stack platform",
    featured: true,
    order: 1,
    thumbnail: {
      kind: "asset",
      src: "assets/projects/venora-venue-listing.png",
      alt: "Venora mobile venue listing screen showing Amorita Resort details",
      width: 910,
      height: 1607
    },
    screenshots: [
      {
        kind: "asset",
        src: "assets/projects/venora-venue-listing.png",
        alt: "Venora mobile venue listing screen showing Amorita Resort details",
        width: 910,
        height: 1607
      },
      {
        kind: "asset",
        src: "assets/projects/venora-home-search.png",
        alt: "Venora mobile homepage search screen with event category chips and venue search form",
        width: 902,
        height: 1577
      },
      {
        kind: "asset",
        src: "assets/projects/venora-about-overview.png",
        alt: "Venora mobile about screen explaining the event marketplace",
        width: 902,
        height: 1592
      },
      {
        kind: "asset",
        src: "assets/projects/venora-supplier-listing.png",
        alt: "Venora mobile supplier listing screen showing Sai's Photography supplier details",
        width: 902,
        height: 1510
      }
    ],
    repositoryUrl: "https://github.com/Jassim3nidad/venora",
    liveUrl: "https://venora-web.vercel.app/",
    caseStudyAvailable: true,
    caseStudySections: [
      { title: "Platform overview", status: "available" },
      { title: "Authentication and role-based access control", status: "available" },
      { title: "QA and UI/UX decisions", status: "available" }
    ],
    accessibilityLabel: "Venora project preview",
    missingContent: []
  },
  {
    id: "project-fahad",
    slug: "fahad",
    title: "FAHAD",
    shortTitle: "FAHAD",
    summary: "Offline mobile deepfake image verification with on-device inference.",
    description:
      "FAHAD is an offline AI-powered mobile app for static-image verification. It uses Flutter, Dart, TensorFlow Lite, and a Vision Transformer workflow for on-device inference, with local encrypted history and real, uncertain, or manipulated classification states.",
    year: "Not verified",
    status: "active",
    role: "Mobile AI implementation and privacy-focused product design",
    responsibilities: [
      "Built a Flutter and Dart mobile verification flow",
      "Integrated TensorFlow Lite and Vision Transformer model usage",
      "Kept verification on device for privacy-first behavior",
      "Handled real, uncertain, or manipulated classification states",
      "Supported local encrypted history"
    ],
    technologies: ["Flutter", "Dart", "TensorFlow Lite", "Vision Transformer", "SQLite", "Python"],
    category: "Mobile AI / On-device ML",
    featured: true,
    order: 2,
    thumbnail: {
      kind: "asset",
      src: "assets/projects/fahad-verification-result.png",
      alt: "FAHAD mobile verification result screen showing a credibility score and fake classification",
      width: 720,
      height: 1544
    },
    screenshots: [
      {
        kind: "asset",
        src: "assets/projects/fahad-verification-result.png",
        alt: "FAHAD mobile verification result screen showing a credibility score and fake classification",
        width: 720,
        height: 1544
      }
    ],
    repositoryUrl: "https://github.com/BlackKaiser1121/FAHAD",
    caseStudyAvailable: true,
    caseStudySections: [
      { title: "Offline verification workflow", status: "available" },
      { title: "On-device model integration", status: "available" },
      { title: "Privacy and local history", status: "available" }
    ],
    accessibilityLabel: "FAHAD project preview",
    missingContent: []
  },
  {
    id: "project-resumebridge",
    slug: "resumebridge",
    title: "ResumeBridge",
    shortTitle: "ResumeBridge",
    summary: "AI resume analysis and job-description comparison with compatibility feedback.",
    description:
      "ResumeBridge analyzes resumes against job descriptions, supports authentication and session isolation, and generates compatibility scoring, skill-gap feedback, and keyword feedback using PHP, object-oriented programming, PDO, MySQL, JavaScript, and Qwen3.6-Plus API integration through cURL.",
    year: "Not verified",
    status: "active",
    role: "Full-stack PHP development and AI API integration",
    responsibilities: [
      "Built resume and job-description comparison flows",
      "Implemented PHP, object-oriented programming, PDO, and MySQL patterns",
      "Integrated the Qwen3.6-Plus API through cURL",
      "Supported authentication and session isolation",
      "Presented 0-100 compatibility scoring, skill-gap feedback, and keyword feedback"
    ],
    technologies: [
      "PHP",
      "Object-oriented PHP",
      "PDO",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Qwen3.6-Plus API",
      "cURL"
    ],
    category: "AI career tooling",
    featured: true,
    order: 3,
    thumbnail: {
      kind: "asset",
      src: "assets/projects/resumebridge-ai-job-finder.png",
      alt: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations",
      width: 1896,
      height: 927
    },
    screenshots: [
      {
        kind: "asset",
        src: "assets/projects/resumebridge-ai-job-finder.png",
        alt: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations",
        width: 1896,
        height: 927
      }
    ],
    repositoryUrl: "https://github.com/BlackKaiser1121/ResumeBridge",
    caseStudyAvailable: true,
    caseStudySections: [
      { title: "Resume analysis workflow", status: "available" },
      { title: "Authentication and session isolation", status: "available" },
      { title: "AI API integration", status: "available" }
    ],
    accessibilityLabel: "ResumeBridge project preview",
    missingContent: ["live-url", "system-fixes"]
  },
  {
    id: "project-nightbank-finance",
    slug: "nightbank-finance",
    title: "Nightbank Finance",
    shortTitle: "Nightbank",
    summary:
      "Offline banking simulator with finance management, stock market, loans, and arcade games.",
    description:
      "Nightbank Finance is a banking simulator where users can manage finances, invest in a dynamic stock market, take out loans, and play arcade games without needing an internet connection.",
    year: "Not verified",
    status: "deployed",
    role: "Personal project development",
    responsibilities: [
      "Built finance-management simulation features",
      "Implemented stock-market and loan gameplay concepts",
      "Supported offline play"
    ],
    technologies: ["PHP", "AI/ML"],
    category: "Finance simulator",
    featured: false,
    order: 4,
    thumbnail: {
      kind: "placeholder",
      label: "Finance simulator placeholder",
      accessibilityLabel: "Decorative Nightbank Finance project visual placeholder"
    },
    screenshots: [],
    repositoryUrl: "https://github.com/BlackKaiser1121/NightBank-Finance",
    caseStudyAvailable: false,
    caseStudySections: [{ title: "Archive project overview", status: "planned" }],
    accessibilityLabel: "Nightbank Finance project preview",
    missingContent: ["project-screenshots", "case-study", "live-url"]
  }
];

export function getFeaturedProjects(): readonly PortfolioProject[] {
  return portfolioProjects
    .filter((project) => project.featured)
    .slice()
    .sort((left, right) => left.order - right.order);
}

export function getSelectedProjects(): readonly PortfolioProject[] {
  return getFeaturedProjects();
}

export function validatePortfolioContent(): ContentValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();
  const featuredOrders = new Set<number>();

  for (const project of portfolioProjects) {
    if (ids.has(project.id)) {
      errors.push(`Duplicate project id: ${project.id}`);
    }

    if (slugs.has(project.slug)) {
      errors.push(`Duplicate project slug: ${project.slug}`);
    }

    ids.add(project.id);
    slugs.add(project.slug);

    if (!project.title || !project.shortTitle || !project.summary || !project.accessibilityLabel) {
      errors.push(`Project ${project.slug} is missing a required label or summary`);
    }

    if (project.featured) {
      if (featuredOrders.has(project.order)) {
        errors.push(`Duplicate featured project order: ${project.order}`);
      }

      featuredOrders.add(project.order);
    }

    for (const url of [project.repositoryUrl, project.liveUrl]) {
      if (url === "") {
        errors.push(`Project ${project.slug} has an empty URL`);
      }

      if (url && !url.startsWith("https://")) {
        errors.push(`Project ${project.slug} has an unsupported external URL protocol`);
      }
    }

    if (project.thumbnail.kind === "asset" && !project.thumbnail.alt) {
      errors.push(`Project ${project.slug} has an image without alt text`);
    }

    if (project.screenshots.length === 0) {
      warnings.push(`Project ${project.slug} has no screenshots yet`);
    }
  }

  return { errors, warnings };
}
