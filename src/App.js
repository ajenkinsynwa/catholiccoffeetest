import './App.css';
import logo from './assets/logo.svg';
import iconsearch from './assets/icon-search.svg';
import iconcircle from './assets/icon-circle.svg';
import iconcart from './assets/icon-cart.svg';
import { useState } from "react";
import { FaBars, FaTimes,} from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header scrolled" : "header"}>
      <div className="banner1">
        <div>
          <img src={logo} alt="download" className="logo" />
          <img src={iconsearch} alt="download" className="icons1" />
          <img src={iconcircle} alt="download" className="icons2" />
          <img src={iconcart} alt="download" className="icons3" />
        
          <nav className="menu-toggle" onClick={handleClick}>
              {/* Hamburger icon */}
              <div className="hamburger">
                {click ? (
                  <FaTimes size={20} style={{ color: "brown" }} />
                ) : (
                  <FaBars size={20} style={{ color: "brown" }} />
                )}
              </div>
         
            <div className={click ? "menu-container active" : "menu-container"}>
              <ul>
                <li>
                  <a className='' href="/" onClick={handleClick}>
                    OUR COFFEES
                  </a>
                </li>
                <li>
                  <a href="/" onClick={handleClick}>
                    GIFT SETS
                  </a>
                </li>
                <li>
                  <a href="/" onClick={handleClick}>
                    MERCHANDISE
                  </a>
                </li>
                <li>
                  <a href="/" onClick={handleClick}>
                    SUBSCRIPTIONS
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={click ? "overlay active" : "overlay"}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Navbar;