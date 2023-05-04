import React from "react";

const Featured = () => {
  return (
    <section id="features">
      <div className="container__p">
        <div className="row">
          <h2 className="section__title">
            About <span className="purple">Us</span>
          </h2>
          <div className="books">
            <div className="book">
              <a href="">
                <figure className="book__img--wrapper"></figure>
              </a>
              <div className="boxes">
                <h5 className="leftbox">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  impedit, incidunt placeat sint libero temporibus sit modi
                  maxime quia tempore facilis illo voluptates a dolore
                  consequatur perferendis laboriosam nobis dolor accusantium
                  cupiditate voluptatum. Omnis minima accusamus odit, deserunt
                  aspernatur fugit! Placeat rem sed ut, voluptate eligendi
                  similique! Vitae, quis natus?
                </h5>
                <h5 className="middlebox">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  impedit, incidunt placeat sint libero temporibus sit modi
                  maxime quia tempore facilis illo voluptates a dolore
                  consequatur perferendis laboriosam nobis dolor accusantium
                  cupiditate voluptatum. Omnis minima accusamus odit, deserunt
                  aspernatur fugit! Placeat rem sed ut, voluptate eligendi
                  similique! Vitae, quis natus?
                </h5>
                <h5 className="rightbox">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  impedit, incidunt placeat sint libero temporibus sit modi
                  maxime quia tempore facilis illo voluptates a dolore
                  consequatur perferendis laboriosam nobis dolor accusantium
                  cupiditate voluptatum. Omnis minima accusamus odit, deserunt
                  aspernatur fugit! Placeat rem sed ut, voluptate eligendi
                  similique! Vitae, quis natus?
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
