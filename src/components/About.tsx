
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
              I'm a passionate Computer Science Engineering student at Lovely Professional University 
              with a strong foundation in programming languages including C, C++, Python, and Swift. 
              My journey in technology is driven by curiosity and the desire to create solutions that 
              make a real impact.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in mobile application development and competitive programming, 
              I've solved over 100+ coding challenges and actively participate in hackathons. 
              I'm seeking internship opportunities to apply my technical skills in collaborative, 
              innovative software development projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {['C/C++', 'Python', 'Swift', 'JavaScript', 'iOS Development', 'Web Technologies'].map((tech) => (
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
                title: "Problem Solving",
                description: "Strong analytical thinking with 100+ solved coding challenges across multiple platforms"
              },
              {
                icon: Lightbulb,
                title: "Mobile Development",
                description: "iOS app development using Swift with focus on clean architecture and user experience"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Active participation in hackathons, coding contests, and open source contributions"
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
