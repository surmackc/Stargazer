var userLocation = {
    'lat': 0,
    'lng': 0,
    'place_id': 0,
    'address': ''
};

// this usually has several results
var RSSEvents = [
    {
        date: '2018-03-07T09:02:29.000Z', // UTC (aka GMT) timezone
        link: 'https://in-the-sky.org//news.php?id=20180307_15_100',
        title: '07 Mar 2018 (8 days away): Close approach of Moon',
        description: '<p>The moon will pass within 15 degrees of one another<p>', //HTML tags included
        // There is more stuff in here, but these are the main parts we will use
    },
    {
        date: '2018-03-02T09:02:29.000Z',
        link: 'https://in-the-sky.org//news.php?id=20180302_08_100',
        title: '07 Mar 2018 (3 days away): Full Moon',
        description: '<p>The moon will be visible for most of the night<p>'
    }
];

// array of data for next 5 days
// only one day shown below as example
var riseSetTimes = [
    {
        error: false,
        dayofweek: 'Sunday',
        day: 28,
        month: 2,
        year: 2018,
        moondata: [
            {
                phen: 'U',
                time: '01:57'
            },
            {
                phen: 'S',
                time: '09:16'
            },
            {
                phen: 'R',
                time: '19:37'
            }
        ],
        sundata: [
            {
                phen: 'BC',
                time: '11:49'
            },
            {
                phen: 'R',
                time: '12:17'
            },
            {
                phen: 'U',
                time: '17:2337'
            },
            {
                phen: 'S',
                time: '22:30'
            },
            {
                phen: 'EC',
                time: '22:58'
            }
        ]
    }
];

// this can have 0 or more results
// I usually only get one
var goodTimes = [
    {
        forecast: {
            // this has a bunch of weather stuff we may not use
        },
        from: '2018-02-28T03:00:00:000Z', // UTC (aka GMT) timezone
        to: '2018-02-28T06:00:00:000Z'
    },
    {

        forecast: {
            // this has a bunch of weather stuff we may not use
        },
        from: '2018-03-03T18:00:00:000Z',
        to: '2018-03-03T21:00:00:000Z'
    }
];

$(document).ready(function () {
    let defaultLat = '37.5381861';
    let defaultLng = '-77.5224841';
    // getLocationData('', defaultLat, defaultLng);    // Commenting this out until I need it


    $('#address-submit').on('click', function () {
        event.preventDefault();
        let address = $('#address-input').val().trim();
        getLocationData(address, 0, 0);
        console.log(address);
    });

    $('#geolocate').on('click', function () {
        event.preventDefault();
        geolocate()
            .then(function (result) {
                let address = '';
                let lat = result.lat;
                let lng = result.lng;
                getLocationData('', lat, lng);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    mapboxgl.accessToken = 
    'pk.eyJ1IjoidHJpc3RhbmJoIiwiYSI6ImNqYmM5N20zbTFneWQzMm1yOTMzdnhwbjkifQ.LsCkehEVMnMWOEui5tZDCw';
    var map = null;

    $("#mapButtonCollapse").click(function () {
        $('#atlasCollapse').collapse('hide');
        $('#loginCollapse').collapse('hide');
        if (!$("#map").children().length) {
            setTimeout(function () {
                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/tristanbh/cje66mox751w52rmluqoga58i'
                });
            }, 0);
        }
    });

    $("#atlasButtonCollapse").click(function () {
        $('#mapCollapse').collapse('hide');
        $('#loginCollapse').collapse('hide');
        if (!$("starmap1").children().length) {
            setTimeout(function () {
                var planetarium = $.virtualsky({
                    id: 'starmap1',
                    projection: 'stereo',
                    showstarlabels: true,
                    constellations: true,
                    latitude: 25.2744,
                    longitude: -133.7751,
                    lang: 'en',
                    // gridlines_gal: true,

                });
            }, 250);
        }
    });

    $("#loginButtonCollapse").click(function () {
        $('#atlasCollapse').collapse('hide');
        $('#mapCollapse').collapse('hide');
    });
});

function geolocate() {
    return new Promise(function (resolve, reject) {
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
    queryURL = encodeURI(queryURL);
    $.ajax({
        url: queryURL,
        type: 'GET'
    }).done(function (data) {
        console.log(data);
        userLocation = data.userLocation;
        goodTimes = data.goodTimes;
        RSSEvents = data.RSSEvents;
        riseSetTimes = data.riseSetTimes;
        APIEvents = data.APIEvents;
        APILocations = data.APILocations;
        getViewingConditions(goodTimes);
        viewRSS(RSSEvents);
    });
}

