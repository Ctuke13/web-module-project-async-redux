import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// root.render(

// );
