import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            What does the Calendar <span className="purple--d">offer?</span>
          </h2>
          <div className="highlight__wrapper">
            <p className="highlight__para">
              <div className="highlight__title">Efficient scheduling:</div>
              Effortlessly schedule appointments and meetings with your
              coleagues
            </p>
            <p className="highlight__para">
            <div className="highlight__title">Improved time management:</div>
              A clear perspective of your calendar
              allows you to prioritise things and manage your time more
              efficiently.
            </p>
            <p className="highlight__para">
            <div className="highlight__title">Improved organisation:</div>
              A calendar generator assists you by
              organising your schedule and duties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
