import React from "react";
import Logo from "../assets/Dawateislami_logo.png";
import { Link } from "react-router-dom";
//imports

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a href="#features" className="footer__link">
              About
            </a>
            <Link to="/books" className="footer__link">
              Contact Us
            </Link>
          </div>
          <div className="footer__copyright"> &copy;2023 Dawat-e-islami</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//allow me to use this file in other files^