import React, { Component } from "react";
// Dependencies
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// CSS
import "../CSS/backbutton.css";

class Backbutton extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }
  render() {
    const btnClass = this.state.isHovered
      ? "backbtn"
      : "backbtn backbtn-closed";
    const showTxt = this.state.isHovered ? "go-back-show" : "go-back-none";
    const arrow = this.state.isHovered ? "arrow-icon-hovered" : "arrow-icon";

    return (
      <div className="backbutton-cont">
        <div
          className={btnClass}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <Link className="link-back" to={this.props.backroute}>
            <span className={showTxt}>Go Back</span>
            <FaArrowLeft className={arrow} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Backbutton;
