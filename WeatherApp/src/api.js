
export function getCurrentWeather(forLocation) {
    return fetch('https://api.openweathermap.org/data/2.5/weather?APPID=13024c9f8c850e4d8e01c7438066f585&q='+forLocation)
        .then ( res => res.json() )
        .then ( data => {
            console.log(data)
            return {
                name: forLocation,
                precipitation: data.weather[0].main,
                temperature: data.main.temp
            }
            return data;
        })
}

export function getWeatherForecast(forLocation) {
    return fetch('https://api.openweathermap.org/data/2.5/forecast?APPID=13024c9f8c850e4d8e01c7438066f585&q='+forLocation)
        .then ( res => res.json() )
        .then ( data => {
            console.log(data.list)
            return data.list.map(l => {
                return {
                    date: l.dt_txt,
                    weather: l.weather[0].main,
                    temperature: l.main.temp,
                    humidity: l.main.humidity
                }
            });
        })
}
