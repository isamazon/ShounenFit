import React, { useEffect } from "react";
// Components

// Dependencies

import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { Container, Col, Row } from "react-bootstrap";
// CSS/assets
import "../CSS/animeselection.css";

import aot from "../assets/aottitlecard.png";
import mha from "../assets/mhatitlecard.png";
import jujutsu from "../assets/jujutsukaisentitlecard.png";

function Selection() {
  return (
    <Container className="inner-selection-cont">
      <Row className="selection-row">
        <Col xl={6} md={12} className="anime-col-1">
          <div className="anime-1-btn">
            <LazyLoad>
              <Link to="/MHAM" className="anime-link-1">
                <img src={mha} className="link-img" alt="" />
              </Link>
            </LazyLoad>
          </div>
        </Col>
        <Col xl={6} md={12} className="anime-col-1">
          <div className="anime-1-btn">
            <LazyLoad>
              <Link to="/Equipment" className="anime-link-2">
                <img src={aot} className="link-img" alt="" />
              </Link>
            </LazyLoad>
          </div>
        </Col>
        <Col xl={6} md={12} className="anime-col-1">
          <div className="anime-1-btn">
            <LazyLoad>
              <Link className="anime-link-2">
                <img src={jujutsu} className="link-img" alt="" />
              </Link>
            </LazyLoad>
          </div>
        </Col>
        <Col xl={6} md={12} className="anime-col-1">
          <div className="anime-1-btn">
            <LazyLoad>
              <Link className="anime-link-2">
                <img src={jujutsu} className="link-img" alt="" />
              </Link>
            </LazyLoad>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Selection;
