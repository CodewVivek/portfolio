import React from 'react';
import { Moon } from 'lucide-react';

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50 w-full transition-all duration-200 bg-background/80 backdrop-blur-md shadow-sm text-white bg-black'>
        <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <a className='text-lg font-bold'>
                VIVEK
              </a>
            </div>
            <div className='hidden md:flex items-center space-x-6 '>
              <a href=''>About</a>
              <a href=''>Experience</a>
              <a href=''>Education</a>
              <a href=''>Skills</a>
              <a href=''>Projects</a>
              <a href=''>Contact</a>
              <button><Moon /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
