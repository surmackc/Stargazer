var express = require('express');
var router = express.Router();
var controller = require('../controllers/events-api-controller.js');


// router.get('/events', function (req, res) {
//     var events = controller.getEvents();
//     res.body(events);
// });

router.post('/events', function (req, res) {
    var result = controller.addEvent(
        req.body
    );

    // check something in result
    // to decide if successful or not
    // if (/*some validation of result*/) {
    //     res.send('POST succeeeded');
    // } else {
    //     res.send('POST failed');
    // }
});

router.put('/events/:id', function (req, res) {
    var result = controller.updateEvent(
        req.body,
        req.params.id
    );

    if (result.changedRows == 0) {
        res.send('PUT failed');
    } else {
        res.send('PUT succeeded');
    }
});

router.delete('/events/:id', function (req, res) {
    var result = controller.deleteEvent(
        req.params.id
    );

    if (result.changedRows == 0) {
        res.send('DELETE failed');
    } else {
        res.send('DELETE succeeded');
    }
});

module.exports = router;