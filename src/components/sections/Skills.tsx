"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { RESUME_DATA } from "@/lib/constants";
import {
  Search,
  Bell,
  Settings,
  User,
  ChevronDown,
  RefreshCw,
  Cpu,
  Globe,
  Settings2,
  Package,
  ChevronRight,
  LayoutGrid,
  ExternalLink,
  ShieldCheck,
  Info,
  Atom,
  Zap,
  Code2,
  Wind,
  Smartphone,
  Hexagon,
  Layers,
  Database,
  Workflow,
  GitBranch,
  Github,
  Send,
  Figma,
  Terminal,
  Variable,
  Boxes,
  FileCode2,
  Coffee,
  DatabaseZap
} from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
  frontend: Globe,
  backend: Cpu,
  tools: Settings2,
  languages: Package,
};

const SKILL_ICONS: Record<string, any> = {
  // Frontend
  "React.js": Atom,
  "Next.js": Zap,
  "TypeScript": Code2,
  "TailwindCSS": Wind,
  "React Native": Smartphone,
  // Backend
  "Node.js": Hexagon,
  "Express.js": Layers,
  "MongoDB": Database,
  "PostgreSQL": DatabaseZap,
  "Prisma": Workflow,
  "REST APIs": Globe,
  // Tools
  "Git": GitBranch,
  "GitHub": Github,
  "Docker": Boxes,
  "Postman": Send,
  "Figma": Figma,
  "Linux": Terminal,
  // Languages
  "JavaScript": FileCode2,
  "Python": Variable,
  "Java": Coffee,
  "C": Code2,
  "C++": Code2,
};

const SKILL_SLUGS: Record<string, string> = {
  "React.js": "react",
  "Next.js": "nextdotjs",
  "TypeScript": "typescript",
  "TailwindCSS": "tailwindcss",
  "React Native": "react",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",
  "Prisma": "prisma",
  "REST APIs": "insomnia",
  "Git": "git",
  "GitHub": "github",
  "Docker": "docker",
  "Postman": "postman",
  "Figma": "figma",
  "Linux": "linux",
  "JavaScript": "javascript",
  "Python": "python",
  "Java": "openjdk",
  "C": "c",
  "C++": "cplusplus",
};

