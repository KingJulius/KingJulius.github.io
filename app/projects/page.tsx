import React from "react";
import { WEB_APPS } from "@/@/_data/projects";
import { ProjectCard } from "@/@/_components/project-card";

export default function Projects() {
  return (
    <React.Fragment>
      <section>
        <h1 className="mb-12 text-4xl font-bold tracking-tighter text-center text-gray-800 dark:text-white">My Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 mb-8"
        >
          {WEB_APPS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
