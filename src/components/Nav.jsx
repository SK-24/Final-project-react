import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Dawateislami_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  function toggleDarkMode() {
    document.querySelector("body").classList.toggle("dark-theme");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="nav__link">
              Contact Us
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
          <li className="nav__list click" onClick={toggleDarkMode}>
            <a
              href="#"
              className="
            nav__link--dark nav__link
          "
            >
              <i class="fas fa-adjust"></i>
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__links nav__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/contact" className="menu__links nav__link">
                Contact Us
              </a>
            </li>
            <li className="menu__list">
              <a href="/login" className="menu__links nav__link">
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
