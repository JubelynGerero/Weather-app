const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3e2819ef94dc1e62933efbd46d44f835&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback ('Unable to connect to weather service!', undefined )
        } else if (body.error) {
            callback('Unable to find location', undefined )
        } else {
            callback( undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0] )
        }
    })
}


module.exports = forecast
