import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import "./style.less";
import Routes from "./routes";

// REDUX

// Middlewares
const middlewares = [
  function thunkMiddleware({ dispatch, getState }: any) {
    return function(next: any) {
      return function(action: any) {
        return typeof action === "function"
          ? action(dispatch, getState)
          : next(action);
      };
    };
  }
];
if (process.env.NODE_ENV === "development") {
  // Log redux dispatch only in development
  middlewares.push(createLogger({}));
}

// Reducers

const mainReducer = combineReducers({
  // reducers
});

// Store
const finalCreateStore = applyMiddleware(...middlewares)(createStore);
const store = finalCreateStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("application-wrapper") ||
    document.createElement("div")
);
