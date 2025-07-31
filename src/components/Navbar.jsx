import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Get the base URL for the resume link
  const getResumeUrl = () => {
    // For Vite, use import.meta.env.BASE_URL instead of process.env.PUBLIC_URL
    const baseUrl = import.meta.env.BASE_URL || '';
    return `${baseUrl}Nandan_Dave_Resume.pdf`;
  };

  return (
    <nav className="text-white shadow-md fixed w-full z-50 top-0" style={{background: `linear-gradient(to right, #0f1419, #1c2128)`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" style={{color: '#f0f9ff'}}>
          Nandan Dave
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/journey"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              My Journey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              My Projects
            </NavLink>
          </li>
          <li>
            <a
              href={getResumeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{color: '#f0f9ff'}}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => e.target.style.color = '#f0f9ff'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden text-white text-center shadow-md py-4 space-y-3" style={{backgroundColor: '#0f1419'}}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/journey"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              My Journey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "" : ""
              }
              style={({ isActive }) => ({
                color: isActive ? '#14b8a6' : '#f0f9ff'
              })}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => {
                const isActive = e.target.getAttribute('aria-current') === 'page';
                e.target.style.color = isActive ? '#14b8a6' : '#f0f9ff';
              }}
            >
              My Projects
            </NavLink>
          </li>
          <li>
            <a
              href={getResumeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{color: '#f0f9ff'}}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => e.target.style.color = '#f0f9ff'}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;