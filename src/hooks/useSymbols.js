import { symbols } from '../mock-data/symbols.js';
import { useSelector } from 'react-redux';
import { validate } from '../utilities/';

const useSymbols = () => {
  const stringOfSymbols = symbols.map(stock => `"${stock.symbol} - ${stock.name}"`).join('');
  const { input } = useSelector(state => state.uiReducer);
  const validInput = validate(input);

  // TSLA is a valid stock ticker. HELLO is not a valid stock ticker; however, it still creates
  // a valid regex pattern, which will be used to search stringOfSymbols. This will result in null.
  const pattern = validInput ? new RegExp(`([^"]*${validInput}[^"]*)`, 'g') : null;

  const matches =
    pattern !== null && stringOfSymbols.match(pattern) !== null
      ? stringOfSymbols.match(pattern)
      : [];

  return matches;
};

export default useSymbols;
