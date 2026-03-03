import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "CloudKaptan",
    role: "Full-Stack Developer",
    duration: "June 2022 -- Present",
    location: "Kolkata, India",
    achievements: [
      "Built and maintained full-stack web applications using React, Node.js, and MongoDB/PostgreSQL",
      "Developed RESTful APIs and integrated third-party services for client projects",
      "Collaborated with cross-functional teams to deliver feature-rich applications on time",
      "Implemented authentication systems (JWT) and optimized database queries for performance",
      "Contributed to open-source projects and participated in code reviews",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-[#e8e0d8] dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal-style section header */}
        <div className="font-mono text-sm text-center mb-2">
          <span className="text-[#9a7999]">&lt;</span>
          Experience
          <span className="text-[#9a7999]">/&gt;</span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        {/* Gradient accent - Colorhunt palette */}
        <div className="h-1 w-20 bg-gradient-to-r from-[#9a7999] to-[#adc2a9] rounded-full mx-auto mb-8" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    {exp.company}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-[#d3e4cd] text-gray-800">
                    {exp.duration}
                  </Badge>
                </div>
                <p className="text-lg text-[#9a7999] dark:text-[#d3e4cd] font-medium">
                  {exp.role}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {exp.location}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-[#adc2a9] mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            3+ Years of Experience
          </p>
        </div>

        {/* Witty line */}
        <div className="mt-4 text-center font-mono text-sm">
          <p className="text-[#9a7999] dark:text-[#d3e4cd]">
            <span className="text-gray-500">printf</span>(&quot;Learning since %s&quot;, &quot;2019&quot;);
          </p>
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
