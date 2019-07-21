import '../sass/style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/';
import App from './app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.querySelector('.app')
);
