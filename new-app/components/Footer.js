import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Anjali Sen</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating beautiful,
              functional web experiences that make a difference.
            </p>
          </div>

          <div className="md:text-center mx-auto">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>


          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Mobile Apps</p>
              <p>Consulting</p>
              <p>Code Review</p>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">


          <div className="text-gray-300 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Anjali Sen. All rights reserved.</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-4 top-4 p-2 bg-portfolio-blue hover:bg-portfolio-blue/90 rounded-full transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;