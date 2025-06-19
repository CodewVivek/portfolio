import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        duration: "2020 - 2024",
        score: "CGPA: 7.7 / 10",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <GraduationCap className="text-blue-400" />
                Education
            </h2>

            <div className="space-y-8 mr-26">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-[#121212] border border-gray-700 rounded-xl p-6 shadow-md "
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">{edu.degree}</h3>
                        <div className="text-sm text-gray-500 mb-2">
                            {edu.duration} • {edu.score}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
