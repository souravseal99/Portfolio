"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Mail,
  ChevronRight,
  Search,
  Folder,
  ChevronDown,
  Globe,
  Settings,
  HelpCircle,
  Clock
} from "lucide-react";

type Endpoint = {
  id: string;
  method: "GET" | "POST";
  name: string;
  url: string;
  description: string;
  type: "social" | "contact";
};

const ENDPOINTS: Endpoint[] = [
  { id: "twitter", method: "GET", name: "Twitter", url: `https://x.com/${(RESUME_DATA as any).twitter}`, description: "Retrieve social presence on X platform", type: "social" },
  { id: "discord", method: "GET", name: "Discord", url: `https://discord.com/users/${(RESUME_DATA as any).discord}`, description: "Open a direct communication channel via Discord", type: "social" },
  { id: "github", method: "GET", name: "GitHub", url: `https://github.com/${RESUME_DATA.github}`, description: "Fetch open-source contributions and repositories", type: "social" },
  { id: "linkedin", method: "GET", name: "LinkedIn", url: `https://linkedin.com/in/${RESUME_DATA.linkedin}`, description: "Access professional history and network", type: "social" },
  { id: "email", method: "GET", name: "Email", url: `mailto:${RESUME_DATA.email}`, description: "Standard secure SMTP gateway for inquiries", type: "social" },
  { id: "contact", method: "POST", name: "Send Message", url: "https://api.sourav.dev/v1/contact", description: "Initialize direct contact form payload", type: "contact" },
];

