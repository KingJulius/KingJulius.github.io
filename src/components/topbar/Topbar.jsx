import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './topbar.css';
import ReactToolTip from 'react-tooltip';
import { contents } from "../../data.js";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const contentItems = contents.map((element) => (
    <Link to={element.section} data-tip={element.title} data-for="tool-tip" spy={true} smooth={true} duration={500} onClick={()=> setActiveNav('#'+ element.section)} className={activeNav === "#"+element.section ? "active" : ""}  >{element.icon}</Link>
  ));
  return (
    <nav>
      {contentItems}
      <ReactToolTip id="tool-tip" />
    </nav>
  )
}

export default Topbar;