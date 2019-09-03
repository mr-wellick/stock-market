import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => {
  return (
    <div className="login-container">
      <Link to="/">Home</Link>
      <form>
        <input type="text" id="login" />
      </form>
    </div>
  );
};

export default Login;
