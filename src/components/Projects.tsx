"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics?: string[];
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Apex077/repos")
      .then((res) => res.json())
      .then((data: Repo[]) => setRepos(data.slice(0, 6))); // Show top 6 projects
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10"
    >
      <h2 className="text-3xl font-bold text-primary mb-6 glow-text">
        🚀 Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-4 bg-secondary text-secondary-foreground border border-gray-700 rounded-lg shadow-lg hover:border-green-400 transition-all duration-300 overflow-hidden"
          >
            {/* Project Name (Fixed Overflow) */}
            <h3 className="text-xl font-semibold text-primary truncate">
              {repo.name}
            </h3>

            {/* Project Description (Fixed Wrapping) */}
            <p className="text-gray-400 mt-2 break-words whitespace-normal">
              {repo.description || "No description provided."}
            </p>

            {/* Display Category Tags */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap mt-3">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-gray-800 text-green-400 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
