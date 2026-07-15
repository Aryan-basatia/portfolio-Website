import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="nav-brand">
        <h2>Aryan Basatia</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#works" onClick={(e) => handleNavClick(e, "works")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
