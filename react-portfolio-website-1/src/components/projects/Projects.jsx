import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Voice AI Lead Qualification System (VybeWorks)',
      description: 'Production voice agent running 500+ calls a week across three client pilots.',
      links: [{ label: 'vybeworks.ai', href: 'https://www.vybeworks.ai/' }]
    },
    {
      id: 2,
      title: 'Boss Dial',
      description: 'Chrome extension that rewrites workplace messages before you send them. Live on the Chrome Web Store.',
      links: [
        { label: 'bossdial.com', href: 'https://bossdial.com' },
        { label: 'source', href: 'https://github.com/hharshitarora/reply-like-a-boss' }
      ]
    },
    {
      id: 3,
      title: 'Incident Triage Agent',
      description: 'LangGraph agent that reads a crash log and traces the failure back to the commit that caused it.',
      links: [{ label: 'source', href: 'https://github.com/hharshitarora/incident-triage-agent' }]
    },
    {
      id: 4,
      title: 'LLM Evaluation Gate',
      description: 'CI quality gate for a non-deterministic agent. Fails the build when output degrades against a scored eval set.',
      links: [{ label: 'source', href: 'https://github.com/hharshitarora/llm-eval-gate' }]
    },
    {
      id: 5,
      title: 'Grounded Voice RAG Agent',
      description: 'Voice RAG agent that measures when it should decline to answer rather than guess.',
      links: [{ label: 'source', href: 'https://github.com/hharshitarora/grounded-voice-agent' }]
    }
  ]

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="rows">
        {projects.map((project) => (
          <div className="row" key={project.id}>
            <div className="row-head">
              <span className="row-title">{project.title}</span>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="row-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
