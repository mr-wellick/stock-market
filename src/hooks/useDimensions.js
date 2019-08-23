import { useState } from 'react';
import { useEffect } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth >= 1024 ? window.innerWidth * 0.5 : window.innerWidth,
    height: window.innerHeight * 0.55,
    padding: window.innerWidth >= 1024 ? 50 : 35
  });

  const resize = () => {
    if (window.innerWidth >= 1024) {
      setDimensions({
        ...dimensions,
        width: window.innerWidth * 0.5,
        height: window.innerHeight * 0.55,
        padding: 50
      });
    } else {
      setDimensions({
        ...dimensions,
        width: window.innerWidth,
        height: window.innerHeight * 0.55,
        padding: 35
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
