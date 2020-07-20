import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { getArticlesReducer } from "./store/reducers/reducer";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { Provider } from "react-redux";
import "typeface-roboto";
import rootSaga from './store/sagas';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  getArticlesReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App style={{ backgroundColor: "#ebf5ee" }} />
    </BrowserRouter>
  </Provider>
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
