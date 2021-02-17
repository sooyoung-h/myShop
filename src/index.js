import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import reportWebVitals from './reportWebVitals';
import Data from './data.js';

function reducer (state = Data, action) {
  if (action.type === 'addItem') {
    let copy = [...state];
    copy[action.id].total++;
    return copy;
  } else if (action.type === 'minusItem') {
    let copy = [...state];
    copy[action.id].total--;
    return copy;
  } 
  return state;
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
