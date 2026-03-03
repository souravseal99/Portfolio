"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import { Cpu, Terminal, Hash, ChevronRight } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-vibrant group-hover:neon-text-purple transition-all">
            <Cpu size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              arsenal<span className="text-purple-vibrant">.txt</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              cat /etc/skills --human-readable
            </p>
          </div>
        </div>

        {/* DNA / ASCII Style Skills Container */}
        <div className="glass-card w-full border border-white/5 shadow-2xl flex flex-col overflow-hidden bg-black/40">
          {/* Terminal header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
            <span className="text-[10px] font-mono text-muted-foreground/60">FILE_NAME: arsenal.txt | STATUS: READ_ONLY</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500/20" />
              <div className="w-2 h-2 rounded-full bg-purple-500/20" />
            </div>
          </div>

          {/* Skills Content (ASCII-ish) */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {Object.entries(RESUME_DATA.skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-purple-vibrant"><Hash size={16} /></span>
                    <h3 className="uppercase tracking-[0.3em] font-bold text-foreground/80">{category}</h3>
                  </div>

                  <div className="space-y-6">
                    {skillList.map((skill, i) => (
                      <div key={skill} className="group">
                        <div className="flex justify-between items-center mb-1.5 px-1">
                          <span className="text-foreground/70 group-hover:text-cyan-vibrant transition-colors">
                            {skill}
                          </span>
                          <span className="text-[10px] text-muted-foreground/30">MODULE_{i + 10}</span>
                        </div>
                        {/* Technical Progress Bar */}
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden flex">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" style={{ width: `${80 + (i % 3) * 5}%` }} />
                          <div className="h-full bg-white/10 flex-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ASCII Footer Decor */}
            <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-muted-foreground/20 leading-tight select-none hidden sm:block">
              <pre>
                {`
[SYSTEM]: Scanning dependencies...
[SUCCESS]: All modules loaded accurately.
[UPTIME]: 99.99% technical proficiency reached.
                    `}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
