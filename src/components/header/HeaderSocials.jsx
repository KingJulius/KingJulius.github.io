import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/julius-dsouza/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/KingJulius" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/jsdsz" target="_blank" rel="noreferrer" ><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials