//import { useSelector } from 'react-redux';
//import { validate } from '../utilities/';

const useSymbols = () => {
  //const { input } = useSelector(state => state.uiReducer);
  //const validInput = validate(input);

  // TSLA is a valid stock ticker. HELLO is not a valid stock ticker; however, it still creates
  // a valid regex pattern, which will be used to search stringOfSymbols.
  //const pattern = validInput ? new RegExp(`([^"]*${validInput}[^"]*)`, 'g') : null;

  //const matches =
  //  pattern !== null && stringOfSymbols.match(pattern) !== null
  //    ? stringOfSymbols.match(pattern)
  //    : [];

  return [];
};

export default useSymbols;
