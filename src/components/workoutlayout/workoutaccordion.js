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
            <LazyLoad>
              <img
                src={this.props.workoutGif}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </LazyLoad>
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
            <LazyLoad>
              <img
                src={this.props.workoutGif2}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </LazyLoad>
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
            <LazyLoad>
              <img
                src={this.props.workoutGif3}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </LazyLoad>
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
          <h1 className={this.props.repeatH1}>
            Repeat set 3x, then move on to next set
          </h1>
        </Row>
        {/* Row 4 */}
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <LazyLoad>
              <img
                src={this.props.workoutGif4}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </LazyLoad>
            <p className="ownership-p">{this.props.ownershipP}</p>
          </Col>
          <Col md={7} xs={12} className="acc-col-2">
            <h1 className={this.props.workouth1class}>
              {this.props.workoutTitle4}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription4}
            </p>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}

export default Workoutaccord;
