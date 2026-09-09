import React from 'react'
import Profile from './components/profile/Profile'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Writes from './components/writes/Writes'
import Education from './components/education/education'
import Footer from './components/footer/footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Profile />
      <Experience />
      <Projects />
      <Writes />
      <Education />
      <Footer />
    </div>
  )
}


export default App
