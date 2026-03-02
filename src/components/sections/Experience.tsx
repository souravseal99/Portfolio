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
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Experience
        </h2>

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
                  <Badge variant="secondary" className="w-fit">
                    {exp.duration}
                  </Badge>
                </div>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
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
                      <span className="text-blue-500 mr-2">•</span>
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

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
