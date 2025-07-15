import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-portfolio-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-white mb-4">
              Anjali <span className="text-portfolio-blue">Sen</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-inter font-light mb-6">
              Full Stack Developer 
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional web experiences that bring ideas to life. 
              Passionate about clean code, elegant design, and solving complex problems.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-in">
            <a
              href="https://github.com/anjalisen66"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-portfolio-blue"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-sen-12026022a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-portfolio-blue"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:anjalisen8203@gmail.com"
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-portfolio-blue"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-portfolio-blue text-white rounded-lg font-medium hover:bg-portfolio-blue/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="mailto:john@example.com"
              className="px-8 py-3 border-2 border-portfolio-blue text-portfolio-blue rounded-lg font-medium hover:bg-portfolio-blue hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-300 hover:text-portfolio-blue transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;