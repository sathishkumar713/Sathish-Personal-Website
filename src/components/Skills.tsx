
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'C/C++', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'Swift', level: 80, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-orange-500' },
    { name: 'Web Technologies', level: 70, color: 'from-purple-400 to-pink-500' },
    { name: 'iOS Development', level: 85, color: 'from-gray-400 to-gray-600' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium text-white">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
                  style={{ 
                    width: hoveredSkill === skill.name || hoveredSkill === null ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Development Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Visual Studio Code', 'Git/GitHub', 'Xcode', 'Linux Terminal'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Platforms & OS</h3>
            <div className="flex flex-wrap gap-2">
              {['Windows 10/11', 'Linux (Ubuntu)', 'macOS', 'iOS'].map((platform) => (
                <span key={platform} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously learning and expanding my skill set through competitive programming, 
            hackathons, and hands-on projects. Always excited to take on new challenges! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
