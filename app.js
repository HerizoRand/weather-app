// use Command line interface
const geocode = require('./need/geocode')
const forecast = require('./need/forcast')

console.log(process.argv[2])
const address = process.argv[2]


if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude , longitude, location}) => { 
        if(error) { 
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastdata)
        })  
    })
}

