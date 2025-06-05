
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Vue.js", level: 80 },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 80 },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Figma", level: 90 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 82 },
      ],
    },
  };

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Next.js", "Express.js", "Docker", "AWS", "Git",
    "GraphQL", "Vue.js", "Figma", "Linux", "CI/CD",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/50 text-gray-400 hover:text-cyan-400 border border-white/10"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-white/10 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-3 bg-slate-700"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
