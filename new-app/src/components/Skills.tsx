import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-portfolio-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AWS Certified Developer",
              "Google Analytics Certified", 
              "React Specialist",
              "Agile Practitioner"
            ].map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-portfolio-blue/5 rounded-lg border border-portfolio-blue/20 hover:bg-portfolio-blue/10 transition-colors"
              >
                <span className="text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;