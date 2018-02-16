import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import AppReducer from './src/Reducers';

function configureStore() {
    let store = createStore(
        AppReducer,
        applyMiddleware(ReduxThunk),
        applyMiddleware(logger)
    );
    return { store }
}

export default configureStore;
