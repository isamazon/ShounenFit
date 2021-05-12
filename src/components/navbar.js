import React, { useState } from "react";
// Dependencies
import { Link } from "react-router-dom";
// Components
import Dropdown from "./Dropdown";
// CSS
import "../CSS/navbar.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // Active navbar stat
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="/" className="brand">
        ShounenFit
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        {/* Dropdown 1 */}
        <li className="nav-item">
          <Link
            to="/Maleshounen"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Male Shounen
          </Link>
        </li>
        {/* Dropdown 2 */}
        <li className="nav-item">
          <Link
            to="/Femaleshounen"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Female Shounen
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
