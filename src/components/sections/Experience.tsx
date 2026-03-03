"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RESUME_DATA } from "@/lib/constants";
import { Terminal, Calendar, MapPin, CheckCircle2, Info, ArrowUpRight } from "lucide-react";

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [hashes, setHashes] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate hashes once on the client
    const newHashes = RESUME_DATA.experience.map(() =>
      Math.random().toString(36).substring(2, 10).toUpperCase()
    );
    setHashes(newHashes);
  }, []);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-vibrant group-hover:neon-text-pink transition-all">
            <Terminal size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              career<span className="text-pink-vibrant">.log</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              tail -f /var/log/professional_growth
            </p>
          </div>
        </div>

        {/* Career Log Window */}
        <div className="glass-card w-full border border-white/5 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground tracking-tight">VIEWER: /usr/bin/journalctl -u career</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/50">
              <span>L: 14 C: 72</span>
              <span>100%</span>
            </div>
          </div>

          {/* Log Content */}
          <div className="p-8 space-y-12 font-mono">
            {RESUME_DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10 pb-4 last:pb-0"
              >
                {/* Timeline Node */}
                <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full border border-background shadow-[0_0_10px_rgba(255,0,229,0.5)] ${index === 0 ? "bg-pink-vibrant animate-pulse" : "bg-white/20"}`} />

                {/* Log Entry Header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-muted-foreground/30 text-xs">[{exp.duration.replace(" -- ", " -> ")}]</span>
                    <span className="text-pink-vibrant text-xs font-bold uppercase tracking-widest">[DEPLOYED_SUCCESS]</span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-cyan-400 flex items-center gap-1.5">
                      <ArrowUpRight size={10} />
                      @{exp.company}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin size={10} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Log Entry Body (Points) */}
                <div className="space-y-4">
                  {exp.points.map((point, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Info size={14} className="text-muted-foreground/30 group-hover:text-cyan-vibrant transition-colors" />
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed max-w-3xl">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Status Indicator at bottom of entry */}
                <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-widest text-muted-foreground/30 font-bold">
                  <div className="w-1 h-3 bg-pink-500/20" />
                  ENTRY_HASH: {mounted ? hashes[index] : "LOADING..."}
                </div>
              </motion.div>
            ))}

            {/* Current Status Log */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-cyan-vibrant/50 italic text-xs">
                <span className="animate-pulse">●</span>
                <span>System monitoring active... polling for new milestones...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
