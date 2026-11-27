import {
  SITE_CONFIG,
  NAV_ITEMS,
  EXPERIENCE_DATA,
  LEADERSHIP_DATA,
  PROJECTS_DATA,
  FEATURED_PROJECT,
  SECONDARY_PROJECTS,
  TOOLS_CONFIG,
  CORE_DAILY_DRIVERS,
} from "@/config";

export {
  SITE_CONFIG,
  NAV_ITEMS,
  EXPERIENCE_DATA,
  LEADERSHIP_DATA,
  PROJECTS_DATA,
  FEATURED_PROJECT,
  SECONDARY_PROJECTS,
  TOOLS_CONFIG,
  CORE_DAILY_DRIVERS,
};

export const DEV_TERMINOLOGY = {
  about: "terminal",
  experience: "career.log",
  projects: "projects.ide",
  skills: "tech_arsenal.json",
  contact: "connect.sh",
};

export const RESUME_DATA = {
  name: SITE_CONFIG.name,
  title: SITE_CONFIG.role,
  location: SITE_CONFIG.location,
  email: SITE_CONFIG.email,
  github: "souravseal99",
  linkedin: "sourav-seal-b3989b1b5",
  twitter: "SealiyDev",
  discord: "sealiy8415",
  bio: SITE_CONFIG.terminal.initialMessage,
  experience: EXPERIENCE_DATA.map((exp) => ({
    company: exp.company,
    role: exp.role,
    duration: exp.duration,
    location: exp.location,
    points: exp.highlights.map((h) => h.description),
  })),
  projects: PROJECTS_DATA,
  skills: TOOLS_CONFIG,
};
