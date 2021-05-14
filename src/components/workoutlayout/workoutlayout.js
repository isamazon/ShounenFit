import React, { Component, useEffect } from "react";
// Dependancies
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import AOS from "aos";
// CSS
import "../../CSS/workouts/workoutlayout.css";
// components
import Workoutaccord from "./workoutaccordion";
import LazyLoad from "react-lazy-load";

function Workoutlayout(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <Container fluid className="cont-fluid">
        <Container className="cont-inner-main">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className={props.workoutHeader}
          >
            {props.workoutH1}
          </h1>
          {/* Workout 1 */}
          <Row
            className={props.row1}
            data-aos="flip-up"
            data-aos-duration="1500"
          >
            {/* Workout picture */}
            <Col md={5} xs={12} className="col-1">
              {props.svg}
            </Col>
            {/* Workout desc */}
            <Col md={7} xs={12} className="col-2">
              <h1 className={props.h1Color}> {props.bodypartworkout1}</h1>
              <p className={props.pClass}>{props.workoutDesc1}</p>
            </Col>
            {/* Accordion Column */}
            <Col md={12} xs={12} className="col-3">
              <Accordion className="accordion-1">
                <Card className="card-1">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="accordion-toggle"
                  >
                    Click here for workout
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Workoutaccord
                      row={props.row}
                      setH1={props.setH1}
                      bodypartworkout1={props.bodypartworkout1}
                      workoutGif={props.workoutGif}
                      workoutGif2={props.workoutGif2}
                      workoutGif3={props.workoutGif3}
                      workoutGif4={props.workoutGif4}
                      workoutGif5={props.workoutGif5}
                      workoutGif6={props.workoutGif6}
                      ownershipP={props.ownershipP}
                      workoutTitle={props.workoutTitle}
                      workoutTitle2={props.workoutTitle2}
                      workoutTitle3={props.workoutTitle3}
                      workoutTitle4={props.workoutTitle4}
                      workoutTitle5={props.workoutTitle5}
                      workoutTitle6={props.workoutTitle6}
                      workoutDescription1={props.workoutDescription1}
                      workoutDescription2={props.workoutDescription2}
                      workoutDescription3={props.workoutDescription3}
                      workoutDescription4={props.workoutDescription4}
                      workoutDescription5={props.workoutDescription5}
                      workoutDescription6={props.workoutDescription6}
                      workouth1class={props.workouth1class}
                      workoutpclass={props.workoutpclass}
                      repeatH1={props.repeatH1}
                      finishh1={props.finishh1}
                      abstoclass={props.abstoclass}
                    />
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Workoutlayout;
