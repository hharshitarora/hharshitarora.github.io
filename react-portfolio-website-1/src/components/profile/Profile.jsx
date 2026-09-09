import React from 'react'
import './Profile.css'
import ME from '../../assets/headshot.jpg'

const Profile = () => {
  return (
    <section id="profile">
      <img src={ME} alt="Harshit Arora" className="profile-photo" />

      <h1>Harshit Arora</h1>
      <p>
        Six years building software, and I have done both halves of it. 0 &rarr; 1: backend from scratch
        for a video platform, and a voice agent now running in client production. And at scale, cart,
        checkout and payments at Michaels at 1,250 requests a second, and trading systems at Barclays.
        Looking for the next challenge.
      </p>
      <p className="location">Dallas, TX</p>

      <div className="contact">
        <a href="mailto:harshitar10@protonmail.com">harshitar10@protonmail.com</a>
        <span className="sep">/</span>
        <a href="https://github.com/hharshitarora" target="_blank" rel="noopener noreferrer">github</a>
        <span className="sep">/</span>
        <a href="https://linkedin.com/in/hharshitarora" target="_blank" rel="noopener noreferrer">linkedin</a>
      </div>
    </section>
  )
}

export default Profile
