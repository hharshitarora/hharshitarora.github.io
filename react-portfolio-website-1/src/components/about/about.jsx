import React from 'react'
import './about.css'
import ME from '../../assets/IMG_0782.JPG'

export const about = () => {
  return (
    <section id = 'about'>

      <h2>Here's who I am and what I do</h2>
      <div className="container about__container">
      <table>
        <tr>
          <td>
          <div className="about__me">
            <div className="about__me-image">
            <img src = {ME} alt = "About"/>
            </div>
          </div>
          </td>
          <td>
          <div className="about__content">
            <p>
            I am currently working working as a Software Engineer within FinTech space. I graduated from Penn State '20 with a B.S. degree in Computer Engineering. I am a Technology Enthusiast, and I love to read and work on new upcoming technologies. I also enjoy developing ideas and working on applications that relate to user solutions which can help solve current problems. Some of my other interests include, motorsports, I am an amateur Go-Kart Driver. Along with this I enjoy trying different types of coffee's and exploring new restaurants. I also play video games such as Valorant, Fortnite and FIFA and stream on twitch as "Firelord1100".
            </p>
            <a href="#contact" className='btn btn-primary btnT'>Let's Talk</a>
          </div>
          </td>
        </tr>
      </table>
      </div>
      
    </section>
  )
}
export default about
