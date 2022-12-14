import React from 'react'
import CV from '../../assets/Resume.pdf'


export const CTA = () => {
  return (
    <div className='cta'>
        <a href = {CV} download className='btn'>Resume</a>
        <a href = "#experience" className='btn'>Projects</a>
        <a href = "#articles" className='btn'>Articles</a>
        <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA