"use client";
import { motion } from "framer-motion";

const achievements = [
    {
        title: "TryHackMe Top 4%",
        description: "Ranked in the top 4% of TryHackMe users globally, showcasing cybersecurity proficiency.",
    },
    {
        title: "SSN Innovate-X (2025)",
        description: "Won 2nd Place at SSN's Innovate-X Hackathon, for developing a crop monitoring system using Flutter.",
    },
];

export default function Achievements() {
    return (
        <motion.section
            id="achievements"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="p-10 mt-10"
        >
            <h2 className="text-3xl font-bold text-primary mb-6 glow-text text-left">
                🏆 Achievements
            </h2>

            {/* TryHackMe Badge */}
            <div className="w-full flex justify-start mb-3">
                <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2531432"
                    style={{ border: "none" }}
                    className="w-full max-w-lg h-auto"
                ></iframe>
            </div>


            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.title}
                        className="p-4 bg-secondary border border-gray-700 rounded-lg shadow-lg hover:border-green-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-green-400">{achievement.title}</h3>
                        <p className="text-gray-400 mt-2">{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
