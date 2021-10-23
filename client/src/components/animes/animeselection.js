import React from 'react';
// components
import Sidebar from '../sidebar/sidebar';
import ProfileBar from '../dashboard/profilebar';
import AnimeLink from './animelink';
// CSS
import './animeselection.css';
// Icons
// Dependencies

function AnimeSelection() {
  return (
    <div className="parent-container">
      <Sidebar iconcolor={{ color: '#4cc9f0' }} />
      <div className="animecontainer">
        <ProfileBar />
        <div className="anime-list-container">
          <AnimeLink />
        </div>
      </div>
    </div>
  );
}

export default AnimeSelection;
