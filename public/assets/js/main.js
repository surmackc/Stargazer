userLocation = {
    'lat': 0,
    'lng': 0,
    'place_id': 0,
    'address': ''
};

$(document).ready(function() {
    console.log("starting main.js scripts");
    $('#address-submit').on('click', function() {
        event.preventDefault();
        let address = $('#address-input').val().trim();
        geocode(address)
        .then(function(result) {
            userLocation = result;
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        });
    });

    $('#geolocate').on('click', function() {
        event.preventDefault();
        geolocate()
        .then(function(result) {
            userLocation = result;
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        });
    });
});