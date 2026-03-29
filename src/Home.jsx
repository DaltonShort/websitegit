import React from 'react';

import { FaUserCircle } from 'react-icons/fa';

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <FaUserCircle size={96} className="hero-avatar" />
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
    </section>
  );
}

export default Home;
