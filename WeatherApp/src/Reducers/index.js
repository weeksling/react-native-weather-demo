import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import WeatherReducer from './WeatherReducer';

const AppReducer = combineReducers ({
    weather: WeatherReducer,
});

export default AppReducer;
