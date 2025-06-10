
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import chatbotImage from "../../assets/images/chatbot.png";
import mashaIndustriesImage from "../../assets/images/masha-industries.png";
import taskmanagementImage from "../../assets/images/task-management.png";
import bhatticonstrcutionImage from "../../assets/images/bhatti-construction.png";
import hilite from "../../assets/images/hi-liteConstruction.png";
import platezilla from "../../assets/images/platezilla.png";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce store with admin dashboard built with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: mashaIndustriesImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express.js"],
      category: "fullstack",
      liveUrl: "https://masha-industries.vercel.app/",
      githubUrl: "https://github.com/shafiq079/mashaIndustries",
    },
    {
      id: 2,
      title: "ChatAI Application",
      description: "A real-time chat application with AI-powered responses, built using MERN Technology. Features include user authentication, message history, and AI chatbots.",
      image: chatbotImage,
      technologies: ["Node.js", "React", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API"],
      category: "fullstack",
      liveUrl: "https://chat-ai-lilac.vercel.app/",
      githubUrl: "https://github.com/shafiq079/ChatAI",
    },
    {
      id: 3,
      title: "Task Flow",
      description: "A responsive Task Management Application built with React, Node.js, and MongoDB. Features include user authentication, task creation, and real-time updates.",
      image: taskmanagementImage,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Vite", "Vercel"],
      category: "fullstack",
      liveUrl: "https://task-management-app-five-eta.vercel.app/",
      githubUrl: "https://github.com/shafiq079/TaskManagementApp",
    },
    {
      id: 4,
      title: "Bhatti Construction",
      description: "A home construction company website showcasing services, projects, and client testimonials. Built with HTML, CSS and Javascript for backend services",
      image: bhatticonstrcutionImage,
      technologies: ["Javascript", "Tailwind CSS", "HTML", "CSS", "Google Maps API"],
      category: "frontend",
      liveUrl: "https://bhatticonstruction.com/",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Platezilla Automotive Service",
      description: "A shopify e-commerce store for automotive parts and services. Features include product listings, shopping cart, and secure checkout. Built with Shopify CLI, Liquid, and custom theme development.",
      image: platezilla,
      technologies: ["Shopify CLI", "Liquid", "Custom Theme", "Shopify Admin API & Storefront API","Metafields "],
      category: "fullstack",
      liveUrl: "https://www.platezilla.com/",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Hi-Lite Improvements",
      description: "A home improvement company website showcasing services, projects, and client testimonials. Built with GoDaddy with custom code HTML, CSS and Javascript for backend services",
      image: hilite,
      technologies: ["GoDaddy", "DNS Configuration","HTML", "CSS", "API"],
      category: "frontend",
      liveUrl: "https://hi-liteimprovements.com/",
      githubUrl: "#",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
    { key: "mobile", label: "Mobile" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and personal projects that showcase my skills and experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/50 text-gray-400 hover:text-cyan-400 border border-white/10"
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white hover:bg-white text-slate-900"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
