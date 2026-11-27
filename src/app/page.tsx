'use client';

import Terminal from "@/components/Terminal";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-300 selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden pb-20 lg:pb-0">
      {/* Subtle Ambient Radial Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-15%] left-[20%] w-[50%] h-[50%] bg-cyan-900/10 blur-[180px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[180px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col gap-24 md:gap-32">
        {/* Section 1: Hero & Terminal (~/terminal) */}
        <section id="main">
          <Terminal />
        </section>

        {/* Section 2: Career & Leadership (career.log — Promoted for immediate enterprise credibility) */}
        <section id="experience">
          <Experience />
        </section>

        {/* Section 3: Flagship & Projects (projects.ide — RoomMate Spotlight + Uniform Grid) */}
        <section id="projects">
          <Projects />
        </section>

        {/* Section 4: Skills Matrix (tech_arsenal.json — Core Daily Drivers & Tooling) */}
        <section id="arsenal">
          <Skills />
        </section>

        {/* Section 5: Direct Channels & Connect (connect.sh) */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
