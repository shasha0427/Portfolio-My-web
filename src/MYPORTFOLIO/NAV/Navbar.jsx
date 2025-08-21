// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Updated
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.Nav}>
      <div className={styles.head}>Shasha</div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles.links} ${isActive ? styles.activeLink : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `${styles.links} ${isActive ? styles.activeLink : ''}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${styles.links} ${isActive ? styles.activeLink : ''}`}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.links} ${isActive ? styles.activeLink : ''}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      <li>
  <a
    href="/MEER_SHASHAVALI.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.links} ${styles.resumeLink}`}
    onClick={closeMenu}
  >
    Resume
  </a>
</li>

      </ul>
    </nav>
  );
};

export default Navbar;
