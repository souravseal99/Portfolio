import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-white/[0.08]">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xl sm:text-2xl font-semibold text-white">{title}</h2>
          {subtitle && <span className="font-mono text-xs text-slate-500">/ {subtitle}</span>}
        </div>
        {description && <p className="text-xs text-slate-400">{description}</p>}
      </div>

      <div className="flex items-center gap-3">
        {action}
        {badge && <span className="font-mono text-xs text-cyan-400">{badge}</span>}
      </div>
    </div>
  );
}
