import React from 'react';
import { useToggler } from '../../hooks/';
import { LrnzIcon } from '../../icons/';
import { ExitIcon } from '../../icons/';
import './style.scss';

const ResponsiveNav = () => {
  const [className, toggle] = useToggler();

  if (className === '') return null;

  return (
    <section className="responsive-nav">
      <header>
        <LrnzIcon />
        <div onClick={toggle}>
          <ExitIcon />
        </div>
      </header>
    </section>
  );
};

export default ResponsiveNav;
