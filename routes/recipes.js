var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET recipes page. */
router.get('/recipes', function(req, res, next) {
	var isAuth = req.isAuthenticated();

	// if auth show index with navAuth
	if(isAuth) {
		var nameToPass = req.user.name;	
		res.render('recipes', { 
  			firstName: nameToPass,
  			partials: {nav: "navAuth"}
  	});

	// else default nav
	} else {
		res.render('recipes', {
  			partials: {nav: 'nav'}
  		});
	}
});

module.exports = router;