import React, { useState } from 'react';
// components
import AdminSideBar from './adminsidebar/adminsidebar';
import AdminModal from './adminmodal/adminmodal';
// Dependencies
import { Button } from '@material-ui/core';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
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
  //   Set modal
  const [modal, setModal] = useState(false);
  return (
    <div className="admin-dash-container">
      {user ? null : <AdminModal />}
      <AdminSideBar
        narutoclick=""
        jujutsuclick=""
        mhaclick=""
        aotclick=""
        onepunchclick=""
      />
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
        <div className="add-workout-container">
          <div className="add-anime-container">
            <div className="add-row">
              <h1>Add a workout:</h1>
              <button className="add-workout-button">
                <FaPlus className="add-workout-icon" />
              </button>
            </div>
            <Accordion defaultActiveKey="0" className="display-workout-row">
              <div className="change-anime-row"></div>
              <div className="workouts">
                <img src="" alt="" className="anime-img" />
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
