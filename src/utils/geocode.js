const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoianViZWdlcmVybyIsImEiOiJja3Y3d3U5ZXE5bzF4MnZtbjNjcHplYmt1In0.KGpYPx3pVS-WmU2dSby1sQ&limit=1'

    request ({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length ===0) {
            callback('Unable to find location.Try another search.', undefined)
             } else {
                 callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                 })
             }
    })
}
module.exports = geocode


//copied
// const request = require('request')

// const geoCode  = (address , callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +  address  + '.json?access_token=pk.eyJ1IjoianViZWdlcmVybyIsImEiOiJja3Y3d3U5ZXE5bzF4MnZtbjNjcHplYmt1In0.KGpYPx3pVS-WmU2dSby1sQ&limit=1'

//     request({url : url, json: true} , (error , response) => {
//         if(error){
//             callback('Unable to connect location services' , undefined)
//         } else if(response.body.features.length ===0 ){
//             callback('Unable to find location' , undefined)
//         }else{
//             callback(undefined , {
//                 latitude : response.body.features[0].center[1],
//                 longtitude : response.body.features[0].center[0],
//                 location : response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geoCode