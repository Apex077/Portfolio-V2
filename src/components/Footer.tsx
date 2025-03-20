"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      id = "contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 bg-black text-center border-t border-gray-700 mt-10"
    >
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Apex077" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:text-green-400 transition" />
        </a>
        <a href="https://linkedin.com/in/dharaneesh-panneer-selvam" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-white hover:text-green-400 transition" />
        </a>
        <a href="mailto:dharaneesh.panneerselvam7@gmail.com">
          <Mail className="w-6 h-6 text-white hover:text-green-400 transition" />
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Dharaneesh Panneer Selvam. All rights reserved.
      </p>
    </motion.footer>
  );
}
