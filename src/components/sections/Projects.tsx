"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RESUME_DATA } from "@/lib/constants";
import {
  Folder,
  Github,
  ExternalLink,
  Code2,
  Layers,
  FileCode,
  Terminal,
  ChevronRight,
  Monitor,
  Cpu,
  Star,
  GitFork,
  GitBranch,
  Wifi,
  FileText
} from "lucide-react";

export default function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = RESUME_DATA.projects[activeProjectIdx];

  // Helper to format tech stack into badges
  const techStackArr = activeProject.stack.split(", ");

  return (
    <section id="projects" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-vibrant group-hover:neon-text-cyan transition-all">
            <Monitor size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              browse / home / src / projects
            </p>
          </div>
        </div>

        {/* VS Code Window */}
        <div className="glass-card w-full border border-white/5 shadow-2xl flex flex-col overflow-hidden h-[650px]">

          {/* Window Header (macOS style) */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground/60 select-none">
                <span className="opacity-40">Portfolio</span>
                <span>/</span>
                <span className="text-cyan-vibrant/80 underline decoration-cyan-vibrant/20 underline-offset-4">{activeProject.title.toLowerCase()}.md</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                <div className="w-2 h-2 rounded-full bg-cyan-vibrant animate-pulse" />
                <span className="text-[10px] font-mono text-cyan-vibrant uppercase font-bold tracking-tighter">IDE v1.0.4</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar (File Explorer) */}
            <div className="w-64 border-r border-white/5 bg-black/20 hidden md:flex flex-col shrink-0">
              <div className="px-4 py-3 border-b border-white/5">
                <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest font-bold">Explorer</p>
              </div>

              <div className="p-2 space-y-1 overflow-y-auto">
                <div className="flex items-center gap-2 px-2 py-1 text-xs font-mono text-muted-foreground/60 select-none cursor-default">
                  <ChevronRight size={14} className="opacity-40" />
                  <Folder size={14} className="text-cyan-vibrant" />
                  <span>PROJECTS</span>
                </div>

                {RESUME_DATA.projects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`w-full flex items-center gap-2 px-6 py-1.5 text-xs font-mono transition-colors rounded-sm ${activeProjectIdx === idx
                      ? "bg-cyan-vibrant/10 text-cyan-vibrant"
                      : "text-muted-foreground/60 hover:bg-white/5 hover:text-foreground"
                      }`}
                  >
                    <FileText size={14} className={activeProjectIdx === idx ? "text-cyan-vibrant" : "text-muted-foreground/40"} />
                    <span className="truncate">{project.title}.md</span>
                  </button>
                ))}
              </div>

              {/* Sidebar bottom info */}
              <div className="mt-auto px-4 py-3 border-t border-white/5 bg-black/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground/30">
                    <span>DEPENDENCIES</span>
                    <span className="text-cyan-vibrant/40">{techStackArr.length}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-vibrant/20 w-3/4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content (Tabs + Editor) */}
            <div className="flex-1 flex flex-col min-w-0 bg-black/30">
              {/* Tabs */}
              <div className="bg-black/40 border-b border-white/10 flex overflow-x-auto scrollbar-hide shrink-0">
                <div
                  className="px-4 py-2 border-r border-white/10 bg-cyan-vibrant/[0.03] border-t-2 border-t-cyan-vibrant min-w-[140px] flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-cyan-vibrant" />
                    <span className="text-xs font-mono text-foreground font-medium">{activeProject.title}.md</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-cyan-vibrant/20 group-hover:bg-cyan-vibrant/50 transition-colors" />
                </div>
              </div>

              {/* Editor Content Area */}
              <div className="flex-1 overflow-y-auto p-4 md:p-8 relative custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProjectIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-4xl"
                  >
                    {/* Header: Project Badge & Title */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[9px] text-pink-vibrant font-bold uppercase tracking-widest">
                          Featured Project
                        </span>
                        {activeProject.featured && (
                          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shadow-[0_0_8px_rgba(255,0,229,0.5)]" />
                        )}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {activeProject.title}<span className="text-cyan-vibrant">.</span>
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed font-mono italic">
                         // {activeProject.summary}
                      </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                      {/* Detailed Section (Left Column) */}
                      <div className="lg:col-span-7 space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Terminal size={16} className="text-cyan-vibrant" />
                            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-vibrant">Project Overview</h4>
                          </div>
                          <div className="space-y-4 font-mono text-sm text-foreground/70 leading-relaxed">
                            <p>{activeProject.description}</p>
                          </div>
                        </div>

                        {/* Tech Stack Rendering */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Cpu size={16} className="text-purple-vibrant" />
                            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-vibrant">Tech Stack</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {techStackArr.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/80 hover:border-cyan-vibrant/30 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Social/Link actions */}
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                          <a
                            href={activeProject.links.github}
                            target="_blank"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-vibrant text-background font-bold text-sm transition-transform hover:scale-105"
                          >
                            <Github size={18} />
                            Source Code
                          </a>
                          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground text-sm font-medium hover:bg-white/10 transition-colors opacity-50 cursor-not-allowed">
                            <ExternalLink size={18} />
                            Live Demo
                          </button>
                        </div>
                      </div>

                      {/* Stats Section (Right Column) */}
                      <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                          <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em] mb-6">Execution Stats</p>

                          <div className="space-y-5">
                            {activeProject.stats && (
                              <>
                                <div className="flex items-center justify-between group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-vibrant/10 flex items-center justify-center text-cyan-vibrant">
                                      <Code2 size={16} />
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground">Commits</span>
                                  </div>
                                  <span className="text-sm font-mono font-bold text-foreground">{activeProject.stats.split(',')[0].replace(' commits', '')}</span>
                                </div>
                                <div className="flex items-center justify-between group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-pink-vibrant/10 flex items-center justify-center text-pink-vibrant">
                                      <GitFork size={16} />
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground">Forks</span>
                                  </div>
                                  <span className="text-sm font-mono font-bold text-foreground">{activeProject.stats.split(',')[1].replace(' forks', '').trim()}</span>
                                </div>
                                <div className="flex items-center justify-between group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-vibrant/10 flex items-center justify-center text-purple-vibrant">
                                      <Layers size={16} />
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground">Lines Changed</span>
                                  </div>
                                  <span className="text-sm font-mono font-bold text-foreground">{activeProject.stats.split(',')[2].replace(' lines changed', '').trim()}</span>
                                </div>
                              </>
                            )}

                            <div className="pt-4 border-t border-white/5 mt-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono text-muted-foreground/40 uppercase">Code Ownership</span>
                                <span className="text-[10px] font-mono text-cyan-vibrant/60">{(activeProject as any).ownership}% Written by Me</span>
                              </div>
                              <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                                <motion.div
                                  key={`ownership-${activeProjectIdx}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(activeProject as any).ownership}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-gradient-to-r from-cyan-vibrant to-purple-vibrant"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Preview Image Placeholder */}
                        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-vibrant/5 to-pink-vibrant/5 border border-white/5 flex items-center justify-center group/preview overflow-hidden relative">
                          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                          <div className="text-center space-y-3 z-10 transition-transform group-hover/preview:scale-110">
                            <Layers size={32} className="mx-auto text-muted-foreground/20 group-hover/preview:text-cyan-vibrant/40 transition-colors" />
                            <p className="text-[10px] font-mono text-muted-foreground/20 uppercase tracking-widest font-bold">Image Preview Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status Bar */}
              <div className="bg-cyan-vibrant py-1 px-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-background text-[10px] font-bold">
                    <GitBranch size={10} />
                    <span>main*</span>
                  </div>
                  <div className="flex items-center gap-1 text-background text-[10px] font-bold opacity-80">
                    <Wifi size={10} />
                    <span>Connected</span>
                  </div>
                </div>
                <div className="text-background text-[10px] font-mono font-bold italic opacity-90">
                  UTF-8 | Markdown | Line 1, Col 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
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
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
