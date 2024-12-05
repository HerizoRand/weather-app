const request = require('request') 

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Antananarivo&appid=75ea3add99f2696449c741c0fc4e60e6&units=metric&lang=en'

//const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude +'&lon=' + longitude +'&appid=75ea3add99f2696449c741c0fc4e60e6&units=metric&lang=fr'

// json: true permet de parse sans a avoir a faire JSON.parse
// fonction non bloquant: mandeha foana na tsy kitihana aza
const forcast = (latitude, longitude , callback) => { 
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude +'&lon=' + longitude +'&appid=75ea3add99f2696449c741c0fc4e60e6&units=metric&lang=en'

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.cod === "400") {
            callback('Unable to to find location', undefined)
        } else {
            callback(undefined, { 
                temp: body.list[0].main.temp,                  
                city: body.city.name
            })
        }
    })
}

module.exports = forcast