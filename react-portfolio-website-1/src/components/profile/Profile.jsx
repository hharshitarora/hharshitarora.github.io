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
        Software Engineer with 5+ years across enterprise and early-stage companies. Beyond enterprise engineering,
        I build from zero: founding engineer on a social video platform (Stitchit), shipped a voice AI system into
        live client pilots, and launched Boss Dial — a Chrome extension that's live on the Web Store.
        Strong foundation in distributed systems, APIs, and cloud, with a bias toward building things that ship.
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
