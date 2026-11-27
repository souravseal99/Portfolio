export type ToolCategory = "frontend" | "backend" | "devops";

export interface ToolItem {
  id: string;
  name: string;
  category: ToolCategory;
  role: string;
  usedIn: string[];
  isCoreDailyDriver?: boolean;
}

export interface ToolCategoryConfig {
  id: ToolCategory;
  title: string;
  accent: {
    title: string;
    hoverBorder: string;
    badge: string;
  };
}

export const TOOL_CATEGORIES: ToolCategoryConfig[] = [
  {
    id: "frontend",
    title: "Frontend",
    accent: {
      title: "text-cyan-400",
      hoverBorder: "hover:border-cyan-500/40",
      badge: "text-cyan-400/70",
    },
  },
  {
    id: "backend",
    title: "Backend & Systems",
    accent: {
      title: "text-purple-400",
      hoverBorder: "hover:border-purple-500/40",
      badge: "text-purple-400/70",
    },
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    accent: {
      title: "text-emerald-400",
      hoverBorder: "hover:border-emerald-500/40",
      badge: "text-emerald-400/70",
    },
  },
];

export const TOOLS_CONFIG: ToolItem[] = [
  {
    id: "react-next",
    name: "React 19 / Next.js 15",
    category: "frontend",
    role: "UI Framework & Server Components",
    usedIn: ["CloudKaptan", "Open Source"],
    isCoreDailyDriver: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    role: "Strict Static Typing & Generics",
    usedIn: ["CloudKaptan", "RoomMate", "Portfolio"],
    isCoreDailyDriver: true,
  },
  {
    id: "tanstack-query",
    name: "TanStack Query v5",
    category: "frontend",
    role: "Server-State & Optimistic Caching",
    usedIn: ["RoomMate"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    role: "Design Tokens & Responsive UI",
    usedIn: ["CloudKaptan", "RoomMate", "Portfolio"],
  },
  {
    id: "react-native",
    name: "React Native",
    category: "frontend",
    role: "Cross-Platform Web & Mobile systems",
    usedIn: ["CloudKaptan"],
  },
  {
    id: "node-express",
    name: "Node.js & Express",
    category: "backend",
    role: "RESTful Microservices & Runtime",
    usedIn: ["CloudKaptan", "RoomMate", "E-Com"],
    isCoreDailyDriver: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    role: "Relational Schemas & Indexing",
    usedIn: ["CloudKaptan", "RoomMate"],
    isCoreDailyDriver: true,
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    category: "backend",
    role: "Type-Safe Migrations & Query Client",
    usedIn: ["RoomMate"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    role: "Document Store & Aggregations",
    usedIn: ["CloudKaptan", "E-Com"],
  },
  {
    id: "redis",
    name: "Redis",
    category: "backend",
    role: "In-Memory Cache & Rate Limiting",
    usedIn: ["RoomMate"],
  },
  {
    id: "rest-jwt",
    name: "RESTful APIs & JWT",
    category: "backend",
    role: "Stateless Auth & RBAC Security",
    usedIn: ["CloudKaptan", "Open Source"],
  },
  {
    id: "docker-linux",
    name: "Docker & Linux (Debian)",
    category: "devops",
    role: "Containerization & Shell Environments",
    usedIn: ["CloudKaptan", "CI/CD Pipelines"],
  },
  {
    id: "git-actions",
    name: "Git & GitHub Actions",
    category: "devops",
    role: "Version control & CI/CD",
    usedIn: ["CloudKaptan", "Open Source"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "devops",
    role: "API Testing & Mocking",
    usedIn: ["CloudKaptan", "Open Source"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "devops",
    role: "UI/UX Wireframing & Design",
    usedIn: ["RoomMate", "Open Source"],
  },
  {
    id: "python",
    name: "Python",
    category: "devops",
    role: "Data Scripting & Automation",
    usedIn: ["Automation Tooling"],
  },
];

export const CORE_DAILY_DRIVERS = TOOLS_CONFIG.filter((t) => t.isCoreDailyDriver);
