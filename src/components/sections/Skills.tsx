import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "HTML/CSS", "TailwindCSS", "React Native"],
  Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "REST APIs"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Figma", "VS Code", "Linux"],
  Languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[#e8e0d8] dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal-style section header */}
        <div className="font-mono text-sm text-center mb-2">
          <span className="text-[#9a7999]">&lt;</span>
          Tech Arsenal
          <span className="text-[#9a7999]">/&gt;</span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Tech Arsenal
        </h2>
        {/* Gradient accent - Colorhunt palette */}
        <div className="h-1 w-20 bg-gradient-to-r from-[#9a7999] to-[#adc2a9] rounded-full mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-[#d3e4cd] text-gray-800 dark:bg-[#adc2a9] dark:text-gray-900"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Witty line */}
        <div className="mt-8 text-center font-mono text-sm">
          <p className="text-[#9a7999] dark:text-[#d3e4cd]">
            <span className="text-gray-500">//</span> Skills: loaded successfully
          </p>
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
