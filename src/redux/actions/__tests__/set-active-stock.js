import setActiveStock from '../set-active-stock.js';
import { SET_ACTIVE_STOCK } from '../../constants/';

test('Set active stock ', () => {
  const stockName = 'TSLA';
  const { type, payload } = setActiveStock(stockName);

  expect(type).toBe(SET_ACTIVE_STOCK);
  expect(payload.activeStock).toBe(stockName);
});
