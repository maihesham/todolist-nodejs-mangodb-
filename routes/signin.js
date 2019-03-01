var express = require('express');
var passport = require('passport');

var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);
var user=require("../model/user");
/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = req.flash('error');
  res.render('signin', { title: 'Signip' ,csrfToken: req.csrfToken(),messages: messages, hasErrors: messages.length > 0});
});
router.post('/', passport.authenticate('local.signin', {
    successRedirect: '/userprofile',
    failureRedirect: '/signin',
    failureFlash: true
}));

module.exports = router;
