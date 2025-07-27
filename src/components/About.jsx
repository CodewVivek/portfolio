import React from 'react';
import { ArrowDownToLine, Mail, MapPinXInside } from 'lucide-react';
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import TechStackShuffle from './TechStackShuffle';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SaiVivek_Resume.pdf';
    link.download = 'SaiVivek_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-12 px-4 w-full bg-black text-white" id="About">
      <div className="max-w-xl mx-auto">
        <div className="text-3xl font-bold mb-2 text-left">SAI VIVEK MANIKONDA</div>
        <div className="text-gray-400 text-xl mb-4 text-left">Software Developer</div>
        <div className="flex flex-wrap gap-4 mb-4 text-left text-base">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href="mailto: vivekmanikonda113@gmail.com">vivekmanikonda113@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPinXInside size={18} />
            <span>India</span>
          </div>
        </div>
        <p className="text-base leading-relaxed mb-6 text-left">
          A goal-oriented software developer with experience in building web applications using modern technologies like React, Node.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.
        </p>
        <div className="flex flex-wrap gap-6 items-center mb-8">
          <button
            onClick={DownloadResume}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-base"
          >
            <ArrowDownToLine /> Resume
          </button>
          <a href="https://github.com/CodewVivek" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="mailto:vivekmanikonda113@gmail.com"><Mail size={24} /></a>
          <a href="https://www.linkedin.com/in/sai-vivek-manikonda-10b734249/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
        <TechStackShuffle />
      </div>
    </section>
  );
};

export default About;
