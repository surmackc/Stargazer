const StargazingTime = require('stargazing-time');
const https = require('https');
const keyMaps = process.env.MAPS_KEY;

// Google Maps API
// executes upon search submit
// gets lat, lng, place_id
// sends results to getTrails()
function geocode(address) {
    return new Promise(function (resolve, reject) {
        var queryURL = '/maps/api/geocode/json?key=';
        queryURL += keyMaps + '&address=' + address;
        
        var options = {
            host: 'maps.googleapis.com',
            path: encodeURI(queryURL)
        }

        var req = https.get(options, function(res) {
            var data = '';
            res.on('data', function(chunk) {
                data += chunk.toString('utf8');
            });
            res.on('end', function() {
                data = JSON.parse(data);
                var result = data.results[0];
                var status = data.status;
                if (status === "OK") {
                    var place_id = result.place_id;
                    var formatted_address = result.formatted_address;

                    var locationRef = result.geometry.location;
                    var lat = locationRef.lat;
                    var lng = locationRef.lng;

                    var geoData = {
                        "lat": lat,
                        "lng": lng,
                        "place_id": place_id,
                        "address": formatted_address
                    };

                    resolve(geoData);

                } else {
                    reject('Geocode unsuccessful.');
                }
            
            });
            res.on('error', function(error) {
                reject(error);
            });
        });
        req.end();
            
    });
};

function getGoodTimes(userLocation) {
    return new Promise(function(resolve, reject) {
        StargazingTime.getGoodTimes({
            lat: userLocation.lat,
            lon: userLocation.lng,
            apiKey: process.env.WEATHER_KEY
        })
        .then(function(results) {
            resolve(results)
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

module.exports = {
    getGoodTimes, geocode
}