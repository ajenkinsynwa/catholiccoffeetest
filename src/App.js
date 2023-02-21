import './App.css';
import logo from './assets/logo.svg';
import logoHoriz from './assets/logo-horiz.svg';
import iconsearch from './assets/icon-search.svg';
import iconcircle from './assets/icon-circle.svg';
import iconcart from './assets/icon-cart.svg';
import iconsfbim from './assets/iconsfbim.svg';
import CoffeeProduct from './components/CoffeeProduct';
import coffeeData from './data/coffee.json';
import { useState } from "react";
import { FaBars, FaTimes,} from "react-icons/fa";



//-->This is a functional component in React that defines a Navbar and adds an event listener to the window object to change the color of the navbar based on the scroll position.
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


//-->This is the functional component in React first: This portion of the code creates a menu toggle button with a hamburger icon. When the button is clicked, the handleClick function is called which toggles the click state using setClick(!click).

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
         
            <div className='nav-main'>
              <ul className={click ? "menu-container active" : "menu-container"}>
                <li>
                  <a href="/" onClick={handleClick}>
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
              <a href="/" onClick={handleClick}>
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
      
 {/* purple bar with text and the buttons below the purple bar  */}
    <div className='purple-bar'>
        <h3 className='text-purle-bar'>FREE SHIPPING ON ORDERS OVER $50</h3>
    </div>
      <div className='our-coffee-box grid-container'>
          <h1 className='our-coffee-text'>OUR COFFEES</h1>
          <p className='our-coffee-paragraph'> Be inspired by the lives of the saints and energized by our coffee.    We combine each of our
          delicious coffees with an extraordinary saint, making every roast a speical treat for any
          Catholic who loves quality coffee. 
          </p>
    </div>
      <div className='button1-move'>
        <button class="button1">Sort By: FEATURED </button>
        <button class="button2">Sort By: SELECT SUBCATEGORY </button>
        <button class="button3">View: 12 </button>
    </div>

    {/* map over an array of coffeeData to generate individual CoffeeProduct components for display. */}
      <div className='products-container'>
        {coffeeData.map((coffee, index) => {
          return <CoffeeProduct coffee={coffee} key={index} />
        })}
      </div>
     
    <div
        className={click ? "overlay active" : "overlay"}
        onClick={handleClick}
      ></div>

  {/* footer links and icons  */}

<footer className="footer-banner">
    <div className='footer-links'>
        <ul className='footer-links'>
        <li>
          <a className='footer-links' href="/" onClick={handleClick}>
          OUR COFFEES
          </a>
        </li>
        <br></br>
        <li>
          <a className='footer-links' href="/" onClick={handleClick}>
            GIFT SETS
          </a>
        </li>
        <br></br>
        <li>
          <a className='footer-links' href="/" onClick={handleClick}>
            MERCHANDISE
          </a>
        </li>
        <br></br>
        <li>
          <a className='footer-links' href="/" onClick={handleClick}>
            THE SAINTS
          </a>
        </li>
        <br></br>
        <li>
          <a className='footer-links' href="/" onClick={handleClick}>
            SUBSCRIPTIONS
          </a>
        </li>
        </ul>
   </div>

  <div>
        <div className="">
          <h1 className="newsletter-text"> JOIN OUR NEWSLETTER </h1>
          <p1 className="newsletter-text2">Get Exclusive offers and stay up to day on new roasts and products.</p1>
        </div>

        <form class="button-newsletter">
          <input class="inputfield"type="text" placeholder="your@email.com" />
          <button class="button-newsletterJoin">Join</button>
        </form>

        <h3 className='follow-catholic'>Follow Catholic Coffee</h3> 

        <img src={iconsfbim} alt="download" className="social-media-icons" />

    </div>    
</footer>  
</div>
 

  );
};

export default Navbar;