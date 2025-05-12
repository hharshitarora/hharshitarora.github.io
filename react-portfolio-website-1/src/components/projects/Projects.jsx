import React from 'react'
import './Projects.css'
import NewsletterlyLogo from '../../assets/Newsletterly Logo.png'
import StitchitLogo from '../../assets/Stitchit Logo.png'
import DigiLockerLogo from '../../assets/DigiLocker logo.png'
import JudgeAILogo from '../../assets/JudgeAI Logo.png'
import ComingSoonLogo from '../../assets/Coming-soon-logo.png'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="section-intro">
        Here are some of the projects I've worked on. Each project represents a unique challenge 
        and learning experience in my journey as a software developer.
      </p>
      
      <div className="projects-grid">
        {/* Project 5 - Stealth AI iOS App */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container stealth-logo">
              <img 
                src={ComingSoonLogo}
                alt="Stealth AI iOS App" 
                className="project-image" 
              />
            </div>
            <span className="project-title">Stealth AI iOS App</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              An innovative AI-powered iOS application currently in development. 
              More details coming soon.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">iOS</span>
              <span className="project-tech">AI</span>
              <span className="project-tech">Swift</span>
            </div>
            <div className="project-links">
              <span className="project-link">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Project 4 - AI Judge */}
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

        {/* Project 3 - DigiLocker */}
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

        {/* Project 2 - Stitchit */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-image-container stitchit-logo">
              <img 
                src={StitchitLogo}
                alt="Stitchit" 
                className="project-image" 
              />
            </div>
            <span className="project-title">Stitchit</span>
          </div>
          <div className="project-content">
            <p className="project-description">
              Founding backend engineer for a social media app competing with TikTok. Led backend development, 
              set up CI/CD pipelines using GitHub Actions, and contributed to Swift development. Managed a team 
              of 10 through agile methodologies.
            </p>
            <div className="project-tech-stack">
              <span className="project-tech">Backend</span>
              <span className="project-tech">CI/CD</span>
              <span className="project-tech">Swift</span>
            </div>
            <div className="project-links">
              <span className="project-link">Code available upon request</span>
            </div>
          </div>
        </div>

        {/* Project 1 - Newsletterly */}
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