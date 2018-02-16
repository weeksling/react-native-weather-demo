
const DefaultState = {
    locations: [ 'Toronto', 'Oshawa', 'Ottawa' ],
    currentWeather  : {},
    forecast: {},
    selectedLocation: 'Toronto',
    loading  : false,
    offline  : false
}

const WeatherReducer = ( state = DefaultState, action ) => {
    switch(action.type){
        case 'SELECT_LOCATION':
            return {
                ...state,
                selectedLocation: action.location
            }
        case 'SET_LOCATION_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    [action.location]:action.currentWeather
                }
            }
        case 'SET_LOCATION_FORECAST':
            return {
                ...state,
                forecast: {
                    ...state.forecast,
                    [action.location]:action.forecast
                }
            }
        default:
            return state;
    }
}

export default WeatherReducer;