"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FILE_SYSTEM, RESUME_DATA, DEV_TERMINOLOGY } from "@/lib/constants";
import { Terminal as TerminalIcon, GitBranch, Folder, FileText, ChevronRight } from "lucide-react";

interface TerminalLine {
    type: "input" | "output" | "error" | "info";
    content: string | string[];
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([
        { type: "info", content: "➜  portfolio git:(main) ✗ npm start" },
        { type: "output", content: "> sourav-portfolio@2.0.0 start" },
        { type: "output", content: "> next dev" },
        { type: "output", content: "" },
        { type: "output", content: "ready - started server on 0.0.0.0:3000, url: http://localhost:3000" },
        { type: "info", content: "TIP: Type 'help' to see available files and commands." },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmdStr: string) => {
        const args = cmdStr.trim().split(/\s+/);
        const cmd = args[0].toLowerCase();
        const arg = args[1]?.toLowerCase();

        let response: string | string[] = "";
        let type: "output" | "error" | "info" = "output";

        switch (cmd) {
            case "help":
                response = [
                    "Available Commands:",
                    "  ls             - List directory contents (bio.md, apps.json...)",
                    "  cat <file>     - Read file content",
                    "  touch <file>   - Create (simulated) file",
                    "  clear          - Clear terminal display",
                    "  help           - Show this help menu",
                    "",
                    "FileSystem Mapping:",
                    ...Object.keys(FILE_SYSTEM).map(f => `  ${f} -> ${FILE_SYSTEM[f as keyof typeof FILE_SYSTEM]}`),
                ];
                break;
            case "ls":
                response = Object.keys(FILE_SYSTEM).join("  ");
                break;
            case "cat":
            case "touch":
                if (!arg) {
                    response = `usage: ${cmd} <filename>`;
                    type = "error";
                } else if (FILE_SYSTEM[arg as keyof typeof FILE_SYSTEM]) {
                    const section = FILE_SYSTEM[arg as keyof typeof FILE_SYSTEM];
                    if (section === "about") response = RESUME_DATA.bio;
                    else if (section === "experience") response = RESUME_DATA.experience.map(e => `[${e.duration}] ${e.role} @ ${e.company}`);
                    else if (section === "projects") response = RESUME_DATA.projects.map(p => `- ${p.title}: ${p.description}`);
                    else if (section === "skills") response = [
                        `Frontend: ${RESUME_DATA.skills.frontend.join(", ")}`,
                        `Backend: ${RESUME_DATA.skills.backend.join(", ")}`,
                        `Tools: ${RESUME_DATA.skills.tools.join(", ")}`
                    ];
                    else if (section === "contact") response = [
                        `Email: ${RESUME_DATA.email}`,
                        `GitHub: github.com/${RESUME_DATA.github}`,
                        `LinkedIn: linkedin.com/in/${RESUME_DATA.linkedin}`
                    ];
                    else if (section === "education") response = [
                        `${RESUME_DATA.education.degree}`,
                        `${RESUME_DATA.education.institution}`,
                        `${RESUME_DATA.education.duration}`
                    ];
                } else {
                    response = `zsh: no such file or directory: ${arg}`;
                    type = "error";
                }
                break;
            case "clear":
                setHistory([]);
                return;
            case "":
                return;
            default:
                response = `zsh: command not found: ${cmd}`;
                type = "error";
        }

        setHistory((prev) => [
            ...prev,
            { type: "input", content: cmdStr },
            ...(Array.isArray(response)
                ? response.map((r) => ({ type, content: r } as TerminalLine))
                : [{ type, content: response } as TerminalLine]),
        ]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    return (
        <div
            className="glass-card w-full max-w-4xl mx-auto overflow-hidden shadow-2xl flex flex-col h-[500px] border border-white/5"
            onClick={() => inputRef.current?.focus()}
        >
            {/* OS Header / Tab bar */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2 justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-md border border-white/5">
                    <TerminalIcon size={10} className="text-cyan-vibrant" />
                    <span className="tracking-tight">zsh — preview — 3000</span>
                </div>
                <div className="w-10" />
            </div>

            {/* Zsh Content Area */}
            <div
                ref={scrollRef}
                className="p-5 flex-1 overflow-y-auto terminal-text custom-scrollbar selection:bg-cyan-500/20 font-mono text-sm"
            >
                <AnimatePresence mode="popLayout">
                    {history.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-1.5"
                        >
                            {line.type === "input" ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-400 font-bold">➜</span>
                                    <span className="text-cyan-400 font-bold">~</span>
                                    <span className="text-muted-foreground flex items-center gap-1 text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                                        <GitBranch size={10} />
                                        <span className="text-pink-400">main</span>
                                        <span className="text-yellow-500 text-[8px]">●</span>
                                    </span>
                                    <span className="text-foreground ml-1">{line.content}</span>
                                </div>
                            ) : (
                                <div className={
                                    line.type === "error" ? "text-red-400 opacity-90" :
                                        line.type === "info" ? "text-cyan-400/70 italic" :
                                            "text-foreground/80 whitespace-pre-wrap pl-6 border-l border-white/5"
                                }>
                                    {line.content}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Active Input Line - Zsh Amuse/Aussigeek Style */}
                <form onSubmit={handleSubmit} className="flex items-center flex-wrap gap-y-1 mt-2">
                    <div className="flex items-center gap-2 mr-2">
                        <span className="text-purple-400 font-bold">➜</span>
                        <span className="text-cyan-400 font-bold">~</span>
                        <span className="text-muted-foreground flex items-center gap-1 text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                            <GitBranch size={10} />
                            <span className="text-pink-400">main</span>
                            <span className="text-yellow-500 text-[8px]">●</span>
                        </span>
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                        className="bg-transparent border-none outline-none flex-1 text-foreground caret-cyan-vibrant min-w-[50px] font-mono"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
