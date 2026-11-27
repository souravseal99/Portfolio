import { ToolCategoryConfig, ToolItem } from "@/config";
import { ToolCard } from "./ToolCard";

interface ToolCategoryCardProps {
  category: ToolCategoryConfig;
  tools: ToolItem[];
}

export function ToolCategoryCard({ category, tools }: ToolCategoryCardProps) {
  return (
    <div className="rounded-2xl bg-slate-950/70 border border-white/8 p-5 flex flex-col gap-3">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/8">
        <h3 className={`font-mono text-xs uppercase tracking-wider ${category.accent.title} font-semibold`}>
          {category.title}
        </h3>
        <span className="font-mono text-xs text-slate-500">
          {tools.length} {tools.length === 1 ? "tool" : "tools"}
        </span>
      </div>

      {/* Tools List */}
      <div className="flex flex-col gap-2.5">
        {tools.length > 0 ? (
          tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              hoverBorderClass={category.accent.hoverBorder}
            />
          ))
        ) : (
          <div className="py-6 text-center text-xs font-mono text-slate-600 border border-dashed border-white/5 rounded-xl">
            No matching tools in this category
          </div>
        )}
      </div>
    </div>
  );
}
