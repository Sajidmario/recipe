import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import myImage from '../image/recipe-logo.png';
// import sampleVideo from '../video/logo2.mp4';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        
      <img className='recipe_logo' src={myImage} alt="description" />
      {/* Recipe Finder */}

      {/* <video className='recipe_video_logo' autoPlay muted>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search for recipes..." />
        <button style={{}}>
      {/* <FontAwesomeIcon icon={faSearch} /> */}
    </button>

      </div>

      <div className="sign-in">
        <button>
    Sign IN
    </button>
      </div>

      <div className="register">
        <button>
    Register
    </button>
    </div>

    </nav>
  );
}

export default Navbar;
