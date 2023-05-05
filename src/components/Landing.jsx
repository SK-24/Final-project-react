import react from "react";
import Background from "../assets/Background.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Calendar Web-Page for <span >Dawat-e-islami</span> </h1>
            <h3 className="header__sub">
              We are a globally renowned, peaceful, Islamic,
              non-political organisation working to  <span className="purple">convey the message of the
              Quran and Sunnah.</span>
            </h3>
            <a href="#features">
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={Background} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
