"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, BotMessageSquare, Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset for fixed navbar
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full fixed top-0 left-0 z-50 bg-black shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        
        {/* Logo + Sci-Fi Icon (Clickable to Scroll to Top) */}
        <div
          onClick={() => handleScroll("top")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <BotMessageSquare className="text-green-400 w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-bold text-primary">
            &lt;Dharaneesh P/&gt;
          </h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section.toLowerCase())}
              className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Links + Resume Button */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://github.com/Apex077" target="_blank">
            <Github className="w-6 h-6 text-white hover:text-primary transition" />
          </a>
          <a href="https://www.linkedin.com/in/dharaneesh-panneer-selvam" target="_blank">
            <Linkedin className="w-6 h-6 text-white hover:text-primary transition" />
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Dharaneesh_Resume.pdf"
            className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button (Styled Like Resume Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white absolute w-full left-0 top-[60px] shadow-lg flex flex-col items-center py-4 space-y-4"
        >
          {["About", "Skills", "Projects", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section.toLowerCase())}
              className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              {section}
            </button>
          ))}

          {/* Mobile Social Links */}
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/Apex077" target="_blank">
              <Github className="w-6 h-6 text-white hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/dharaneesh-panneer-selvam" target="_blank">
              <Linkedin className="w-6 h-6 text-white hover:text-primary transition" />
            </a>
          </div>

          {/* Resume Button in Mobile */}
          <a
            href="/resume.pdf"
            download="Dharaneesh_Resume.pdf"
            className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
