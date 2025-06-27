import React, { useState, useEffect } from "react";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-300
      ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black'}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mr-124">
          <div className="flex h-16 items-center">
            <a className="text-lg font-bold text-white" href="#About">
              VIVEK
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-white ">
            <a href="#About">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
