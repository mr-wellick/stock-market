import React from 'react';
import { useSelector } from 'react-redux';
import { CompanyName } from '../company-name/';
import './style.scss';

const MainContent = props => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <section className={`main-content__container ${className}`}>
      <div className="main-content__summary">
        <CompanyName />
      </div>
      <div className="main-content__data">{props.children}</div>
    </section>
  );
};

export default MainContent;
