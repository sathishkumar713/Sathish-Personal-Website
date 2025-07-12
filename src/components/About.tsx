
import { Code, Lightbulb, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey began with curiosity 
              about how things work, and evolved into a love for building applications 
              that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and the power 
              of collaboration.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description: "Writing maintainable, scalable code that stands the test of time"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Bringing creative solutions to complex technical challenges"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working closely with teams to deliver exceptional results"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
