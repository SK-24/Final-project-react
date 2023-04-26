import react from 'react';
import Background from '../assets/Background.png';
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Welcome to Dawat-e-islami</h1>
                        <h2> find ur dream books with <span className="purple">Library</span></h2>
                        <Link to="#features">
                            <button className='btn'> About Us</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={Background} alt="" />

                    </figure>
                </div>
                
            </header>
        </section>
    );
}

export default Landing;