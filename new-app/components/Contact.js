import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "anjalisen8203@gmail.com",
      link: "mailto:anjalisen8203@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "8000358112",
      link: "tel:+8000358112"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Jodhpur,Rajasthan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/anjalisen66"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anjali-sen-12026022a/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-black rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-200"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-200"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-200"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-200 resize-none"
                  // placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-portfolio-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-portfolio-blue/90 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 transform"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-black rounded-lg hover:shadow-md transition-shadow duration-200 group"
                  >
                    <div className="text-portfolio-blue group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-300 hover:text-portfolio-blue group"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h4 className="font-semibold text-white mb-3">
                Let's Work Together
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll do my best 
                to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;