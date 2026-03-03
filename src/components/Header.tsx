"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitBranch, Box, Code2, Globe, Atom, Zap, Hexagon } from "lucide-react";

const navItems = [
  { name: "bio", href: "#about" },
  { name: "apps", href: "#projects" },
  { name: "career", href: "#experience" },
  { name: "arsenal", href: "#skills" },
  { name: "connect", href: "#contact" },
];

export default function Header() {
  const [branch, setBranch] = useState("main");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left: Fullstack Status */}
        <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
            <Globe size={12} className="text-cyan-vibrant" />
            <span className="text-foreground/70">localhost:3000</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
            <Code2 size={12} className="text-pink-vibrant fill-pink-500/10" />
            <span className="text-foreground/70">node_v20.x</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
            <Atom size={12} className="text-purple-vibrant animate-[spin_10s_linear_infinite]" />
            <span className="text-foreground/70">react_v18</span>
          </div>
        </div>

        {/* Center: Extension Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-mono text-muted-foreground hover:text-cyan-vibrant transition-all hover:scale-105"
            >
              <span className="opacity-40">{">"}</span> {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Git Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            <GitBranch size={12} className="text-pink-vibrant" />
            <span className="text-[10px] font-mono font-bold text-pink-400">{branch}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
