import React, { Component } from "react";
// Dependancies
import { Accordion, Card, Col, Row } from "react-bootstrap";

import LazyLoad from "react-lazy-load";
// CSS
import "../../CSS/workouts/workoutlayout.css";
// Assets

class Workoutaccord extends Component {
  render() {
    return (
      <Card.Body className="card-body">
        <h1 className={this.props.setH1}>Set 1</h1>
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <img
              src={this.props.workoutGif}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
              }}
              alt=""
            />
            <p className="ownership-p">{this.props.ownershipP}</p>
          </Col>
          <Col md={7} xs={12} className="acc-col-2">
            <h1 className={this.props.workouth1class}>
              {this.props.workoutTitle}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription}
            </p>
          </Col>
        </Row>
        {/* Row 2 */}
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <img
              src={this.props.workoutGif2}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
              }}
              alt=""
            />
            <p className="ownership-p">{this.props.ownershipP}</p>
          </Col>
          <Col md={7} xs={12} className="acc-col-2">
            <h1 className={this.props.workouth1class}>
              {this.props.workoutTitle2}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription}
            </p>
          </Col>
        </Row>
        {/* Row 3 */}
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <img
              src={this.props.workoutGif3}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
              }}
              alt=""
            />
            <p className="ownership-p">{this.props.ownershipP}</p>
          </Col>
          <Col md={7} xs={12} className="acc-col-2">
            <h1 className={this.props.workouth1class}>
              {this.props.workoutTitle3}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription}
            </p>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}

export default Workoutaccord;
