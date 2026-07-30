import type {
  CaseStudyNavigation,
  CaseStudySection,
  ContentValidationResult,
  ProjectCaseStudy
} from "../types/portfolio";

const venoraScreenshot = {
  kind: "asset",
  src: "assets/projects/venora-venue-listing.png",
  alt: "Venora mobile venue listing screen showing Amorita Resort details",
  width: 910,
  height: 1607,
  caption: "Mobile venue discovery screen showing Amorita Resort details and venue metadata."
} as const;

const venoraHomeSearchScreenshot = {
  kind: "asset",
  src: "assets/projects/venora-home-search.png",
  alt: "Venora mobile homepage search screen with event category chips and venue search form",
  width: 902,
  height: 1577,
  caption:
    "Mobile landing screen with event category chips, value proposition, and venue search form."
} as const;

const venoraAboutScreenshot = {
  kind: "asset",
  src: "assets/projects/venora-about-overview.png",
  alt: "Venora mobile about screen explaining the event marketplace",
  width: 902,
  height: 1592,
  caption:
    "About section screen explaining Venora's venue, supplier, and booking marketplace purpose."
} as const;

const venoraSupplierScreenshot = {
  kind: "asset",
  src: "assets/projects/venora-supplier-listing.png",
  alt: "Venora mobile supplier listing screen showing Sai's Photography supplier details",
  width: 902,
  height: 1510,
  caption:
    "Supplier discovery screen showing an accredited photography supplier, location, service metadata, and pricing."
} as const;

const fahadScreenshot = {
  kind: "asset",
  src: "assets/projects/fahad-verification-result.png",
  alt: "FAHAD mobile verification result screen showing a credibility score and fake classification",
  width: 720,
  height: 1544,
  caption:
    "Verification result interface showing a probability display, classification state, and save or discard actions."
} as const;

const resumeBridgeScreenshot = {
  kind: "asset",
  src: "assets/projects/resumebridge-ai-job-finder.png",
  alt: "ResumeBridge AI Job Finder analyzer screen showing ranked job recommendations",
  width: 1896,
  height: 927,
  caption:
    "Analyzer screen showing AI-generated job recommendations and matching skills after resume review."
} as const;

