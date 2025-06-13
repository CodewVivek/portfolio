
import React from "react";
import { Sun } from 'lucide-react';

const Header = () => {

  return (
    <>
      <div className='top-0 z-50 w-full bg-black text-white'>
        <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <a className='text-lg font-bold'>
                VIVEK
              </a>
            </div>
            <div className='hidden md:flex items-center space-x-6 '>
              <a href='#About'>About</a>
              <a href='#experience'>Experience</a>
              <a href=''>Projects</a>
              <a href='#skills'>Skills</a>
              <a href=''>Education</a>
              <a href='#contact'>Contact</a>
              <button >
                <Sun />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
