import React from 'react';
import Logo from "../assets/Dawateislami_logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img src={Logo} alt="" className='footer__logo--img'/>
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <a href="#features" className='footer__link'>About</a> 
                        <Link to="/books" className='footer__link'>Contact</Link> 
                    </div>
                    <div className="footer__copyright">Copyright &copy;</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;