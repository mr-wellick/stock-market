import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const MainContent = props => {
  return (
    <section className={`main-content__container ${props.className}`}>
      <div className="main-content__summary">summary</div>
      <div className="main-content__data">{props.children}</div>
    </section>
  );
};

const mapStateToPros = state => state.uiReducer;

export default connect(
  mapStateToPros,
  null
)(MainContent);
