var express = require('express');
var router = express.Router();
var controller = require('../controllers/locations-api-controller.js')


router.get('/locations', function (req, res) {
    var locations = controller.getLocations();
    res.body(locations);
});

router.post('/locations', function (req, res) {
    var result = controller.addLocation(
        req.body
    );

    // check something in result
    // to decide if successful or not
    if (/*some validation of result*/) {
        res.send('POST succeeeded');
    } else {
        res.send('POST failed');
    }
});

router.put('/locations/:id', function (req, res) {
    var result = controller.updateLocation(
        req.body,
        req.params.id
    );

    if (result.changedRows == 0) {
        res.send('PUT failed');
    } else {
        res.send('PUT succeeded');
    }
});

router.delete('/locations/:id', function (req, res) {
    var result = controller.deleteLocation(
        req.params.id
    );

    if (result.changedRows == 0) {
        res.send('DELETE failed');
    } else {
        res.send('DELETE succeeded');
    }
});

module.exports = router;