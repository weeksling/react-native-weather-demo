
const DefaultState = {
    locations: [ 'Toronto', 'Oshawa' ],
    weather  : [ 
        { name: 'Toronto', precipitation: 'snow', temperature: '10c'},
        { name: 'Oshawa', precipitation: 'rain', temperature: '-12c'}
    ],
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
        default:
            return state;
    }
}

export default WeatherReducer;