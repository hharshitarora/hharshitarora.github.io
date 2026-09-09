import React from 'react'
import './education.css'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'MS, Data Science',
      institution: 'University of Texas at Austin',
      period: '2023 - 2026'
    },
    {
      id: 2,
      degree: 'BS, Computer Engineering',
      institution: 'Penn State University',
      period: '2016 - 2020'
    }
  ]

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="rows">
        {educationData.map((item) => (
          <div className="row" key={item.id}>
            <div className="row-head">
              <span className="row-title">{item.degree}</span>
              <span className="row-meta">{item.institution}</span>
              <span className="row-date">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
