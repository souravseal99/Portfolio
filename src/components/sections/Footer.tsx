"use client";

import { RESUME_DATA } from "@/lib/constants";
import {
  Github,
  Linkedin,
  Twitter,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-white/5 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">

        {/* Simple Social Links */}
        <div className="flex items-center gap-8">
          <SocialLink href={`https://github.com/${RESUME_DATA.github}`} icon={<Github size={22} />} label="GitHub" />
          <SocialLink href={`https://linkedin.com/in/${RESUME_DATA.linkedin}`} icon={<Linkedin size={22} />} label="LinkedIn" />
          <SocialLink href={`https://twitter.com/${RESUME_DATA.twitter}`} icon={<Twitter size={22} />} label="Twitter" />
          <SocialLink href={`https://discord.com/users/${RESUME_DATA.discord}`} icon={<img src="https://cdn.simpleicons.org/discord/white" className="w-[22px] h-[22px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" alt="Discord" />} label="Discord" />
        </div>

        {/* Minimal Credit */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-[0.4em]">
            Built with precision by <span className="text-white/80 font-bold tracking-normal">{RESUME_DATA.name}</span>
            <Heart size={14} className="text-pink-vibrant fill-pink-vibrant/20 animate-pulse ml-1" />
          </div>
          <div className="text-[9px] font-mono text-white/10 uppercase tracking-widest">
            &copy; {currentYear} // Digital Portfolio v1.0.4
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/20 hover:text-cyan-vibrant transition-all duration-300 transform hover:scale-125"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
