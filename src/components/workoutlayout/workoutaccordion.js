import React, { Component } from "react";
// Dependancies
import { Accordion, Card, Col, Row } from "react-bootstrap";
import Link from "react-scroll";
import LazyLoad from "react-lazy-load";
import { FaCheckCircle } from "react-icons/fa";
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
              {this.props.workoutDescription1}
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
              {this.props.workoutDescription2}
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
              {this.props.workoutDescription3}
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
        {/* Row 5 */}
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <LazyLoad>
              <img
                src={this.props.workoutGif5}
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
              {this.props.workoutTitle5}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription5}
            </p>
          </Col>
        </Row>
        {/* Row 6 */}
        <Row className={this.props.row}>
          <Col md={5} xs={12} className="acc-col-1">
            <LazyLoad>
              <img
                src={this.props.workoutGif6}
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
              {this.props.workoutTitle6}
            </h1>
            <p className={this.props.workoutpclass}>
              {this.props.workoutDescription6}
            </p>
          </Col>
          <div className="bottom-text-btn">
            <h1 className={this.props.finishh1}>
              Congratulations! you finished the {this.props.bodypartworkout1}
            </h1>
            <p className="abs-p">
              if youre feeling up to it try adding a ab exercise in this workout
              (try to work your core at least 2-3 times a week)
            </p>
            <div
              className={this.props.abstoclass}
              to={this.props.absto}
              spy={true}
              smooth={true}
            >
              Abs
            </div>
            <div className="finish-workout-button">
              <p className="complete-p">
                Click the checkmark to get rid of the workout if completed
              </p>
              <FaCheckCircle
                onClick={this.props.finishClick}
                className="finish-btn"
                size="40px"
              />
            </div>
          </div>
        </Row>
      </Card.Body>
    );
  }
}

export default Workoutaccord;
