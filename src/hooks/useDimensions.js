import { useState } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.55,
    padding: 35
  });

  return [dimensions, setDimensions];
};

export default useDimensions;
