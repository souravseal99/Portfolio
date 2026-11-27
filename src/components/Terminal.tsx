"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/config";
import WindowHeader from "@/components/shared/WindowHeader";

interface TerminalLine {
  type: "input" | "output" | "error" | "info";
  content: string | string[];
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "input", content: "whoami" },
    {
      type: "output",
      content: SITE_CONFIG.terminal.initialMessage,
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const promptPrefix = `${SITE_CONFIG.terminal.user}@${SITE_CONFIG.terminal.host}:~$`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let response: string | string[] = "";
    let type: "output" | "error" | "info" = "output";

    switch (trimmed) {
      case "whoami":
        response = [
          `${SITE_CONFIG.name} (${SITE_CONFIG.handle}) — ${SITE_CONFIG.role}`,
          `System: ${SITE_CONFIG.terminal.system}`,
          `Company: ${SITE_CONFIG.company}`,
          `Experience: ${SITE_CONFIG.yearsExperience} shipping enterprise systems`,
          `Community: Project Admin @ Winter of Code Social (2025 & 2026)`,
        ];
        break;
      case "uptime":
        response = [
          `Current Status: ${SITE_CONFIG.availability}`,
          `Location: ${SITE_CONFIG.location} · Timezone: ${SITE_CONFIG.timezone}`,
          `Response Time: < 24 hours`,
        ];
        break;
      case "stack":
        response = [
          "Frontend: React 19, Next.js 15, TypeScript, TanStack Query, TailwindCSS",
          "Backend: Node.js, Express.js, PostgreSQL, Prisma ORM, MongoDB, Redis",
          "DevOps: Docker, Linux (Debian), Git, GitHub Actions, Postman, CI/CD",
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "help":
        response = [
          "Available Commands:",
          "  whoami   - Developer background & system info",
          "  dmesg    - System boot & kernel logs",
          "  uptime   - Work availability & status",
          "  stack    - Production technology stack",
          "  contact  - Direct communication channels",
          "  clear    - Clear terminal output",
        ];
        break;
      case "dmesg":
      case "syslog":
        response = SITE_CONFIG.terminal.initialMessage;
        break;
      case "contact":
        response = [
          `Email:    ${SITE_CONFIG.email}`,
          `Twitter:  ${SITE_CONFIG.socials.twitter}`,
          `GitHub:   ${SITE_CONFIG.socials.github}`,
          `LinkedIn: ${SITE_CONFIG.socials.linkedin}`,
        ];
        break;
      case "ls":
        response = NAV_ITEMS.map((item) => item.name.replace("~/", "")).join("   ");
        break;
      default:
        response = `bash: ${trimmed}: command not found. Type 'help' for available commands.`;
        type = "error";
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", content: cmdStr },
      { type, content: response },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* 1. Value Proposition & Headline */}
      <div className="flex flex-col gap-4 max-w-4xl">
        <div className="mono text-xs text-cyan-400 uppercase tracking-widest font-mono">
          {SITE_CONFIG.hero.eyebrow}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
          {SITE_CONFIG.hero.headline}
        </h1>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          {SITE_CONFIG.hero.elevatorPitch}
        </p>
      </div>

      {/* 2. Primary Recruiter Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={SITE_CONFIG.resumePdf}
          download={SITE_CONFIG.resumeDownloadName}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide hover:bg-cyan-300 transition shadow-[0_0_24px_rgba(6,182,212,0.25)] whitespace-nowrap"
        >
          <span>Download Resume (PDF)</span>
          <ArrowUpRight size={15} />
        </a>

        <button
          onClick={copyEmail}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 border border-white/[0.1] text-slate-300 font-mono text-xs hover:border-cyan-400/50 hover:text-white transition whitespace-nowrap"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-cyan-400" />}
          <span>{copied ? "Copied to Clipboard! ✓" : `Copy Email: ${SITE_CONFIG.email}`}</span>
        </button>
      </div>

      {/* 3. Interactive Debian Terminal Window */}
      <div className="w-full rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Reusable Window Header */}
        <WindowHeader
          title={SITE_CONFIG.terminal.title}
          branch={SITE_CONFIG.terminal.branch}
        />

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 flex flex-col gap-4">
          <div ref={scrollRef} className="font-mono text-xs sm:text-sm flex flex-col gap-2 min-h-36 max-h-80 overflow-y-auto leading-relaxed custom-scrollbar">
            {history.map((line, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                {line.type === "input" ? (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>{promptPrefix}</span>
                    <span className="text-white">{line.content}</span>
                  </div>
                ) : Array.isArray(line.content) ? (
                  <div className={`flex flex-col gap-0.5 ${line.type === "error" ? "text-red-400" : "text-slate-300"}`}>
                    {line.content.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>
                ) : (
                  <span className={line.type === "error" ? "text-red-400" : "text-slate-300"}>
                    {line.content}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(input);
            }}
            className="flex items-center gap-2 pt-3 border-t border-white/[0.08] font-mono text-xs sm:text-sm"
          >
            <label htmlFor="terminal-input" className="text-cyan-400 whitespace-nowrap">
              {promptPrefix}
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'uptime', or click below..."
              className="w-full bg-transparent border-0 p-0 text-white placeholder:text-slate-600 focus:outline-none focus:ring-0 font-mono text-xs sm:text-sm"
            />
          </form>

          {/* Preset Command Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            {["whoami", "uptime", "stack", "clear"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
