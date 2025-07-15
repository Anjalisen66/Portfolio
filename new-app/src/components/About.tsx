import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

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
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver results and exceed expectations."
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
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi there! I'm John, a full-stack developer with over 5 years of experience 
                creating web applications that users love. I specialize in React, Node.js, 
                and modern web technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying a good cup of coffee while sketching 
                out new ideas.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                What I bring to the table:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  5+ years of full-stack development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  Strong focus on user experience and accessibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  Collaborative team player with excellent communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></span>
                  Continuous learner, always staying up-to-date
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Feature cards */}
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