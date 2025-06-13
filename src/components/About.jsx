import React from 'react';
import { ArrowDownToLine, Mail, MapPinXInside } from 'lucide-react';
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import TechStackShuffle from './TechStackShuffle';

const About = () => {
  const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SaiVivek_Resume.pdf';
    link.download = 'SaiVivek_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-16 px-6 bg-black text-white " id='About'>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10">

        {/* LEFT SIDE - Bio */}
        <div className="flex-1 max-w-xl">
          <div className="text-3xl font-bold mb-1">SAI VIVEK MANIKONDA</div>
          <div className="text-gray-400 text-xl mb-4">Software Developer</div>

          {/* Contact Info */}
          <div className="text-md mb-5 flex gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Mail size={18} />
              <a href="mailto:something@gmail.com">something@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <MapPinXInside size={18} />
              <p>Hyderabad, India</p>
            </div>
          </div>

          {/* Bio Text */}
          <p className="text-base text-justify leading-relaxed mb-5">
            A goal-oriented software developer with experience in building web applications using modern technologies like React, Node.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.
          </p>

          {/* Resume & Social Links */}
          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={DownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              <ArrowDownToLine /> Resume
            </button>
            <a href="https://github.com/CodewVivek" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="mailto:something@gmail.com"><Mail size={24} /></a>
            <a href="https://x.com/jodvk11" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sai-vivek-manikonda-10b734249/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Shuffle Stack */}
        <div className="flex-1 max-w-xl">
          <TechStackShuffle />
        </div>
      </div>
    </section>
  );
};

export default About;
