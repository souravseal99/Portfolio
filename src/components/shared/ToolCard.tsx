import { ToolItem } from "@/config";

interface ToolCardProps {
  tool: ToolItem;
  hoverBorderClass?: string;
}

export function ToolCard({ tool, hoverBorderClass = "hover:border-white/20" }: ToolCardProps) {
  return (
    <div
      className={`p-3.5 rounded-xl bg-slate-900/60 border border-white/6 ${hoverBorderClass} transition-colors flex flex-col gap-1.5 group`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-bold text-white text-xs group-hover:text-white transition-colors">
          {tool.name}
        </span>
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
          {tool.category}
        </span>
      </div>

      <div className="font-mono text-[11px] text-slate-400">{tool.role}</div>

      {tool.usedIn.length > 0 && (
        <div className="pt-1 text-[10px] font-mono leading-relaxed">
          <span className="text-slate-500">Used in: </span>
          <span className="text-slate-400">{tool.usedIn.join(", ")}</span>
        </div>
      )}
    </div>
  );
}
