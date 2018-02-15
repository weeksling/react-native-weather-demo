import { createStore, combineReducers } from 'redux';
import { WeatherReducer } from './src/Reducers';


const reducer = {

};

const rootReducer = combineReducers ({
    WeatherReducer
})


function configureStore() {
    let store = createStore(rootReducer);
    return { store }
}

export default configureStore;
