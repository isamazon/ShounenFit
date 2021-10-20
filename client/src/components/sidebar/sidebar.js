import React, { useState } from 'react';
import './sidebar.css';
// Dependencies
import { Link } from 'react-router-dom';
// icons
import { GrAddCircle } from 'react-icons/gr';
import {
  FaDumbbell,
  FaHome,
  FaQuestion,
  FaRegHeart,
  FaHistory,
  FaCog,
  FaCaretRight,
  FaPlus,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { BsGridFill } from 'react-icons/bs';
function Sidebar(props) {
  const [sideMenu, setSideMenu] = useState(false);
  const ToggleMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className="sidebar-container">
      <div className="inner-sidebar">
        <h1 className="shonenfit-icon">SF</h1>
        <div className="side-bar-items">
          <Link to="/" className="side-bar-item">
            <FaHome className="sidebar-icon" style={props.iconcolor} />
            <p className="sidebar-p">Home</p>
          </Link>
          <Link to="/dashboard" className="side-bar-item">
            <BsGridFill className="sidebar-icon" style={props.iconcolor} />
            <p className="sidebar-p">Dashboard</p>
          </Link>
          <div className="side-bar-item" onMouseEnter={ToggleMenu}>
            <FaDumbbell className="sidebar-icon" style={props.iconcolor} />
            <p className="sidebar-p">Workouts</p>
            <FaCaretRight className="openmenu-icon" style={props.iconcolor} />
          </div>
          {/* Side Menu */}
          <div
            className={sideMenu ? 'side-menu' : 'none'}
            onMouseLeave={ToggleMenu}
          >
            <Link to="/animeselection" className="side-bar-item first">
              <FaPlus
                className="sidebar-icon question"
                style={props.iconcolor}
              />
              <p className="sidebar-p">New workout</p>
            </Link>
            <Link className="side-bar-item">
              <FaHistory
                className="sidebar-icon question"
                style={props.iconcolor}
              />
              <p className="sidebar-p">Recent</p>
            </Link>
            <Link className="side-bar-item last">
              <FaRegHeart
                className="sidebar-icon question"
                style={props.iconcolor}
              />
              <p className="sidebar-p">Favorites</p>
            </Link>
          </div>
          <Link className="side-bar-item">
            <FaQuestion
              className="sidebar-icon question"
              style={props.iconcolor}
            />
            <p className="sidebar-p">How to use</p>
          </Link>
        </div>
        <div className="lowerlinks">
          <Link className="bottom-items">
            <FaCog className="sidebar-icon question" style={props.iconcolor} />
            <p className="sidebar-p">Settings</p>
          </Link>
          <Link className="bottom-items">
            <FiLogOut
              className="sidebar-icon question"
              style={props.iconcolor}
            />
            <p className="sidebar-p">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
