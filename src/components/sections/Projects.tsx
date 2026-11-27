"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECT, SECONDARY_PROJECTS } from "@/config";
import SectionHeader from "@/components/shared/SectionHeader";
import WindowHeader from "@/components/shared/WindowHeader";
import ProjectCard from "@/components/shared/ProjectCard";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"architecture" | "deployments">("architecture");

  return (
    <div className="flex flex-col gap-8">
      {/* Reusable Section Header */}
      <SectionHeader
        title="projects.ide"
        subtitle="Featured & Systems"
        badge="workspace: main"
      />

      {/* Part A: Featured Project Spotlight (Full-Width Card) */}
      <div className="rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Reusable Window Header with View Toggle Extra */}
        <WindowHeader
          title={FEATURED_PROJECT.fileName}
          branch={`branch: main · ${FEATURED_PROJECT.stats || ""}`}
          extra={
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Project View Toggle">
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                  activeTab === "architecture"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Architecture
              </button>
              {FEATURED_PROJECT.deployments && FEATURED_PROJECT.deployments.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab("deployments")}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5 ${
                    activeTab === "deployments"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Live Envs ({FEATURED_PROJECT.deployments.length})</span>
                </button>
              )}
            </div>
          }
        />

        {/* Tab 1: Architecture & Impact View */}
        {activeTab === "architecture" ? (
          <div className="p-6 flex flex-col gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-lg sm:text-xl">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {FEATURED_PROJECT.tagline}
              </p>
            </div>

            {/* Architecture Highlights Trio */}
            {FEATURED_PROJECT.architectureTrio && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FEATURED_PROJECT.architectureTrio.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-white">{h.title}</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.08]">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {FEATURED_PROJECT.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {FEATURED_PROJECT.links.github && (
                  <a
                    href={FEATURED_PROJECT.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold text-xs hover:bg-cyan-300 transition"
                  >
                    <span>Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {FEATURED_PROJECT.links.live && FEATURED_PROJECT.links.live !== FEATURED_PROJECT.links.github && (
                  <a
                    href={FEATURED_PROJECT.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.1] text-white font-semibold text-xs hover:border-cyan-400 transition"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Live Deployments & Health Monitor */
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold animate-in">
                  Infrastructure &amp; Health Monitoring
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-2xl ml-2 mt-2">
                Active deployments for RoomMate maintained across production, continuous nightly staging, and public uptime monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_PROJECT.deployments?.map((dep) => (
                <a
                  key={dep.name}
                  href={dep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/6 hover:border-cyan-500/40 transition-all flex flex-col justify-between gap-4 group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-bold text-xs group-hover:text-cyan-300 transition-colors ${
                          dep.environment === "production"
                            ? "text-emerald-400 border-emerald-500/20"
                            : dep.environment === "nightly"
                            ? "text-cyan-400 border-cyan-500/20"
                            : "text-purple-400 border-purple-500/20"
                      }`}>
                        {dep.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {dep.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span className="truncate max-w-[200px]">{dep.url.replace("https://", "")}</span>
                    <ArrowUpRight size={14} className="shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Part B: Uniform 2-Column Grid for Secondary Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SECONDARY_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
