"use client";

import React from "react";
import { EXPERIENCE_DATA, LEADERSHIP_DATA } from "@/config";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Experience() {
  return (
    <div className="rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 flex flex-col gap-8 shadow-2xl">
      {/* Reusable Section Header */}
      <SectionHeader
        title="career.log"
        subtitle="Experiences"
        badge="2020 - 2026"
      />

      <div className="border-l border-white/12 pl-6 ml-2 flex flex-col gap-10">
        {/* Dynamic Experience Entries */}
        {EXPERIENCE_DATA.map((exp) => (
          <article key={exp.id} className="relative flex flex-col gap-3 group">
            <div className="absolute -left-7.75 top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#07090E]" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {exp.company} — {exp.role}
                </h3>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/20">
                  {exp.statusBadge}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-400 tabular-nums">
                {exp.duration} · {exp.location}
              </span>
            </div>

            <div className="text-xs font-mono text-cyan-400">{exp.domain}</div>

            {/* Dynamic Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {exp.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/6 flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-white">{h.title}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {h.emphasis ? (
                      <>
                        {h.description.split(h.emphasis)[0]}
                        <strong className="text-slate-200 font-semibold">{h.emphasis}</strong>
                        {h.description.split(h.emphasis)[1]}
                      </>
                    ) : (
                      h.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}

        {/* Dynamic Leadership & Open Source Entries */}
        {LEADERSHIP_DATA.map((lead) => (
          <article key={lead.id} className="relative flex flex-col gap-2 pt-6 border-t border-white/12 group">
            <div className="absolute -left-7.75 top-7 w-3 h-3 rounded-full bg-purple-400 border-4 border-[#07090E]" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base">
                  {lead.organization} — {lead.title}
                </h3>
                {lead.badge && (
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-950/30 border border-purple-500/20">
                    {lead.badge}
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-slate-400 tabular-nums">{lead.years}</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">{lead.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
