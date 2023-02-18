import './App.css';
import logo from './assets/logo.svg';
import logoHoriz from './assets/logo-horiz.svg';
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
          <img src={logo} alt="logo" className="logo" />
          <img src={logoHoriz} alt="logo" className="logo-mobile" />
          <div className="nav-container">
            <img src={iconsearch} alt="download" className="nav-icon" />
            <img src={iconcircle} alt="download" className="nav-icon" />
            <img src={iconcart} alt="download" className="nav-icon nav-icon-cart" />
          </div>
        
          <nav className="menu-toggle" onClick={handleClick}>
              {/* Hamburger icon */}
              <div className="hamburger">
                {click ? (
                  <FaTimes size={20} style={{ color: "#E9DDC7" }} />
                ) : (
                  <FaBars size={20} style={{ color: "#E9DDC7" }} />
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
                    THE SAINTS
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
      <nav className={click ? "mobile-nav active" : "mobile-nav"}>
        <div>
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
                THE SAINTS
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
      <div className='purple-bar'>
        <h3 className='text-purle-bar'>FREE SHIPPING ON ORDERS OVER $50</h3>
      </div>
      <div className='our-coffee-box'>
        <h1 className='our-coffee-text'>OUR COFFEES</h1>
      </div>
      <div
        className={click ? "overlay active" : "overlay"}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Navbar;