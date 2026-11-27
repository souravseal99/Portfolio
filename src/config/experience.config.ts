export interface ExperienceHighlight {
  title: string;
  description: string;
  emphasis?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  domain: string;
  statusBadge: string;
  highlights: ExperienceHighlight[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  years: string;
  badge?: string;
  description: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "cloudkaptan",
    company: "CloudKaptan",
    role: "Full-Stack Software Engineer",
    duration: "June 2022 – Present",
    location: "Kolkata, India",
    domain: "Enterprise Fintech Systems · React, Node.js, PostgreSQL",
    statusBadge: "Active",
    highlights: [
      {
        title: "Enterprise APIs & UI",
        description: "Architected scalable RESTful microservices and reactive React interfaces for client workflows.",
      },
      {
        title: "Database Optimization",
        description: "Optimized PostgreSQL query plans and indexing, reducing endpoint latency.",
        emphasis: "reducing endpoint latency",
      },
      {
        title: "Auth & Deployments",
        description: "Implemented enterprise JWT auth lifecycle and automated CI/CD pipelines with code reviews.",
      },
    ],
  },
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    id: "woc-social",
    title: "Project Admin & Lead Mentor",
    organization: "Winter of Code Social",
    years: "2025 & 2026",
    badge: "Community Lead",
    description:
      "Mentored a team of 12+ contributors, triaged GitHub issues, and conducted architectural code reviews across full-stack open-source TypeScript projects.",
  },
  {
    id: "hacktoberfest",
    title: "Maintainer & Open Source Contributor",
    organization: "Hacktoberfest",
    years: "2021, 2024 & 2025",
    description:
      "Maintaining community repositories, guiding developer contributions, and facilitating pull request workflows.",
  },
];
