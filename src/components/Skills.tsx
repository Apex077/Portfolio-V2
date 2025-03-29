"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  { category: "Languages", items: ["Python", "C/C++", "Java", "JavaScript", "Dart"] },
  { category: "Tools", items: ["Git", "Postman"] },
];

export default function Skills() {
  return (
    <motion.section
      id = "skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the section is in view
      className="p-10 mt-10"
    >
      <h2 className="text-3xl font-bold text-primary mb-6 glow-text">
        🛠️ Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            className="p-4 bg-secondary border border-gray-700 rounded-lg shadow-lg hover:border-green-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect for each category
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-green-400">{skill.category}</h3>
            <div className="flex flex-wrap mt-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-800 text-green-400 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 transition-all duration-300 hover:bg-green-500 hover:text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
