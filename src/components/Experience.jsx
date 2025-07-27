import React from "react";
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const Experience = () => {
    return (
        <section className="bg-white text-black py-16 px-4 sm:px-6 md:px-10 dark:bg-black dark:text-white transition-colors duration-300" id="experience">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="max-w-4xl mx-auto"
            >
                <motion.h2 className="text-2xl sm:text-3xl font-bold mb-2" variants={fadeIn}>
                    Experience
                </motion.h2>

                <motion.div className="space-y-10 sm:space-y-12 mt-6 sm:mt-8" variants={fadeIn} custom={0.4}>
                    {/* CCBOND Experience */}
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold">Freelance Full Stack Developer</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">CCBOND E-COMMERCE PVT LTD</p>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-md mt-2 sm:mt-0">September 2024 – April 2025</p>
                        </div>

                        <ul className="list-disc list-inside mt-4 text-gray-300 text-sm sm:text-md space-y-2">
                            <li>Led end-to-end frontend development using React.js and Tailwind CSS to create a responsive UI,supporting digital product management for early chemical suppliers..
                            </li>
                            <li> Collaborated closely with the co-founder to define product requirements and ship 8+ core features.
                            </li>
                            <li>
                                Integrated REST APIs for secure user login, file uploads, and role-based access control, enhancing platform security and usability.
                            </li>
                            <li>
                                Contributed to backend modules for managing enquiries and inventory, enabling seamless handling of product records.
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">React</span>
                            <span className="text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">Tailwind CSS</span>
                            <span className="text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">MySQL</span>
                            <span className="text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">Twilio</span>
                            <span className="text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">JWT</span>
                        </div>

                        <div className="flex mt-6 text-white">
                            <a href="https://ccbonds.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-xs sm:text-sm">
                                <ExternalLink size={18} /> Live Site
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experience;
