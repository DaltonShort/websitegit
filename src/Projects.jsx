import React from 'react';

import { FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: 'Project Alpha 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <FaLaptopCode size={32} />,
  },
  {
    title: 'Project Beta',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaProjectDiagram size={32} />,
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h1>Software Engineering Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.icon}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
