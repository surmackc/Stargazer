userLocation = {
    'lat': 0,
    'lng': 0,
    'place_id': 0,
    'address': ''
};

$(document).ready(function() {
    $('#address-submit').on('click', function() {
        event.preventDefault();
        let address = $('#address-input').val().trim();
        geocode(address)
        .then(function(result) {
            userLocation = result.userLocation;
            goodTimes = result.goodTimes;
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
        .then(getGoodTimes)
        .then(function(goodTimesArray) {
            console.log(goodTimesArray);
        })
        .catch(function(error) {
            console.log(error);
        });
    });
});

function getGoodTimes() {
    var queryURL = '/getGoodTimes?lat=' + userLocation.lat + '&lng=' + userLocation.lng;
    // queryURL = encodeURI(queryURL);
    console.log(queryURL);
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: queryURL,
            type: 'GET'
        }).done(function(goodTimesArray) {
            resolve(goodTimesArray);
        });
    });
}

