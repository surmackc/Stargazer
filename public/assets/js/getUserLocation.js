// These fuctions will capture user longitude and latitude based on an input 
// as well as allow users to geolocate 

// Google Maps API
// gets lat, lng, place_id
function geocode(address) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/geocode?address=' + address,
            type: 'GET'
        }).done(function(result) {
            resolve(result);
        });
    });
}

function geolocate() {
    return new Promise(function(resolve, reject) {      
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                geocodeLatLong(geolocation.lat, geolocation.lng)
                .then(function(result) {
                    resolve(result);
                })
                .catch(function(error) {
                    reject(error);
                });
            });
        }
        else {
            reject('Geolocation unavailable');
        }
    });
};

// takes in a lat, long to give us our geoData object
function geocodeLatLong(lat, long) {
    return new Promise(function(resolve, reject) {
        var queryURL = "http://maps.googleapis.com/maps/api/geocode/json?latlng=";
        queryURL += lat + "," + long;
    
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            var status = response.status;
            if (status === "OK") {
    
                var resultRef = response.results[0];
                var place_id = resultRef.place_id;
                var formatted_address = resultRef.formatted_address;
    
                var locationRef = resultRef.geometry.location;
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