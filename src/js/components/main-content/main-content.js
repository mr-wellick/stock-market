import React from 'react';
import { connect } from 'react-redux';
import { CompanyName } from '../company-name/';
import './style.scss';

const MainContent = props => {
  return (
    <section className={`main-content__container ${props.className}`}>
      <div className="main-content__summary">
        <CompanyName />
      </div>
      <div className="main-content__data">{props.children}</div>
    </section>
  );
};

const mapStateToPros = state => state.uiReducer;

export default connect(
  mapStateToPros,
  null
)(MainContent);
