'use client'
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Terminal from "@/components/Terminal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-cyan-500/30 overflow-x-hidden pb-16 lg:pb-0">
      <Header />

      {/* Figma Aesthetic Gradient Backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-pink-900/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 pt-24 pb-20 px-4 max-w-7xl mx-auto space-y-40">
        {/* Terminal Section */}
        <section id="main" className="flex flex-col items-center gap-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-vibrant mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Process.env.NODE_ENV = 'production'
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Sourav </span>
              <span className="neon-text-cyan">Seal</span>
            </h1>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a
                href="/Sourav_s_resume.pdf"
                download="Sourav_Seal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow effect layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-vibrant via-purple-vibrant to-pink-vibrant rounded-full opacity-30 group-hover:opacity-60 blur transition-all duration-300 group-hover:blur-lg" />

                {/* Button content */}
                <div className="relative flex items-center gap-2 px-8 py-6 rounded-full border-2 border-white/20 bg-background/80 backdrop-blur-sm text-foreground font-medium text-lg transition-all duration-300 group-hover:border-cyan-vibrant/50 group-hover:bg-background/90">
                  <span>Download Resume</span>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Download className="h-5 w-5 text-cyan-vibrant" />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>


            <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto leading-relaxed">
              Fullstack Engineer building high-fidelity web systems at <span className="text-pink-vibrant">CloudKaptan</span>.
              Currently shipping production ready React & Node.js systems.
            </p>
          </div>

          <div className="w-full max-w-5xl group transition-all duration-500 hover:scale-[1.01]">
            <Terminal />
          </div>
        </section>

        {/* Existing Sections */}
        <div className="space-y-10">
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
