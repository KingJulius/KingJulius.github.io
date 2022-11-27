import React from 'react';
import './timeline.css';

const Timeline = ({exp}) => {

  const expItems = exp.map((element, index) => (
    <li key={`Timeline_${index}`}>
      <h2 className="timeline__position">{element.position}</h2>
      <h3 className="timeline__company">{element.company}</h3>
      <h3 className="timeline__descr">{element.dates}</h3>
      <h3 className="timeline__descr">{element.location}</h3>
    </li>
  ));

  return (
    <section id="timeline">
      <h2>My Journey</h2>
      <div className="container timeline__container">
        <ul>
          {expItems}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;