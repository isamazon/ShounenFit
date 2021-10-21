import React, { useState } from 'react';
import './login.css';
import video from '../../assets/anime.mp4';
// Dependencies
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
// icons
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { signin, signup } from '../../actions/auth';

// Initial login/signup state:
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Login() {
  // Password toggle
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  // Sign in/Sign up toggle
  const [isSignUp, setSignUp] = useState(false);
  const switchMode = () => {
    setSignUp((prevIsSignup) => !prevIsSignup);
  };
  // Dispatch and useHistory
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState(initialState);
  // JWT functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  return (
    <div className="login-container">
      <div className="video-side">
        <video poster="" className="video" autoPlay muted loop>
          <source src={video} />
        </video>
        <div className="videoblur"></div>
      </div>

      <div className="form-side">
        <h1 className="title-header">
          {isSignUp ? 'Sign up to ShonenFit' : 'Login to ShonenFit'}
        </h1>
        <div className="signin-signup">
          <p className="signp">
            {isSignUp
              ? 'Already have an account?'
              : 'Dont have an account yet?'}
          </p>
          <p className="sign-p" onClick={switchMode}>
            {isSignUp ? 'Sign in here' : 'Sign up here'}
          </p>
        </div>
        <form className="form" onSubmit="handleSubmit"></form>
      </div>
    </div>
  );
}

export default Login;
