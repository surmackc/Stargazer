const env = process.env.NODE_ENV || 'development';
if (env !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

const html = require('./routes/html-routes.js');
const html = require('./routes/events-routes.js');
const html = require('./routes/locations-routes.js');
const html = require('./routes/user-routes.js');

const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require("./models");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', html);
app.use('/events', events);
app.use('/locations', locations);
app.use('/user', user);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});