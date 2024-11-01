import { useState } from "react";
import "./navbar.css";

const NavbarCom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <div className="ravindu">Ravindu</div>

        {/* Menu Icon for toggling */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        {/* Menu Items */}
        <ul className={`other ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarCom;
