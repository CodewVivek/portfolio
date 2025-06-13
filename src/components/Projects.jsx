import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Matchwize",
    description:
      "Matchwize analyzes your resume against job descriptions to give you a match score and actionable suggestions to improve your chances.",
    tech: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "Gemini API"],
    features: [
      "Gemini API integration for resume analysis",
      "Supabase for data storage",
      "Gemini API integration for resume analysis",
      "Supabase for data storage",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://matchwize.vercel.app",
  },
  {
    title: "Thrive Daily",
    description:
      "Thrive Daily Thrive Dailyescriptions to give you a match score and actionable suggestions to improve your chances.",
    tech: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "Gemini API"],
    features: [
      "Gemini API integration for resume analysis",
      "Supabase for data storage",
      "Gemini API integration for resume analysis",
      "Supabase for data storage",
      "Supabase for data storage",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://matchwize.vercel.app",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
      <div className="space-y-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 bg-[#8e8989] p-2 rounded-xl shadow-lg"
          >
            {/* Scrollable vertical image preview */}
            <div className="h-100 md:w-1/2 overflow-y-auto flex flex-col rounded-lg scrollbar-thin ">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className=" object-cover w-full"
                />
              ))}
            </div>

            {/* Project details */}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="text-white font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside text-white text-sm mt-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={"https://vvkportfolio.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-black rounded bg-white  px-3 py-1  hover:bg-black hover:text-white transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
