
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-600' },
    { name: 'Python', level: 75, color: 'from-green-500 to-yellow-500' },
    { name: 'AWS', level: 70, color: 'from-orange-400 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
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

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            These percentages represent my comfort level and experience with each technology. 
            I'm always learning and pushing these numbers higher! 📈
          </p>
        </div>
      </div>
    </section>
  );
};
