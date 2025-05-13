import React from 'react'
import './education.css'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Science in Data Science',
      institution: 'University of Texas at Austin',
      location: 'Austin, TX',
      period: '2023 - 2025',
      type: 'Master\'s Program'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'The Pennsylvania State University',
      location: 'University Park, PA',
      period: '2016 - 2020',
      type: 'Bachelor\'s Program'
    }
  ]

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((item) => (
          <div key={item.id}>
            <div className="job-title">
              {item.degree} <span className="location">{item.location}</span>
              <span className="date-range">{item.period}</span>
            </div>
            <div>
              {item.institution} <span className="tag">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
