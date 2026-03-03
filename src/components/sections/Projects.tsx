"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import { Folder, Github, ExternalLink, Code2, Layers } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-vibrant group-hover:neon-text-cyan transition-all">
            <Folder size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              apps<span className="text-cyan-vibrant">.json</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              grep -r "production" ~/src/monolith/packages
            </p>
          </div>
        </div>

        {/* JSON Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card overflow-hidden border border-white/5 hover:border-white/10 transition-all flex flex-col"
            >
              {/* Card Header (JSON Key) */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-[10px] font-mono text-muted-foreground">project_{index + 1}.json</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.links.github} target="_blank" className="hover:text-cyan-vibrant transition-colors">
                    <Github size={14} />
                  </a>
                  <ExternalLink size={14} className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer text-cyan-vibrant" />
                </div>
              </div>

              {/* Card Content (JSON Format) */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed whitespace-pre font-light">
                <div><span className="text-purple-400">"{project.title}"</span>: {'{'}</div>
                <div className="pl-4">
                  <span className="text-muted-foreground/50">"summary"</span>: <span className="text-pink-400">"{project.description}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/50">"tech_stack"</span>: [
                  {project.stack.split(", ").map((tech, i, arr) => (
                    <span key={tech} className="inline-block">
                      <span className="text-cyan-400">"{tech}"</span>{i < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/50">"status"</span>: <span className="text-green-400">"deployed"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground/50">"featured"</span>: <span className="text-yellow-400">{project.featured ? "true" : "false"}</span>
                </div>
                <div>{'}'},</div>
              </div>

              {/* Hover Overlay: Preview Image or Technical Details */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center gap-4 border-t border-white/5 pt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Layers size={12} className="text-cyan-vibrant" />
                    <span>{project.stack.split(", ").length} Dependencies</span>
                  </div>
                  {project.stats && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Code2 size={12} className="text-pink-vibrant" />
                      <span>{project.stats.split(",")[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* New Project Placeholder */}
          <div className="glass-card border border-dashed border-white/10 flex items-center justify-center p-12 opacity-30 hover:opacity-60 transition-all cursor-pointer group">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Folder size={24} />
              </div>
              <p className="text-xs font-mono tracking-widest uppercase">Next Project Initialization...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
