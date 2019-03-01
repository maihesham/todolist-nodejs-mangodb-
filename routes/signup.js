var express = require('express');
var router = express.Router();
var passport = require('passport');

var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = req.flash('error');
  res.render('signup', { title: 'Signup' ,csrfToken: req.csrfToken(),messages: messages, hasErrors: messages.length > 0});
});
router.post('/', passport.authenticate('local.signup', {
    successRedirect: '/signin',
    failureRedirect: '/signup',
    failureFlash: true
}));
module.exports = router;