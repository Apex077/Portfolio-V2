"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, BotMessageSquare, Linkedin } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures client-side rendering matches server output
  }, []);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center p-6 bg-black"
    >
      <div className="flex items-center space-x-2">
        <BotMessageSquare className="text-green-400 w-8 h-8 animate-pulse" /> {/* Glowing Sci-Fi Icon */}
        <h1 className="text-2xl font-bold text-primary">
          &lt;Dharaneesh P/&gt;
        </h1>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/Apex077" target="_blank">
          <Github className="text-white hover:text-primary transition" />
        </a>
        <a href="https://www.linkedin.com/in/dharaneesh-panneer-selvam" target="_blank">
          <Linkedin className="text-white hover:text-primary transition" />
        </a>
      </div>
    </motion.nav>
  );
}
