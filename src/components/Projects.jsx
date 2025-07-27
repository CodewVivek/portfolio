import React from 'react';

import {
  ExternalLink
}

  from 'lucide-react';

import {
  motion
}

  from 'framer-motion';

const projects = [{
  title: "Launch It",
  description: "Launch It is a dynamic platform built to empower startups by streamlining the discovery, submission, and showcasing of innovative ventures.",
  tech: ["React.js", "Tailwind CSS", "Supabase", "Express js"],
  features: ["Advanced Talent Attraction Tools",
    "Enhanced Startup Profile Creation",
    "AI-Powered Analytics",
    "Customer Growth and Marketing Tools",
    "Team Collaboration Tools",
  ],
  images: ["/images/l1.png", "/images/l2.png", "/images/l3.png", "/images/l4.png", "/images/l5.png"],
  live: "https://matchwize.vercel.app",
}

  ,
{
  "title": "CCBOND",
  "description": "CCBOND is a comprehensive B2B networking platform that facilitates business connections, lead generation, and communication between companies through enquiries, sales opportunities, and product listings.",
  "tech": ["React.js", "Tailwind CSS", "MySQL", "Twilio"],
  "features": ["Business enquiry and sales posting",
    "Real-time chat and messaging system",
    "Company profile management",
    "Multi-tenant architecture with role-based access",
    "File sharing and document management",
    "Mobile verification and authentication"
  ],
  "images": ["/images/cc0.png", "/images/cc1.png", "/images/cc2.png", "/images/cc3.png", "/images/cc4.png"],
  "live": "https://ccbond.app/enquiry"
}

  ,
{
  title: "ClearNav – A Pothole Alert Navigation Application",
  description: "A user-centric mobile application that enhances road safety through real-time pothole alerts and crowdsourced hazard reporting.",
  tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
  features: ["Live Location Tracking",
    "Google Maps Integration",
    "Audio Alerts for Driver Safety",
    "Cross-Platform App Development",
    "Image-Based Severity Detection",
  ],
  images: ["/images/cl1.png"],
  live: null,
}

  ,
{
  title: "Facial Emotion Recognition",
  description: "A deep learning app that recognizes human emotions using facial expressions.",
  tech: ["Python", "Machine Learning", "OpenCV", "Keras"],
  features: ["Real-time facial detection",
    "Emotion classification with CNN",
    "Uses deep learning CNN model",
    "Built with Keras and TensorFlow",
    "Pretrained Haarcascade with OpenCV",
  ],
  images: ["/images/emoition_detection.png"],
  live: null,
}

  ,
];

const fadeIn = {
  hidden: {
    opacity: 0, y: 40
  }

  ,
  visible: (i) => ({

    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, duration: 0.6, ease: 'easeOut'
    }
  }

  ),
}

  ;

const Projects = () => {
  return (<section id="projects" className="py-12 px-4 w-full bg-black text-white"> <h2 className="text-3xl font-bold mb-8 text-left">Projects</h2> <div className="space-y-10"> {
    projects.map((project, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row gap-8 bg-[#181818] p-6 rounded-2xl shadow-lg max-w-4xl w-full mx-auto"
      >
        {/* Fixed, scrollable images */}
        <div className="w-full md:w-[340px] h-[220px] md:h-[260px] flex-shrink-0 overflow-x-auto md:overflow-y-auto flex md:flex-col flex-row gap-2 rounded-xl bg-black/30 shadow-inner">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="object-cover w-[220px] h-[220px] md:w-full md:h-[120px] rounded-xl border border-gray-800"
            />
          ))}
        </div>
        {/* Project details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 text-left">{project.title}</h3>
            <p className="text-gray-300 text-base mb-4 text-left">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-medium border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="text-white font-semibold text-base mb-1">Key Features:</h4>
              <ul className="list-disc list-inside text-white text-sm space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-black font-semibold rounded-lg bg-white px-5 py-2 hover:bg-black hover:text-white border border-white hover:border-gray-700 transition shadow"
              >
                <ExternalLink size={18} /> Live
              </a>
            ) : (
              <button
                onClick={() => alert('Project expired')}
                className="inline-flex items-center gap-2 text-base text-gray-300 font-semibold rounded-lg bg-gray-400 px-5 py-2 cursor-not-allowed border border-gray-400"
              >
                <ExternalLink size={18} /> Project Expired
              </button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div> </section>);
}

  ;

export default Projects;