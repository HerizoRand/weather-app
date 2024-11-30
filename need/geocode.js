const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + address + '&limit=5&appid=75ea3add99f2696449c741c0fc4e60e6'
  
    request({ url: url, json: true }, (error, response) => {
      if(error) {
        callback('Unable to connect to location services!', undefined)
      } else if (response.body.length === 0) {
        callback('Unable to find location, try another search', undefined)
      } else {
        callback(undefined, {
          latitude: response.body[0].lat,
          longitude: response.body[0].lon,
          location: response.body[0].name
        })
      }
    })
  }
  

module.exports = geocode