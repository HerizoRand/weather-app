const geocode = require('./need/geocode')
const forecast = require('./need/forcast')

console.log(process.argv[2])
const address = process.argv[2]

if (!address){
  console.log('Please provide an address')
} else {
  geocode(address, (error, data) => { 
    if(error) { 
      return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
      if(error) {
        return console.log(error)
      }
  
      console.log(data.location)
      console.log(forecastdata)
    })  
  })
}

