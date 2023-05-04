import React from 'react';
import { Link } from "react-router-dom";
const Explore = () => {
    return(
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>Get in <span className='purple'> Touch</span></h2>
                    <h3>We are available at all times, and Will contact u right back as soon as possible</h3>
                    <Link to="/books">
                        <button className='about__btn btn'>We would love to hear from you</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;