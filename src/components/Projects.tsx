
import { ExternalLink, Github, Smartphone, Trophy, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "iOS Calculator App",
      description: "Advanced calculator application built with Swift featuring scientific functions, memory management, and responsive UI design following iOS best practices and MVC architecture.",
      tech: ["Swift", "iOS", "Xcode", "MVC Architecture"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "https://github.com",
      icon: Smartphone
    },
    {
      title: "iOS To-Do List App",
      description: "Task management application with priority settings, data persistence, and intuitive user interface. Implements Core Data for local storage and custom UI components.",
      tech: ["Swift", "Core Data", "iOS", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      github: "https://github.com",
      icon: Smartphone
    },
    {
      title: "Competitive Programming Solutions",
      description: "Collection of 100+ algorithm implementations and solutions across platforms like HackerRank, CodeChef, and GeeksforGeeks. Focus on data structures, dynamic programming, and graph algorithms.",
      tech: ["C++", "Python", "Algorithms", "Data Structures"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      github: "https://github.com",
      icon: Trophy
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Additional Experience</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Hackathon Participation</h4>
                <p className="text-gray-400 text-sm">Active participant in coding competitions and hackathons, collaborating with teams to build innovative solutions under time constraints.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Open Source Contributions</h4>
                <p className="text-gray-400 text-sm">Contributing to open source projects and maintaining personal repositories with clean, documented code for community benefit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
