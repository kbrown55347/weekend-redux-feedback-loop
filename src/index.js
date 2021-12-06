import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// setup reducers
const feelings = (state = '', action) => {

    switch(action.type) {
        case 'ADD_FEELINGS':
            return action.payload;
        case 'RESET_STATE':
            return action.payload;   
    };
    return state;
};

const understanding = (state = '', action) => {

    switch(action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        case 'RESET_STATE':
            return action.payload;   
    };
    return state;
};

const support = (state = '', action) => {

    switch(action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        case 'RESET_STATE':
            return action.payload;   
    };
    return state;
};

const comments = (state = '', action) => {

    switch(action.type) {
        case 'ADD_COMMENT':
            return action.payload;
        case 'RESET_STATE':
            return action.payload;   
    };
    return state;
};


// setup store - container that holds reducers:
const storeInstance = createStore(
    combineReducers({
        feelings,
        understanding,
        support,
        comments
    }),
    applyMiddleware(
        logger
    )
);


// wrap App in Provider so <App> has access to redux stores
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
