import react from "react";
import Background from "../assets/Background.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to Dawat-e-islami</h1>
            <h2>
              {" "}
              We are a globally renowned, peaceful, Islamic,
              non-political organisation working to  <span className="purple">convey the message of the
              Quran and Sunnah.</span>
            </h2>
            <a href="#features">
              <button className=" about__btn btn"> About Us</button>
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
