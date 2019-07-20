import React from 'react';
import './style.scss';

const MainContent = props => {
  return (
    <section className="main-content__container">
      <div className="main-content__summary">summary</div>
      <div className="main-content__data">{props.children}</div>
    </section>
  );
};

export default MainContent;
