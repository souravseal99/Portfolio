"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FILE_SYSTEM, RESUME_DATA } from "@/lib/constants";
import { Terminal as TerminalIcon, GitBranch, Clock, Home, ArrowRight } from "lucide-react";

interface TerminalLine {
    type: "input" | "output" | "error" | "info";
    content: string | string[];
    timestamp?: string;
}

const Terminal: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [time, setTime] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands = ["help", "ls", "cat", "touch", "clear"];
    const filenames = Object.keys(FILE_SYSTEM);

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString("en-GB", { hour12: false });
    };

    useEffect(() => {
        setMounted(true);
        const initialTime = getCurrentTime();
        setTime(initialTime);

        // Initial boot sequence with frozen timestamp
        setHistory([
            { type: "input", content: "cat bio.md", timestamp: initialTime },
            ...RESUME_DATA.bio.map(line => ({ type: "output", content: line } as TerminalLine)),
            { type: "info", content: "TIP: Type 'help' to see files. Use [TAB] to autocomplete." },
        ]);

        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // Handle Tab Autocomplete and Ghost Text
    useEffect(() => {
        if (!input) {
            setSuggestion("");
            return;
        }

        const args = input.trim().split(/\s+/);
        const cmdPart = args[0].toLowerCase();
        const argPart = args[1]?.toLowerCase();

        if (args.length === 1) {
            const match = commands.find(c => c.startsWith(cmdPart));
            setSuggestion(match ? match.slice(cmdPart.length) : "");
        } else if (args.length === 2 && (cmdPart === "cat" || cmdPart === "touch")) {
            const match = filenames.find(f => f.startsWith(argPart));
            setSuggestion(match ? match.slice(argPart.length) : "");
        } else {
            setSuggestion("");
        }
    }, [input]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (suggestion) {
                setInput(prev => prev + suggestion);
            }
        }
    };

    const handleCommand = (cmdStr: string) => {
        const args = cmdStr.trim().split(/\s+/);
        const cmd = args[0].toLowerCase();
        const arg = args[1]?.toLowerCase();
        const commandTime = getCurrentTime();

        let response: string | string[] = "";
        let type: "output" | "error" | "info" = "output";

        switch (cmd) {
            case "help":
                response = [
                    "Available Commands:",
                    "  ls             - List directory contents",
                    "  cat <file>     - Read file content",
                    "  touch <file>   - Create (simulated) file",
                    "  clear          - Clear terminal display",
                    "  help           - Show this help menu",
                    "",
                    "FileSystem:",
                    ...Object.keys(FILE_SYSTEM).map(f => `  ${f}`),
                    "",
                    "Shortcuts:",
                    "  [TAB]          - Autocomplete command/file",
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
            { type: "input", content: cmdStr, timestamp: commandTime },
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

    const Prompt = ({ content, staticTime }: { content?: string, staticTime?: string }) => (
        <div className="flex flex-col gap-1 mb-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-cyan-400 font-bold">souravseal@CKMAC167</span>
                <span className="text-purple-400 flex items-center gap-1">
                    <Clock size={12} strokeWidth={2.5} />
                    [{staticTime || (mounted ? time : "--:--:--")}]
                </span>
                <span className="text-muted-foreground flex items-center gap-1">
                    <Home size={12} strokeWidth={2.5} />
                    [~/test-app/my-app]
                </span>
                <span className="text-pink-400 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    <GitBranch size={10} />
                    <span>main *</span>
                </span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-foreground/50 opacity-50 flex items-center font-bold">
                    [<ArrowRight size={10} strokeWidth={3} className="mx-1" /> %]
                </span>
                {content && <span className="text-foreground ml-1">{content}</span>}
            </div>
        </div>
    );

    if (!mounted) return null;

    return (
        <div
            className="glass-card w-full max-w-4xl mx-auto overflow-hidden shadow-2xl flex flex-col h-[520px] border border-white/5"
            onClick={() => inputRef.current?.focus()}
        >
            {/* OS Header */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2 justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-md border border-white/5">
                    <TerminalIcon size={10} className="text-cyan-vibrant" />
                    <span className="tracking-tight uppercase">zsh — preview — localhost:3000</span>
                </div>
                <div className="w-10" />
            </div>

            {/* Terminal Content */}
            <div
                ref={scrollRef}
                className="p-6 flex-1 overflow-y-auto terminal-text custom-scrollbar selection:bg-cyan-500/20 font-mono text-sm leading-relaxed"
            >
                <AnimatePresence mode="popLayout">
                    {history.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-2"
                        >
                            {line.type === "input" ? (
                                <Prompt content={line.content as string} staticTime={line.timestamp} />
                            ) : (
                                <div className={
                                    line.type === "error" ? "text-red-400 opacity-90" :
                                        line.type === "info" ? "text-cyan-400/50 italic text-xs mb-4" :
                                            "text-foreground/80 whitespace-pre-wrap pl-4 border-l-2 border-white/5"
                                }>
                                    {line.content}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Active Input Line */}
                <div className="mt-4 relative">
                    <Prompt />
                    <div className="absolute left-[54px] bottom-[3px] flex-1 w-[calc(100%-80px)]">
                        <div className="relative">
                            {/* Ghost Text Suggestion */}
                            <div className="absolute inset-0 text-foreground/20 pointer-events-none select-none whitespace-pre py-0.5">
                                <span className="opacity-0">{input}</span>
                                {suggestion}
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    autoFocus
                                    autoComplete="off"
                                    spellCheck="false"
                                    className="bg-transparent border-none outline-none w-full text-foreground caret-cyan-vibrant font-mono relative z-10 py-0.5"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
