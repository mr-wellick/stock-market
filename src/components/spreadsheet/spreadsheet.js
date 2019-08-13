import React from 'react';
import { useState } from 'react';
import ReactDataSheet from 'react-datasheet';
import { financials } from '../../mock-data/financials.js';
import 'react-datasheet/lib/react-datasheet.css';
import './style.scss';

const Spreadsheet = () => {
  const [state, setState] = useState(financials);

  return (
    <ReactDataSheet
      data={state.grid}
      valueRenderer={cell => cell.value}
      onCellsChanged={changes => {
        const grid = state.grid.map(row => [...row]);
        /* eslint-disable */
        changes.forEach(({ cell, row, col, value }) => {
          grid[row][col] = { ...grid[row][col], value };
        });
        setState({ grid });
      }}
    />
  );
};

export default Spreadsheet;
