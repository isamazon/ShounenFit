import React, { useState } from 'react';
import './login.css';

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
  return (
    <div className="login-container">
      <div className="video-side"></div>
      <div className="form-side">
        <h1 className="title-header">
          {isSignUp ? 'Sign up to ShonenFit' : 'Login to ShonenFit'}
        </h1>
        <p className="signp">
          {isSignUp ? 'Already have an account?' : 'Dont have an account yet?'}
        </p>
      </div>
    </div>
  );
}

export default Login;
