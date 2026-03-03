import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal-style section header */}
        <div className="font-mono text-sm text-center mb-2">
          <span className="text-purple-500">&lt;</span>
          About
          <span className="text-purple-500">/&gt;</span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          About Me
        </h2>
        {/* Gradient accent */}
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Placeholder */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
              SS
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Full-Stack Developer at CloudKaptan with 3+ years of experience
              building and maintaining full-stack web applications using React,
              Node.js, and MongoDB/PostgreSQL. Collaborated with cross-functional
              teams to deliver feature-rich applications on time.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about writing clean, efficient code and continuously
              learning new technologies to build better user experiences.
            </p>
            
            {/* Witty programming lines */}
            <div className="mt-6 space-y-2 font-mono text-sm">
              <p className="text-purple-600 dark:text-purple-400">
                <span className="text-gray-500">//</span> When I&apos;m not coding, I&apos;m refactoring my dreams
              </p>
              <p className="text-pink-600 dark:text-pink-400">
                <span className="text-gray-500">while</span>(alive) {'{'} eat(); sleep(); code(); repeat(); {'}'}
              </p>
            </div>
          </div>
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
