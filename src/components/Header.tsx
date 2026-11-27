"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/config";

export default function Header() {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length === 0) return;

      const topEntry = intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      setActiveSection(topEntry.target.id);
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) {
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
    <header className="sticky top-0 z-50 bg-[#07090E]/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand & Status with X Handle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="#main" className="font-bold text-white tracking-tight text-sm hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>{SITE_CONFIG.name}</span>
            <span className="text-slate-500 font-mono font-normal text-xs">({SITE_CONFIG.handle})</span>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>{SITE_CONFIG.availability}</span>
          </span>
        </div>

        {/* Center: Desktop Monospace Navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-400">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
                  isActive ? "text-cyan-400 font-medium" : "text-slate-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary Resume CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.resumePdf}
            download={SITE_CONFIG.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] whitespace-nowrap"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight size={13} className="text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07090E]/95 backdrop-blur-xl border-t border-white/[0.08] pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Icon size={18} className={isActive ? "opacity-100" : "opacity-60"} />
                <span className="text-[10px] font-mono tracking-wider">{item.mobileLabel}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
