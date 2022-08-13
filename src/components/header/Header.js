import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.scss";

import logo from "../../assets/ArchiWeb-logo.jpg";
import { useState } from "react";

const Header = () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul className={menuActive ? "menu active" : "menu"}>
              <li className="menu__item">
                <a href="#a">Home</a>
              </li>
              <li className="menu__item">
                <a href="#a">Projects</a>
              </li>
              <li className="menu__item">
                <a href="#a">About</a>
              </li>
              <li className="menu__item">
                <a href="#a">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="menu-toggle__btn" onClick={toggleMenu}>
            {menuActive ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
