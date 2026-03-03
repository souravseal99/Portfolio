import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 opacity-10 pointer-events-none" />
      
      <div className="text-center max-w-3xl relative z-10">
        {/* Name with gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-4 tracking-tight">
          Sourav Seal
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
          Full-Stack Developer
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Building scalable web applications with modern technologies
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <a href="#projects">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
