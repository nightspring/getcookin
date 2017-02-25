var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET cookbook page. */

router.get('/cookbook', function(req, res, next) {
	var isAuth = req.isAuthenticated();

	// if auth send to their cookbook
	if(isAuth) {
		var nameToPass = req.user.name;	
		res.render('cookbook', { 
  			firstName: nameToPass,
  			partials: {nav: "navAuth"}
  	});

	// else send to login page
	} else {
		res.render('login', { 
  			partials: {nav: "nav"}
  		});
	}
});

module.exports = router;