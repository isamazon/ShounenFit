import React, { useState } from 'react';
// components
import AdminSideBar from './adminsidebar/adminsidebar';
// Dependencies
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
// CSS
import './admindash.css';
// Redux
import { useDispatch } from 'react-redux';
function AdminDashboard() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile_admin'))
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/adminlogin');
    setUser(null);
    // window.location.reload(false);
  };
  return (
    <div className="admin-dash-container">
      <AdminSideBar />
      <div className="admin-dash">
        <div className="admin-profile-container">
          <div className="admin-profile">
            <h1 className="admin-h1">Admin:</h1>
            <h1>{user.result.username}</h1>
            <Button className="logout-btn" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
