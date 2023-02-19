import './App.css';
import logo from './assets/logo.svg';
import stars from './assets/stars.png';
import logoHoriz from './assets/logo-horiz.svg';
import iconsearch from './assets/icon-search.svg';
import iconcircle from './assets/icon-circle.svg';
import iconcart from './assets/icon-cart.svg';
import coffee1 from './assets/coffee1.png';
import coffee2 from './assets/coffee2.png';
import coffee3 from './assets/coffee3.png';
import coffee4 from './assets/coffee4.png';
import coffee5 from './assets/coffee5.png';
import coffee6 from './assets/coffee6.png';
import coffee7 from './assets/coffee7.png';
import coffee8 from './assets/coffee8.png';
import coffee9 from './assets/coffee9.png';
import coffee10 from './assets/coffee10.png';
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
      <div className='our-coffee-box grid-container'>
        <h1 className='our-coffee-text'>OUR COFFEES</h1>
        <p className='our-coffee-paragraph'> Be inspired by the lives of the saints and energized by our coffee.    We combine each of our
          delicious coffees with an extraordinary saint, making every roast a speical treat for any
          Catholic who loves quality coffee. 
        </p>
      </div>
      <div className='button1-move'>
      <button class="button1">Sort By: Featured</button>
      <button class="button2">Sort By: Featured</button>
      </div>
      <div className='button3-move'>
      
      <button class="button3">View: 12</button>
      </div>
                  
      <div className='products-container'>

        <div className='coffee-product'>
         <img src={coffee1} alt="coffee1"/> 
         <h3> Our Lady of Guadalupe Mexican Mocha </h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars"/>
         <button class="button4">BUY NOW</button>
         </div>

         <div className='coffee-product'>
         <img src={coffee2} alt="coffee2"/> 
         <h3> St. Padre Pio Espresso Roast </h3>
         <p1> Medium/Dark Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div>   

        <div className='coffee-product'> 
         <img src={coffee3} alt="coffe3" /> 
         <h3> St. Therese of Lisieux Light Roast</h3>
         <p1> Light Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div> 

          <div className='coffee-product'>
         <img src={coffee4} alt="coffee4"/> 
         <h3> St. Patrick Irish Cream </h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars"/>
         <button class="button4">BUY NOW</button>
         </div>

         <div className='coffee-product'>
         <img src={coffee5} alt="coffee5"/> 
         <h3> St. Valentine Raspberry White Mocha </h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div>   

        <div className='coffee-product'> 
         <img src={coffee6} alt="coffe6" /> 
         <h3> St. Peter Parish Roast</h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div> 

          <div className='coffee-product'>
         <img src={coffee7} alt="coffee7"/> 
         <h3> St. Nicholas Christmas Blend</h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars"/>
         <button class="button4">BUY NOW</button>
         </div>

         <div className='coffee-product'>
         <img src={coffee8} alt="coffee8"/> 
         <h3>St. Michael Dark Roast</h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div>   

        <div className='coffee-product'> 
         <img src={coffee9} alt="coffee9" /> 
         <h3> Sleeping St. Joseph Decaf</h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
         </div>  

           <div className='coffee-product'> 
         <img src={coffee10} alt="coffee10" /> 
         <h3> St. Joan of Arc French Blend</h3>
         <p1> Medium Roast</p1>
         <h2> $14.95 </h2>
         <img src={stars} alt="stars" className="stars" />
         <button class="button4">BUY NOW</button>
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