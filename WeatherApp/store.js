import { createStore, combineReducers } from 'redux';

const reducer = {

};

const rootReducer = combineReducers ({

})


function configureStore() {
    let store = createStore(rootReducer);
    return { store }
}

export default configureStore;
