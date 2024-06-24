import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Education from './components/education/education'
import Experience from './components/experience/Experience'
import Article from './components/articles/articles'
import Contact from './components/contacts/contact'
import Businesscard from './components/businesscard/businesscard'
import Footer from './components/footer/footer'

const MainContent = () => (
  <>
    <Header />
    <Nav />
    <About />
    <Education />
    <Experience />
    <Article />
    <Contact />
    <Footer />
  </>
)

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/businesscard" element={<Businesscard />} />
      </Routes>
    </Router>
  )
}

export default App