import { createStore, combineReducers } from 'redux';
import AppReducer from './src/Reducers';

function configureStore() {
    let store = createStore(AppReducer);
    return { store }
}

export default configureStore;