const CATEGORY_COLORS: Record<string, string> = {
  frontend: "text-cyan-vibrant",
  backend: "text-orange-vibrant",
  tools: "text-purple-vibrant",
  languages: "text-pink-vibrant",
};

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "React.js": "A high-performance UI library for building modular web components.",
  "Next.js": "Highly scalable production-ready web framework with built-in SSR.",
  "TypeScript": "Enterprise-grade typed scripting for robust application logic.",
  "TailwindCSS": "Utility-first CSS engine for rapid high-fidelity UI deployment.",
  "Node.js": "Server-side runtime for high-concurrency event-driven architecture.",
  "Express.js": "Standardized web application framework for Node.js microservices.",
  "MongoDB": "NoSQL document store for flexible, high-velocity data management.",
  "PostgreSQL": "Relational database server with high consistency and complex queries.",
  "Prisma": "Modern ORM for simplified database orchestration and type-safe access.",
  "Docker": "Containerization platform for standardized environment isolation.",
  "Git": "Distributed version control system for collaborative resource management.",
  "Postman": "API development platform for automated interface testing.",
  "Figma": "Collaborative interface design tool for high-fidelity prototyping.",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => ["all", ...Object.keys(RESUME_DATA.skills)], []);

  const allSkills = useMemo(() =>
    Object.entries(RESUME_DATA.skills).flatMap(([cat, skills]) =>
      skills.map(s => ({ name: s, category: cat }))
    ),
    []);

  const filteredSkills = useMemo(() =>
    allSkills.filter(skill => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }),
    [activeCategory, searchQuery, allSkills]);

  return (
    <section id="arsenal" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-vibrant group-hover:neon-text-purple transition-all">
            <LayoutGrid size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Arsenal<span className="text-purple-vibrant"> Cloud</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Skill Management / Global Console
            </p>
          </div>
        </div>

        {/* Console Container */}
        <div className="glass-card w-full border border-white/5 shadow-2xl flex flex-col overflow-hidden h-[750px] bg-black/40">

          {/* Mock AWS Toolbar */}
          <div className="bg-[#232f3e] px-4 py-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-6 flex-1">
              <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-black text-xs ring-1 ring-white/20 shadow-lg select-none">sC</div>
                <span className="hidden sm:inline text-white font-bold text-sm tracking-tight pt-1 px-1">sCloud Console</span>
              </div>

              {/* Mock Search Bar */}
              <div className="flex items-center bg-white/10 rounded-md px-3 py-1.5 w-full max-w-[400px] border border-white/5 focus-within:bg-orange-500/10 focus-within:border-orange-500/40 transition-all">
                <Search size={14} className="text-white/40 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Find services (skills), features, and more"
                  className="bg-transparent text-xs text-white placeholder:text-white/30 focus:outline-none w-full font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="hidden sm:flex text-[10px] text-white/20 font-mono items-center gap-1 border border-white/10 rounded px-1 ml-2 shrink-0">/</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/60 ml-4">
              <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-white transition-colors group">
                <Globe size={16} />
                <span className="text-xs font-medium">{RESUME_DATA.location}</span>
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <Bell size={18} className="cursor-pointer hover:text-white hidden sm:block" />
              <Settings size={18} className="cursor-pointer hover:text-white hidden md:block" />
              <div className="flex items-center gap-2 pl-2 cursor-pointer hover:text-white group">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-vibrant shrink-0">
                  <User size={14} />
                </div>
                <span className="text-xs font-bold font-mono tracking-tighter truncate max-w-[80px] lowercase">{RESUME_DATA.name.toLowerCase().replace(" ", "-")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-64 border-r border-white/5 bg-[#161b22]/40 hidden md:flex flex-col shrink-0">
              <div className="p-4">
                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Skill Cloud Services</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md transition-all ${activeCategory === cat
                        ? "bg-white/10 text-white translate-x-1"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <span className="capitalize">{cat}</span>
                      {activeCategory === cat && <ChevronRight size={14} className="text-orange-vibrant" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resource Status */}
              <div className="mt-auto p-4 border-t border-white/5 bg-black/20">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Service Quotas</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className="text-white/40">Active Projects</span>
                        <span className="text-orange-vibrant">{RESUME_DATA.projects.length} / ∞</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className="text-white/40">Total Experience</span>
                        <span className="text-cyan-vibrant">3+ Years</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase italic">Learning Mode</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[9px] text-cyan-vibrant font-bold uppercase tracking-tighter">Infinite</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area: Service Directory */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117]/60 custom-scrollbar overflow-y-auto relative">

              {/* Dashboard Content */}
              <div className="p-6 md:p-10 max-w-5xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      Service Directory
                      <ShieldCheck size={20} className="text-green-500" />
                    </h2>
                    <p className="text-xs text-white/40 font-mono tracking-tight mt-1 italic">// High availability across On-Premise (Office) and Remote VPCs</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Region: {RESUME_DATA.location.split(",")[0].toLowerCase()}-1</span>
                    <button
                      className="p-2 bg-white/5 rounded hover:bg-white/10 text-white/40 transition-colors"
                      onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                      title="Refresh Console"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {filteredSkills.map((skill) => {
                      const slug = SKILL_SLUGS[skill.name] || "codeigniter";
                      const colors = CATEGORY_COLORS[skill.category] || "text-white/40";
                      const description = SERVICE_DESCRIPTIONS[skill.name] || `A powerful ${skill.category} service for automated cloud orchestration.`;

                      return (
                        <motion.div
                          layout
                          key={`${skill.name}-${skill.category}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                          className="bg-[#161b22] border border-white/10 rounded-lg p-5 group cursor-pointer transition-all hover:border-white/20 flex flex-col h-[200px]"
                        >
                          {/* Top: Category (from wireframe 6n7jz) */}
                          <div className="mb-4">
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 ${colors}`}>
                              {skill.category}
                            </span>
                          </div>

                          {/* Middle Row: Icon (PxWnx) + Description (RqCUx) */}
                          <div className="flex gap-4 items-start flex-1 mb-2">
                            <div className="w-14 h-14 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors shadow-inner">
                              <img
                                src={`https://cdn.simpleicons.org/${slug}/white`}
                                alt={skill.name}
                                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                            <p className="text-[11px] text-white/50 leading-relaxed font-sans line-clamp-3 pt-1">
                              {description}
                            </p>
                          </div>

                          {/* Bottom: Name (mqFHA) */}
                          <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-vibrant transition-colors tracking-tight">
                              {skill.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest hidden group-hover:inline">Connect</span>
                              <ExternalLink size={14} className="text-white/10 group-hover:text-cyan-vibrant transition-colors" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>

                {filteredSkills.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-24 text-white/20"
                  >
                    <Info size={48} strokeWidth={1} className="mb-4 text-white/10" />
                    <p className="font-mono italic text-sm text-center">No sCloud services found matching "{searchQuery}"</p>
                    <button
                      onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                      className="mt-6 px-4 py-2 border border-white/10 rounded-md text-xs hover:bg-white/5 transition-colors"
                    >
                      Reset Console Filter
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Grid Background Decor */}
              <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}


