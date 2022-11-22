import React from 'react';
import { links } from "../../data.js";

const HeaderSocials = () => {
  const linkItems = links.map((element, index) => (
    <a key={index} href={element.url} target="_blank" rel="noreferrer" >{element.icon}</a>
  ));
  return (
    <div className="header__socials">
      {linkItems}
    </div>
  )
}

export default HeaderSocials