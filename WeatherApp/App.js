import React, {Component} from 'react';
import {
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from './store';

import AppNavigation from './src/Navigation';


const { store, persistor } = configureStore();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    )
  }
}
