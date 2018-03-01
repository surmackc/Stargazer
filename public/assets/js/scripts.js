$( document ).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJpc3RhbmJoIiwiYSI6ImNqYmM5N20zbTFneWQzMm1yOTMzdnhwbjkifQ.LsCkehEVMnMWOEui5tZDCw';
    var map = null;
    $("#mapButtonCollapse").click(function () {
            $('#atlasCollapse').collapse('hide');
            if (!$("#map").children().length) {
                    setTimeout(function () {
                    map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/tristanbh/cjds9kwrk32q02ruor4zmvvf8'
                    });
            }, 0);
        }
    });
    
    $("#atlasButtonCollapse").click(function () {
            $('#mapCollapse').collapse('hide');
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

});