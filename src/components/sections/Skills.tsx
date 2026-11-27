"use client";

import React, { useState, useMemo } from "react";
import { Search, Globe, Cpu, Layers, Package } from "lucide-react";
import { TOOLS_CONFIG, CORE_DAILY_DRIVERS, TOOL_CATEGORIES } from "@/config";
import { ToolCategoryCard } from "@/components/shared/ToolCategoryCard";

export default function Skills() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return TOOLS_CONFIG;
    const q = search.toLowerCase();
    return TOOLS_CONFIG.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.usedIn.some((u) => u.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-white/[0.08]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-xl sm:text-2xl font-semibold text-white">tech_arsenal.json</h2>
            <span className="font-mono text-xs text-slate-500">/ Single Source of Truth</span>
          </div>
          <p className="text-xs text-slate-400">
            Categorized production stack with verified project and enterprise usage.
          </p>
        </div>

        {/* Live Filter Input */}
        <div className="relative w-full sm:w-80">
          <Search size={14} className="text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="filter by tool, role, or project (e.g. RoomMate)..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950/80 border border-white/[0.08] text-white placeholder:text-slate-600 font-mono text-xs focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      {/* 4 Core Daily Drivers Banner */}
      {!search.trim() && (
        <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-medium">
              Core Daily Drivers
            </span>
            <span className="font-mono text-[11px] text-slate-400">Primary Enterprise &amp; Project Stack</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CORE_DAILY_DRIVERS.map((tool) => (
              <div key={tool.id} className="p-3 rounded-xl bg-slate-950/80 border border-white/[0.06] flex items-center gap-3">
                {tool.id === "react-next" && <Globe size={18} className="text-cyan-400 shrink-0" />}
                {tool.id === "typescript" && <Cpu size={18} className="text-blue-400 shrink-0" />}
                {tool.id === "node-express" && <Layers size={18} className="text-emerald-400 shrink-0" />}
                {tool.id === "postgresql" && <Package size={18} className="text-purple-400 shrink-0" />}
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">{tool.name}</span>
                  <span className="font-mono text-[10px] text-slate-500">{tool.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dynamically Mapped 3-Column Categorized Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TOOL_CATEGORIES.map((category) => (
          <ToolCategoryCard
            key={category.id}
            category={category}
            tools={filtered.filter((t) => t.category === category.id)}
          />
        ))}
      </div>
    </div>
  );
}
