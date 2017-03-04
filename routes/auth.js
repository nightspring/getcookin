var passport = require("passport");
var router = require("express").Router();


router
	.get("/login", function(req, res, next) {
		res.render("login", {
			message: req.flash('invalid'),
			partials: {nav: 'nav'}
		});
	})
	.post("/login", passport.authenticate("local", {
		successRedirect: "/cookbook",
		failureRedirect: "login",
		failureFlash: true
	}))
	.get("/logout", function(req, res, next) {
			req.session.destroy(function(err) {
			res.redirect("/login");
		});
	})
	.get("/signup", function(req, res, next) {
		res.render("signup", {
			userExists: req.flash('userExists'),
			passwords: req.flash('passwords'),
			noName: req.flash('noName'),
			partials: {nav: 'nav'}
		});
	})
	.post("/signup", passport.authenticate("local-register", {
		successRedirect: "/cookbook",
		failureRedirect: "/signup",
		failureFlash: true
	}));

module.exports = router;