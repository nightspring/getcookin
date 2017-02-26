var express = require('express');
var router = express.Router();
var passport = require('passport');
var result = require('../public/js/recipes');
var breakfast = result[0];
var lunch = result[1];
var dinner = result[2];
var dessert = result[3];
var asian = result[4];
var italian = result[5];
var mexican = result[6];

/* GET recipes page. */
router.get('/recipes', function(req, res, next) {
	var isAuth = req.isAuthenticated();

	// if auth show index with navAuth
	if(isAuth) {
		var nameToPass = req.user.name;	
		res.render('recipes', { 
  			firstName: nameToPass,
  			breakfast: breakfast,
  			lunch: lunch,
  			dinner: dinner,
  			dessert: dessert,
  			asian: asian,
  			italian: italian,
  			mexican: mexican,
  			partials: {nav: "navAuth"}
  	});

	// else default nav
	} else {
		res.render('recipes', {
			breakfast: breakfast,
			lunch: lunch,
			dinner: dinner,
  			dessert: dessert,
  			asian: asian,
  			italian: italian,
  			mexican: mexican,
  			partials: {nav: "nav"}
  		});
	}
});

module.exports = router;

