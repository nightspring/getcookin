var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require("../db");
var result = require('../public/js/recipes');
var recipes = result[7];


/* GET cookbook page. */

router.get('/cookbook', function(req, res, next) {
	var isAuth = req.isAuthenticated();

	// if auth send to their cookbook
	if(isAuth) {
		var nameToPass = req.user.name;
		var user_id = req.user.id;
		db("recipes")
			.where("user_id", user_id)
			.then(function(recipeDB) {

				// stores the rec id #s.
				var recIDs = [];
				for(var i in recipeDB) {
					recIDs.push(recipeDB[i].rec);
				}

				// gets the Recipe objects to pass
				var myRecipes = [];
				for(var j in recIDs) {
					for(var k in recipes) {
						if(recipes[k].id == recIDs[j]) {
							myRecipes.push(recipes[k]);
						}
					}
				}

				res.render('cookbook', { 
  					firstName: nameToPass,
  					myRecipes: myRecipes,
  					partials: {nav: "navAuth"}
  				});
			});	
		

	// else send to login page
	} else {
		res.render('login', { 
  			partials: {nav: "nav"}
  		});
	}
});

module.exports = router;