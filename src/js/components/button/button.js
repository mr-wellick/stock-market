import React from 'react';
import './style.scss';

const Button = () => {
  return (
    <div>
      <button className="button">
        <svg width="40px" height="40px" viewBox="-3 -10 40 40">
          <path d="M5.46 8.846l3.444-3.442-1.058-1.058-4.5 4.5 4.5 4.5 1.058-1.057L5.46 8.84zm7.194 4.5v-9h-1.5v9h1.5z" />
        </svg>
      </button>
    </div>
  );
};

export default Button;
