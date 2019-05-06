import { useEffect } from "react";
import { useState } from "react";

function useSymbols() {
  const [symbols, setSymbols] = useState("");

  useEffect(() => {
    fetch("https://api.iextrading.com/1.0/ref-data/symbols")
      .then(res => res.json())
      .then(data => {
        const hugeString = data.map(stock => `"${stock.symbol}"`).join("");
        setSymbols(hugeString);
      });
  }, []);

  return symbols;
}

export default useSymbols;
