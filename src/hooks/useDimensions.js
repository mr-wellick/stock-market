import { useState } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.6,
    height: window.innerHeight * 0.7,
    padding: 50
  });

  return [dimensions, setDimensions];
};

export default useDimensions;
