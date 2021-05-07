import React, { Component } from "react";
// Dependancies
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
// CSS
import "../CSS/workouts/workoutlayout.css";
// Assets
// Workout gifs
import chestband1 from "../assets/workoutvids/bandchest1.gif";

class Workoutaccord extends Component {
  render() {
    return (
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
            <Card.Body className="card-body">
              <h1 className={this.props.setH1}>Set 1</h1>
              <Row className="acc-row-1">
                <Col md={5} xs={12} className="acc-col-1">
                  <img
                    src={this.props.workoutGif}
                    className={this.props.wrokoutGifclass}
                    alt=""
                  />
                </Col>
                <Col md={7} xs={12} className="acc-col-2">
                  <h1>Workout details</h1>
                  <p>workout details paragraph</p>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default Workoutaccord;
