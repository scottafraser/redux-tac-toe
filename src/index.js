import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Game from './components/Game'
import { createStore } from "redux";
import gameReducer from "./reducers/gameReducer";
import { Provider } from "react-redux";
import configureStore from './store'

const store = configureStore()


ReactDOM.render(
    <Provider store={ store }>
    <Game />
  </Provider>,
  document.getElementById('root')
);
