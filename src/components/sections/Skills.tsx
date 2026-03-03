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
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Skills
        </h2>
        {/* Gradient accent */}
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8" />

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
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
