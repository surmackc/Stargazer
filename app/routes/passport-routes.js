





// app/routes.js
module.exports = function(app, passport) {

    // var flash = require("connect-flash");

    
    app.get('/', function(req, res) {
        res.render('user-index.ejs'); 
    });

    
    app.get('/login', function(req, res) {

        
        res.render('user-login.ejs', { message: req.flash('loginMessage') }); 
    });

   
    app.get('/signup', function(req, res) {

        
        res.render('user-signup.ejs', { message: req.flash('signupMessage') });
    });

    
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user 
        });
    });

    
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));


    // passport.use(new LocalStrategy({
    //     passReqToCallback : true
    // }, function(req, username, password, done) { }));




};


function isLoggedIn(req, res, next) {

    
    if (req.isAuthenticated())
        return next();

    
    res.redirect('/');
}
