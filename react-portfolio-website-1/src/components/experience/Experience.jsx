import React from 'react';
import './Experience.css';

const Experience = () => {
  // Experience data
  const experiences = [
    {
      id: 1,
      company: 'Michaels Store Inc.',
      position: 'Software Developer 2',
      period: 'Jan 2023 - Present',
      location: 'Dallas, Texas',
      jobType: 'Full-Time',
      description: 'Led backend development and architecture for customer-facing features including PLCC, Impulse Cart, and loyalty voucher systems, driving secure and performant API design. Designed and implemented resilient offline transaction handling during peak season outages, ensuring fault tolerance and improved checkout reliability. Integrated third-party APIs from Signifyd and Eigen to support fraud protection, chargebacks, and Canadian gift card services. Engineered data purging workflows in SpannerDB for payment transactions as part of GCP cost optimization. Upgraded core services to the latest JDK and Spring Boot versions, achieving 80% test coverage and strengthening system maintainability.'
    },
    {
      id: 2,
      company: 'Barclays Services Corp.',
      position: 'Software Developer',
      period: 'Aug 2020 - Present',
      location: 'New York City, New York',
      jobType: 'Full-Time',
      description: 'End-to-end development of Java methods to perform essential tasks based on business needs. Configured kdb+ databases for new features and data persistence, integrated with Java for a cohesive setup. Performed complete lifecycle for testing and deployments of new components, worked on environment stabilization post-deployment. Worked in cross-functional teams to drive new changes and understand all aspects of the business. Aided in documentation using Confluence and worked with development tools like TeamCity and JIRA.'
    },
    {
      id: 3,
      company: 'Ernst and Young',
      position: 'Technology Advisory Intern',
      period: 'Jun 2019 - Aug 2019',
      location: 'Dallas, Texas',
      jobType: 'Internship',
      description: 'Worked on various features for the android app, a location guiding service that would aid the client to manage its staff and customers to manage their work. Developed the low-level architecture using Kotlin Clean Architecture to improve the separation of code, have high level of abstraction, and efficient testing. Collaborated with the client directly and used the agile methodology via Jira to smooth out the deployment process.'
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>
      
      <div className="experience-container">
        {experiences.map((job) => (
          <div key={job.id}>
            <div className="job-title">
              {job.position} <span className="location">{job.location}</span>
              <span className="date-range">{job.period}</span>
            </div>
            
            <div>
              {job.company} <span className="tag">{job.jobType}</span>
            </div>
            
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;