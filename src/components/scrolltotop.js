import { Component } from "react";
// CSS
import "../CSS/backbutton.css";
// Icons
import { FaArrowCircleUp } from "react-icons/fa";
// Dependencies
import { Link } from "react-scroll";
class Scrolltop extends Component {
  render() {
    return (
      <div>
        <Link
          className={this.props.scrolltopclass}
          to={this.props.scrollTo}
          spy={true}
          smooth={true}
        >
          <FaArrowCircleUp size="50px" className={this.props.arrowup} />
        </Link>
      </div>
    );
  }
}

export default Scrolltop;
