import { useState } from "react";
import { useEffect } from "react";

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.7,
    height: window.innerHeight * 0.8,
    padding: 50
  });

  function resize() {
    setDimensions({
      ...dimensions,
      width: window.innerWidth * 0.7,
      height: window.innerHeight * 0.8
    });
  }

  useEffect(() => {
    window.addEventListener("resize", resize);

    return function cleanUp() {
      window.removeEventListener("resize", resize);
    };
  });

  return dimensions;
}

export default useDimensions;
