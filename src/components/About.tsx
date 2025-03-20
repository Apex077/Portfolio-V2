"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id = "about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-16 py-16 bg-black text-white"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8 glow-text">
        About Me
      </h2>

      {/* Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-16">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg md:max-w-2xl mt-10 md:mt-0 text-center md:text-left"
        >
          <p className="text-md sm:text-lg md:text-xl text-gray-400 leading-relaxed bg-opacity-10 backdrop-blur-lg p-6 rounded-lg border border-green-400 shadow-lg shadow-green-500/50">
            {`Hey there! I'm Dharaneesh Panneer Selvam, a full-stack developer 🛠️  
            passionate about building cutting-edge web applications, AI, and scalable systems.  
            I love blending creativity with logic to craft seamless user experiences.  
            Always eager to learn, innovate, and solve complex problems! 🚀`}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
