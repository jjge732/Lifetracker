import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer, { initialState } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import { App } from './components/App';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </ Provider >
  </React.StrictMode>,
  document.getElementById('root')
);
