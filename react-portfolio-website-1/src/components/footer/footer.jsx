import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Harshit Arora. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
