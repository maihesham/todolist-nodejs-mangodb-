var passport = require('passport');
var User = require('../schems/user'); 
var LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use('local.signup', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass',
    passReqToCallback: true
}, function (req, name, pass, done) {
  
    User.findOne({'name': name}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'username is already in use.'});
        }
        var newUser = new User();
        newUser.name = name;
        newUser.password = newUser.encryptPassword(pass);
        newUser.save(function(err, result) {
           if (err) {
               return done(err);
           }
           return done(null, newUser);
        });
    });
}));
passport.use('local.signin', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass',
    passReqToCallback: true
}, function(req, name, pass, done) {
    User.findOne({'name': name}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'No user found.'});
        }
        if (!user.validPassword(pass)) {
            return done(null, false, {message: 'Wrong password.'});
        }
        var sess=req.session;
        sess.name=name;
        return done(null, user);
    });
}));