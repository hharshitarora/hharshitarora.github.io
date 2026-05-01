import React from 'react'
import './Projects.css'
import NewsletterlyLogo from '../../assets/Newsletterly Logo.png'
import DigiLockerLogo from '../../assets/DigiLocker logo.png'
import JudgeAILogo from '../../assets/JudgeAI Logo.png'
import ComingSoonLogo from '../../assets/Coming-soon-logo.png'
import BossDialLogo from '../../assets/BossDial Logo.png'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="section-intro">
        Here are some of the projects I've worked on. Each project represents a unique challenge
        and learning experience in my journey as a software developer.
      </p>

      <div className="projects-grid">
        {/* Project 1 - Voice AI Lead Generation */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container judge-logo">
              <img
                src={ComingSoonLogo}
                alt="Voice AI Lead Generation System"
                className="project-image"
              />
            </div>
            <span className="project-title">Voice AI Lead Generation</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              A production voice AI system piloted across 3 companies, handling 500+ calls per week with
              LLM-driven intent detection, response generation, and call flow orchestration over telephony.
              Achieved a 27% improvement in lead conversion rate. Integrated Vapi, Bland, WhatsApp triggers,
              and Google Calendar for a fully hands-free lead qualification pipeline.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">Python</span>
              <span className="project-tech">Vapi</span>
              <span className="project-tech">LLM APIs</span>
              <span className="project-tech">n8n</span>
            </div>
            <div className="project-links">
              <span className="project-link">Code available upon request</span>
            </div>
          </div>
        </div>

        {/* Project 2 - Boss Dial */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container stealth-logo">
              <img
                src={BossDialLogo}
                alt="Boss Dial"
                className="project-image"
              />
            </div>
            <span className="project-title">Boss Dial</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              A Chrome extension that rewrites workplace messages using LLMs to improve tone, clarity,
              and professionalism before sending. Handles full-stack end-to-end: LLM integration,
              Chrome extension architecture, user feedback loop, and iterative deployment. Live on the Chrome Web Store.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">JavaScript</span>
              <span className="project-tech">LLM APIs</span>
              <span className="project-tech">Chrome Extension</span>
            </div>
            <div className="project-links">
              <a href="https://bossdial.com" target="_blank" rel="noopener noreferrer" className="project-link">bossdial.com</a>
            </div>
          </div>
        </div>

        {/* Project 3 - AI Judge */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container judge-logo">
              <img
                src={JudgeAILogo}
                alt="AI Judge"
                className="project-image"
              />
            </div>
            <span className="project-title">AI Judge</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              A React-based web application that leverages RAGs and LLMs to provide socially amicable
              solutions to user disputes. Built to help people resolve simple problems through AI mediation.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">React</span>
              <span className="project-tech">RAG</span>
              <span className="project-tech">LLM</span>
            </div>
            <div className="project-links">
              <span className="project-link">Code available upon request</span>
            </div>
          </div>
        </div>

        {/* Project 4 - DigiLocker */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container digilocker-logo">
              <img
                src={DigiLockerLogo}
                alt="DigiLocker"
                className="project-image"
              />
            </div>
            <span className="project-title">DigiLocker</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              An iOS app that uses Apple LiDAR and AR model SDKs to create 3D renderable versions of
              physical objects. Stores digital replicas in AWS, allowing users to preserve sentimental
              items virtually.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">iOS</span>
              <span className="project-tech">LiDAR</span>
              <span className="project-tech">AWS</span>
            </div>
            <div className="project-links">
              <span className="project-link">Code available upon request</span>
            </div>
          </div>
        </div>

        {/* Project 5 - Newsletterly */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container newsletterly-logo">
              <img
                src={NewsletterlyLogo}
                alt="Newsletterly"
                className="project-image"
              />
            </div>
            <span className="project-title">Newsletterly</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              A Chrome extension that aggregates and displays newsletters from Gmail. Features secure OAuth 2.0
              authentication, newsletter management, and a clean reading interface. Version 2 coming soon.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">Chrome Extension</span>
              <span className="project-tech">Gmail API</span>
              <span className="project-tech">OAuth 2.0</span>
            </div>
            <div className="project-links">
              <span className="project-link">Code available upon request</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
