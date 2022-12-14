import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {MdArticle} from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'

import {useState} from 'react'


export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 

    <a href ='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href ='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
    <a href ='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
    <a href ='#articles' onClick={() => setActiveNav('#articles')} className={activeNav === '#articles' ? 'active' : ''}><MdArticle/></a>
    <a href="#contact" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><MdContactPhone/></a>
    </nav> 
  )
}
export default Nav

