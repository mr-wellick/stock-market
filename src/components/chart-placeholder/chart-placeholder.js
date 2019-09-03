import React from 'react';
import { useDimensions } from '../../hooks/';
import './style.scss';

const ChartPlaceholder = props => {
  const [{ height, width }] = useDimensions();

  return (
    <div className="message-container" style={{ width: width, height: height }}>
      <p>{props.message}</p>
    </div>
  );
};

export default ChartPlaceholder;
