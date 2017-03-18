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
		var addedRecipes = [];
		db("recipes")
			.where("user_id", user_id)
			.then(function(recipeDB) {

				// stores the rec id#s and notes.
				var recIDs = [];
				var notes = [];
				for(var i in recipeDB) {
					recIDs.push(recipeDB[i].rec);
					notes.push(recipeDB[i].note);
				}

				// gets the Recipe objects to pass
				var myRecipes = [];
				var noteIndex = 0;
				for(var j in recIDs) {
					for(var k in recipes) {
						if(recipes[k].id == recIDs[j]) {

							// creates duplicate recipe object and pushes saved note to it
							var newRec = recipes[k];
							newRec.note = notes[noteIndex];
							myRecipes.push(newRec);
							noteIndex++;
						}
					}
				}

				// gets the user added recipes from the db
				db("added").where("user_id", user_id)
				.then(function(addedDB) {
					res.render('cookbook', { 
  					firstName: nameToPass,
  					myRecipes: myRecipes,
  					notes: notes,
  					addedRecipes: addedDB,
  					partials: {nav: "navAuth"}
  					});
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