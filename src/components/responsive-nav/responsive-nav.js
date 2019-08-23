import React from 'react';
import { useToggler } from '../../hooks/';
import { LrnzIcon } from '../../icons/';
import { ExitIcon } from '../../icons/';
import { Routes } from '../routes/';
import './style.scss';

const ResponsiveNav = () => {
  const [className, toggle] = useToggler();

  if (className === '') return null;

  return (
    <section className="responsive-nav">
      <header className="responsive-header">
        <LrnzIcon />
        {/* eslint-disable */}
        <div onClick={toggle}>
          <ExitIcon />
        </div>
      </header>
      <div>
        <Routes />
      </div>
      <div className="responsive-btn__container">
        <button className="responsive-btn">login</button>
        <button className="responsive-btn">register</button>
      </div>
    </section>
  );
};

export default ResponsiveNav;
