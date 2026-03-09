"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitBranch, Code2, Globe, Atom, Terminal, Briefcase, Monitor, Cloud, Send } from "lucide-react";

const navItems = [
  { name: "career", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "arsenal", href: "#arsenal" },
  { name: "connect", href: "#contact" },
];

const mobileNavItems = [
  { name: "main", href: "#main", icon: Terminal },
  { name: "career", href: "#experience", icon: Briefcase },
  { name: "projects", href: "#projects", icon: Monitor },
  { name: "arsenal", href: "#arsenal", icon: Cloud },
  { name: "connect", href: "#contact", icon: Send },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sections = ["main", "readme", "experience", "projects", "arsenal", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -75% 0px", // Trigger when section is in top-middle area
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const intersecting = entries.filter(e => e.isIntersecting);
      if (intersecting.length === 0) return;

      // Sort by vertical position (topmost wins)
      const topEntry = intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      const id = topEntry.target.id;
      const displayNames: Record<string, string> = {
        main: "Main",
        readme: "ReadMe",
        experience: "Career",
        projects: "Projects",
        arsenal: "Arsenal",
        contact: "Connect"
      };
      setActiveSection(displayNames[id] || "main");
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Reset to main if at the very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("main");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-14 flex items-center justify-between">
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
              className={`text-[11px] font-mono transition-all hover:scale-105 ${activeSection.toLowerCase() === item.name.toLowerCase()
                ? "text-cyan-vibrant"
                : "text-muted-foreground hover:text-cyan-vibrant"
                }`}
            >
              <span className="opacity-40">{">"}</span> {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Git Status / Context Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.1)]">
            <GitBranch size={12} className="text-pink-vibrant" />
            <span className="text-[10px] font-mono font-bold text-pink-400 capitalize">{activeSection}</span>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed top-0 bottom-0 left-0 right-0 z-40 h-20 bg-background/95 backdrop-blur-xl border-t border-white/5 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-[72px] px-2 py-1">
          {mobileNavItems.map((item) => {
            const isActive = activeSection.toLowerCase() === item.name.toLowerCase();
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? "text-cyan-vibrant" : "text-muted-foreground hover:text-cyan-vibrant"
                  }`}
              >
                <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${isActive ? "bg-cyan-500/10 text-cyan-vibrant" : "text-muted-foreground"}`}>
                  <Icon size={20} className={isActive ? "opacity-100" : "opacity-70"} />
                  {isActive && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  )}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
