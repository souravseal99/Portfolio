"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/constants";
import {
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Cpu,
  GitBranch,
  Globe,
  Heart,
  MessageSquare
} from "lucide-react";

const LOG_MESSAGES = [
  "SYSTEM: Portfolio version 1.0.4 loaded",
  "INFRA: cloud_kaptan_region is stable",
  "DEPLOY: Verified successfully (6adfc71)",
  "AUTH: Guest session established",
  "NETWORK: Latency optimized for GLOBAL_VPC",
  "CORE: Initializing skill_matrix.js...",
  "LOG: Recruiter heartbeat detected",
  "DATA: Fetching latest commit history...",
];

export default function Footer() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % LOG_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#30363d] bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end">

          {/* Diagnostic Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                <Cpu size={16} />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">System Diagnostic</h4>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">Instance: PROD-SRV-001</p>
              </div>
            </div>

            <div className="bg-black/40 border border-[#30363d] rounded p-4 font-mono text-[11px] h-20 flex flex-col justify-center relative group">
              <div className="absolute top-2 right-3 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse [animation-delay:0.2s]" />
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse [animation-delay:0.4s]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="space-y-1"
                >
                  <p className="text-white/40">
                    <span className="text-cyan-500 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                    {LOG_MESSAGES[logIndex]}
                  </p>
                  <p className="text-white/20">
                    <span className="text-pink-500 mr-2">&gt;</span>
                    Buffer status: 100% stable
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Branding & Socials */}
          <div className="lg:col-span-3 flex flex-col items-center gap-6">
            <div className="text-center group">
              <div className="text-sm font-mono text-white/40 mb-2 transition-colors group-hover:text-white/60 select-none">
                souravseal@dev:<span className="text-cyan-vibrant">~</span>$ echo $NAME
              </div>
              <h3 className="text-2xl font-bold tracking-tighter text-white">
                Sourav<span className="text-[#1f6feb]">.Seal</span>
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <SocialLink
                href={`https://github.com/${RESUME_DATA.github}`}
                icon={<Github size={18} />}
                label="GitHub"
              />
              <SocialLink
                href={`https://linkedin.com/in/${RESUME_DATA.linkedin}`}
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
              <SocialLink
                href={`https://twitter.com/${RESUME_DATA.twitter}`}
                icon={<Twitter size={18} />}
                label="Twitter"
              />
              <SocialLink
                href={`https://discord.com/users/${RESUME_DATA.discord}`}
                icon={<MessageSquare size={18} />}
                label="Discord"
              />
            </div>
          </div>

          {/* Right: Metrics & Uptime */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-end">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full lg:w-fit">
              <MetricItem label="Uptime" value="99.99%" color="text-green-400" />
              <MetricItem label="Protocol" value="HTTPS/TLS" color="text-blue-400" />
              <MetricItem label="Build" value="v1.0.4" color="text-orange-400" />
              <MetricItem label="Stack" value="Next.js" color="text-cyan-400" />
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] group">
              <Heart size={12} className="text-pink-500 group-hover:scale-125 transition-transform animate-pulse" />
              Built with precision by Sourav Seal &copy; {currentYear}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom status bar */}
      <div className="bg-[#1f6feb] py-1 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-background text-[9px] font-bold">
            <GitBranch size={10} />
            <span>branch::main</span>
          </div>
          <div className="w-px h-3 bg-black/10" />
          <div className="flex items-center gap-1.5 text-background text-[9px] font-bold">
            <Globe size={10} />
            <span>region::GLOBAL_VPC</span>
          </div>
        </div>
        <div className="text-background text-[9px] font-mono font-bold italic opacity-80">
          Transmission encrypted // 256-bit RSA
        </div>
      </div>

      <style jsx>{`
        .bg-grid-white {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 24px 24px;
        }
      `}</style>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-cyan-vibrant hover:border-cyan-vibrant/30 hover:bg-cyan-vibrant/5 transition-all active:scale-95"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function MetricItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col gap-1 items-end lg:items-start">
      <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{label}</span>
      <span className={`text-xs font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}
