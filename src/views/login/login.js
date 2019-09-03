import React from 'react';
import { Link } from 'react-router-dom';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link to="/">
            <LrnzIcon />
          </Link>
        </div>
        <div className="login-content">
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </form>
        </div>
        <div className="login-btn">
          <button>Login</button>
        </div>
        <div className="login-footer">
          <Link to="/register">Create an account</Link>
        </div>
      </div>
      <div className="lrnz-message">
        <p>Developed by LRNZ</p>
      </div>
    </div>
  );
};

export default Login;