export default function Contact() {
  const [activeEndpoint, setActiveEndpoint] = useState<Endpoint>(ENDPOINTS.find(e => e.id === "contact")!);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", priority: "P0 - CRITICAL" });
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState<null | { status: number; text: string }>(null);

  const handleSend = () => {
    if (activeEndpoint.method === "GET") {
      window.open(activeEndpoint.url, "_blank");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setResponse({ status: 200, text: "OK: Message successfully queued for delivery." });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* New Gateway Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1f6feb]/10 border border-[#1f6feb]/20 flex items-center justify-center text-[#1f6feb] shadow-[0_0_20px_rgba(31,111,235,0.1)]">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white uppercase italic">
                Connection<span className="text-[#1f6feb] ml-2">API</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                  Public.Interface.v1.0.4 // Production
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 border-l border-white/5 pl-8 h-fit">
            <div>
              <p className="text-[9px] font-mono text-white/20 uppercase mb-1">Response Time</p>
              <p className="text-xs font-mono text-green-400">~24ms</p>
            </div>
            <div>
              <p className="text-[9px] font-mono text-white/20 uppercase mb-1">Region</p>
              <p className="text-xs font-mono text-blue-400">GLOBAL_VPC</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-[9px] font-mono text-white/20 uppercase mb-1">Protocol</p>
              <p className="text-xs font-mono text-orange-400">HTTPS/TLS</p>
            </div>
          </div>
        </div>

        {/* Postman-like Sidebar + Main Workspace */}
        <div className="flex h-[720px] bg-[#161b22]/40 backdrop-blur-sm border border-[#30363d] rounded-xl overflow-hidden shadow-2xl flex-col md:flex-row">

          {/* Collection Sidebar */}
          <div className="w-64 bg-[#161b22]/50 border-r border-[#30363d] flex flex-col shrink-0">
            <div className="p-4 border-b border-[#30363d] flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">Collections</span>
              <div className="flex gap-2">
                <Search size={14} className="text-white/30" />
                <Settings size={14} className="text-white/30" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 flex items-center gap-2 group cursor-pointer">
                <ChevronDown size={14} className="text-white/40 group-hover:text-white" />
                <Folder size={16} className="text-orange-400" />
                <span className="text-xs font-semibold text-white/80">Connection APIs v1.0</span>
              </div>

              <div className="space-y-0.5 ml-4 border-l border-white/5 pl-2">
                {ENDPOINTS.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => {
                      setActiveEndpoint(endpoint);
                      setResponse(null);
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center gap-3 group transition-colors rounded-l-md ${activeEndpoint.id === endpoint.id ? "bg-[#1f6feb]/10 text-white" : "text-white/50 hover:bg-white/5"
                      }`}
                  >
                    <span className={`text-[9px] font-bold w-10 ${endpoint.method === "GET" ? "text-green-400" : "text-orange-400"}`}>
                      {endpoint.method}
                    </span>
                    <span className="text-xs truncate">{endpoint.name}</span>
                    <AnimatePresence>
                      {activeEndpoint.id === endpoint.id && (
                        <motion.div layoutId="sidebar-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#1f6feb]" />
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black/20 flex justify-center gap-6 mt-auto border-t border-[#30363d]">
              <HelpCircle size={14} className="text-white/20" />
              <Clock size={14} className="text-white/20" />
              <Search size={14} className="text-white/20" />
            </div>
          </div>

          {/* Request Workspace */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117]">
            {/* Nav Bar */}
            <div className="flex items-center gap-2 px-4 h-12 border-b border-[#30363d] overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#1f6feb]/20 rounded border border-[#1f6feb]/30 border-b-transparent relative shrink-0">
                <span className={`text-[9px] font-bold ${activeEndpoint.method === "GET" ? "text-green-400" : "text-orange-400"}`}>{activeEndpoint.method}</span>
                <span className="text-[11px] text-white/90 font-medium">{activeEndpoint.name}</span>
                <span className="ml-2 text-[10px] text-white/30">×</span>
              </div>
              <button className="p-2 text-white/20 hover:text-white/50">+</button>
            </div>

            {/* URL Bar Area */}
            <div className="p-4 flex gap-2 border-b border-[#30363d] bg-black/10">
              <div className="flex-1 flex gap-px rounded overflow-hidden border border-[#30363d]">
                <div className="bg-[#161b22] px-3 py-2 flex items-center gap-2 border-r border-[#30363d]">
                  <span className={`text-xs font-bold ${activeEndpoint.method === "GET" ? "text-green-400" : "text-orange-400"}`}>{activeEndpoint.method}</span>
                  <ChevronDown size={14} className="text-white/40" />
                </div>
                <div className="flex-1 bg-[#010409] px-4 py-2 flex items-center text-xs text-white/60 font-mono truncate">
                  {activeEndpoint.url}
                </div>
              </div>
              <button
                onClick={handleSend}
                disabled={isSending}
                className="bg-[#1f6feb] hover:bg-[#388bfd] text-white px-8 py-2 rounded text-xs font-bold tracking-wider flex items-center gap-2 disabled:opacity-50 transition-all active:scale-95 shrink-0"
              >
                {isSending ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Send size={14} />}
                {activeEndpoint.method === "GET" ? "VISIT" : "SEND"}
              </button>
            </div>

            {/* Tabs Area */}
            <div className="flex border-b border-[#30363d] px-4 gap-6">
              {["Docs", "Params", "Auth", "Headers", "Body", "Scripts", "Settings"].map((tab) => (
                <button
                  key={tab}
                  className={`text-[11px] py-3 relative font-medium transition-colors ${tab === (activeEndpoint.method === "GET" ? "Docs" : "Body") ? "text-[#1f6feb]" : "text-white/40 hover:text-white"}`}
                >
                  {tab}
                  {tab === (activeEndpoint.method === "GET" ? "Docs" : "Body") && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1f6feb]" />
                  )}
                  {tab === "Body" && activeEndpoint.method === "POST" && <div className="absolute top-2 -right-1.5 w-1 h-1 rounded-full bg-orange-400" />}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEndpoint.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  {activeEndpoint.method === "POST" ? (
                    <div className="space-y-6">
                      {/* Body Sub-tabs */}
                      <div className="flex gap-4 items-center mb-4">
                        <div className="flex items-center gap-1.5 cursor-pointer">
                          <div className="w-3 h-3 rounded-full border border-[#1f6feb] flex items-center justify-center p-[2px]">
                            <div className="w-full h-full rounded-full bg-[#1f6feb]" />
                          </div>
                          <span className="text-[11px] text-white/90">form-data</span>
                        </div>
                        {["x-www-form-urlencoded", "raw", "binary", "GraphQL"].map(b => (
                          <div key={b} className="flex items-center gap-1.5 cursor-pointer opacity-40">
                            <div className="w-3 h-3 rounded-full border border-white/20" />
                            <span className="text-[11px] text-white font-mono">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* form-data table */}
                      <div className="border border-[#30363d] rounded-sm overflow-hidden text-[11px] font-mono">
                        <div className="flex border-b border-[#30363d] bg-white/[0.02] text-white/50 py-2">
                          <div className="w-10 pl-2 flex justify-center"><input type="checkbox" checked readOnly className="opacity-40" /></div>
                          <div className="w-1/4 px-4 border-r border-[#30363d]">Key</div>
                          <div className="w-1/3 px-4 border-r border-[#30363d]">Value</div>
                          <div className="flex-1 px-4">Description</div>
                        </div>

                        {/* Rows */}
                        {[
                          { key: "name", label: "recruiter_name", val: formData.name, set: (v: string) => setFormData({ ...formData, name: v }), desc: "Identify yourself or company" },
                          { key: "email", label: "callback_email", val: formData.email, set: (v: string) => setFormData({ ...formData, email: v }), desc: "Where should I reply?" },
                          {
                            key: "priority",
                            label: "priority",
                            val: formData.priority,
                            set: (v: string) => setFormData({ ...formData, priority: v }),
                            desc: "Set urgency for internal routing",
                            dropdown: true,
                            options: [
                              "P0 - CRITICAL",
                              "P1 - HIGH",
                              "P2 - LOW"
                            ]
                          },
                          { key: "message", label: "payload", val: formData.message, set: (v: string) => setFormData({ ...formData, message: v }), desc: "Core message content", area: true }
                        ].map((row, i) => (
                          <div key={row.key} className="flex border-b border-[#30363d] group hover:bg-white/[0.01]">
                            <div className="w-10 flex justify-center py-3"><input type="checkbox" checked readOnly /></div>
                            <div className="w-1/4 px-4 py-3 border-r border-[#30363d] text-orange-300 font-semibold">{row.label}</div>
                            <div className="w-1/3 px-4 py-1.5 border-r border-[#30363d]">
                              {row.dropdown ? (
                                <select
                                  value={row.val}
                                  onChange={(e) => row.set(e.target.value)}
                                  className="bg-transparent w-full h-full text-white/80 outline-none appearance-none cursor-pointer font-mono text-[10px]"
                                >
                                  {row.options?.map(opt => (
                                    <option key={opt} value={opt} className="bg-[#161b22] text-white/80">{opt}</option>
                                  ))}
                                </select>
                              ) : row.area ? (
                                <textarea
                                  value={row.val}
                                  onChange={(e) => row.set(e.target.value)}
                                  placeholder="Type message content..."
                                  className="bg-transparent w-full text-white/80 outline-none resize-none pt-1.5 no-scrollbar min-h-[60px]"
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={row.val}
                                  onChange={(e) => row.set(e.target.value)}
                                  placeholder={`Enter ${row.key}...`}
                                  className="bg-transparent w-full h-full text-white/80 outline-none"
                                />
                              )}
                            </div>
                            <div className="flex-1 px-4 py-3 text-white/30 truncate">{row.desc}</div>
                          </div>
                        ))}

                        <div className="flex opacity-20 bg-black/40">
                          <div className="w-10 flex justify-center py-3"></div>
                          <div className="w-1/4 px-4 py-3 border-r border-[#30363d]">Key</div>
                          <div className="w-1/3 px-4 py-3 border-r border-[#30363d]">Value</div>
                          <div className="flex-1 px-4 py-3">Description</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8 py-2 px-6 overflow-y-auto no-scrollbar">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-white/20 uppercase tracking-[0.3em]">Documentation</span>
                          <div className="h-px flex-1 bg-white/5" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{activeEndpoint.name} Request Details</h3>
                        <p className="text-sm text-white/60 leading-relaxed font-mono">
                          {activeEndpoint.description}.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Method</h4>
                            <div className="inline-block px-2 py-1 bg-green-400/10 border border-green-400/20 rounded text-[10px] font-bold text-green-400">
                              {activeEndpoint.method}
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Endpoint URL Tag</h4>
                            <div className="p-3 bg-black/40 border border-[#30363d] rounded font-mono text-[11px] text-[#79c0ff] break-all">
                              {activeEndpoint.url}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 relative min-h-[220px]">
                          {/* Background Splash Glow */}
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 blur-[80px] opacity-20 rounded-full transition-colors duration-500 ${activeEndpoint.id === 'twitter' ? 'bg-sky-500' : activeEndpoint.id === 'discord' ? 'bg-indigo-500' : activeEndpoint.id === 'github' ? 'bg-pink-500' : activeEndpoint.id === 'linkedin' ? 'bg-blue-500' : 'bg-cyan-500'}`} />

                          <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className={`relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-colors duration-500 ${activeEndpoint.id === 'twitter' ? 'text-sky-400' : activeEndpoint.id === 'discord' ? 'text-indigo-400' : activeEndpoint.id === 'github' ? 'text-pink-400' : activeEndpoint.id === 'linkedin' ? 'text-blue-400' : 'text-cyan-400'}`}
                          >
                            {activeEndpoint.id === 'twitter' && <Twitter size={84} strokeWidth={1.2} />}
                            {activeEndpoint.id === 'discord' && <MessageSquare size={84} strokeWidth={1.2} />}
                            {activeEndpoint.id === 'github' && <Github size={84} strokeWidth={1.2} />}
                            {activeEndpoint.id === 'linkedin' && <Linkedin size={84} strokeWidth={1.2} />}
                            {activeEndpoint.id === 'email' && <Mail size={84} strokeWidth={1.2} />}
                          </motion.div>

                          <div className="mt-8 flex flex-col items-center gap-2">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <span className="text-[7px] font-mono tracking-[0.5em] text-white/20 uppercase">Awaiting Visitor Entry</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-orange-400/5 border border-orange-400/10 rounded-md">
                        <div className="flex items-center gap-2 mb-1">
                          <HelpCircle size={14} className="text-orange-400/60" />
                          <span className="text-[10px] font-bold text-orange-400/80 uppercase tracking-wider">Authentication Requirement</span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">
                          No API key required for public GET requests. Access is rate-limited via global firewall rules.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Response Section */}
              <div className="mt-auto border-t border-[#30363d] pt-6 pb-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ChevronDown size={14} className="text-white/30" />
                    <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-[.2em]">Response</h5>
                  </div>
                  {response && (
                    <div className="flex gap-4 text-[11px]">
                      <span className="text-white/40 font-mono">Status: <span className="text-green-400 font-bold">{response.status} OK</span></span>
                      <span className="text-white/40 font-mono">Time: <span className="text-green-400 font-bold">42ms</span></span>
                    </div>
                  )}
                </div>

                <div className="p-8 bg-[#010409]/50 border border-[#30363d] rounded flex flex-col min-h-[140px]">
                  {response ? (
                    <div className="font-mono text-left w-full space-y-1">
                      <p className="text-green-400 text-[10px] mb-2">{`// Transmission Status: Processed`}</p>
                      <div className="text-[#79c0ff] text-[11px]">
                        <p>{`{`}</p>
                        <p className="pl-4">{`"id": "msg_${Math.random().toString(36).substr(2, 9)}",`}</p>
                        <p className="pl-4 text-white/80">{`"status": "established",`}</p>
                        <p className="pl-4 text-[#d2a8ff]">{`"message": "${response.text}",`}</p>
                        <p className="pl-4">{`"gateway": "portfolio-api-v1"`}</p>
                        <p>{`}`}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center flex-1 opacity-20 hover:opacity-40 transition-opacity">
                      <Globe size={32} className="mb-3" />
                      <p className="text-[9px] uppercase tracking-[.3em] font-bold">Waiting for request execution</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
