export interface ArchitectureHighlight {
  title: string;
  description: string;
}

export interface ProjectDeployment {
  name: string;
  url: string;
  environment: "production" | "nightly" | "status";
  description: string;
}

export interface ProjectItem {
  id: string;
  fileName: string;
  title: string;
  category: string;
  tagline: string;
  stats?: string;
  isFeatured: boolean;
  stack: string[];
  highlights?: string[];
  architectureTrio?: ArchitectureHighlight[];
  deployments?: ProjectDeployment[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  links: {
    github: string;
    live?: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "roommate",
    fileName: "RoomMate.tsx",
    title: "RoomMate — The Shared Living Solution",
    category: "Full Stack Application",
    tagline:
      "Full-stack system eliminating household friction with automated expense settlements, chore rotations, and real-time inventory management.",
    stats: "182 commits · 27 forks · Open Source",
    isFeatured: true,
    stack: ["React 19", "TypeScript", "TanStack Query", "Node.js", "PostgreSQL"],
    architectureTrio: [
      {
        title: "Optimistic UI Engine",
        description: "TanStack Query v5 background caching eliminates UI lag during multi-member expense settlements.",
      },
      {
        title: "Atomic Ledger Integrity",
        description: "Atomic PostgreSQL transactions managed via Prisma ORM guarantee zero ledger desync.",
      },
      {
        title: "Resilient Auth Pipeline",
        description: "JWT token rotation combined with endpoint-level rate limiting and household tenancy guards.",
      },
    ],
    deployments: [
      {
        name: "Production (Beta)",
        url: "https://roommate-app-beta.vercel.app",
        environment: "production",
        description: "Primary production release with active household tenancy, ledger settlements, and JWT auth.",
      },
      {
        name: "Nightly Build",
        url: "https://roommate-app-nightly.vercel.app",
        environment: "nightly",
        description: "Automated continuous delivery branch deploying latest feature merges and experimental schemas.",
      },
      {
        name: "Status & Uptime Monitor",
        url: "https://8svfjfmg.status.cron-job.org/",
        environment: "status",
        description: "Public real-time health checks, cron heartbeat pings, and endpoint latency metrics.",
      },
    ],
    links: {
      github: "https://github.com/souravseal99/RoomMate",
      live: "https://roommate-app-beta.vercel.app",
    },
  },
  {
    id: "funwithphysics",
    fileName: "FunWithPhysics.tsx",
    title: "FunWithPhysics",
    category: "Interactive Visualizer",
    tagline:
      "Interactive physics mechanics and optics formula visualizer designed to make complex computations intuitive.",
    isFeatured: false,
    stack: ["React", "JavaScript", "CSS3"],
    highlights: [
      "Real-time kinematics & optics formula calculations",
      "Modular component architecture per physics domain",
      "Dynamic parameter validation and visual outputs",
    ],
    links: {
      github: "https://github.com/souravseal99/FunwithPhysics",
      live: "https://github.com/souravseal99/FunwithPhysics",
    },
  },
  {
    id: "e-com",
    fileName: "E-Commerce.tsx",
    title: "MERN E-Commerce",
    category: "MERN Platform",
    tagline:
      "Full-stack commerce engine featuring persistent cart state, order checkout pipelines, and role-based inventory.",
    isFeatured: false,
    stack: ["Node.js", "MongoDB", "JWT"],
    highlights: [
      "Persistent shopping cart & multi-step checkout workflow",
      "Admin & customer RBAC with protected Express endpoints",
      "MongoDB product indexing & order history tracking",
    ],
    links: {
      github: "https://github.com/souravseal99/E-Com",
      live: "https://github.com/souravseal99/E-Com",
    },
  },
];

export const FEATURED_PROJECT = PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
export const SECONDARY_PROJECTS = PROJECTS_DATA.filter((p) => !p.isFeatured);
