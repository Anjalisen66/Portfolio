import React from 'react';

const Skills = () => {
  const skillCategories = [
   {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "JavaScript" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js"},
        { name: "MySQL" },
        { name: "MongoDB" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git" },
        { name: "Postman" },
        { name: "Vercel" },
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
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
       <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8 ">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Participated in RECKON 5.0",
                link: "https://drive.google.com/file/d/1q9zUMLVeJHMhzZYK_MBK_EEVTP4yU-Q6/view?usp=sharing",
              },
              {
                title: "Certificate of Internship – Aarvy Technologies",
                link: "https://drive.google.com/file/d/1xBIXZw67yHuetrXdTIy2BpQwQ3ed3ddu/view?usp=sharing", 
              },
              {
                title: "Certificate of Internship – Celebal Technologies",
                link: "https://drive.google.com/file/d/13xuRkfCv3m3q8Bgd3Caa0AvUxFQFi750/view?usp=sharing", 
              },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-portfolio-blue/5 rounded-lg border border-portfolio-blue/20 hover:bg-portfolio-blue/10 transition-colors"
              >
                <span className="text-white font-medium">{cert.title}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;