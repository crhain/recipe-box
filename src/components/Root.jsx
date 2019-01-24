// @ts-check
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import { middleware as flashMiddleware } from 'redux-flash';
import reducers from 'reducers/index';

//export for redux store - can be used by test functions
export const store = createStore(
  reducers,
  {},
  applyMiddleware(flashMiddleware({ timeout: 10000 }))
);

/**
 * @description Root wraps any other jsx elements and provides hook up for
 *  redux and react-router
 * @param {Object} props
 * @return {*} jsx element
 */
export const Root = function(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </Provider>
  );
};
