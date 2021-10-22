import React from 'react';
// components
import Sidebar from '../sidebar/sidebar';
// CSS
import './animeselection.css';
// Icons
// Dependencies
import { Col } from 'react-bootstrap';
function AnimeSelection() {
  return (
    <div className="parent-container">
      <Sidebar iconcolor={{ color: '#4cc9f0' }} />
      <div className="animecontainer"></div>
    </div>
  );
}

export default AnimeSelection;
