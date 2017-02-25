var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
	var isAuth = req.isAuthenticated();

	// if auth show index with navAuth
	if(isAuth) {
		var nameToPass = req.user.name;	
		res.render('index', { 
  			firstName: nameToPass,
  			partials: {nav: "navAuth"}
  	});

	// else default nav
	} else {
		res.render('index', {
  			partials: {nav: 'nav'}
  		});
	}
});

module.exports = router;
