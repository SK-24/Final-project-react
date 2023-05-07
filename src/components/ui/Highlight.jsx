import React from "react";
//imports

const Highlight = ({ title, para }) => {
  return (
    <div className="highlight">
      <h3 className="highlight__subtitle"> {title}</h3>
      <p className="highlight__para">{para}</p>
    </div>
  );
};

export default Highlight;
//allow me to use this file in other files^