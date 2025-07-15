import React from 'react';
import { Code, Palette, Zap, Handshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices and design patterns."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful, user-centered interfaces that provide exceptional user experiences."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Enjoy working in team environments, sharing ideas, and contributing to collective goals with clarity and respect."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
               Hi there! I'm Anjali, a passionate full-stack developer eager to build impactful and user-friendly web applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
               I specialize in working with React, Node.js, and other modern web technologies, and I'm excited to start my journey in a dynamic and growth-oriented team.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                What I bring to the table:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                   Solid foundation in full-stack web development with JavaScript, React, Node.js, and MongoDB

                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  Strong understanding of user experience and clean, responsive design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  Enthusiastic team player with good communication skills and a positive attitude
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                 Quick learner with a constant drive to grow and contribute to real-world projects
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-portfolio-blue group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;