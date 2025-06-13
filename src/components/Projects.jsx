import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Matchwize",
    description:
      "matchwize analyzes your resume against job descriptions to give you a match score and actionable suggestions to improve your chances.",
    tech: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "Gemini API"],
    features: [
      "Gemini API integration for resume analysis",
      "Supabase for data storage"
    ],
    image: "/matchwize.png", // store in /public
    live: "https://matchwize.vercel.app"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 bg-[#121212] p-6 rounded-xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="md:w-1/2 rounded-lg object-cover"
            />
            <div className="flex-1 flex flex-col justify-between">
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
                  <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-white border px-3 py-1 rounded hover:bg-white hover:text-black transition"
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
