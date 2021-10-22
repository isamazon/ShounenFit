import React from 'react';
import { FaPlus, FaHistory } from 'react-icons/fa';
function Recent() {
  return (
    <div className="empty-recent">
      <FaHistory className="add-anime-icon" />
      <p>once you finish a workout it'll appear here!</p>
    </div>
  );
}

export default Recent;
