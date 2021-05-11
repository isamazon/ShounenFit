import React from "react";
// Components
import Heropage from "./components/heropage";
import Nav from "./components/navbar";
import Landingpage2 from "./components/landingpage2/landingpage2";
import Landingpage3 from "./components/landingpage3/landingpage3";
import LazyLoad from "react-lazy-load";
function Home() {
  return (
    <div className="home-container">
      <Heropage />
      <LazyLoad>
        <Landingpage2 />
      </LazyLoad>
      <Landingpage3 />
    </div>
  );
}

export default Home;
