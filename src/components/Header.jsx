import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between">
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
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 rounded-b-lg shadow-lg px-6 py-4 absolute left-0 right-0 top-16 z-50 flex flex-col space-y-4 text-white">
            <a href="#About" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
