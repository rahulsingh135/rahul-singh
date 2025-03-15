import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top"
        id="main-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1>
              <span>Rahul</span>
            </h1>
          </a>

          <div className="navbar-toggle" onClick={toggleMenu}>
            <div
              className={`slicknav_btn ${
                isMenuOpen ? "slicknav_open" : "slicknav_collapsed"
              }`}
            >
              <span className="slicknav_icon">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </div>
          </div>

          <div
            className={`navbar-collapse ${isMenuOpen ? "show" : "collapse"}`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" onClick={closeMenu} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeMenu} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeMenu} href="#services">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeMenu} href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeMenu} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeMenu} href="#achvm">
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`responsive-menu ${isMenuOpen ? "d-md-none" : "d-none"}`}
          >
            <ul className="slicknav_nav">
              <li>
                <a href="#home" onClick={closeMenu}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>About</a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>Skills</a>
              </li>
              <li>
                <a href="#resume" onClick={closeMenu}>Resume</a>
              </li>
              <li>
                <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
              </li>
              <li>
                <a href="#achvm" onClick={closeMenu}>Achievements</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
