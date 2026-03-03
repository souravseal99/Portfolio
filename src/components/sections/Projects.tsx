import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RoomMate",
    description:
      "Full-stack web application for managing shared living spaces - expenses, chores, inventory",
    techStack: ["React + Vite + TypeScript", "Express", "Prisma", "PostgreSQL"],
    github: "https://github.com/souravseal99/RoomMate",
    featured: true,
  },
  {
    title: "FunwithPhysics",
    description: "Educational physics application",
    techStack: ["JavaScript", "React"],
    github: "https://github.com/souravseal99/FunwithPhysics",
    featured: false,
  },
  {
    title: "E-Com",
    description: "E-commerce platform",
    techStack: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/souravseal99/E-Com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#fef5ed] dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Terminal-style section header */}
        <div className="font-mono text-sm text-center mb-2">
          <span className="text-[#9a7999]">&lt;</span>
          Projects
          <span className="text-[#9a7999]">/&gt;</span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Projects
        </h2>
        {/* Gradient accent - Colorhunt palette */}
        <div className="h-1 w-20 bg-gradient-to-r from-[#9a7999] to-[#adc2a9] rounded-full mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="mt-2 bg-[#d3e4cd] text-gray-800 hover:bg-[#adc2a9]">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-[#adc2a9] text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Witty line */}
        <div className="mt-8 text-center font-mono text-sm">
          <p className="text-[#9a7999] dark:text-[#d3e4cd]">
            <span className="text-gray-500">git checkout</span> projects <span className="text-gray-500">// Browse my work</span>
          </p>
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
