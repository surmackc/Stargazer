const StargazingTime = require('stargazing-time');
var FeedParser = require('feedparser');
var request = require('request');
const keyMaps = process.env.MAPS_KEY;

// Google Maps API
// executes upon search submit
// gets lat, lng, place_id
// sends results to getTrails()

function getData(inputLocation) {
    return new Promise(function(resolve, reject) {
        var data = {};
        getUserLocation(inputLocation)
        .then(function(userLocation) {
            data.userLocation = userLocation;
            Promise.all([
                getGoodTimes(userLocation),
                getRSSEvents(userLocation)
            ])
            .then(function(resultArray) {
                data.goodTimes = resultArray[0];
                data.RSSEvents = resultArray[1];
                resolve(data);              
            })
            .catch(function(error) {
                reject(error);
            });
        })
        .catch(function(error) {
            reject(error);
        });
    });

}

function getUserLocation(inputLocation) {
    return new Promise(function(resolve, reject) {
        if (parseFloat(inputLocation.lat) === 0) {
            geocode(inputLocation.address)
            .then(function(userLocation) {
                resolve(userLocation);
            })
            .catch(function(error) {
                reject(error);
            });
        }
        else {
            geocodeLatLong(inputLocation.lat, inputLocation.lng)
            .then(function(userLocation) {
                resolve(userLocation);
            })
            .catch(function(error) {
                reject(error);
            });
        }
    });
}

function geocode(address) {
    return new Promise(function (resolve, reject) {
        var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?key=';
        queryURL += keyMaps + '&address=' + address;
        queryURL = encodeURI(queryURL);

        request(queryURL, function(error, response, body) {
            body = JSON.parse(body);
            var status = body.status;
            if (error) {
                reject(error);
            }
            if (status === "OK") {
                var result = body.results[0];
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
    });
};

// takes in a lat, long to give us our geoData object
function geocodeLatLong(lat, lng) {
    return new Promise(function(resolve, reject) {
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=";
        queryURL += keyMaps + '&latlng=' + lat + "," + lng;
    
        request(queryURL, function(error, response, body) {
            body = JSON.parse(body);
            var status = body.status;
            if (error) {
                reject(error);
            }
            if (status === "OK") {
                var result = body.results[0];
                var place_id = result.place_id;
                var formatted_address = result.formatted_address;
    
                var locationRef = result.geometry.location;
                var lat = locationRef.lat;
                var lng = locationRef.lng;
    
                var  geoData = {
                    "lat": lat,
                    "lng": lng,
                    "place_id": place_id,
                    "address": formatted_address
                };
    
                resolve(geoData);
    
            } else {
                reject('Geocode Lat Long unsuccessful.');
            }
        });
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

function getRSSEvents(userLocation) {
    return new Promise(function(resolve, reject) {
        queryURL = 'https://in-the-sky.org/rss.php?feed=DFAN&latitude=' + userLocation.lat + '&longitude=' + userLocation.lng;
        var req = request(queryURL);
        var feedparser = new FeedParser();
        var RSSEvents = [];

        req.on('error', function(error) {
            reject(error);
        });
        req.on('response', function(res) {
            var stream = this;
 
            if (res.statusCode !== 200) {
              this.emit('error', new Error('Bad status code'));
            }
            else {
              stream.pipe(feedparser);
            }
        });

        feedparser.on('error', function (error) {
            reject(error);
        });
        
        feedparser.on('readable', function () {
        // This is where the action is!
            var stream = this; // `this` is `feedparser`, which is a stream
            var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            var item;
            
            while (item = stream.read()) {
                RSSEvents.push(item);
            }
            resolve(RSSEvents);
        });
    });
}

module.exports = {
    getData
}