import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from "../../assets/me2.png"


const Header = ({links}) => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1 className="header">Julius Dsouza</h1>
        <h3 className="text-light">Software Engineer | Full-stack Developer</h3>
        <CTA />
        <div className="image-area">
          <img src={ME} alt="Julius Dsouza" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials links={links}/>
      </div>
    </header>
  );
};

export default Header;
