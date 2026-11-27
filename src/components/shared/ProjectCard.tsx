import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/config/projects.config";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-slate-950/70 border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-xl">
      {/* File Header */}
      <div className="px-5 py-3 bg-[#0B0F19] border-b border-white/[0.08] flex items-center justify-between font-mono text-xs">
        <span className="text-cyan-400 font-medium">{project.fileName}</span>
        <span className="text-slate-500">{project.category}</span>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <h4 className="font-bold text-white text-base sm:text-lg">{project.title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{project.tagline}</p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono">
          <span className="text-slate-500">{project.stack.join(" · ")}</span>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            )}
            {project.links.live && project.links.live !== project.links.github && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
