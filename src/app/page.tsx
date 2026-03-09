import Header from "@/components/Header";
import Terminal from "@/components/Terminal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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