export const projectCaseStudies = [
  {
    slug: "venora",
    title: "Venora",
    shortTitle: "Venora",
    identifier: "KS-01",
    summary:
      "Event venue and supplier platform for discovery, profiles, authentication, and role-aware access.",
    status: "in-progress",
    statusLabel: "In development with verified public deployment",
    dateRange: "Year not verified",
    category: "Full-stack platform",
    role: ["Full-stack development", "Authentication and role-based access", "QA", "UI/UX"],
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
    overview: {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Venora is an event venue and supplier platform focused on helping customers discover event spaces and related suppliers through profile-led browsing.",
        "The engineering work centers on a full-stack Next.js application with Supabase authentication, PostgreSQL-backed data, validated forms, and role-aware areas for venue owners, suppliers, administrators, and customers."
      ]
    },
    problem: {
      id: "problem",
      title: "Problem",
      paragraphs: [
        "The verified product direction addresses the friction of finding and coordinating event venues and service suppliers in one place. The case study does not claim market size, booking volume, or customer adoption because those results are not verified.",
        "From an implementation angle, the main problem is making discovery useful while keeping account roles and protected areas clear enough for different participant types."
      ]
    },
    users: {
      id: "target-users",
      title: "Target Users",
      bullets: ["Customers", "Venue owners", "Suppliers", "Administrators"]
    },
    goals: {
      id: "goals",
      title: "Goals",
      bullets: [
        "Let customers browse event venue and supplier information through a responsive interface.",
        "Support venue and supplier profiles without mixing role-specific permissions.",
        "Keep account access, password recovery, session refresh, and protected routes explicit in the application structure.",
        "Use validated forms and typed application logic to reduce fragile UI and data-entry paths."
      ]
    },
    constraints: {
      id: "constraints",
      title: "Constraints",
      bullets: [
        "No verified user, traffic, revenue, or conversion metrics are available.",
        "The public case study can discuss verified implementation areas, but it cannot claim complete production security.",
        "Four supplied mobile screenshots are available, covering the landing search, about section, venue listing, and supplier listing surfaces."
      ]
    },
    responsibilities: {
      id: "responsibilities",
      title: "Responsibilities",
      bullets: [
        "Developed a full-stack marketplace connecting customers with event venues and service suppliers.",
        "Implemented Supabase server-side authentication, email verification, password recovery, session refresh, protected routes, and role-based access control.",
        "Built type-safe server actions and validated user input using TypeScript, Zod, and React Hook Form.",
        "Created responsive dashboards and profile components within a pnpm monorepo using shared UI and configuration packages.",
        "Contributed QA and UI/UX work for discovery, profile, and access flows."
      ]
    },
    architecture: {
      title: "Venora Architecture",
      summary:
        "The verified architecture is a static-deployed Next.js and Supabase platform with role-aware access and profile-driven discovery.",
      textAlternative:
        "Customers, venue owners, suppliers, and administrators use the Next.js interface. Form validation and application logic route requests through protected areas. Supabase authentication manages sessions and role checks. PostgreSQL stores account, venue, supplier, booking, and profile data. The public demo is deployed through a verified Vercel URL.",
      nodes: [
        {
          id: "users",
          label: "User Roles",
          description: "Customers, venue owners, suppliers, and administrators."
        },
        {
          id: "next-app",
          label: "Next.js Application",
          description: "React and TypeScript interface, protected routes, and dashboard surfaces."
        },
        {
          id: "validation",
          label: "Validated Actions",
          description: "Zod and React Hook Form support typed form and input paths."
        },
        {
          id: "auth",
          label: "Supabase Auth",
          description: "Session handling, email verification, password recovery, and role guards."
        },
        {
          id: "database",
          label: "PostgreSQL",
          description: "Data layer for profiles, venues, suppliers, and booking-related records."
        },
        {
          id: "deployment",
          label: "Public Deployment",
          description: "Verified Vercel deployment link for previewing the application."
        }
      ],
      connections: [
        { from: "users", to: "next-app", label: "browse and manage" },
        { from: "next-app", to: "validation", label: "validate input" },
        { from: "validation", to: "auth", label: "protect actions" },
        { from: "auth", to: "database", label: "authorize data access" },
        { from: "next-app", to: "deployment", label: "ships static/public experience" }
      ]
    },
    features: [
      {
        id: "discovery",
        title: "Discovery and Profiles",
        paragraphs: [
          "The venue and supplier surfaces are designed around browsable profiles instead of a flat project listing. That gives the product room to show location, capacity, categories, and supplier context in ways customers can scan."
        ],
        bullets: [
          "Venue and supplier discovery",
          "Landing search and event-category filtering entry points",
          "Supplier and venue profile surfaces",
          "Location or map functionality where verified",
          "Responsive dashboard and profile components"
        ]
      }
    ],
    security: {
      id: "authentication-authorization",
      title: "Authentication and Authorization",
      paragraphs: [
        "The verified security work covers Supabase authentication, server-side session handling, protected routes, and role guards for venue-owner, supplier, administrator, and customer permissions.",
        "The case study intentionally avoids claiming complete production security or a formal security audit."
      ]
    },
    dataPrivacy: {
      id: "data-and-privacy",
      title: "Data and Privacy",
      paragraphs: [
        "The verified data layer uses Supabase and PostgreSQL. Public portfolio sources do not include a privacy review, retention policy, or formal data-processing assessment, so those claims are excluded."
      ]
    },
    ux: {
      id: "ui-ux-decisions",
      title: "UI/UX Decisions",
      paragraphs: [
        "The supplied screenshots show a mobile-first product flow: a landing search surface, an about section, venue browsing, and supplier browsing. The screens prioritize clear categories, large visual previews, location metadata, service details, and pricing cues before deeper booking or supplier actions.",
        "The interface keeps the event marketplace purpose visible while separating venues, suppliers, bookings, and favorites into distinct navigation areas."
      ]
    },
    qa: {
      id: "qa-testing",
      title: "QA and Testing",
      paragraphs: [
        "QA involvement is verified, but detailed test reports are not available in the portfolio sources. The public case study therefore describes QA as a responsibility area without claiming specific coverage percentages or release certification."
      ]
    },
    challenges: [
      {
        id: "role-complexity",
        title: "Role Complexity",
        paragraphs: [
          "A marketplace with customers, venue owners, suppliers, and administrators has more access paths than a single-role application. The documented response was to keep role guards and protected routes visible in the architecture rather than scattering permission checks through presentation code."
        ]
      }
    ],
    solutions: [
      {
        id: "typed-validation",
        title: "Typed Validation",
        paragraphs: [
          "Using TypeScript, Zod, and React Hook Form keeps form expectations explicit. The benefit is not just cleaner code; it creates a narrower boundary between UI input and server-side application logic."
        ]
      }
    ],
    tradeOffs: [
      {
        id: "delivery-status",
        title: "Public Demo vs. Verified Completeness",
        paragraphs: [
          "The deployment link is verified, but the project is still represented as in development because production completeness, active users, security review, and business outcomes are not verified."
        ]
      }
    ],
    results: {
      id: "results-status",
      title: "Results and Status",
      bullets: [
        "A public deployment link is verified, but no user, revenue, traffic, or conversion results are verified.",
        "Supplied screenshots verify the landing search, about, venue discovery, and supplier discovery mobile surfaces.",
        "The project is presented as in development rather than a completed production product.",
        "The available evidence supports implementation responsibilities and architecture, not market performance."
      ]
    },
    lessons: {
      id: "lessons-learned",
      title: "Lessons Learned",
      paragraphs: [
        "Venora demonstrates the importance of deciding permissions and validation paths early. When multiple user roles share one product surface, architecture clarity becomes part of the UX."
      ]
    },
    futureWork: {
      id: "future-improvements",
      title: "Future Improvements",
      bullets: [
        "Add verified QA artifacts or test plans when available.",
        "Capture more screenshots for dashboards, booking flows, and authenticated role-specific areas.",
        "Document measured product outcomes only after they are available."
      ]
    },
    screenshots: [
      venoraScreenshot,
      venoraHomeSearchScreenshot,
      venoraAboutScreenshot,
      venoraSupplierScreenshot
    ],
    repositoryUrl: "https://github.com/Jassim3nidad/venora",
    liveUrl: "https://venora-web.vercel.app/",
    seo: {
      title: "Venora Case Study - Jared Baquirin",
      description:
        "Case study for Venora, a Next.js and Supabase event venue and supplier platform covering auth, role guards, profiles, QA, and UI/UX.",
      canonicalPath: "/projects/venora/",
      ogImage: venoraScreenshot
    },
    published: true,
    order: 1
  },
  {
    slug: "fahad",
    title: "FAHAD",
    shortTitle: "FAHAD",
    identifier: "KS-02",
    summary:
      "Privacy-first offline mobile application for verifying potentially manipulated or AI-generated static images.",
    status: "active",
    statusLabel: "Active Android AI project",
    dateRange: "Year not verified",
    category: "Mobile AI / On-device ML",
    role: ["Mobile AI implementation", "Privacy-first product design", "Local data flow design"],
    technologies: ["Flutter", "Dart", "TensorFlow Lite", "Vision Transformer", "SQLite", "Python"],
    overview: {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "FAHAD is an offline mobile application for checking static images that may be manipulated or AI-generated.",
        "The core product choice is privacy-first: images are selected manually, processed on device, and evaluated through a TensorFlow Lite and Vision Transformer workflow instead of requiring image transmission to a hosted service."
      ]
    },
    problem: {
      id: "scope",
      title: "Scope",
      bullets: [
        "Static images only",
        "Offline operation",
        "Mobile application",
        "Manual image selection",
        "No video verification"
      ]
    },
    users: {
      id: "target-users",
      title: "Target Users",
      paragraphs: [
        "The verified sources describe the application behavior rather than a named market segment. The page therefore focuses on users who need local static-image verification without claiming a specific institution, employer, or deployment audience."
      ]
    },
    goals: {
      id: "goals",
      title: "Goals",
      bullets: [
        "Keep image verification available without network access.",
        "Avoid required image transmission for privacy-sensitive use.",
        "Return an understandable authentic, uncertain, or manipulated result.",
        "Store prior verification history locally with encryption."
      ]
    },
    constraints: {
      id: "limitations",
      title: "Limitations",
      bullets: [
        "Static images only; video verification is outside the verified scope.",
        "Device capability differences can affect local inference speed.",
        "Model-size constraints matter on mobile hardware.",
        "Social-media compression can affect image evidence.",
        "Manual model updates may be required.",
        "Dataset limitations are not resolved by the portfolio sources."
      ]
    },
    responsibilities: {
      id: "responsibilities",
      title: "Responsibilities",
      bullets: [
        "Built a Flutter and Dart mobile verification flow.",
        "Integrated TensorFlow Lite and Vision Transformer model usage.",
        "Kept verification on device for privacy-first behavior.",
        "Handled real, uncertain, or manipulated classification states.",
        "Supported local encrypted history."
      ]
    },
    architecture: {
      title: "FAHAD Architecture",
      summary:
        "The verified architecture is an offline mobile pipeline from selected image to local inference and encrypted history.",
      textAlternative:
        "A user manually selects a static image in the Flutter mobile app. The app preprocesses the image, resizes and normalizes it, runs TensorFlow Lite inference with a Vision Transformer workflow, evaluates probability or confidence, returns an authentic, uncertain, or manipulated result, and stores encrypted local history.",
      nodes: [
        {
          id: "input",
          label: "Image Input",
          description: "Manual static-image selection in the Flutter mobile app."
        },
        {
          id: "preprocess",
          label: "Preprocessing",
          description: "Image preparation before model inference."
        },
        {
          id: "resize-normalize",
          label: "Resize and Normalize",
          description: "Format image data for the TensorFlow Lite model path."
        },
        {
          id: "inference",
          label: "On-device Inference",
          description: "TensorFlow Lite and Vision Transformer workflow runs locally."
        },
        {
          id: "evaluation",
          label: "Confidence Evaluation",
          description: "Probability or confidence is interpreted for the result state."
        },
        {
          id: "result",
          label: "Result",
          description: "Authentic, uncertain, or manipulated classification."
        },
        {
          id: "history",
          label: "Encrypted Local History",
          description: "Verification history remains on the device."
        }
      ],
      connections: [
        { from: "input", to: "preprocess", label: "select" },
        { from: "preprocess", to: "resize-normalize", label: "prepare" },
        { from: "resize-normalize", to: "inference", label: "infer" },
        { from: "inference", to: "evaluation", label: "score" },
        { from: "evaluation", to: "result", label: "classify" },
        { from: "result", to: "history", label: "save locally" }
      ]
    },
    features: [
      {
        id: "verification-pipeline",
        title: "Verification Pipeline",
        bullets: [
          "Image input",
          "Preprocessing",
          "Resize and normalization",
          "TensorFlow Lite inference",
          "Probability or confidence evaluation",
          "Authentic, uncertain, or manipulated result",
          "Encrypted local history"
        ]
      }
    ],
    security: {
      id: "privacy-security",
      title: "Privacy and Security",
      paragraphs: [
        "FAHAD's strongest verified design decision is to avoid required image transmission. The verification path runs on device, and history is stored locally with encryption.",
        "The case study does not claim immunity from all security risks, nor does it name a specific encryption library such as SQLCipher because that library is not verified in the portfolio sources."
      ]
    },
    dataPrivacy: {
      id: "data-and-privacy",
      title: "Data and Privacy",
      bullets: [
        "On-device image processing",
        "No required image transmission",
        "Encrypted local storage for history",
        "Privacy-first design goals"
      ]
    },
    ux: {
      id: "ui-ux-decisions",
      title: "UI/UX Decisions",
      paragraphs: [
        "The supplied result screen uses a direct credibility score, a clear classification label, and separate save or discard actions. That keeps the result state visible without hiding the user's next decision behind extra navigation."
      ]
    },
    qa: {
      id: "qa-testing",
      title: "QA and Testing",
      paragraphs: [
        "The portfolio sources verify the intended pipeline and limitations, but they do not include a formal FAHAD test report. This page therefore avoids claiming model accuracy, device benchmark coverage, or full QA certification."
      ]
    },
    challenges: [
      {
        id: "mobile-model-fit",
        title: "Mobile Model Fit",
        paragraphs: [
          "Running a deepfake-verification workflow locally means balancing model size, device capability, and a result state that remains understandable to non-technical users."
        ]
      }
    ],
    solutions: [
      {
        id: "offline-first-pipeline",
        title: "Offline-first Pipeline",
        paragraphs: [
          "The verified response is a scoped pipeline: static image input, preprocessing, TensorFlow Lite inference, confidence evaluation, and local history. Tight scope keeps the privacy goal believable."
        ]
      }
    ],
    tradeOffs: [
      {
        id: "scope-vs-coverage",
        title: "Scope vs. Coverage",
        paragraphs: [
          "Limiting the app to static images makes offline mobile verification more practical, but it excludes video and any claim of comprehensive manipulated-media detection."
        ]
      }
    ],
    results: {
      id: "results-status",
      title: "Results and Status",
      bullets: [
        "The repository link and supplied verification screenshot are verified.",
        "No web deployment link is expected because FAHAD is an Android application.",
        "No production adoption, external validation, or benchmark report is verified."
      ]
    },
    performance: {
      id: "performance-model-evidence",
      title: "Performance and model evidence",
      bullets: [
        "No measured accuracy, benchmark, or production performance result is verified in the portfolio sources.",
        "The model direction and on-device processing are verified design goals and implementation areas, not public performance claims."
      ]
    },
    lessons: {
      id: "lessons-learned",
      title: "Lessons Learned",
      paragraphs: [
        "FAHAD shows that privacy requirements should shape architecture early. Offline operation is not a styling decision; it changes data flow, model packaging, storage, and product scope."
      ]
    },
    futureWork: {
      id: "future-improvements",
      title: "Future Improvements",
      bullets: [
        "Document model evaluation results only after measured evidence is available.",
        "Clarify encryption implementation details when repository-level evidence is ready for publication.",
        "Add more screenshots for image selection, history, and uncertain-result states."
      ]
    },
    screenshots: [fahadScreenshot],
    repositoryUrl: "https://github.com/BlackKaiser1121/FAHAD",
    seo: {
      title: "FAHAD Case Study - Jared Baquirin",
      description:
        "Case study for FAHAD, an offline Flutter app using TensorFlow Lite and a Vision Transformer workflow for static-image verification.",
      canonicalPath: "/projects/fahad/",
      ogImage: fahadScreenshot
    },
    published: true,
    order: 2
  },
  {
    slug: "resumebridge",
    title: "ResumeBridge",
    shortTitle: "ResumeBridge",
    identifier: "KS-03",
    summary:
      "Web-based AI resume analyzer that compares resume input with job descriptions and returns compatibility feedback.",
    status: "active",
    statusLabel: "Active web AI project; fixes pending before stable deployment",
    dateRange: "Year not verified",
    category: "AI career tooling",
    role: ["Full-stack PHP development", "AI API integration", "Dashboard UI implementation"],
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
    overview: {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "ResumeBridge is a web-based AI resume analyzer that compares resume content with a target job description.",
        "The verified implementation stack uses PHP, object-oriented programming, PDO, MySQL, JavaScript, Tailwind CSS, Bootstrap, and Qwen3.6-Plus API integration through PHP cURL."
      ]
    },
    problem: {
      id: "problem",
      title: "Problem",
      paragraphs: [
        "The product helps users understand how their resume aligns with a job description by turning raw resume and role text into structured compatibility, skill-gap, and keyword feedback.",
        "The case study does not claim hiring accuracy, employer validation, or production usage because none of those outcomes are verified."
      ]
    },
    users: {
      id: "user-flow",
      title: "User Flow",
      bullets: [
        "User authentication",
        "Resume input",
        "Job-description input",
        "Backend validation",
        "Qwen API request through PHP cURL",
        "Structured response processing",
        "Compatibility score",
        "Skill-gap and keyword feedback",
        "User-specific result display"
      ]
    },
    goals: {
      id: "goals",
      title: "Goals",
      bullets: [
        "Keep resume analysis tied to an authenticated user session.",
        "Use backend validation before sending AI requests.",
        "Transform AI output into a structured dashboard result.",
        "Show compatibility, missing skills, and keyword guidance without claiming hiring certainty."
      ]
    },
    constraints: {
      id: "limitations",
      title: "Limitations",
      bullets: [
        "No deployment link is verified.",
        "The user reports that the system still has several issues to fix before it should be presented as stable.",
        "No scoring accuracy, employer usage, or adoption metric is verified.",
        "AI feedback quality depends on prompt construction, input quality, and the external Qwen API response.",
        "The case study does not represent the application as formally security audited."
      ]
    },
    responsibilities: {
      id: "responsibilities",
      title: "Responsibilities",
      bullets: [
        "Built resume and job-description comparison flows.",
        "Implemented PHP, object-oriented programming, PDO, and MySQL patterns.",
        "Integrated the Qwen3.6-Plus API through cURL.",
        "Supported authentication and session isolation.",
        "Presented 0-100 compatibility scoring, skill-gap feedback, and keyword feedback."
      ]
    },
    architecture: {
      title: "ResumeBridge Architecture",
      summary:
        "The verified architecture is a session-based PHP application with PDO persistence and an external Qwen API request path.",
      textAlternative:
        "An authenticated user submits resume and job-description input through the dashboard. PHP application logic validates the input, builds a prompt, calls the Qwen API through cURL, processes the structured response, stores user-specific results through PDO and MySQL, and displays compatibility, skill-gap, and keyword feedback in the interface.",
      nodes: [
        {
          id: "auth",
          label: "Session Authentication",
          description: "User-specific access and result ownership."
        },
        {
          id: "inputs",
          label: "Resume and Job Inputs",
          description: "Resume text and job-description data submitted by the user."
        },
        {
          id: "php-app",
          label: "Object-oriented PHP",
          description: "Backend validation, prompt construction, and response handling."
        },
        {
          id: "qwen",
          label: "Qwen API via cURL",
          description: "External AI request path through PHP cURL."
        },
        {
          id: "database",
          label: "PDO and MySQL",
          description: "Prepared database access and user-specific storage."
        },
        {
          id: "dashboard",
          label: "Result Dashboard",
          description: "Compatibility score, skill gaps, keywords, and recommendations."
        }
      ],
      connections: [
        { from: "auth", to: "inputs", label: "opens user flow" },
        { from: "inputs", to: "php-app", label: "validate and prepare" },
        { from: "php-app", to: "qwen", label: "request feedback" },
        { from: "qwen", to: "php-app", label: "return structured response" },
        { from: "php-app", to: "database", label: "store per user" },
        { from: "database", to: "dashboard", label: "render result" }
      ]
    },
    features: [
      {
        id: "analysis-workflow",
        title: "Analysis Workflow",
        paragraphs: [
          "The verified workflow is designed around two pieces of user-supplied evidence: the resume and the target job description. The backend validates both before constructing the AI request."
        ],
        bullets: [
          "Compatibility score",
          "Skill-gap feedback",
          "Keyword feedback",
          "Ranked job recommendations in the supplied analyzer screen"
        ]
      }
    ],
    security: {
      id: "security",
      title: "Security",
      paragraphs: [
        "Verified security measures include PDO database access, prepared-statement patterns, session isolation, and per-user data access.",
        "The case study does not describe the application as fully secure because no formal security review is verified."
      ]
    },
    dataPrivacy: {
      id: "data-and-privacy",
      title: "Data and Privacy",
      paragraphs: [
        "ResumeBridge handles resume and job-description content, so user isolation is central to the backend design. The portfolio sources verify session-based authentication and user-specific result display, but do not include a full data-retention or privacy policy."
      ]
    },
    ux: {
      id: "ui-ux-decisions",
      title: "UI/UX Decisions",
      paragraphs: [
        "The supplied screenshot shows a dark dashboard with ranked job recommendations, matching skills, and plain-language reasoning. The UI choice is to make AI output scannable instead of presenting one opaque score."
      ]
    },
    qa: {
      id: "qa-testing",
      title: "QA and Testing",
      paragraphs: [
        "The verified portfolio sources describe backend validation and user flow expectations, but not a formal test suite for the ResumeBridge repository. This case study therefore avoids claiming automated coverage or production readiness."
      ]
    },
    challenges: [
      {
        id: "ai-response-shape",
        title: "AI Response Shape",
        paragraphs: [
          "A resume analyzer is only useful if AI output can become predictable interface content. The implementation challenge is turning prompt output into compatibility, gap, and keyword sections that users can act on."
        ]
      }
    ],
    solutions: [
      {
        id: "backend-boundary",
        title: "Backend Boundary",
        paragraphs: [
          "Keeping Qwen API access behind PHP cURL and backend validation gives the UI a cleaner contract: authenticated input enters the backend, structured feedback returns to the dashboard."
        ]
      }
    ],
    tradeOffs: [
      {
        id: "api-dependency",
        title: "External API Dependency",
        paragraphs: [
          "Using Qwen API integration provides richer AI feedback than static keyword matching, but it also makes response quality and availability depend on an external service."
        ]
      }
    ],
    results: {
      id: "results-status",
      title: "Results and Status",
      bullets: [
        "Repository and supplied analyzer screenshot are verified.",
        "No live deployment link, scoring accuracy, employer usage, or adoption metric is verified.",
        "The current portfolio copy treats ResumeBridge as active work with known fixes pending, not as a stable public system.",
        "The project is presented as an active web AI project rather than a validated hiring product."
      ]
    },
    lessons: {
      id: "lessons-learned",
      title: "Lessons Learned",
      paragraphs: [
        "ResumeBridge shows that AI product work is mostly boundary design: input validation, prompt construction, response handling, user isolation, and UI clarity matter as much as the model call."
      ]
    },
    futureWork: {
      id: "future-improvements",
      title: "Future Improvements",
      bullets: [
        "Add a deployment link only if a stable public deployment becomes available.",
        "Fix the known system issues before presenting ResumeBridge as a stable public deployment.",
        "Document repository test evidence if it exists.",
        "Add more screenshots for authentication, resume input, job-description input, and saved analysis history."
      ]
    },
    screenshots: [resumeBridgeScreenshot],
    repositoryUrl: "https://github.com/BlackKaiser1121/ResumeBridge",
    seo: {
      title: "ResumeBridge Case Study - Jared Baquirin",
      description:
        "Case study for ResumeBridge, a PHP and MySQL AI resume analyzer using Qwen API integration for scoring, gaps, and keyword feedback.",
      canonicalPath: "/projects/resumebridge/",
      ogImage: resumeBridgeScreenshot
    },
    published: true,
    order: 3
  }
] as const satisfies readonly ProjectCaseStudy[];

