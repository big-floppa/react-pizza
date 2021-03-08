import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

import './scss/app.scss';

import logo from './assets/pizza-logo.svg';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App logo={logo} />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
