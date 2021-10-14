import React from 'react';
import './sidebar.css';
// Dependencies
import { Link } from 'react-router-dom';
// icons
import { GrAddCircle } from 'react-icons/gr';
import { FaDumbbell, FaHome, FaQuestion, FaRegHeart } from 'react-icons/fa';
function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <div className="inner-sidebar">
        <h1 className="shonenfit-icon">SF</h1>
        <div className="side-bar-items">
          <Link className="side-bar-item">
            <FaHome className="sidebar-icon" style={props.iconcolor} />
            <p className="sidebar-p">Home</p>
          </Link>
          <Link className="side-bar-item">
            <FaDumbbell className="sidebar-icon" style={props.iconcolor} />
            <p className="sidebar-p">Workouts</p>
          </Link>
          <Link className="side-bar-item">
            <FaQuestion
              className="sidebar-icon question"
              style={props.iconcolor}
            />
            <p className="sidebar-p">How to use</p>
          </Link>
          <Link className="side-bar-item">
            <FaRegHeart
              className="sidebar-icon question"
              style={props.iconcolor}
            />
            <p className="sidebar-p">Favorites</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
