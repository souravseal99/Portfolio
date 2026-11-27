"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      `Inquiry from ${formState.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 flex flex-col gap-8 shadow-2xl">
      {/* Reusable Section Header */}
      <SectionHeader
        title="connect.sh"
        subtitle="Direct Channels"
        badge="status: open"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Direct Developer Channels */}
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Direct Reach &amp; Collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Available for full-time engineering roles, high-throughput backend architecture, or open-source initiatives.
            </p>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-cyan-400/50 text-slate-200 font-mono text-xs transition"
              >
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-cyan-400" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-slate-400" />}
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-500" />
                  {SITE_CONFIG.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-slate-500" />
                  {SITE_CONFIG.timezone}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links from Config */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.08] text-xs font-mono">
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href={SITE_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              <Twitter size={13} />
              <span>Twitter/X</span>
            </a>
          </div>
        </div>

        {/* Right Column: Execution Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-slate-400">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="e.g. Alex Rivera"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-slate-400">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="alex@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-slate-400">
              Project / Opportunity Note
            </label>
            <textarea
              id="contact-message"
              required
              rows={3}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Role details, scope, or collaboration inquiry..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(6,182,212,0.2)] mt-1"
          >
            <span>{sent ? "Opening Mail Client... ✓" : "Execute: send_message.sh"}</span>
            <ArrowUpRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
