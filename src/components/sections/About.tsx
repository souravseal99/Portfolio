"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import { FileText, Eye, Code, ChevronRight } from "lucide-react";

export default function About() {
  const bioMarkdown = `# Bio\n\n${RESUME_DATA.bio.join("\n\n")}`;

  return (
    <section id="readme" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-vibrant group-hover:neon-text-cyan transition-all">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase italic">
              ReadMe<span className="text-cyan-vibrant ml-2">.TXT</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              ~/sourav/profile/identity
            </p>
          </div>
        </div>

        {/* VS Code Style Window */}
        <div className="glass-card w-full overflow-hidden border border-white/5 shadow-2xl flex flex-col min-h-[500px]">
          {/* Editor Header / Tabs */}
          <div className="bg-white/5 border-b border-white/10 flex items-center justify-between px-4">
            <div className="flex">
              <div className="px-4 py-3 bg-white/5 border-r border-white/5 flex items-center gap-2 border-t-2 border-t-cyan-vibrant">
                <FileText size={14} className="text-cyan-vibrant" />
                <span className="text-xs font-mono text-foreground">ReadMe.txt</span>
              </div>
              <div className="px-4 py-3 opacity-30 flex items-center gap-2">
                <FileText size={14} />
                <span className="text-xs font-mono">README.md</span>
              </div>
            </div>
            <div className="flex gap-4 opacity-50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                UTF-8
              </div>
              <div className="text-[10px] font-mono">Markdown</div>
            </div>
          </div>

          {/* Split Pane Editor */}
          <div className="flex flex-col lg:flex-row flex-1 divide-y lg:divide-y-0 lg:divide-x divide-white/5 font-mono">
            {/* Left: Raw Markdown Editor */}
            <div className="flex-1 p-6 bg-black/20 overflow-auto custom-scrollbar">
              <div className="flex gap-4 text-sm leading-relaxed">
                <div className="text-muted-foreground/30 text-right select-none w-6 tabular-nums">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-pink-vibrant"># ReadMe</div>
                  <div className="text-foreground/70">
                    {RESUME_DATA.bio.map((para, i) => (
                      <div key={i} className="mb-4">
                        {para}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-vibrant/40 italic">
                    <ChevronRight size={14} />
                    <span>Waiting for input...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rendered Preview */}
            <div className="flex-1 p-8 bg-white/[0.02] overflow-auto custom-scrollbar relative">
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold text-cyan-vibrant/60">
                <Eye size={12} /> Preview Mode
              </div>

              <article className="prose prose-invert max-w-none prose-p:text-foreground/80 prose-p:leading-relaxed prose-headings:text-foreground prose-headings:tracking-tight">
                <h1 className="text-3xl font-bold mb-6 border-b border-white/5 pb-4">Bio</h1>
                {RESUME_DATA.bio.map((para, i) => (
                  <p key={i} className="text-lg">
                    {para}
                  </p>
                ))}

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Core Principles</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Clean Architecture",
                      "Scalable Systems",
                      "User-Centric Design",
                      "Continuous Learning"
                    ].map(skill => (
                      <div key={skill} className="flex items-center gap-2 text-foreground/60 text-sm">
                        <span className="text-cyan-vibrant">✓</span> {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
