import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import createStore from "./store/store"

ReactDOM.render(
  <Provider store={ createStore() }>
    <App />
  </Provider>,
  document.getElementById('root')
);
