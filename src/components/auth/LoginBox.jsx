import React, { useState } from 'react';
import './LoginBox.css'; // File CSS terpisah (opsional)

const LoginBox = ({ role, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="overlay">
      <div className="login-box">
        <h2>Hi, {role}!</h2>
        <div className="form-group">
          <input type="text" placeholder="USERNAME" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="EMAIL" />
        </div>
        <div className="form-group password-group">
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="PASSWORD" 
          />
          <span className="toggle-password" onClick={togglePassword}>👁</span>
        </div>
        <p className="forgot">
          Forgot your password? <a href="#">Click here</a>
        </p>
        <button className="login-button">Login</button>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginBox;