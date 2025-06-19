import React from "react";
import {
    FaNode, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGithub,
    FaBootstrap, FaJs, FaReact, FaGitAlt
} from "react-icons/fa";
import {
    SiMongodb, SiSupabase, SiNetlify, SiMysql
} from "react-icons/si";
import {
    RiVercelLine, RiTailwindCssFill, RiNextjsFill
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    }),
};

const SkillGroup = ({ title, skills, index }) => (
    <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={index}
    >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-6">
            {skills.map(({ name, icon }, idx) => (
                <div key={idx} className="flex flex-col items-center text-sm">
                    <div className="text-3xl">{icon}</div>
                    <p className="mt-2 text-center text-white">{name}</p>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const frontEndSkills = [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    ];

    const backEndSkills = [
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    ];

    const dbSkills = [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-white" /> },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
        { name: "Vercel", icon: <IoLogoVercel className="text-white" /> },
    ];

    return (
        <section className="bg-black text-white py-20 px-5" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    My Skills
                </motion.h2>
                <motion.p
                    className="text-gray-400 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={0.5}
                >
                    Technologies and tools I've worked with throughout my projects and experience
                </motion.p>

                <SkillGroup title="Front End" skills={frontEndSkills} index={0.2} />
                <SkillGroup title="Back End" skills={backEndSkills} index={0.4} />
                <SkillGroup title="Databases" skills={dbSkills} index={0.6} />
                <SkillGroup title="Tools & Platforms" skills={tools} index={0.8} />
            </div>
        </section>
    );
};

export default Skills;
