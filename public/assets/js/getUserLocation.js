// These fuctions will capture user longitude and latitude based on an input 
// as well as allow users to geolocate 
var keymaps = require( /*wherever our API keys are*/ );

var geoData = {};

function geolocate() {
    console.log("geolocate");

    if (navigator.geolocation) {

        var geoLat, geoLng;

        navigator.geolocation.getCurrentPosition(function (position) {

            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //put into search function

            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });

            geoLat = geolocation.lat;
            geoLng = geolocation.lng;

            autocomplete.setBounds(circle.getBounds());

            return geoLat, geoLng;
        });
    }
};

// Google Maps API
// executes upon search submit
// gets lat, lng, place_id
// sends results to getTrails()
function geocode(address) {
    event.preventDefault();

    console.log("geocode: " + address);

    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=";

    queryURL += keyMaps + "&address=" + address;

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

            return geoData = {
                "lat": lat,
                "lng": lng,
                "place_id": place_id,
                "address": formatted_address
            };



        } else {
            alert('Geocode unsuccessful.');
        }
    });
};

// takes in a lat, long to give us our geoData object
function geocodeLatLong(lat, long) {
    event.preventDefault();

    console.log("geocode: " + lat, long);

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

            return geoData = {
                "lat": lat,
                "lng": lng,
                "place_id": place_id,
                "address": formatted_address
            };



        } else {
            alert('Geocode Lat Long unsuccessful.');
        }
    });
};


module.exports = {
    geocode,
    geolocate,
    geocodeLatLong
};