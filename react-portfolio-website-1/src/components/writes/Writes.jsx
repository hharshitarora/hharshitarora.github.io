import React from 'react'
import './Writes.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Writes = () => {
  const articles = [
    {
      id: 1,
      title: "Are Digital Goods Really Taking Over Our Life?",
      description: "An exploration of how digital goods and services are reshaping our daily lives, examining both the conveniences they offer and the potential drawbacks of our increasing digital dependency.",
      date: "Januray 2025",
      link: "https://medium.com/@harshitvarora/are-digital-goods-really-taking-over-our-life-922c557f87d8"
    },
    {
      id: 2,
      title: "Is AI Making Us Lazy in the AEC Sector?",
      description: "An examination of how artificial intelligence is transforming the Architecture, Engineering, and Construction industry, discussing both the efficiency gains and potential concerns about over-reliance on automation.",
      date: "November 2024",
      link: "https://www.intelligentbuild.tech/2024/10/23/is-ai-making-us-lazy-in-the-aec-c-sector/"
    },
    {
      id: 3,
      title: "The Duality of the Bat",
      description: "A philosophical analysis of Batman's character, exploring the dual nature of his existence and how it reflects deeper themes of justice, morality, and human nature.",
      date: "Mar 2024",
      link: "https://medium.com/@harshitvarora/the-duality-of-the-bat-fe593bf4dec8"
    },
    {
      id: 4,
      title: "The Journey of Using ChatGPT and Building a Website",
      description: "A personal account of leveraging AI tools like ChatGPT in web development, highlighting how artificial intelligence can accelerate and enhance the creative and technical processes of building a website.",
      date: "May 2023",
      link: "https://medium.com/@harshitvarora/the-journey-of-using-chat-gpt-and-building-a-website-how-ai-accelerates-and-enhances-processes-fa724e3b4619"
    }
  ]

  return (
    <section id="writes" className="section">
      <h2>My Writes</h2>
      <p className="section-intro">
        I write about technology, philosophy, and the intersection of digital innovation with human experience. 
        My articles explore how technology shapes our lives and how we can navigate the digital age thoughtfully.
      </p>
      
      <div className="writes-grid">
        {articles.map((article) => (
          <div className="write-card" key={article.id}>
            <div className="write-content">
              <div className="write-header">
                <h3 className="write-title">{article.title}</h3>
                <span className="write-date">{article.date}</span>
              </div>
              <p className="write-description">{article.description}</p>
              <div className="write-links">
                <a href={article.link} target="_blank" rel="noreferrer" className="write-link">
                  <FaExternalLinkAlt /> Read Article
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Writes 