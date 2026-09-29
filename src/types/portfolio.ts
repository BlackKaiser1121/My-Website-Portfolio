export type LinkIcon = "mail" | "phone" | "github" | "external" | "file" | "anchor";

export interface ExternalLink {
  label: string;
  url: string;
  accessibilityLabel: string;
  isExternal: boolean;
  icon?: LinkIcon;
}

export interface NavigationItem {
  href: `#${string}`;
  label: string;
  accessibilityLabel: string;
}

export interface Profile {
  name: string;
  professionalRole: string;
  currentHeadline: string;
  currentPositioning: string;
  valueStatement: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  opportunityStatement: string;
  focusAreas: readonly string[];
  missingContent: readonly string[];
  links: readonly ExternalLink[];
}

export interface VisualPlaceholder {
  kind: "placeholder";
  label: string;
  accessibilityLabel: string;
}

export interface ImageAsset {
  kind: "asset";
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProjectVisual = VisualPlaceholder | ImageAsset;

export type ProjectStatus = "active" | "deployed" | "in-progress" | "draft";

export interface ProjectCaseStudyAvailability {
  title: string;
  status: "available" | "planned" | "missing";
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  year: string;
  status: ProjectStatus;
  role: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  category: string;
  featured: boolean;
  order: number;
  thumbnail: ProjectVisual;
  screenshots: readonly ImageAsset[];
  repositoryUrl?: string;
  liveUrl?: string;
  caseStudyAvailable: boolean;
  caseStudySections: readonly ProjectCaseStudyAvailability[];
  accessibilityLabel: string;
  missingContent: readonly string[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  eyebrow?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
}

export interface CaseStudyArchitectureNode {
  id: string;
  label: string;
  description?: string;
}

export interface CaseStudyArchitecture {
  title: string;
  summary: string;
  nodes: readonly CaseStudyArchitectureNode[];
  connections: readonly ArchitectureConnection[];
  textAlternative: string;
}

export interface CaseStudyImage extends ImageAsset {
  caption: string;
}

export interface CaseStudySeo {
  title: string;
  description: string;
  canonicalPath: `/projects/${string}/`;
  ogImage?: string;
}

export interface CaseStudyNavigationItem {
  slug: string;
  title: string;
  href: `../${string}/`;
}

export interface CaseStudyNavigation {
  previous?: CaseStudyNavigationItem | undefined;
  next?: CaseStudyNavigationItem | undefined;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  identifier: string;
  summary: string;
  status: ProjectStatus;
  statusLabel: string;
  dateRange: string;
  category: string;
  role: readonly string[];
  technologies: readonly string[];
  overview: CaseStudySection;
  problem?: CaseStudySection;
  users?: CaseStudySection;
  goals?: CaseStudySection;
  constraints?: CaseStudySection;
  responsibilities?: CaseStudySection;
  architecture?: CaseStudyArchitecture;
  features: readonly CaseStudySection[];
  security?: CaseStudySection;
  dataPrivacy?: CaseStudySection;
  ux?: CaseStudySection;
  qa?: CaseStudySection;
  challenges: readonly CaseStudySection[];
  solutions: readonly CaseStudySection[];
  tradeOffs: readonly CaseStudySection[];
  results?: CaseStudySection;
  performance?: CaseStudySection;
  lessons?: CaseStudySection;
  futureWork?: CaseStudySection;
  screenshots: readonly CaseStudyImage[];
  repositoryUrl?: string;
  liveUrl?: string;
  seo: CaseStudySeo;
  published: boolean;
  order: number;
}

export interface CapabilityItem {
  label: string;
  evidence: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  summary: string;
  items: readonly CapabilityItem[];
}

export type ExperienceKind =
  "academic-project" | "personal-project" | "internship" | "volunteer" | "employment";

export interface ExperienceEntry {
  id: string;
  kind: ExperienceKind;
  title: string;
  organization?: string;
  dateRange: string;
  summary: string;
  responsibilities: readonly string[];
  tools: readonly string[];
}

export interface EducationEntry {
  id: string;
  program: string;
  institution?: string;
  dateRange?: string;
  level: string;
  summary: string;
  focusAreas: readonly string[];
}

export interface DevelopmentPrinciple {
  id: string;
  title: string;
  explanation: string;
  evidence: string;
}

export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface ArchitecturePreview {
  projectSlug: string;
  title: string;
  summary: string;
  textAlternative: string;
  nodes: readonly ArchitectureNode[];
}

export interface ContentValidationResult {
  errors: string[];
  warnings: string[];
}
