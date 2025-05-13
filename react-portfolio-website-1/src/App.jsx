import React from 'react'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import Writes from './components/writes/Writes'
import Experience from './components/experience/Experience'
import Education from './components/education/education'
import Skills from './components/skills/Skills'
import Footer from './components/footer/footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Profile />
      <Projects />
      <Writes />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  )
}


export default App