
const DefaultState = {
    locations: [ 'Toronto', 'Oshawa', 'Ottawa' ],
    currentWeather  : { 
        Toronto: { name: 'Toronto', precipitation: 'snow', temperature: '10c'},
        Oshawa: { name: 'Oshawa', precipitation: 'rain', temperature: '-12c'}
    },
    forecast: {
        Toronto: {
            tomorrow: '12',
            two_days: '-60'
        },
        Oshawa: {
            tomorrow: '666'
        }
    },
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