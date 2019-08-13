import React from 'react';
import { useState } from 'react';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import './style.scss';

const Spreadsheet = () => {
  const [state, setState] = useState({
    grid: [
      [{ value: '' }, { value: 'Q1.18' }, { value: 'Q2.18' }, { value: 'Q3.18' }],
      [
        { value: 'Auto Sales' },
        { value: 2561881000 },
        { value: 3117865000 },
        { value: 5878305000 }
      ],
      [{ value: 'Auto Leasing' }, { value: 173436000 }, { value: 239816000 }, { value: 220461000 }],
      [
        { value: 'Energy Gen & Storage' },
        { value: 410022000 },
        { value: 374408000 },
        { value: 399317000 }
      ],
      [
        { value: 'Sevices & Others' },
        { value: 263412000 },
        { value: 270142000 },
        { value: 326330000 }
      ],
      [{ value: 'Revenue' }, { value: 3408751000 }, { value: 4002231000 }, { value: 6824413000 }]
    ]
  });

  {
    /* eslint-disable */
  }
  return (
    <ReactDataSheet
      data={state.grid}
      valueRenderer={cell => cell.value}
      onCellsChanged={changes => {
        const grid = state.grid.map(row => [...row]);
        changes.forEach(({ cell, row, col, value }) => {
          grid[row][col] = { ...grid[row][col], value };
        });
        setState({ grid });
      }}
    />
  );
};

export default Spreadsheet;
