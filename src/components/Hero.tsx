
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm a Creative Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-scale-in">
            JS
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          John Smith
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center animate-fade-in delay-500">
          {displayText}
          <span className="ml-1 animate-pulse">|</span>
        </div>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in delay-1000">
          Crafting digital experiences that blend creativity with functionality. 
          I solve complex problems through elegant code and innovative design.
        </p>

        <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-1500">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:john@example.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <button 
          onClick={scrollToNext}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};
