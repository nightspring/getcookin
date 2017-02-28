var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require("../db");

function loginRequired(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.redirect("/login");
	}
	next();
}

router.get("/deleteRecipe/:id", loginRequired, function(req, res, next) {
	// finds recipe by ID that matches the user ID
	var query = db("recipes").where("rec", req.params.id);
	query.andWhere("user_id", req.user.id);
	// deletes recipe, then redirects to cookbook
	query.delete().then(function(result) {
		if(result === 0) {
			return res.send("Error, could not delete post");
		}
		res.redirect("/cookbook");
	});
});

// Need to return confirmation or error... and when changing in recipes.hjs, add to each category's button
router.post("/saveRecipe/:id", loginRequired, function(req, res, next) {
	var newRecipe = {
		user_id: req.user.id,
		rec: req.params.id
	};

	db("recipes").where("rec", req.params.id).andWhere("user_id", req.user.id)
	.first()
	.then(function(thisRecipe) {
		if(thisRecipe) {
			res.send('false');
		} else {
			db("recipes").insert(newRecipe).then(res.send('true'));
		}
	});
});

module.exports = router;