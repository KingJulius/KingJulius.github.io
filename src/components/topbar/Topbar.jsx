import React, { useState } from 'react';
import {Link} from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { CiViewTimeline } from 'react-icons/ci';
import { FaBusinessTime } from 'react-icons/fa';
import {MdOutlineContactMail} from 'react-icons/md'
import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} duration={500} onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "active" : ""} ><AiOutlineHome /></Link>
      <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""} ><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : ""} ><BiBook /></Link>
      <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#timeline')} className={activeNav === "#timeline" ? "active" : ""} ><CiViewTimeline /></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "active" : ""} ><FaBusinessTime /></Link>
      <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""} ><MdOutlineContactMail /></Link>
    </nav>
  )
}

export default Topbar;