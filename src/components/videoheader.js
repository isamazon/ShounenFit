import React, { Component } from "react";
// Dependencies'
import LazyLoad from "react-lazy-load";

// CSS/assets
import "../CSS/male/MHAM.css";

class Videoheader extends Component {
  render() {
    return (
      <div className="mha-cont-m">
        <div className="main-container">
          <div className="blurred-video">
            <LazyLoad>
              <video
                className="video1"
                poster={this.props.posterimg}
                playsInline
                autoPlay
                loop
                muted
              >
                <source src={this.props.video} playsInline type="video/mp4" />
              </video>
            </LazyLoad>
          </div>
          <div className="clear-video">
            <h1> Welcome {this.props.gender} shounen</h1>

            <video
              className="video1"
              playsInline
              poster={this.props.posterimg}
              autoPlay
              loop
              muted
            >
              <source src={this.props.video} playsInline type="video/mp4" />
            </video>
          </div>
          <h1 className="choose-h1">Choose Your anime</h1>
        </div>
      </div>
    );
  }
}

export default Videoheader;
