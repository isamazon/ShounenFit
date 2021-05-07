import React, { Component, useEffect, useState } from "react";
// CSS
import "../../CSS/landingpage2/landingpage2.css";
// Dependancies
import { Container, Col, Row } from "react-bootstrap";
import { Slider } from "react-slick";
import { Link } from "react-router-dom";
// Components
import Heroslide from "../landingpage2/heroslide";
// Character imgs
import deku from "../../assets/icon/dekupng.png";
import mikasa from "../../assets/icon/mikasa.png";
import zenitsu from "../../assets/icon/zenitsu.png";
import eren from "../../assets/icon/eren.png";
import gojou from "../../assets/icon/gojoupng.png";
import bakugou from "../../assets/icon/bakugou.png";
import nezuko from "../../assets/icon/nezuko.png";
// Videos
// import video1 from '../../assets/circlevid.mp4'
import purplevideo from "../../assets/purpleblackcirclevid.mp4";
import greenvideo from "../../assets/greencirclevid.mp4";
import dekuvideo from "../../assets/dekucirclevid.mp4";
import redvideo from "../../assets/redcirclevid.mp4";
import goldvideo from "../../assets/goldcirclevid.mp4";
import orangevideo from "../../assets/orangecirclevid.mp4";
import bluevideo from "../../assets/blueblackcirclevid.mp4";
import yellowvideo from "../../assets/yellowcirclevid.mp4";
import pinkvideo from "../../assets/pinkcirclevid.mp4";
// Borders
import Wborder from "../../assets/icon/whitecircleframe.png";
import Bborder from "../../assets/icon/blackcircleframe.png";
// Charcter
import Dekusvg from "../../components/icons/deku";
import Zenitsusvg from "../../components/icons/zenitsu";
import Mikasasvg from "../../components/icons/mikasa";
import Erensvg from "../../components/icons/eren";
import Allmightsvg from "../../components/icons/allmight";
import Bakugousvg from "../../components/icons/bakugou";
import Nezukosvg from "../../components/icons/nezuko";
import Gojousvg from "../../components/icons/gojou";

class Landingpage2 extends React.Component {
  constructor() {
    super();
    this.state = {
      video: dekuvideo,
      charimg: deku,
      charName: "Dekus",
      nameClass: "h1-default dekuBG",
      path: "/deku-equip",
    };
  }

  render() {
    return (
      <Container fluid className="page-2-fluid">
        <Row className="row-1">
          <Col md={7} xs={12} className="col-2">
            <div className="char-slider">
              {/* video goes here */}
              <video
                className="video1"
                src={this.state.video}
                type="video/mp4"
                autoPlay
                loop
              ></video>
              <img src={Bborder} className="border-img" alt="" />
              <img className="char-img" src={this.state.charimg} alt="" />
            </div>
          </Col>
          <Col md={5} xs={12} className="col-1">
            <h1>Why shounen fit?</h1>
            <p>
              Almost every anime fan cant help to be inspired by every shounen
              protagonist that faces obstacles and overcomes them. Using anime
              as the cornerstone of this project is to inspire all anime fans to
              reach their goals and become the best shoune the can become
            </p>
            <div className="svg-btn-ctn">
              <Dekusvg
                onClick={() =>
                  this.setState({
                    video: dekuvideo,
                    charimg: deku,
                    nameClass: "h1-default dekuBG",
                    charName: "Dekus",
                  })
                }
                className="dekusvg"
                fill="#fff"
                height="50px"
              />
              <Zenitsusvg
                onClick={() =>
                  this.setState({
                    video: yellowvideo,
                    charimg: zenitsu,
                    nameClass: "h1-default zenitsuBG",
                    charName: "Zenitsu",
                  })
                }
                className="zenitsusvg"
                fill="#fff"
                height="50px"
              />
              <Mikasasvg
                onClick={() =>
                  this.setState({
                    video: redvideo,
                    charimg: mikasa,
                    nameClass: "h1-default mikasaBG",
                    charName: "Mikasas",
                  })
                }
                className="mikasasvg"
                fill="#fff"
                height="50px"
              />
              <Allmightsvg
                onClick={() =>
                  this.setState({
                    video: pinkvideo,
                    charimg: nezuko,
                    nameClass: "h1-default nezukoBG",
                    charName: "Nezukos",
                  })
                }
                className="allmightsvg"
                fill="#fff"
                height="50px"
              />
              <Erensvg
                onClick={() =>
                  this.setState({
                    video: greenvideo,
                    charimg: eren,
                    nameClass: "h1-default erenBG",
                    charName: "Erens",
                  })
                }
                className="erensvg"
                fill="#fff"
                height="50px"
              />
              <Bakugousvg
                onClick={() =>
                  this.setState({
                    video: orangevideo,
                    charimg: bakugou,
                    nameClass: "h1-default bakugouBG",
                    charName: "Bakugous",
                  })
                }
                className="bakugousvg"
                fill="#fff"
                height="50px"
              />
              <Gojousvg
                onClick={() =>
                  this.setState({
                    video: purplevideo,
                    charimg: gojou,
                    charName: "Gojous",
                    nameClass: "h1-default gojouBG",
                  })
                }
                className="gojousvg"
                fill="#fff"
                height="50px"
              />
            </div>
            <div className="hero-workout-btn">
              <Link to={this.state.path} className={this.state.nameClass}>
                Click here for {this.state.charName} workout
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landingpage2;
