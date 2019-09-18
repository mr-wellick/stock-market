import React from 'react';
import { Link } from 'react-router-dom';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link to="/">
            <LrnzIcon />
          </Link>
        </div>
        <div className="login-content" id="register">
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Verify Password" />
          </form>
        </div>
        <div className="login-btn">
          <button>Register</button>
        </div>
        <div className="login-footer">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
      <div className="lrnz-message">
        <p>Developed by LRNZ</p>
      </div>
    </div>
  );
};

export default Register;
