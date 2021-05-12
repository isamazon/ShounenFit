import React, { useEffect } from "react";
// CSS/assets
import "../../CSS/male/MHAM.css";
// Dependencies
import AOS from "aos";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
// pics
import deku from "../../assets/dekuHC.png";

function Charselect(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container className="char-selec-con">
      <Row className="char-selec-row">
        <Col aos-data="fade-up" md={4} sm={6} className="char-selec-col">
          <Link
            to={props.charpath1}
            className={props.charclass1}
            data-aos="fade-up"
          ></Link>
        </Col>
        <Col md={4} sm={6} className="char-selec-col">
          <Link
            to={props.charpath2}
            className={props.charclass2}
            data-aos="fade-up"
          ></Link>
        </Col>
        <Col md={4} sm={6} className="char-selec-col">
          <Link
            to={props.charpath3}
            className="char-link char-3"
            data-aos="fade-up"
          ></Link>
        </Col>

        <Col md={4} sm={6} className="char-selec-col"></Col>
        <Col md={4} sm={6} className="char-selec-col"></Col>
        <Col md={4} sm={6} className="char-selec-col"></Col>
      </Row>
    </Container>
  );
}

export default Charselect;
