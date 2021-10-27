import React, { useState } from 'react';
// CSS
import './adminlogin.css';
//
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { adminsignin, adminsignup } from '../../actions/admin';
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function AdminLogin() {
  // Sign in/Sign up toggle
  const [isSignUp, setSignUp] = useState(false);
  const switchMode = () => {
    setSignUp((prevIsSignup) => !prevIsSignup);
  };
  // Dispatch and useHistory
  const dispatch = useDispatch();
  const history = useHistory();

  const [formDatas, setFormData] = useState(initialState);
  // JWT functions
  // Signup function
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(adminsignup(formDatas, history));
  };
  // Login function
  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(adminsignin(formDatas, history));
  };
  // Change/updating input values
  const handleChange = (e) => {
    setFormData({ ...formDatas, [e.target.name]: e.target.value });
    console.log(formDatas);
  };
  return (
    <div className="admin-login-container">
      <div className="login-form-container">
        <h1>{isSignUp ? 'Admin signup' : 'Admin login'}</h1>
        {isSignUp ? (
          <form className="admin-form" onSubmit={handleSignUp}>
            <input
              className="input"
              placeholder="Username*"
              name="username"
              label="username"
              onChange={handleChange}
              type="text"
            />
            <input
              className="input"
              placeholder="Email*"
              name="email"
              label="Email Address"
              onChange={handleChange}
              name="email"
            />
            <input
              className="input"
              placeholder="Password*"
              name="password"
              label="password"
              onChange={handleChange}
              type="text"
              required
            />
            <input
              className="input"
              name="confirmPassword"
              label="confirmPassword"
              placeholder="Confirm Password*"
              onChange={handleChange}
              type="text"
              required
            />
            <button type="submit" className="submit-button">
              {isSignUp ? 'Sign up' : 'Login'}
            </button>
          </form>
        ) : (
          <form className="admin-form small" onSubmit={handleLogIn}>
            <input
              className="input"
              placeholder="Email*"
              name="email"
              label="Email Address"
              onChange={handleChange}
              name="email"
            />
            <input
              className="input"
              placeholder="Password*"
              name="password"
              label="password"
              onChange={handleChange}
              type="password"
              required
            />
            <button type="submit" className="submit-button">
              {isSignUp ? 'Sign up' : 'Login'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
