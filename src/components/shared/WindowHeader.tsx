import React from "react";

interface WindowHeaderProps {
  title: string;
  branch?: string;
  extra?: React.ReactNode;
  dots?: boolean;
}

export default function WindowHeader({
  title,
  branch,
  extra,
  dots = true,
}: WindowHeaderProps) {
  return (
    <div className="px-4 py-3 bg-[#0B0F19] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-3 font-mono text-xs">
      <div className="flex items-center gap-3">
        {dots && (
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
        )}
        <span className="text-slate-400 font-medium">{title}</span>
        {branch && <span className="text-slate-500 hidden sm:inline">{branch}</span>}
      </div>

      {extra}
    </div>
  );
}
