import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Skypher",
    description: "Skypher is a dynamic platform built to empower startups by streamlining the discovery, submission, and showcasing of innovative ventures.",
    tech: ["React.js", "Tailwind CSS", "Supabase"],
    features: [
      "Advanced Talent Attraction Tools",
      "Enhanced Startup Profile Creation",
      "AI - Powered Analytics",
      "Customer Growth and Marketing Tools",
      "Team Collaboration Tools",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://matchwize.vercel.app",
  },
  {
    title: "Thrive Daily",
    description: "ThriveDaily helps users build daily habits, track growth, and stay motivated through journals and goal trackers.",
    tech: ["TypeScript", "React.js", "Supabase", "Tailwind CSS", "ChatGPT API"],
    features: [
      "Track daily calorie intake",
      "Log workout sessions and productivity",
      "Personalized goal setting",
      "View weekly charts & streaks",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://github.com/CodewVivek/thriveadaily",
  },
  {
    title: "Pothole Alert App",
    description: "A Flutter-based app to crowdsource pothole reports and alert drivers using Google Maps.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    features: [
      "Google Maps integration with hazard alerts",
      "Crowdsourced road condition data",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://github.com/CodewVivek/thriveadaily",
  },
  {
    title: "Facial Emotion Recognition",
    description: "A deep learning app that recognizes human emotions using facial expressions.",
    tech: ["Python", "Machine Learning", "OpenCV", "Keras"],
    features: [
      "Real-time facial detection",
      "Emotion classification with CNN",
    ],
    images: ["/images/p1.png", "/images/p2.png", "/images/p3.png", "/images/p4.png"],
    live: "https://github.com/CodewVivek/thriveadaily",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-4 bg-[#0f0f0f] p-4 rounded-xl shadow-lg border border-gray-700 mr-26"
          >
            {/* Scrollable images */}
            <div className="md:w-1/2 max-h-[360px] overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scrollbar-hide">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-lg w-full object-cover"
                />
              ))}
            </div>

            {/* Text content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-white text-sm px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="text-white font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-black font-medium rounded bg-white px-4 py-2 hover:bg-black hover:text-white transition"
                >
                  <ExternalLink size={16} /> View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
