
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hello! I'm Shafiq, a passionate full-stack web developer with over 2 years of experience
                  creating digital experiences that make a difference. I specialize in building
                  modern web applications that are not only functional but also beautiful and intuitive.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My journey in tech started with a curiosity about how things work, which led me
                  to dive deep into programming. I love solving complex problems and turning ideas
                  into reality through code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or enjoying a good book with a cup of coffee.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
