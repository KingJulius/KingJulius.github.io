import React from 'react';
import {Link} from 'react-scroll';
import './topbar.css';
import ReactToolTip from 'react-tooltip';

const Topbar = ({contents}) => {
  const contentItems = contents.map((element) => (
    <Link key={element.id} activeClass="active" to={element.section} data-tip={element.title} data-for="tool-tip" spy={true} smooth={true} >{element.icon}</Link>
  ));
  return (
    <nav>
      {contentItems}
      <ReactToolTip id="tool-tip" />
    </nav>
  )
}

export default Topbar;