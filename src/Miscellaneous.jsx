import React from 'react';

import { FaFilm, FaRobot } from 'react-icons/fa';

const miscProjects = [
  {
    title: 'Video Editing',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: <FaFilm size={32} />,
  },
  {
    title: 'AI Image Generation',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    icon: <FaRobot size={32} />,
  },
];

function Miscellaneous() {
  return (
    <section className="misc-section">
      <h1>Miscellaneous Projects</h1>
      <div className="projects-grid">
        {miscProjects.map((project, idx) => (
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

export default Miscellaneous;
