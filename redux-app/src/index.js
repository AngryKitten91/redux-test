import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './index.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';

function reducer(state = [], action) {

  const { type, payload = {} } = action

  switch (type) {
    case 'ADD':
      return [...state.slice(), payload];
    case 'CHECK':
      return state.map((e) => {
        if (payload.name !== e.name) {
          return e
        }
        return {
          ...e,
          checked: true,
        }
      })
    case 'REMOVE':
      return state.filter((e) => {
        return e.name !== payload.name;
      }).map((e) => {
        return {
          ...e
        }
      })
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
