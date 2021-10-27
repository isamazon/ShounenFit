import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';
// Dependencies
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// Icons
import { FaPlus, FaHistory } from 'react-icons/fa';

// components
import Recent from './emptyrecent';
import ProfileBar from './profilebar';
function Dashboard() {
  return (
    <div className="parent-container">
      <Sidebar iconcolor={{ color: '#4cc9f0' }} />
      <div className="dashboard-container">
        <ProfileBar />
        <div className="dashboard-info-container">
          <Fade>
            <div className="favorite-anime-container">
              <h1>Your most popular anime workouts:</h1>
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
          </Fade>
          {/* Recent workouts */}
          <div className="recent-workouts">
            <h1>Recent workouts:</h1>
            <div className="recent-container">
              <Recent />
              <Recent />
              <Recent />
              <Recent />
              <Recent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
