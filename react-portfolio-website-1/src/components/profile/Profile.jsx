import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Profile.css'
import ME from '../../assets/IMG_0782.JPG'

const Profile = () => {
  return (
    <section id="profile">
      <img src={ME} alt="Harshit Arora" className="profile-photo" />
      
      <h1>Harshit Arora</h1>
      <p>
        Building the smoothest and most efficient cart and checkout experience for Michaels Stores.
        Technology Enthusiast, always looking for new and better ways to do things and keep up with the latest trends.
        Previously worked at Barclays Investment Bank, Ernst & Young, and Hughes Network Systems.
      </p>
      <p className="location">Frisco, TX</p>
      
      <div className="icon-bar">
        <a href="mailto:harshitar10@protonmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="tel:814-753-2456" aria-label="Phone">
          <FaPhone />
        </a>
        <a href="https://github.com/hharshitarora" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/hharshitarora" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </section>
  )
}

export default Profile 