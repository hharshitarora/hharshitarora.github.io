import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {BsTwitter} from 'react-icons/bs'
import {TfiGithub} from 'react-icons/tfi'

export const HeaderSocials = () => {
  return (
  
  <div className='header__socials'>
    <a href="https://linkedin.com/in/hharshitarora" target = "_blank"><TfiLinkedin/></a>
    <a href="https://twitter.com/hharshitarora" target = "_blank"><BsTwitter /></a>
    <a href="https://github.com/hharshitarora" target = "_blank"><TfiGithub /></a>
  </div>
   
  )
}
export default HeaderSocials