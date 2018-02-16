import {
    getCurrentWeather,
    getWeatherForecast
} from '../api'

export function selectLocation (location) {
    return {
        type: 'SELECT_LOCATION',
        location
    }
}

export function updateAllWeatherData() {
    return (dispatch, getState) => {

        const locations = getState().weather.locations;
        return Promise.all(locations.map( location => {
            dispatch(updateWeatherDataForLocation(location))
        }))
        .then ( results => {
            console.log('UPDATED ALL DATA')
        })
    }
}

export function updateWeatherDataForLocation(location) {
    return (dispatch) => {
        return Promise.all([
            dispatch(updateCurrentWeather(location)),
            dispatch(updateWeatherForecast(location))
        ])
    }
}

export function updateWeatherForecast(location) {
    return (dispatch) => {
        return getWeatherForecast(location)
            .then(data => {
                console.log('forecast:', data)
                dispatch({
                    type: 'SET_LOCATION_FORECAST',
                    location,
                    forecast: data
                })
            })
    }
}
export function updateCurrentWeather(location) {
    return (dispatch, getState) => {
        
        return getCurrentWeather(location)
            .then(data => {
                dispatch({
                    type: 'SET_LOCATION_CURRENT_WEATHER',
                    location,
                    currentWeather: data
                })
            })
    }
}
