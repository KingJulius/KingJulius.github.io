import React from "react";
import "./experience.css";
import ReactToolTip from 'react-tooltip';
import {useExp} from '../../hooks/useExp'

const Experience = ({ langauges, tools }) => {
  const languageItems = useExp(langauges);

  const toolItmes = useExp(tools);

  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">{languageItems}</div>
        </div>
        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">{toolItmes}</div>
        </div>
      </div>
      <ReactToolTip id="tool-tip" />
    </section>
  );
};

export default Experience;
