import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import myImage from '../image/recipe-logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="recipe_logo" src={myImage} alt="description" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search for recipes..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="auth-buttons">
        <button className="sign-in">Sign IN</button>
        <button className="register">
          <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
