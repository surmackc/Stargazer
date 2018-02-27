var express = require('express');
var router = express.Router();
var controller = require('../controllers/html-controller.js');

router.get('/getGoodTimes', function (req, res) {
    console.log(req.query);
    var userLocation = req.query;
    // if GET URL looks like...
    // stargazer.com/getGoodTimes?lat='###.######'?lng='###.######'
    // req.query should look like...
    // {
    //     lat: ###.######,
    //     lng: ###.######
    // }

    controller.getGoodTimes(userLocation)
    .then(function(goodTimesArray) {
        console.log(goodTimesArray);
        res.send({
            goodTimesArray
        });
    })
    .catch(function(error) {
        console.log(error);
    });


});

router.get('/geocode', function (req, res) {
    var address = req.query.address;
    // if GET URL looks like...
    // stargazer.com/geocode?address='####'
    // req.query should look like...
    // {
    //     address: 'XXX'
    // }

    controller.geocode(address)
    .then(function(result) {
        res.send(result);
    })
    .catch(function(error) {
        console.log(error);
    });
});

module.exports = router;