export const caseStudySlugs = projectCaseStudies
  .filter((caseStudy) => caseStudy.published)
  .slice()
  .sort((left, right) => left.order - right.order)
  .map((caseStudy) => caseStudy.slug);

export function getPublishedCaseStudies(): readonly ProjectCaseStudy[] {
  return projectCaseStudies
    .filter((caseStudy) => caseStudy.published)
    .slice()
    .sort((left, right) => left.order - right.order);
}

export function getCaseStudyBySlug(slug: string): ProjectCaseStudy | undefined {
  return getPublishedCaseStudies().find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyNavigation(slug: string): CaseStudyNavigation {
  const caseStudies = getPublishedCaseStudies();
  const currentIndex = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug);

  if (currentIndex < 0) {
    return {};
  }

  const previous = caseStudies[currentIndex - 1];
  const next = caseStudies[currentIndex + 1];

  return {
    previous: previous
      ? {
          slug: previous.slug,
          title: previous.title,
          href: `../${previous.slug}/` as `../${string}/`
        }
      : undefined,
    next: next
      ? {
          slug: next.slug,
          title: next.title,
          href: `../${next.slug}/` as `../${string}/`
        }
      : undefined
  };
}

function getRenderableSections(caseStudy: ProjectCaseStudy): readonly CaseStudySection[] {
  return [
    caseStudy.overview,
    caseStudy.problem,
    caseStudy.users,
    caseStudy.goals,
    caseStudy.constraints,
    caseStudy.responsibilities,
    ...caseStudy.features,
    caseStudy.security,
    caseStudy.dataPrivacy,
    caseStudy.ux,
    caseStudy.qa,
    ...caseStudy.challenges,
    ...caseStudy.solutions,
    ...caseStudy.tradeOffs,
    caseStudy.results,
    caseStudy.performance,
    caseStudy.lessons,
    caseStudy.futureWork
  ].filter((section): section is CaseStudySection => Boolean(section));
}

