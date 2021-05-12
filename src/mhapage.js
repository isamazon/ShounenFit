import React from "react";
// CSS
import "./CSS/male/MHAM.css";
import video1 from "./assets/maleshounenmp4.mp4";
import mha from "./assets/mhatitlecard.png";

// Dependencies
import AOS from "aos";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
// Components
import Nav from "./components/navbar";

import Backbutton from "./components/backbutton";
import Charselect from "./components/mha/characterselect";

function MHAM() {
  return (
    <div>
      <Backbutton backroute="/maleshounen" />
      <div className="mha-cont-m">
        <div className="blurred-video">
          <video className="video1" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="clear-video">
          <img src={mha} alt="" />
          <LazyLoad>
            <video className="video1" autoPlay playsInline loop muted>
              <source src={video1} type="video/mp4" />
            </video>
          </LazyLoad>
        </div>
        <h1>Choose your character</h1>
      </div>
      <Container fluid className="mha-cont">
        <Charselect
          charclass1="char-link char-1"
          charpath1="/deku-equip"
          charpath2="/allmightequipment"
          charclass2="char-link char-2"
          charpath3="/shotoequipment"
          charpath4="/bakugouequip"
        />
      </Container>
    </div>
  );
}

export default MHAM;
