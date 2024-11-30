const request = require('request')


const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Antananarivo&appid=75ea3add99f2696449c741c0fc4e60e6&units=metric&lang=en'

const urlcurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=12&lon=10&appid=75ea3add99f2696449c741c0fc4e60e6&units=metric&lang=fr'

// Current weather
// json: true permet de parse sans a avoir a faire JSON.parse

// fonction non bloquant: mandeha foana na tsy kitihana aza
request({ url: url, json: true}, (error, response) => {
  console.log(response.body.list[0].weather[0].description)
})

request({ url: urlcurrent, json: true}, (error, response) => {
  if(error) {
    console.log('Unable to connect to weather service')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    console.log("It is currently "+ response.body.main.temp + " degrees out.")
  }
  
})

const geocodeURL = 'https://api.openweathermap.org/geo/1.0/direct?q=philadelphia&limit=5&appid=75ea3add99f2696449c741c0fc4e60e6'

request({ url: geocodeURL , json: true}, (error, response) => {
  if (error) { 
    console.log('Unable to connect to location service')
  } else if (response.body.length === 0) {
    console.log('There is no such place , try again')
  } else {
    const latitude = response.body[0].lat
    const longitude = response.body[0].lon
    console.log( 'The latitude is ' +latitude +' and the longitude is ' + longitude )
  }
})