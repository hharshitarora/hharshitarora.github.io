import React from 'react'
import './Writes.css'

const Writes = () => {
  const articles = [
    {
      id: 1,
      title: "Are Digital Goods Really Taking Over Our Life?",
      date: "January 2025",
      link: "https://medium.com/@harshitvarora/are-digital-goods-really-taking-over-our-life-922c557f87d8"
    },
    {
      id: 2,
      title: "Is AI Making Us Lazy in the AEC Sector?",
      date: "November 2024",
      link: "https://www.intelligentbuild.tech/2024/10/23/is-ai-making-us-lazy-in-the-aec-c-sector/"
    },
    {
      id: 3,
      title: "The Duality of the Bat",
      date: "March 2024",
      link: "https://medium.com/@harshitvarora/the-duality-of-the-bat-fe593bf4dec8"
    },
    {
      id: 4,
      title: "The Journey of Using ChatGPT and Building a Website",
      date: "May 2023",
      link: "https://medium.com/@harshitvarora/the-journey-of-using-chat-gpt-and-building-a-website-how-ai-accelerates-and-enhances-processes-fa724e3b4619"
    }
  ]

  return (
    <section id="writes" className="section">
      <h2>Writing</h2>

      <div className="rows">
        {articles.map((article) => (
          <div className="row" key={article.id}>
            <div className="row-head">
              <a href={article.link} target="_blank" rel="noreferrer" className="row-title-link">
                {article.title}
              </a>
              <span className="row-date">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Writes
