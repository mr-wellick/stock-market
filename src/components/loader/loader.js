import React from 'react';
import './style.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-icon">
        <div id="block1"></div>
        <div id="block2"></div>
        <div id="block3"></div>
        <div id="block4"></div>
      </div>
    </div>
  );
};

export default Loader;
