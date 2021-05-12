import React, { Component } from "react";
// Dependancies
import AOS from "aos";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
// CSS
import "../CSS/heropage.css";
// Media
import video1 from "../assets/maleshounenmp4.mp4";
import video2 from "../assets/SFfinalvideo2.mp4";
import poster from "../assets/SFfinalvideo2.png";
// Components
import Func1 from "./heropagefunc1";

class Heropage extends React.Component {
  render() {
    return (
      <div className={this.props.sectionheropage}>
        <LazyLoad>
          <video
            className="video1"
            poster={poster}
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={video2} type="video/mp4" />
          </video>
        </LazyLoad>
        <Func1 />
        <div className="button-container">
          <div className="gender-button">
            <Link to="/maleshounen" className="male">
              Male shounen
            </Link>
          </div>
          <div className="gender-button">
            <Link to="/femaleshounen" className="female">
              Female shounen
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Heropage;
