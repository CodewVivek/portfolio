import React from 'react';
import { GitBranch } from 'lucide-react';
import { RiVercelLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiReactquery } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSupabase } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
const SkillGroup = ({ title, skills }) => (
    < div className = "mb-10" >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-6">
            {skills.map(({ name, icon: Icon }, idx) => (
                <div key={idx} className="flex flex-col items-center text-sm">
                    <div>
                        <Icon size={28} />
                    </div>
                    <p className="mt-2 text-center text-gray-300">{name}</p>
                </div>
            ))}
        </div>
    </div >
);

const MySkills = () => {
    const frontEndSkills = [
        { name: 'JavaScript', icon: IoLogoJavascript },
        { name: 'React.js', icon: SiReactquery },
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill },
    ];

    const backEndSkills = [
        { name: 'Node.js', icon: FaNode },
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
    ];

    const dbSkills = [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: GrMysql },
        { name: 'Supabase', icon: SiSupabase },
    ];

    const tools = [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: VscVscode },
        { name: 'Netlify', icon: SiNetlify },
        { name: 'Vercel', icon: RiVercelLine },
    ];

    return (
        <section className="bg-black text-white py-20 px-5 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">My Skills</h2>
                <p className="text-gray-400 mb-12">
                    Technologies and tools I've worked with throughout my projects and experience
                </p>

                <SkillGroup title="Front End" skills={frontEndSkills} />
                <SkillGroup title="Back End" skills={backEndSkills} />
                <SkillGroup title="Databases" skills={dbSkills} />
                <SkillGroup title="Tools & Platforms" skills={tools} />
            </div>
        </section>
    );
};

export default MySkills;
