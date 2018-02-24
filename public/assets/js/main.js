var getUserLocation = require('./getUserLocation.js');

userLocationData = {};

$(document).ready(function() {

  $('#address-submit').on('click', function() {
    let address = $('#address-submit').val().trim();
    userLocationData = userLocation.geocode(address);
  });

  $('#geolocate').on('click', function() {

  });
});     