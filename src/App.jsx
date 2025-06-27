import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

const App = () => {
  return (
    <>
      <div className='mt-20'>
        <Header />
      </div>
  
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
    </>
  )
}

export default App
