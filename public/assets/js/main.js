var getUserLocation = require('./getUserLocation.js');
var getGoodTimes = require('./getGoodTimes.js');

userLocation = {
    'lat': 0,
    'lng': 0,
    'place_id': 0,
    'address': ''
};

$(document).ready(function () {
    $('#address-submit').on('click', function () {
        let address = $('#address-submit').val().trim();
        userLocation = userLocation.geocode(address);
        getData();

    });

    $('#geolocate').on('click', function () {
        userLocation = userLocation.geolocate();
        userLocation = userLocation.geocode(address);
        getData();
    });
});

function getData() {
    getGoodTimes(userLocation)
    .then();
    eventsRSS.get(userLocation)
    .then();
    eventsAPI.get(userLocation)
    .then();
    locationsAPI.get(userLocation)
    .then();
}