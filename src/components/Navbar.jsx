import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link" onClick={closeMenu}>
          🏠
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className="navbar-right">
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/head-tail" className="navbar-link">
          Head & Tail
        </Link>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/head-tail" onClick={closeMenu}>
          Head & Tail
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
