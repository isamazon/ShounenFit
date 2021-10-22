import React from 'react';
import './profilebar.css';
// pictures
import pfp from '../../assets/pfp.jpg';

function ProfileBar() {
  return (
    <div className="profile-bar-container">
      <div className="profile-bar">
        <img src={pfp} alt="" className="profile-pic" />
        <p className="username">UserName</p>
        <div className="level">level: 0</div>
      </div>
    </div>
  );
}

export default ProfileBar;
