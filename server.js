const env = process.env.NODE_ENV || 'development';
if (env !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

const html = require('./app/routes/html-routes.js');
const events = require('./app/routes/events-api-routes.js');
const locations = require('./app/routes/locations-api-routes.js');

//const locations = require('./app/routes/passport-routes.js');
//const user = require('./routes/user-routes.js');

var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require("./app/models/index.js");
//var configDB = require('./config/connection.js');


require('./config/passport')(passport); 

// require('./app/routes/api-passport-routes.js')(app, passport);

// require('./app/routes/html-passport-routes.js')(app, passport);

require('./app/routes/passport-routes.js')(app, passport);


app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 

app.set('view engine', 'ejs'); 


app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 






app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', html);
app.use('/events', events);
app.use('/locations', locations);
//app.use('/user', user);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});