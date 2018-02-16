
const DefaultState = {
    locations: [ { name: 'Toronto' } ],
    weather  : [ { name: 'Toronto', precipitation: 'snow', temperature: '10c'} ],
    loading  : false,
    offline  : false
}

const WeatherReducer = ( state = DefaultState, action ) => {
    return state;
}

export default WeatherReducer;