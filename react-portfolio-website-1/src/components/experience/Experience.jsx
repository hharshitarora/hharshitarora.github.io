import React from 'react';
import './Experience.css';

const Experience = () => {
  // Experience data
  const experiences = [
    {
      id: 1,
      company: 'Michaels Store Inc.',
      position: 'Software Engineer',
      period: 'Jan 2023 - Present',
      location: 'Dallas, Texas',
      jobType: 'Full-Time',
      description: 'Led backend design and development for high-traffic customer features including PLCC, Impulse Cart, and loyalty vouchers, reducing API latency by 25% using Java, Spring Boot, MongoDB, and SpannerDB. Built a resilient offline transaction handling system that maintained 99% uptime during Black Friday and peak holiday surges. Integrated Signifyd for fraud detection and Eigen for Canadian gift card processing. Engineered SpannerDB purging workflows that cleared 300+ GB of payment transaction data, directly reducing GCP infrastructure costs. Built personal agentic development workflows using Codex and Factory AI to consistently ship cleaner and more stable code.'
    },
    {
      id: 2,
      company: 'Stitchit',
      position: 'Founding Backend Engineer',
      period: 'Nov 2023 - Aug 2024',
      location: 'Remote',
      jobType: 'Startup',
      description: 'Stood up the entire backend from scratch as the first backend engineer, designing all APIs and server infrastructure for an iOS-first short-form video platform using Node.js and Python. Drove migration from a monolith to a serverless architecture on AWS Lambda with AWS MediaConvert, cutting infrastructure costs by 30% and reducing video processing time by 60% during beta. Owned all AWS infrastructure setup and CI/CD pipeline via GitHub Actions; mentored two engineers and led backend technical direction across a 6-person team.'
    },
    {
      id: 3,
      company: 'Barclays Services Corp.',
      position: 'Software Developer',
      period: 'Aug 2020 - Jan 2023',
      location: 'New York City, New York',
      jobType: 'Full-Time',
      description: 'Delivered enhancements across 5-6 core trading flows, extending data persistence and onboarding new users within a Java trading system in a compliance-critical financial environment. Integrated kdb+ databases with Java services to handle TB-scale bond and financial transaction data, supporting real-time trading operations and operational reporting. Owned every third bi-weekly release on rotation, managing deployment and post-release stabilization.'
    },
    {
      id: 4,
      company: 'Ernst and Young',
      position: 'Technology Advisory Intern',
      period: 'Jun 2019 - Aug 2019',
      location: 'Dallas, Texas',
      jobType: 'Internship',
      description: 'Worked on various features for an Android location-guiding app to help clients manage staff and customers. Developed low-level architecture using Kotlin Clean Architecture to improve separation of concerns and enable efficient testing. Collaborated directly with the client and used agile methodology via Jira to streamline the deployment process.'
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
