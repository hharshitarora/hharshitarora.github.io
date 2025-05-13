import React from 'react';
import {TfiLinkedin} from 'react-icons/tfi'
import {BsTwitter} from 'react-icons/bs'
import {TfiGithub} from 'react-icons/tfi'
import ME from '../../assets/me.jpeg'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f5f5f7;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .card-container {
    max-width: 640px;
    margin: 80px auto 40px;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: visible;
    position: relative;
  }

  .header {
    background-color: #34495e;
    padding: 80px 20px 40px;
    text-align: center;
    color: #ffffff;
    border-radius: 18px 18px 0 0;
  }

  .profile-image-container {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .content {
    padding: 30px;
    text-align: center;
  }

  .bio, .previous {
    font-size: 16px;
    line-height: 1.6;
    color: #333333;
    margin: 15px 0;
  }

  .previous {
    color: #666666;
    font-size: 14px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #f0f0f0;
    color: #333333;
    margin: 0 10px;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }
`;

const SimpleBusinessCard = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="card-container">
        <div className="profile-image-container">
          <img src={ME} alt="Harshit Arora" className="profile-image" />
        </div>
        <div className="header">
          <h1 className="name">Harshit Arora</h1>
        </div>
        <div className="content">
          <p className="bio">Currently working as a SDE within the e-commerce space, looking to build the next gen startup</p>
          <p className="previous">Previous: Barclays Investment Bank, Ernst and Young, EchoStar Corporation.</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/hharshitarora" target="_blank" rel="noopener noreferrer" className="social-link"><TfiLinkedin /></a>
            <a href="https://twitter.com/hharshitarora" target="_blank" rel="noopener noreferrer" className="social-link"><BsTwitter /></a>
            <a href="https://github.com/hharshitarora" target="_blank" rel="noopener noreferrer" className="social-link"><TfiGithub /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBusinessCard;