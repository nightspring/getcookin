var passport = require("passport");
var router = require("express").Router();

router
	.get("/login", function(req, res, next) {
		res.render("login", {
			partials: {nav: 'nav'}
		});
	})
	.post("/login", passport.authenticate("local", {
		successRedirect: "/cookbook",
		failureRedirect: "/login"
	}))
	.get("/logout", function(req, res, next) {
			req.session.destroy(function(err) {
			res.redirect("/login");
		});
	})
	.get("/signup", function(req, res, next) {
		res.render("signup", {
			partials: {nav: 'nav'}
		});
	})
	.post("/signup", passport.authenticate("local-register", {
		successRedirect: "/cookbook",
		failureRedirect: "/signup"
	}));

module.exports = router;