import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Explore from "../components/Explore";
//imports

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Explore />
      {/* lets me use other funcs in here */}
    </>
  );
};

export default Home;
//allow me to use this file in other files
