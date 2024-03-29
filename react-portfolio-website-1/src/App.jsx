import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Education from './components/education/education'
import Experience from './components/experience/Experience'
import Article from './components/articles/articles'
import Contact from './components/contacts/contact'
import Footer from './components/footer/footer'


export const App = () => {
  return (
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
}
export default App