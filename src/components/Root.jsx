import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from 'reducers';

const store = createStore(reducers, {}, applyMiddleware());

export default function Root(props){
    return (
        <Provider store={ store }>
            <BrowserRouter>
                { props.children }
            </BrowserRouter>    
        </Provider> 
    );
}


