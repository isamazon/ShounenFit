import React, { useState } from 'react';
// CSS
import './adminlogin.css';
//
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { adminSignIn, adminSignUp } from '../../actions/admin';
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function AdminLogin() {
  // Sign in/Sign up toggle
  const [isSignUp, setSignUp] = useState(true);
  const switchMode = () => {
    setSignUp((prevIsSignup) => !prevIsSignup);
  };
  // Dispatch and useHistory
  const dispatch = useDispatch();
  const history = useHistory();

  const [formDatas, setFormData] = useState(initialState);
  // JWT functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(adminSignUp(formDatas, history));
    } else {
      dispatch(adminSignIn(formDatas, history));
    }
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
        <form className="admin-form" onSubmit={handleSubmit}>
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
            placeholder="Confirm Password*"
            name="username"
            label="username"
            onChange={handleChange}
            type="text"
          />
          <button type="submit" className="submit-button">
            {isSignUp ? 'Sign up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
