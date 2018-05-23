import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const firstReducer = (state = [], action) => {
    if (action.type === 'SNACK_SUBMIT') {
        return [...state, action.payload];
    }
    return state; //it will yell at you if you don't return something
    //
}

const storeInstance = createStore(
    //combine reducers and do some extra validation
    combineReducers({
        firstReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
