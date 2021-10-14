import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';
function Dashboard() {
  return (
    <div className="parent-container">
      <Sidebar iconcolor={{ color: '#4cc9f0' }} />
      <div className="dashboard-container"></div>
    </div>
  );
}

export default Dashboard;
