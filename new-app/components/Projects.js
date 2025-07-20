import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../Assets/Screenshot-2025-07-15-225207.png'
import img2 from '../Assets/Screenshot-2024-07-06-091512.png'
import img3 from '../Assets/Screenshot-2025-07-15-232813.png'
import img4 from '../Assets/Screenshot-2025-05-21-224755.png'

const Projects = () => {
  console.log(img1)
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Near Basket, a full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: img3.src,
      technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
      github: "https://github.com/Anjalisen66/NearBasket",
      demo: "https://near-basket.vercel.app"
    },
    {
      title: "Task Management App",
      description: "Let’s Plan – A task management app built with React. Features include adding, editing, completing, and deleting tasks to help users stay organized and productive.",
      image: img2.src,
      technologies: ["React", "JavaScript", "Font Awesome"],
      github: "https://github.com/Anjalisen66/To-Do-List",
      demo: "https://letsplan.vercel.app/"
    },
    {
      title: "Student-City Guide",
      description: "Aapno Sathi is a student-friendly city guide that helps newcomers explore, settle, and thrive in a new city with essential local insights and services.",
      image: img4.src,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing development projects with smooth animations and optimized performance.",
      image: img1.src,
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-portfolio-blue transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-portfolio-blue transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/anjalisen66"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-portfolio-blue text-portfolio-blue rounded-lg font-medium hover:bg-portfolio-blue hover:text-white transition-all duration-200"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;