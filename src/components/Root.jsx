import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from 'reducers';

export const store = createStore(reducers, {}, applyMiddleware());

export const Root = function(props){
    return (
        <Provider store={ store }>
            <BrowserRouter>
                { props.children }
            </BrowserRouter>    
        </Provider> 
    );
}


