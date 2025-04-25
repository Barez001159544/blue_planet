import { useState } from "react";
import "./Components/NavigationBar.css";

import close from"../../Assets/Icons/cancel.png";
import menu from"../../Assets/Icons/menu.png";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div onClick={toggleMenu} className="logo">
        The Blue Planet
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#info" onClick={() => setMenuOpen(false)}>
            Our Planet
          </a>
        </li>
        <li>
          <a href="#recent" onClick={() => setMenuOpen(false)}>
            Recent Techs
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </li>
        <img className = "close" onClick={toggleMenu} src={close} alt="" />
      </ul>
    </nav>
  );
};

export default NavigationBar;
