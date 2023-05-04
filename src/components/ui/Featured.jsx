import React from "react";

const Featured = () => {
  return (
    <section id="features">
      <div className="container__p">
        <div className="row">
          <h2 className="section__title">
            About <span className="purple">Us</span>
          </h2>
          <div className="container">
            <div className="row">
              <div className="boxes">
                <h3 className="leftbox">
                  A globally renowned, non-political movement for the
                  propagation of the Quran and Sunnah. 
                  <br />
                  
                  Dawat-e-Islami is currently serving across more than 100 departments, focused on spiritual, educational and social reform by its ‘Call towards righteousness’. 
                  <br /> 
                   
                  <br />
                  “I must strive to reform myself and the
                  people of the entire world”.
                  <br />
                  
                </h3>
                <h3 className="middlebox">
                 Dawat-e-Islami is committed to promoting education and authentic religious guidance amongst humanity and a true, peaceful and beautiful picture of Islam.
                 <br />
                 The aim of Dawat-e-Islami is for humanity to
                  achieve personal and collective harmony based upon the mission statement below: 
                </h3>
                <h3 className="rightbox">
                  A Global Movement Dawat-e-Islami
                  was established in 1981 by his Eminence Maulana Muhammad Ilyas Qadri. 
                  He is a truly inspirational, far-sighted and visionary
                  individual who has changed the lives of millions across the world.
                  <br />
                He has given them a new purpose of life portrayed by
                  Islam, and helped make them constructive and valuable members of society.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
