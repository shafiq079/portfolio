
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed and built microservices architecture"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions on tight deadlines.",
      achievements: [
        "Built 3 major applications from scratch",
        "Reduced bug reports by 50% through comprehensive testing",
        "Improved user engagement by 35% with UX improvements",
        "Integrated third-party APIs and payment systems"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "Stripe"]
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Austin, TX",
      duration: "2019 - 2020",
      type: "Full-time",
      description: "Specialized in creating responsive, user-friendly web interfaces. Worked closely with designers to implement pixel-perfect designs and ensure optimal user experience.",
      achievements: [
        "Delivered 20+ responsive websites",
        "Improved page load speeds by 50% on average",
        "Implemented modern CSS techniques and animations",
        "Collaborated with design team on 15+ projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "Bootstrap"]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Inc.",
      location: "Remote",
      duration: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey building websites and learning industry best practices. Contributed to various projects while continuously expanding my technical skills.",
      achievements: [
        "Completed 10+ client projects successfully",
        "Learned modern JavaScript frameworks",
        "Contributed to open-source projects",
        "Received 'Rising Star' award for exceptional growth"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "California, USA",
      duration: "2014 - 2018",
      achievements: ["Magna Cum Laude", "Dean's List", "Programming Club President"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career in technology.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                          <Badge variant="outline" className="ml-2 text-xs border-cyan-400/50 text-cyan-400">
                            {exp.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-cyan-400/50 text-cyan-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-white/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="text-cyan-400 font-semibold mb-1">{edu.school}</div>
                  <div className="text-gray-400 text-sm mb-3">{edu.location} • {edu.duration}</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="outline"
                        className="text-xs border-cyan-400/50 text-cyan-400"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
