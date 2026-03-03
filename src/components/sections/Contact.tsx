"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import { Terminal, Send, Mail, Github, Linkedin, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-vibrant group-hover:neon-text-green transition-all">
            <Send size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              connect<span className="text-green-vibrant">.sh</span>
            </h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              chmod +x contact_handler.sh && ./contact_handler.sh
            </p>
          </div>
        </div>

        {/* Bash Script Style Form Container */}
        <div className="glass-card w-full max-w-4xl mx-auto border border-white/5 shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left: Connection Details */}
          <div className="flex-1 p-8 bg-white/[0.02] border-r border-white/5 space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Standard Streams</h3>
              <p className="text-xs text-muted-foreground/40 font-mono">Redirecting output to user...</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "STDOUT_EMAIL", val: RESUME_DATA.email, href: `mailto:${RESUME_DATA.email}`, color: "text-cyan-400" },
                { icon: Linkedin, label: "STDOUT_LINKEDIN", val: `/in/${RESUME_DATA.linkedin.split("/").pop()}`, href: `https://linkedin.com/${RESUME_DATA.linkedin}`, color: "text-blue-400" },
                { icon: Github, label: "STDOUT_GITHUB", val: `@${RESUME_DATA.github}`, href: `https://github.com/${RESUME_DATA.github}`, color: "text-pink-400" },
                { icon: MapPin, label: "STDOUT_LOCATION", val: RESUME_DATA.location, href: null, color: "text-green-400" }
              ].map((item, i) => (
                <div key={item.label} className="group flex items-start gap-4">
                  <div className="mt-1">
                    <item.icon size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="font-mono">
                    <div className="text-[10px] text-muted-foreground/50 border-b border-white/5 pb-1 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" className={`text-sm ${item.color} hover:underline decoration-white/20 underline-offset-4`}>{item.val}</a>
                    ) : (
                      <span className="text-sm text-foreground/70">{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/30">
                <Globe size={12} />
                <span>SOU_NET_NODE_01 // ESTABLISHED</span>
              </div>
            </div>
          </div>

          {/* Right: The "Script" (Form) */}
          <div className="flex-[1.5] p-8 space-y-6 bg-black/40">
            <div className="pb-4 border-b border-white/5">
              <p className="text-xs font-mono text-green-vibrant font-bold">#!/bin/bash</p>
              <p className="text-[10px] font-mono text-muted-foreground/50"># Script to initialize connection with Sourav</p>
            </div>

            <form className="space-y-6 font-mono">
              <div className="space-y-2">
                <label className="text-[10px] text-pink-400 uppercase font-bold tracking-tighter">var: sender_name</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded px-3 py-2.5 focus-within:border-cyan-500/50 transition-all">
                  <span className="text-muted-foreground/40 text-xs">$</span>
                  <input type="text" placeholder="Your Name" className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/10" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-cyan-400 uppercase font-bold tracking-tighter">var: sender_email</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded px-3 py-2.5 focus-within:border-cyan-500/50 transition-all">
                  <span className="text-muted-foreground/40 text-xs">$</span>
                  <input type="email" placeholder="email@address.com" className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/10" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-purple-400 uppercase font-bold tracking-tighter">stdin: message_payload</label>
                <div className="flex bg-white/5 border border-white/5 rounded px-3 py-2.5 focus-within:border-cyan-500/50 transition-all">
                  <span className="text-muted-foreground/40 text-xs pt-1">$</span>
                  <textarea rows={4} placeholder="Type your message here..." className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/10 resize-none ml-2" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
              >
                <Terminal size={14} />
                Execute Connection
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
