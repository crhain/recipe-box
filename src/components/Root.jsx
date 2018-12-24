// @nots-check
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { middleware as flashMiddleware } from "redux-flash";
import reducers from "reducers";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(flashMiddleware({ timeout: 10000 }))
);

export const Root = function(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </Provider>
  );
};
