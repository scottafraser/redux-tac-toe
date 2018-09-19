import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Game from './components/Game'
import { createStore } from "redux";
import gameReducer from "./reducers/game-reducer";
import { Provider } from "react-redux";

const store = createStore(gameReducer);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
