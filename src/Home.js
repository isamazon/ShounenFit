import React from "react";
// Components
import Heropage from "./components/heropage";
import Nav from "./components/navbar";
import Landingpage2 from "./components/landingpage2/landingpage2";
import Landingpage3 from "./components/landingpage3/landingpage3";
import LazyLoad from "react-lazy-load";
import ReactFullpage from "@fullpage/react-fullpage";
function Home() {
  return (
    <div className="home-container">
      <Heropage sectionheropage="landing-page-container section" />
      <Landingpage2 sectionlp2="page-2-fluid section" />
      <Landingpage3 />
    </div>
  );
}

export default Home;
