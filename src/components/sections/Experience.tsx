"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RESUME_DATA } from "@/lib/constants";
import { CheckCircle2, ChevronDown, ChevronRight, GitBranch, Wifi } from "lucide-react";

// Deterministic "fake" timestamps seeded from entry + line index
function getLogTimestamp(entryIdx: number, lineIdx: number): string {
  const base = 9 * 3600 + entryIdx * 720 + lineIdx * 37; // seconds
  const h = String(Math.floor(base / 3600) % 24).padStart(2, "0");
  const m = String(Math.floor((base % 3600) / 60)).padStart(2, "0");
  const s = String(base % 60).padStart(2, "0");
  const ms = String((entryIdx * 173 + lineIdx * 97) % 1000).padStart(3, "0");
  return `${h}:${m}:${s}.${ms}`;
}

// Derive a human-readable "duration" string from the data
function parseDuration(duration: string): string {
  const parts = duration.split(/\s*--\s*/);
  if (parts.length < 2) return duration;
  const [start] = parts;
  const end = parts[1].trim().toLowerCase() === "present" ? "Present" : parts[1];
  return `${start.trim()} → ${end}`;
}

// Derive a short run hash from the company name
function runHash(str: string, extra = ""): string {
  let hash = 0;
  for (const c of str + extra) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  return hash.toString(16).toUpperCase().padStart(8, "0").slice(0, 8);
}

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [openEntries, setOpenEntries] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setMounted(true);
    // All entries open by default
    const initial: Record<number, boolean> = {};
    RESUME_DATA.experience.forEach((_, i) => { initial[i] = true; });
    setOpenEntries(initial);
  }, []);

  const toggleEntry = (idx: number) =>
    setOpenEntries((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-vibrant group-hover:neon-text-pink transition-all">
            <GitBranch size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              career<span className="text-pink-vibrant">.log</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              deploy pipeline / professional_history
            </p>
          </div>
        </div>

        {/* Deploy Panel */}
        <div className="glass-card w-full border border-white/5 shadow-2xl flex flex-col overflow-hidden">

          {/* Panel Header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-xs font-mono text-muted-foreground/60 tracking-tight select-none">
                ▶&nbsp;&nbsp;deploy&nbsp;/&nbsp;career.log&nbsp;/&nbsp;production
              </span>
            </div>
            {/* Live status badge */}
            <div className="flex items-center gap-2 bg-cyan-vibrant/5 border border-cyan-vibrant/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-vibrant animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-vibrant tracking-widest uppercase font-bold">
                Live
              </span>
              <Wifi size={9} className="text-cyan-vibrant/70" />
            </div>
          </div>

          {/* Deployment Runs */}
          <div className="divide-y divide-white/5">
            {RESUME_DATA.experience.map((exp, index) => {
              const isOpen = openEntries[index] ?? true;
              const isLatest = index === 0;
              const hash = mounted ? runHash(exp.company, exp.role) : "--------";
              const runNum = String(RESUME_DATA.experience.length - index).padStart(2, "0");

              return (
                <div key={index} className="flex flex-col">

                  {/* Run Header Row */}
                  <motion.button
                    onClick={() => toggleEntry(index)}
                    initial={{ opacity: 0, y: -4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="w-full text-left px-5 py-4 flex flex-wrap items-center gap-x-4 gap-y-2 hover:bg-white/3 transition-colors group cursor-pointer"
                  >
                    {/* Expand/Collapse chevron */}
                    <span className="text-muted-foreground/60 group-hover:text-muted-foreground/90 transition-colors shrink-0">
                      {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>

                    {/* Run number */}
                    <span className="font-mono text-xs text-muted-foreground/40 shrink-0">
                      RUN&nbsp;#{runNum}
                    </span>

                    {/* Status chip */}
                    {isLatest ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-pink-500/10 border border-pink-500/30 text-pink-vibrant shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-vibrant animate-pulse" />
                        ACTIVE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                        <CheckCircle2 size={10} />
                        BUILD_SUCCESS
                      </span>
                    )}

                    {/* Role + Company */}
                    <span className="font-mono text-base font-bold text-foreground truncate">
                      {exp.role}
                      <span className="text-muted-foreground/50 font-normal"> @ </span>
                      <span className="text-cyan-vibrant">{exp.company}</span>
                    </span>

                    {/* Duration */}
                    <span className="ml-auto font-mono text-xs text-muted-foreground/40 shrink-0 hidden sm:block">
                      {parseDuration(exp.duration)}
                    </span>

                    {/* Location */}
                    <span className="font-mono text-xs text-muted-foreground/30 shrink-0 hidden md:block">
                      {exp.location}
                    </span>
                  </motion.button>

                  {/* Collapsible Log Stream */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      {/* Log content area */}
                      <div className="bg-black/20 border-t border-white/5 px-0 py-3 font-mono text-sm">

                        {/* Step header line */}
                        <div className="flex items-center gap-3 px-5 py-1 mb-1 border-b border-white/5 pb-2">
                          <span className="text-muted-foreground/40 w-6 text-right select-none shrink-0 font-mono">00</span>
                          <span className="text-muted-foreground/50 w-28 shrink-0 select-none">
                            {mounted ? getLogTimestamp(index, 0) : "--:--:--.---"}
                          </span>
                          <span className="text-purple-vibrant/70 font-bold w-14 shrink-0">[STEP]</span>
                          <span className="text-muted-foreground/60">
                            Running job: <span className="text-foreground/60 italic">{exp.role}</span>
                          </span>
                        </div>

                        {/* Bullet points as log lines */}
                        {exp.points.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 px-5 py-[5px] hover:bg-white/[0.02] transition-colors group/line"
                          >
                            {/* Line number */}
                            <span className="text-muted-foreground/40 w-6 text-right select-none shrink-0 group-hover/line:text-muted-foreground/60 transition-colors">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            {/* Timestamp */}
                            <span className="text-muted-foreground/50 w-28 shrink-0 select-none">
                              {mounted ? getLogTimestamp(index, i + 1) : "--:--:--.---"}
                            </span>

                            {/* Log level */}
                            <span className="text-cyan-vibrant/70 font-bold w-14 shrink-0 group-hover/line:text-cyan-vibrant transition-colors">
                              [INFO]
                            </span>

                            {/* Log content */}
                            <span className="text-foreground/65 leading-relaxed group-hover/line:text-foreground/85 transition-colors">
                              {point}
                            </span>
                          </motion.div>
                        ))}

                        {/* Exit / footer line */}
                        <div className="flex items-center gap-3 px-5 pt-3 mt-1 border-t border-white/5">
                          <span className="text-muted-foreground/40 w-6 text-right select-none shrink-0 font-mono">
                            {String(exp.points.length + 1).padStart(2, "0")}
                          </span>
                          <span className="text-muted-foreground/50 w-28 shrink-0 select-none">
                            {mounted ? getLogTimestamp(index, exp.points.length + 1) : "--:--:--.---"}
                          </span>
                          <span className="flex items-center gap-3 text-muted-foreground/35 text-xs tracking-wider">
                            <span className="text-emerald-400/70 font-bold uppercase">EXIT 0</span>
                            <span className="text-white/10">·</span>
                            <span>{parseDuration(exp.duration)}</span>
                            <span className="text-white/10">·</span>
                            <span>hash: <span className="text-pink-vibrant/50">{hash}</span></span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Panel Footer — monitoring active */}
          <div className="bg-black/10 border-t border-white/5 px-5 py-3 font-mono text-xs flex items-center gap-3 text-muted-foreground/40">
            <span className="w-6 shrink-0" />
            <span className="w-28 shrink-0 select-none">
              {mounted ? getLogTimestamp(RESUME_DATA.experience.length, 0) : "--:--:--.---"}
            </span>
            <span className="text-cyan-vibrant/50 font-bold w-14 shrink-0">[SYS]</span>
            <span className="animate-pulse text-cyan-vibrant/40">●</span>
            <span className="italic">
              System monitoring active… polling for new milestones…
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
