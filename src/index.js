import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App.jsx';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//create store for redux state and apply any middleware
// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
