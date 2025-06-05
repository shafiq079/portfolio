import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Software Engineer", "Full Stack Web Developer", "Shopify Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentRole, isDeleting, roles]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/placeholder.svg";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-pulse">
            <img
              src="src\assets\images\portfolio_image.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Shafiq
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ur Rehman
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-cyan-400 font-semibold min-w-[280px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about creating beautiful, functional, and user-friendly applications
            that solve real-world problems with clean, efficient code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button
            onClick={downloadResume}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none transform hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
