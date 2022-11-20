import React from "react";
import "./experience.css";
import { langauges, tools } from "../../data.js";

const Experience = () => {
  const languageItems = langauges.map((element) => (
    <article className="experience__details">
      <img className="library_logo" src={element.img} alt={element.title} />
    </article>
  ));

  const toolItmes = tools.map((element) => (
    <article className="experience__details">
      <img className="library_logo" src={element.img} alt={element.title} />
    </article>
  ));

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
    </section>
  );
};

export default Experience;
