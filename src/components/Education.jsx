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
        <section id="education" className="py-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-400" />
                Education
            </h2>

            <div className="space-y-6 sm:space-y-8">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-[#121212] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md transition-transform duration-200 hover:scale-105"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">{edu.degree}</h3>
                        <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                            {edu.duration} • {edu.score}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
