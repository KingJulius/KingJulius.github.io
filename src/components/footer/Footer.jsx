import React from 'react';
import './footer.css';
import { contents, links } from "../../data.js";

const Footer = () => {
  const footerItems = contents.map((element) => (
    <li><a key={element.id} href={element.section}>{element.title}</a></li>
  ));
  const linkItems = links.map((element) => (
    <a key={element.id} href={element.url} target="_blank" rel="noreferrer" >{element.icon}</a>
  ));
  return (
    <footer>
      <ul className="permalinks">
        {footerItems}
      </ul>
      <div className="footer__socials">
        {linkItems}
      </div>
      <div className="footer__copyright">
        <small> &copy; 2022 Julius Dsouza. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer