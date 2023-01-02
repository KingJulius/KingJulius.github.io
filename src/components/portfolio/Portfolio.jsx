import React from "react";
import "./portfolio.css";

const Portfolio = ({soloProjects}) => {
  const soloProjectItems = soloProjects.map((pro) => (
    <article className="portfolio__item" key={pro.id}>
      <div className="portfolio__item-image">
        <img src={pro.img} alt={pro.title} />
      </div>
      <div className="portfolio__item-content">
        <h3>{pro.title}</h3>
        <p>{pro.description}</p>
        <p>{pro.technologies}</p>
      </div>
      <div className="portfolio__item-cta">
        <a
          href={pro.github}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={pro.link}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>
    </article>
  ));

  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>

      <div className="container portfolio__container">{soloProjectItems}</div>
    </section>
  );
};

export default Portfolio;
