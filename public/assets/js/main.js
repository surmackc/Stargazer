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
        let lat = 0;
        let lng = 0;
        getLocationData(address, lat, lng);
    });

    $('#geolocate').on('click', function() {
        event.preventDefault();
        geolocate()
        .then(function(result) {
            let address = '';
            let lat = result.lat;
            let lng = result.lng;
            getLocationData(address, lat, lng); 
        })
        .catch(function(error) {
            console.log(error);
        });
    });
});

function geolocate() {
    return new Promise(function(resolve, reject) {      
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
        else {
            reject('Geolocate unsuccessful');
        }
    });
};

function getLocationData(address, lat, lng) {
    let queryURL = '/userLocation?address=' + address + '&lat=' + lat + '&lng=' + lng;
    queryURL - encodeURI(queryURL);
    $.ajax({
        url: queryURL,
        type: 'GET'
    }).done(function(result) {
        console.log(result);
        userLocation = result;
    });
}

