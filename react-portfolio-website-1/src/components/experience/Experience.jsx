import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Michaels',
      position: 'Software Engineer',
      period: 'Jan 2023 to now',
      description: 'Cart, checkout and payments backend. Peaks at 1,250 requests a second at 99.8% uptime through holiday surges. Took checkout latency from 800ms to 600ms. Built an LLM triage agent now used by 15 engineers on other teams.'
    },
    {
      id: 2,
      company: 'Stitchit',
      position: 'Founding Backend Engineer',
      period: 'Nov 2023 to Aug 2024',
      description: 'The 5 to 9 after the 9 to 5. Built the backend from scratch for an iOS-first short-form video platform going after TikTok and Reels.'
    },
    {
      id: 3,
      company: 'Barclays',
      position: 'Software Developer',
      period: 'Aug 2020 to Jan 2023',
      description: 'Java trading systems. kdb+ against TB-scale bond data.'
    },
    {
      id: 4,
      company: 'Ernst and Young',
      position: 'Technology Advisory Intern',
      period: 'Summer 2019',
      description: 'Android app for managing staff and customers.'
    },
    {
      id: 5,
      company: 'Hughes',
      position: 'Software Engineering Intern',
      period: 'Summer 2018',
      description: 'Geolocation tracking for a work-order app.'
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Work</h2>

      <div className="rows">
        {experiences.map((job) => (
          <div className="row" key={job.id}>
            <div className="row-head">
              <span className="row-title">{job.company}</span>
              <span className="row-meta">{job.position}</span>
              <span className="row-date">{job.period}</span>
            </div>
            {job.description && <p className="row-desc">{job.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
