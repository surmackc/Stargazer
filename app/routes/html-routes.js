var express = require('express');
var router = express.Router();
var controller = require('../controllers/html-controller.js')

router.get('/', function(req, res) {
  var userLocation = req.query();
  // if GET URL looks like...
  // stargazer.com/?lat='###.######'?lon='###.######'
  // req.query should look like...
  // {
  //     lat: ###.######,
  //     lon: ###.######,
  // }

  var data = controller.someFunction(userLocation);

  res.body(data);
});

module.exports = router;
