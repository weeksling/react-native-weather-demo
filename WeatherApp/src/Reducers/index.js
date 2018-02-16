import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const AppReducer = combineReducers ({
    weather: WeatherReducer,
});

export default AppReducer;
