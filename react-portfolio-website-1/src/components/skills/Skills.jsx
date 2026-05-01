import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "Node.js", "JavaScript", "Go", "Swift", "React", "HTML", "CSS"]
    },
    {
      category: "LLM/AI",
      skills: ["Vapi", "Bland", "n8n", "LangChain", "GPT", "Hugging Face", "Pytorch", "Tensorflow"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "Spanner", "Firebase", "DynamoDB", "kdb+"]
    },
    {
      category: "Infrastructure & Tools",
      skills: ["AWS", "GCP", "Spring Boot", "Elasticsearch", "Datadog", "GitHub Actions", "Docker", "JIRA", "Git"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
