import React from 'react'
import './Experience.css'
import {RiMiniProgramLine} from 'react-icons/ri'
import BARC from "../../assets/Barclays-Logo.png"
import EY from "../../assets/EY-logo-horizontal.png"
import HNS from "../../assets/hugheslogo.png"

export const Experience = () => {
  return (
    <section id='experience'>
      
      <h2>Work Experience</h2>
      <div className='container work_exp_container'>
        <div className="exp1">
        <img src = {BARC} alt ="Barclays" className='bLogo'/>
        <div className='exp_content'>
        
          <p>
          End to end development of java methods to perform essential tasks based on business needs. 
          Analysed and assessed the business side to better understand the workflow and the product cycle. 
          Configuring kdb+ databases for new features and data persistence, also integrated with java for a cohesive setup.
          Performed complete life cycle for testing and deployments of new components. Worked on environment stabilization post-deployment.
          Worked in cross functional teams to drive new changes and understand all aspects of the business. 
          Aided in documentation using Confluence for easy access, and worked with development tools like TeamCity, JIRA.
          </p>
        </div>
        </div>
        <div className="exp2">
        <img src = {EY} alt ="EY" className='eyLogo'/>
        <div className='exp_content'>
        
          <p>
          Worked on various features for the android app, a location guiding service that would aid the client to manage its staff and customers to manage their work. 
          Developed the low-level architecture using Kotlin Clean Architecture to improve the separation of code, have high level of abstraction, and efficient testing.
          Collaborated with the client directly and used the agile methodology via Jira to smooth out the deployment process.
          </p>
        </div>
        </div>
        <div className="exp3">
          <img src = {HNS} alt ="HNS" className='hnsLogo'/>
        <div className='exp_content'>
        
        <p>
          Developed a geolocation tracking system using Java and JavaScript for the company’s app and website for managing work orders, used by customers and installers all over the globe. 
          Built the frontend that was focused on efficient battery usage and optimized for read/write functionality. 
          Phased the project into parts for a successful migration into the current system being used and worked in an agile environment.
        </p>
        </div>
        </div>
      </div>
      <h2 className='tSkills'>Technical Skills</h2>
      <div className="container Tech_skills_container">
        <div className="prog_lang">
          <h3>Programming Languages</h3>
          <div className='pl_content'>
              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>C/C++</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon' />
                <div>
                <h4>Verilog</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

          </div> 
        </div>

        <div className="database">
          <h3>Databases</h3> 
          <div className='pl_content'>
          <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>kdb+</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>AWS EC2</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Firebase DB</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>
        </div>
          </div>
          

        <div className="soft_pack">
          <h3>Software/Packages</h3> 
          <div className='pl_content'> 
          
          <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>TomCat Apache</h4>
                <small className='text-light'>Experienced</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>JIRA</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Confluence</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>TeamCity</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Bitbucket</h4>
                <small className='text-light'>Beginner</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Maven</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>

              <article className='pl_details'>
                <RiMiniProgramLine className='.pl_details-icon'/>
                <div>
                <h4>ITRS Geneos</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience