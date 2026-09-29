import type { CapabilityGroup } from "../types/portfolio";

export const capabilityGroups: readonly CapabilityGroup[] = [
  {
    id: "frontend-systems",
    title: "Frontend systems",
    summary: "Interfaces built around usable flows, responsive structure, and typed components.",
    items: [
      { label: "Next.js", evidence: "Venora platform work" },
      { label: "React", evidence: "Venora platform work" },
      { label: "TypeScript", evidence: "Venora and Portfolio V2" },
      { label: "JavaScript", evidence: "ResumeBridge interface behavior" },
      { label: "Flutter", evidence: "FAHAD mobile app" },
      { label: "HTML5 and CSS3", evidence: "Portfolio and web project foundations" }
    ]
  },
  {
    id: "backend-data",
    title: "Backend and data",
    summary:
      "Server-side and data work focused on authentication, persistence, and API integration.",
    items: [
      { label: "PHP", evidence: "ResumeBridge and Nightbank Finance" },
      { label: "Object-oriented PHP", evidence: "ResumeBridge" },
      { label: "PDO", evidence: "ResumeBridge database access" },
      { label: "MySQL", evidence: "ResumeBridge" },
      { label: "Supabase", evidence: "Venora authentication and data layer" },
      { label: "API integration", evidence: "Qwen API integration through cURL" }
    ]
  },
  {
    id: "ai-machine-learning",
    title: "AI and machine learning",
    summary:
      "Applied AI features with clear boundaries between model output and product decisions.",
    items: [
      { label: "TensorFlow Lite", evidence: "FAHAD on-device inference" },
      { label: "Vision Transformers", evidence: "FAHAD static-image verification" },
      { label: "On-device inference", evidence: "FAHAD privacy-first workflow" },
      { label: "Qwen API integration", evidence: "ResumeBridge resume analysis" }
    ]
  },
  {
    id: "quality-product",
    title: "Quality and product",
    summary: "Practical product work across testing, accessibility, and user-focused decisions.",
    items: [
      { label: "Test-case design", evidence: "QA practice across portfolio projects" },
      { label: "Black-box testing", evidence: "QA practice from the approved phase brief" },
      { label: "UI/UX design", evidence: "Venora and Portfolio V2 interface work" },
      { label: "Accessibility", evidence: "Portfolio V2 validation and semantic HTML" },
      { label: "Design thinking", evidence: "User-focused project presentation" },
      { label: "Scrum fundamentals", evidence: "Approved capability inventory" }
    ]
  }
];
