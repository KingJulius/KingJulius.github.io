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
      <Link to="home" spy={true} smooth={true} duration={500} onClick={()=> setActiveNav('#home')} ><AiOutlineHome /></Link>
      <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#about')} ><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#experience')} ><BiBook /></Link>
      <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#timeline')} ><CiViewTimeline /></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#portfolio')} ><FaBusinessTime /></Link>
      <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setActiveNav('#contact')} ><MdOutlineContactMail /></Link>
    </nav>
  )
}

export default Topbar;