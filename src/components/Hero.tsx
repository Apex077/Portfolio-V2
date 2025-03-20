"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 md:px-16 space-y-8 md:space-y-0"
    >
      {/* Text Content - Responsive */}
      <div className="max-w-lg md:max-w-2xl mt-6 md:mt-0 md:ml-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary">
          <Typewriter
            words={["Hello, I'm Apex077!"]}
            loop={1} // Typing only once
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
          />
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300">
          aka Dharaneesh Panneer Selvam
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#projects"
          className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black text-lg md:text-xl font-bold rounded-lg shadow-lg hover:shadow-green-500 transition-all duration-300"
        >
          🚀 View Projects
        </motion.a>
      </div>

      {/* Profile Image with Flip Effect & Glow */}
      <motion.div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-green-400 shadow-[0_0_20px_4px_rgba(34,197,94,0.7)] flex items-center justify-center cursor-pointer transition-all duration-300"
        onClick={() => setFlipped(!flipped)}
        whileTap={{ rotateY: 180 }} // Flip animation
      >
        <Image
          src={flipped ? "/Images/face.jpg" : "/Images/Apex007_Logo.jpeg"} // Default logo, flips to face
          alt="Profile Image"
          width={320}
          height={320}
          className="rounded-full object-cover w-full h-full"
        />
      </motion.div>
    </motion.section>
  );
}
