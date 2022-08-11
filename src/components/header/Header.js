import "./Header.scss";

import logo from "../../assets/ArchiWeb-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul className="menu">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
