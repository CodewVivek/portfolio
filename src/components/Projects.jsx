import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Launch It",
    description: "Launch It is a dynamic platform built to empower startups by streamlining the discovery, submission, and showcasing of innovative ventures.",
    tech: ["React.js", "Tailwind CSS", "Supabase", "Express js"],
    features: [
      "Advanced Talent Attraction Tools",
      "Enhanced Startup Profile Creation",
      "AI-Powered Analytics",
      "Customer Growth and Marketing Tools",
      "Team Collaboration Tools",
    ],
    images: ["/images/l1.png", "/images/l2.png", "/images/l3.png", "/images/l4.png", "/images/l5.png"],
    live: "https://matchwize.vercel.app",
  },
  {
    title: "CCBOND",
    description: "ThriveDaily helps users build daily habits, track growth, and stay motivated through journals and goal trackers.",
    tech: ["TypeScript", "React.js", "Supabase", "Tailwind CSS", "ChatGPT API"],
    features: [
      "Track daily calorie intake",
      "Log workout sessions and productivity",
      "Personalized goal setting",
      "View weekly charts & streaks",
    ],
    images: ["/images/cc0.png", "/images/cc1.png", "/images/cc2.png", "/images/cc3.png", "/images/cc4.png"],
    live: "https://ccbond.app/enquiry",
  },
  {
    title: "ClearNav – A Pothole Alert Navigation Application",
    description: "A user-centric mobile application that enhances road safety through real-time pothole alerts and crowdsourced hazard reporting.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    features: [
      "Live Location Tracking",
      "Google Maps Integration",
      "Audio Alerts for Driver Safety",
      "Cross-Platform App Development",
      "Image-Based Severity Detection",
    ],
    images: ["/images/cl1.png"],
    live: null,
  },
  {
    title: "Facial Emotion Recognition",
    description: "A deep learning app that recognizes human emotions using facial expressions.",
    tech: ["Python", "Machine Learning", "OpenCV", "Keras"],
    features: [
      "Real-time facial detection",
      "Emotion classification with CNN",
      "Uses deep learning CNN model",
      "Built with Keras and TensorFlow",
      "Pretrained Haarcascade with OpenCV",
    ],
    images: ["/images/emoition_detection.png"],
    live: null,
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
            className="flex flex-col md:flex-row gap-4 bg-[#0f0f0f] p-4 rounded-xl shadow-lg border border-gray-700 mr-26 "
          >
            {/* Scrollable images */}
            <div className="md:w-1/2 max-h-[360px] overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scrollbar-hide">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full object-cover"
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
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black font-medium rounded bg-white px-4 py-2 hover:bg-black hover:text-white transition"
                  >
                    <ExternalLink size={16} /> View Project
                  </a>
                ) : (
                  <button
                    onClick={() => alert("Project expired")}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 font-medium rounded bg-gray-400 px-4 py-2 cursor-not-allowed"
                  >
                    <ExternalLink size={16} /> Project Expired
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
