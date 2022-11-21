import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#timeline">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/julius-dsouza/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/KingJulius" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://twitter.com/jsdsz" target="_blank" rel="noreferrer" ><FaTwitterSquare /></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; 2022 Julius Dsouza. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer