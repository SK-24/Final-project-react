import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Dawateislami_logo.png";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/init";
//imports

const Nav = () => {
  const [verify, setVerify] = useState(null);
  function openMenu() {
    document.body.classList += "menu--open";
  }
  //   variables being used below

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  function toggleDarkMode() {
    document.querySelector("body").classList.toggle("dark-theme");
  }

  useEffect( () => {
    const authenticate = onAuthStateChanged( auth, (user) => {
      if (user) {
        setVerify(user);
      }
      else {
        setVerify(null);
        
      }
    });
    
    return() => {
      authenticate();
    };

  },[]);

  return (
    <nav>
      <div className="nav_container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav_links">
          <li className="nav_list">
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/contact" className="nav_link">
              Contact Us
            </Link>
          </li>
          {
            verify ? <li className="nav_list">
            <Link to="/dashboard" className="nav_link">
              Dashboard
            </Link>
          </li>
          :
          <>
          <li className="nav_list">
            <Link to="/login" className="nav_link">
              Login
            </Link>
          </li>
          </>
          }
          <li className="nav_list click" onClick={toggleDarkMode}>
            <a
              href="#"
              className="nav_link--dark nav_link"            >
            <FontAwesomeIcon icon="adjust"> </FontAwesomeIcon>        
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu_backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu_links">
            <li className="menu_list">
              <a href="/" className="menu_links nav_link">
                Home
              </a>
            </li>
            <li className="menu_list">
              <a href="/contact" className="menu_links nav_link">
                Contact Us
              </a>
            </li>
            <li className="menu_list">
              <a href="/login" className="menu_links nav_link">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
//allow me to use this file in other files^