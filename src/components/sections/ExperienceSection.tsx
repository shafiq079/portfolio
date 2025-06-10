
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
const experiences = [
  {
    title: "Full Stack Developer (Final Year Project)",
    company: "University of Gujrat",
    location: "Gujrat, Pakistan",
    duration: "2024 - 2025",
    type: "Academic",
    description:
      "Designed and developed a full-featured e-commerce web application as part of the final year project. Focused on clean architecture, secure authentication, admin dashboard, and user-friendly UI.",
    achievements: [
      "Built product listing, cart, checkout, and user auth system",
      "Developed an admin dashboard for product and order management",
      "Used REST APIs for dynamic data flow and MongoDB for data storage",
      "Integrated styled components using Tailwind CSS"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer for International Clients",
    company: "Freelance Projects",
    location: "Remote (USA-based Clients)",
    duration: "2023",
    type: "Freelance",
    description:
      "Worked with two US-based Pakistani clients to build responsive home service websites. Delivered clean, maintainable frontend code and deployed live websites with optimized performance.",
    achievements: [
      "Developed Bhatti Construction's official website using HTML, CSS, and JS",
      "Built Hi-Lite General Contracting Corporation's website using GoDaddy website builder",
      "Implemented modern UI with cross-device responsiveness",
      "Provided ongoing support and maintenance post-deployment"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "GoDaddy Website Builder"]
  },
  {
    title: "AI Chatbot Developer",
    company: "Self-Initiated Project",
    location: "Remote",
    duration: "2024",
    type: "Independent",
    description:
      "Created an AI-powered chatbot web application using Gemini API, inspired by ChatGPT. Designed the interface, integrated real-time messaging, and implemented token-based access.",
    achievements: [
      "Built clean chat UI with React and Tailwind CSS",
      "Integrated Gemini API for AI-powered responses",
      "Handled user input, prompt engineering, and output formatting",
      "Optimized UI for mobile and desktop users"
    ],
    technologies: ["React", "Gemini API", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "TaskFlow – Task Management Dashboard",
    company: "Self-Initiated Project",
    location: "Remote",
    duration: "2024",
    type: "Independent",
    description:
      "Designed and developed a task management dashboard with Pomodoro timer and analytics features. The project focused on user productivity, clean UX, and performance visualization.",
    achievements: [
      "Implemented task creation and category management system",
      "Integrated Pomodoro technique with timer logic and sessions",
      "Used Chart.js to visualize completed tasks and productivity stats",
      "Designed a responsive, intuitive dashboard layout"
    ],
    technologies: ["React", "Chart.js", "Tailwind CSS", "JavaScript"]
  }
];


  const education = [
    {
      degree: "Bachelor of Science in Software Engineering ",
      school: "University of Gujrat",
      location: "Gujrat, Pakistan",
      duration: "2021 - 2025",
      achievements: ["FYP Completion Certificate", "Dean's List", "MERN Stack Certification"]
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
