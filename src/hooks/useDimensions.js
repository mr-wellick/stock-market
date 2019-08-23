import { useState } from 'react';
import { useEffect } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.55,
    padding: 35
  });

  const resize = () => {
    if (window.innerWidth >= 1024) {
      setDimensions({
        ...dimensions,
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.55
      });
    } else {
      setDimensions({
        ...dimensions,
        width: window.innerWidth,
        height: window.innerHeight * 0.55
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return function cleanUp() {
      window.removeEventListener('resize', resize);
    };
  });

  return [dimensions, setDimensions];
};

export default useDimensions;
