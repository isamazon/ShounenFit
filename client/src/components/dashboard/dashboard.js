import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';
// Dependencies
import { Link } from 'react-router-dom';
// Icons
import { FaPlus, FaHistory } from 'react-icons/fa';
// pictures
import pfp from '../../assets/pfp.jpg';
function Dashboard() {
  return (
    <div className="parent-container">
      <Sidebar iconcolor={{ color: '#4cc9f0' }} />
      <div className="dashboard-container">
        <div className="profile-bar-container">
          <div className="profile-bar">
            <img src={pfp} alt="" className="profile-pic" />
            <p className="username">UserName</p>
            <div className="level">level: 0</div>
          </div>
        </div>
        <div className="dashboard-info-container">
          <div className="favorite-anime-container">
            <h1>your most popular anime workouts:</h1>
            <Link to="/animeselection" className="top-anime-empty">
              <FaPlus className="add-anime-icon" />
              <p>No workouts done yet click here to add one!</p>
            </Link>
            <div className="second-third-cnt">
              <Link to="/animeselection" className="second-third-empty left">
                <FaPlus className="add-anime-icon" />
                <p>Second most used anime</p>
              </Link>
              <Link to="/animeselection" className="second-third-empty right">
                <FaPlus className="add-anime-icon" />
                <p>Third most used anime</p>
              </Link>
            </div>
          </div>
          <div className="recent-workouts">
            <h1>Recent workouts:</h1>
            <div className="recent-container">
              <div className="empty-recent">
                <FaHistory className="add-anime-icon" />
                <p>once you finish a workout it'll appear here!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
