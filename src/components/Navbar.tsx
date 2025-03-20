"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, BotMessageSquare, Linkedin, FileText, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    setMounted(true); // Ensures client-side rendering matches server output
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full fixed top-0 left-0 z-50 bg-black shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        
        {/* Logo + Sci-Fi Icon */}
        <div className="flex items-center space-x-3">
          <BotMessageSquare className="text-green-400 w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-bold text-primary">
            &lt;Dharaneesh P/&gt;
          </h1>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["About", "Skills", "Projects", "Contact"].map((section) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-white hover:text-green-400 transition-all duration-300"
            >
              {section}
            </Link>
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
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-lg hover:text-green-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {section}
            </Link>
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
            className="mt-4 flex items-center space-x-2 px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
