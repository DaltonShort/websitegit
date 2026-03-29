import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Miscellaneous from './Miscellaneous';
import Login from './Login';
import './App.css';

function Navbar() {
  const location = useLocation();
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">John Doe</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/miscellaneous" className={location.pathname === '/miscellaneous' ? 'active' : ''}>Miscellaneous</Link></li>
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
