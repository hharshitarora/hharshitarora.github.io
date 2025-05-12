import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "Go", "Swift", "React", "HTML", "CSS", "Javascript"]
    },
    {
      category: "LLM/AI",
      skills: ["Langflow", "Hugging Face", "GPT", "Pytorch", "Tensorflow"]
    },
    {
      category: "Database",
      skills: ["Mongo", "MySQL", "Spanner", "Firebase", "MariaDB", "DynamoDB"]
    },
    {
      category: "Software/Packages",
      skills: ["GCP", "AWS", "JIRA", "Bitbucket", "Maven", "Git", "Numpy", "Pandas", "Tidyverse"]
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