function sectionHasContent(section: CaseStudySection): boolean {
  return Boolean(section.paragraphs?.length || section.bullets?.length);
}

export function validateCaseStudyContent(): ContentValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const slugs = new Set<string>();
  const orders = new Set<number>();

  for (const caseStudy of getPublishedCaseStudies()) {
    if (slugs.has(caseStudy.slug)) {
      errors.push(`Duplicate case-study slug: ${caseStudy.slug}`);
    }

    if (orders.has(caseStudy.order)) {
      errors.push(`Duplicate case-study order: ${caseStudy.order}`);
    }

    slugs.add(caseStudy.slug);
    orders.add(caseStudy.order);

    if (!caseStudy.title || !caseStudy.summary || !caseStudy.seo.title) {
      errors.push(`Case study ${caseStudy.slug} is missing identity or SEO content`);
    }

    if (!caseStudy.seo.canonicalPath.startsWith(`/projects/${caseStudy.slug}/`)) {
      errors.push(`Case study ${caseStudy.slug} has a mismatched canonical path`);
    }

    for (const url of [caseStudy.repositoryUrl, caseStudy.liveUrl]) {
      if (url === "") {
        errors.push(`Case study ${caseStudy.slug} has an empty URL`);
      }

      if (url && !url.startsWith("https://")) {
        errors.push(`Case study ${caseStudy.slug} has an unsupported URL protocol`);
      }
    }

    const sectionIds = new Set<string>();
    for (const section of getRenderableSections(caseStudy)) {
      if (!section.id || !section.title) {
        errors.push(`Case study ${caseStudy.slug} has a section missing id or title`);
      }

      if (sectionIds.has(section.id)) {
        errors.push(`Case study ${caseStudy.slug} has duplicate section id: ${section.id}`);
      }

      if (!sectionHasContent(section)) {
        errors.push(`Case study ${caseStudy.slug} has an empty section: ${section.id}`);
      }

      sectionIds.add(section.id);
    }

    if (caseStudy.architecture) {
      if (!caseStudy.architecture.textAlternative) {
        errors.push(`Case study ${caseStudy.slug} is missing architecture text alternative`);
      }

      const nodeIds = new Set(caseStudy.architecture.nodes.map((node) => node.id));

      if (nodeIds.size !== caseStudy.architecture.nodes.length) {
        errors.push(`Case study ${caseStudy.slug} has duplicate architecture node ids`);
      }

      for (const connection of caseStudy.architecture.connections) {
        if (!nodeIds.has(connection.from) || !nodeIds.has(connection.to)) {
          errors.push(
            `Case study ${caseStudy.slug} has an architecture connection with an unknown node`
          );
        }
      }
    }

    if (caseStudy.screenshots.length === 0) {
      errors.push(`Case study ${caseStudy.slug} has no screenshots`);
    }

    for (const screenshot of caseStudy.screenshots) {
      if (!screenshot.alt || !screenshot.caption || !screenshot.width || !screenshot.height) {
        errors.push(`Case study ${caseStudy.slug} has incomplete screenshot metadata`);
      }
    }
  }

  return { errors, warnings };
}
