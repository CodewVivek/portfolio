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
        <section className="bg-white text-black py-20 px-5 dark:bg-black dark:text-white transition-colors duration-300" id="experience">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="max-w-4xl mx-auto"
            >
                <motion.h2 className="text-3xl font-bold mb-2" variants={fadeIn}>
                    Experience
                </motion.h2>

                <motion.div className="space-y-12 mt-8" variants={fadeIn} custom={0.4}>
                    {/* CCBOND Experience */}
                    <div>
                        <div className="flex justify-between items-start flex-col sm:flex-row">
                            <div>
                                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                                <p className="text-gray-400 text-sm mt-1">CCBOND E-COMMERCE PVT LTD</p>
                            </div>
                            <p className="text-gray-500 text-md mt-2 sm:mt-0">September 2024 – April 2025</p>
                        </div>

                        <ul className="list-disc list-inside mt-4 text-gray-300 text-md space-y-2">
                            <li>Led frontend development of CCBOND — a scalable B2B chemical procurement platform .</li>
                            <li>Implemented high-impact pages like Login, Products, Register, Sales, and Enquiry, integrating with MySQL</li>
                            <li>Optimized UI/UX for faster navigation, responsiveness, and clean design across all major devices.</li>
                            <li>Enabled seamless product discovery and order flows, supporting real-time inventory and sales operations.</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="text-white text-sm font-medium px-2 py-1 rounded">React</span>
                            <span className="text-white text-sm font-medium px-2 py-1 rounded">Tailwind CSS</span>
                            <span className="text-white text-sm font-medium px-2 py-1 rounded">MySQL</span>
                            <span className="text-white text-sm font-medium px-2 py-1 rounded">Node.js</span>
                            <span className="text-white text-sm font-medium px-2 py-1 rounded">JWT</span>
                        </div>

                        <div className="flex  mt-6 text-white">
                            <a href="https://ccbonds.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
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
