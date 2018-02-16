import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import {
    persistCombineReducers,
    persistStore,
    persistReducer
  } from "redux-persist";
  import storage from "redux-persist/es/storage";

import appReducer from './src/Reducers';


const storeConfig = {
    key: "root",
    storage
}

const AppReducer = persistReducer(storeConfig, appReducer)

function configureStore() {
    let store = createStore(
        AppReducer,
        applyMiddleware(ReduxThunk),
        applyMiddleware(logger)
    );
    let persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore;
